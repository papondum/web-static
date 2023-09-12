"use client";
import { styled } from "@/stitches.config";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import { useState } from "react";
import iconImg from "src/app/assets/img/icon_picture.png";
import iconTw from "src/app/assets/img/Touchpoint/3.tw.png";
import iconLine from "src/app/assets/img/Touchpoint/6.line.png";
import iconLaz from "src/app/assets/img/Touchpoint/7.Lazada.png";
import "swiper/css";
import "swiper/css/pagination";
const Wrap = styled("div", {
  display: "flex",
  p: "$4",
  overflow: "hidden",
  position: "relative",
  pt: "$7",
  bc: "#73D889",
  pb: 148,
  flexDirection: "column",
  alignItems: "center",
  ".header": { mb: "$7", zIndex: 2, mt: "$10" },
  ".title": {
    fontSize: "$7",
    zIndex: 2,
    textAlign: "center",
    mb: "$10",
    "@maxsm": {
      fontSize: "$5",
      textAlign: "center",
    },
  },
  ".tab-wrap": {
    display: "flex",
    bc: "rgb(250 250 250 / 60%)",
    border: "1px solid #D9D9D9",
    br: 34,
    gap: 24,
    ".tab": {
      color: "#9f9f9f",
      p: "$3",
      m: "auto",
      fontSize: "$3",
      "@maxsm": { fontSize: "$1" },
    },
    ".active": { bc: "$primary", br: 34, m: "$2", color: "white" },
  },
  ".bg-wrapper": { position: "absolute", zIndex: 1 },
  ".img-wrap": { zIndex: 3 },
  ".content-pre-wrapper": {
    ".swiper": {
      height: 640,
      ".swiper-pagination": {
        visibility: "hidden",
        "@maxlg": {
          visibility: "visible",
        },
      },
      ".swiper-pagination-bullet-active": {
        background: "$highlight !important",
      },
      ".swiper-pagination-bullet": {
        background: "$white",
        opacity: 1,
      },
    },
    overflow: "auto",
    // width: "100%",
    width: 1280,
    ".pord": { mr: "0 !important" },
    ".content-wrapper": {
      display: "flex",
      // width: 1280,
      gap: 72,
    },
  },
  ".card-wrap": {
    display: "flex",
    gap: 16,
    width: 1140,

    ".card": {
      flex: "1",
      bc: "#fafafa",
      p: "$4 $6",
      textAlign: "center",
      height: 540,
      br: 12,
      "&.active": { filter: "opacity(1)" },
      filter: "opacity(0.8)",
      "&:hover": { filter: "opacity(1)" },
      ".til": { fontSize: 28 },
      ".sub": { fontSize: 56 },
      ".dis": {
        fontSize: 16,
        color: "#9f9f9f",
        minHeight: 24,
        textDecoration: "line-through",
      },
      ".package-item": {
        display: "flex",
        my: 24,
        gap: 12,
        fontSize: "$2",
        img: { width: 48, height: 48 },
      },
    },
  },
});

const Choose = () => {
  const [menuIndex, setMenuIndex] = useState("spark");
  const [active, setActive] = useState(1);
  const setMenu = (type: string) => {
    setMenuIndex(type);
  };
  const divI = (
    <>
      <Image src={iconImg} alt="" />
      <div style={{ textAlign: "start" }}>
        <div>5 x Picture Review</div>
        <div>4 x Text Review</div>
        <div>50 x Reply</div>
      </div>
    </>
  );

  const spark = [
    { title: "Lite", sub: "25,000.-", dis: "", list: [divI] },
    { title: "Plus", sub: "50,000.-", dis: "95,000", list: [divI, divI] },
    {
      title: "Power",
      sub: "100,000.-",
      dis: "185,000",
      list: [divI, divI, divI],
    },
  ];
  const awareness = [
    {
      title: "BE TOP OF MIND",
      sub: "50,000.-",
      dis: "",
      list: [
        <>
          <Image src={iconTw} alt="" />
          <div style={{ textAlign: "start" }}>
            <div>10 x Tweet</div>
            <div>20 x Quote Tweet</div>
            <div>100 x Reply</div>
          </div>
        </>,
      ],
    },
    {
      title: "DEEP TALK",
      sub: "50,000.-",
      dis: "",
      list: [
        <>
          <Image src={iconLine} alt="" />
          <div style={{ textAlign: "start" }}>
            <div>40 x Text Seeding + Picture</div>
            <div>85 x Text Seeding + Link</div>
          </div>
        </>,
      ],
    },
    {
      title: "BOOST SALE",
      sub: "50,000.-",
      dis: "",
      list: [
        <>
          <Image src={iconLaz} alt="" />
          <div style={{ textAlign: "start" }}>
            <div>15 x Order + Review</div>
            <div>50 x Rating + Review</div>
          </div>
        </>,
      ],
    },
  ];
  function selectRender(r: string) {
    if (r == "spark") {
      return cards.spark;
    } else {
      return cards.awareness;
    }
  }
  const cards = { spark, awareness };
  return (
    <Wrap id="package">
      <div className="header">
        <div className="title">แพ็คเกจ</div>
        <div className="tab-wrap">
          <div
            className={`tab ${menuIndex == "spark" ? "active" : ""}`}
            onClick={() => setMenu("spark")}
          >
            Spark awareness
          </div>
          <div
            className={`tab ${menuIndex == "awareness" ? "active" : ""}`}
            onClick={() => setMenu("awareness")}
          >
            More engage & Convert
          </div>
        </div>
      </div>
      {/* <div className="card-wrap">
        {selectRender(menuIndex).map((i, ii) => (
          <div key={ii} className="card">
            <div className="til">{i.title}</div>
            <div className="sub">{i.sub}</div>
            <div className="dis">{i.dis}</div>
            <hr />
            {i.list.map((j, jj) => (
              <div className="package-item" key={jj}>
                {j}
              </div>
            ))}
          </div>
        ))}
      </div> */}
      <div className="content-pre-wrapper card-wrap">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {selectRender(menuIndex).map((i, ii) => (
            <SwiperSlide
              className={`card ${active == ii ? "active" : ""}`}
              key={ii}
              onClick={() => setActive(ii)}
            >
              <div className="til">{i.title}</div>
              <div className="sub">{i.sub}</div>
              <div className="dis">{i.dis}</div>
              <hr />
              {i.list.map((j, jj) => (
                <div className="package-item" key={jj}>
                  {j}
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrap>
  );
};

export default Choose;
