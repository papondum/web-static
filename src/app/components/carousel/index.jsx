"use client";
import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
const CardWrap = styled(motion.div, {
  position: "absolute",
  top: 0,
  img: {
    width: 100,
    height: "auto",
    m: "auto",
  },
  variants: {
    focus: {
      true: {
        border: "3px solid $highlight",
        zIndex: 3,
        opacity: 1,
        boxShadow: "0px 4px 10px 0px rgba(238, 59, 116, 0.80)",
      },
      false: {},
    },
  },
  zIndex: 1,
  br: 24,
  opacity: 0.8,
  bc: "#424242",
  px: "$4",
  py: "$6",
  maxWidth: 365,
  height: 450,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ".package-title": { fontWeight: "bold", fontSize: "$4", mt: "$6", mb: "$4" },
  ".package-text": { fontSize: "$1", textAlign: "start" },
});

const orbitMap = {
  0: { r: 1, l: 4 },
  1: { r: 2, l: 0 },
  2: { r: 3, l: 1 },
  3: { r: 4, l: 2 },
  4: { r: 0, l: 3 },
};
const orbit = {
  0: { x: 0, y: 336, zIndex: 3 },
  1: { x: 460, y: 250, zIndex: 2 },
  2: { x: 230, y: 60, zIndex: 1 },
  3: { x: -230, y: 60, zIndex: 1 },
  4: { x: -460, y: 250, zIndex: 2 },
};
const _orbitPlus = {
  0: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 },
  1: { 1: 0, 2: 1, 3: 2, 4: 3, 0: 4 },
  2: { 2: 0, 3: 1, 4: 2, 0: 3, 1: 4 },
  3: { 3: 0, 4: 1, 0: 2, 1: 3, 2: 4 },
  4: { 4: 0, 0: 1, 1: 2, 2: 3, 3: 4 },
};

const Card = ({ title, img, text, index = 0, center, onMove }) => {
  const [startX, setStartX] = useState(null);
  const handleMove = (e) => {
    if (index == center) {
      if (startX !== null) {
        const deltaX = e.touches[0].clientX - startX;

        // Adjust this threshold as needed to determine a swipe
        const swipeThreshold = 50;

        if (deltaX > swipeThreshold) {
          // Swiped right
          // console.log("right");
          onMove && onMove("l");
        } else if (deltaX < -swipeThreshold) {
          // Swiped left
          // console.log("left");
          onMove && onMove("r");
        }
      }
    }
  };
  const handleTouchStart = (e) => {
    if (index == center) {
      setStartX(e.touches[0].clientX);
    }
  };
  const handleTouchEnd = () => {
    if (index == center) {
      setStartX(null);
    }
    // controls.start({ x: 0 });
  };
  return (
    <CardWrap
      animate={orbit[_orbitPlus[center][index]]}
      variants={orbit}
      initial={orbit[index]}
      focus={index == center}
      onTouchStart={handleTouchStart}
      onTouchMove={handleMove}
      onTouchEnd={handleTouchEnd}
    >
      <Image src={img} alt="" />
      <div className="package-title">{title}</div>
      <div
        className="package-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </CardWrap>
  );
};

const Wrap = styled("div", {
  position: "relative",
  maxWidth: 1280,
  m: "auto",
  height: 890,
  ".orbit": {
    width: "100%",
    height: "91%",
    display: "grid",
    placeItems: "center",
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 116,
      width: "72%",
      height: "36%",
      border: "1px solid white",
      borderRadius: "50%",
      zIndex: 0,
    },
  },
  ".arrow-wrap": {
    height: "5%",
    gap: "$5",
    fontSize: "$5",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },
});
// interface IProps {
//   data: ICard[];
// }
const Carousel = (props) => {
  const [centerItem, setCenterItem] = useState(0);

  const handleMove = (pos) => {
    if (pos) {
      setCenterItem((prev) => orbitMap[prev][pos]);
    }
  };

  return (
    <Wrap>
      <motion.div className="orbit" variants={orbit}>
        {props.data.map((i, indx) => {
          return (
            <Card
              title={i.title}
              text={i.text}
              img={i.img}
              key={indx}
              center={centerItem}
              index={indx}
              onMove={handleMove}
            />
          );
        })}
      </motion.div>
      <div className="arrow-wrap">
        <div onClick={() => handleMove("l")}>
          <LeftOutlined />
        </div>
        <div onClick={() => handleMove("r")}>
          <RightOutlined />
        </div>
      </div>
    </Wrap>
  );
};

export default Carousel;
