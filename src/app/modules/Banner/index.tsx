"use client";
import { styled } from "@/stitches.config";
import React from "react";
// import { Image } from "../../components/image";
import Image from "next/image";
import iconplay from "src/app/assets/img/icon/Icon.png";
import bannerImg from "src/app/assets/img/Picture2.gif";
import bannerTablet from "src/app/assets/img/Picture1.png";
import YoutubeModal from "src/app/components/modal-youtube";

interface IProps {}
const Wrap = styled("div", {
  display: "flex",
  p: "$4",
  background:
    "linear-gradient(0deg, rgba(241,241,241,1) 0%, rgba(235,254,243,0.93) 50%, rgba(235,255,243,1) 100%)",
  gap: "$10",
  pt: "$7",
  flexDirection: "column",
  alignItems: "center",
  mb: 150,
  ".title": {
    fontSize: "$7",
    fontWeight: 600,
    // fontFamily: "$thBold",
    color: "$primary",
    "@maxsm": { textAlign: "center" },
  },
  ".sub-title": {
    fontSize: "$4",
    textAlign: "center",
  },
  ".video": {
    background: "$white",
    padding: "8px 12px",
    border: "1px solid #d0d5dd",
    borderRadius: 24,
    maxWidth: 128,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
});
const Banner = () => {
  const [modal, setModal] = React.useState(false);
  const onCloseModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <Wrap id="banner">
      <div className="title">บูสต์ยอดขายเพิ่มขึ้น 5.5%</div>

      <div className="sub-title">
        เพิ่มยอดขายได้ง่ายๆ ถึง 5 เท่า !!!
        <br />
        พร้อมสร้างความน่าเชื่อถือให้กับแบรนด์ของคุณ
      </div>
      <div className="video" onClick={() => setModal(true)}>
        <Image src={iconplay} alt="" />
        เริ่มดูวีดีโอ
      </div>
      <picture>
        <source srcSet={bannerImg.src} media="(min-width: 800px)" />
        <img src={bannerTablet.src} alt="" />
      </picture>
      {modal && (
        <YoutubeModal youtubeId={"88w_O6AO8lQ"} onClose={onCloseModal} />
      )}
    </Wrap>
  );
};

export default Banner;
