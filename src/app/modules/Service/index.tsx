"use client";
import { styled } from "@/stitches.config";
import imgbg from "src/app/assets/img/bg Services _ Project.svg";
import Image from "next/image";
import { useState } from "react";
import pictureD from "src/app/assets/img/picture_review_desktop.jpg";
import pictureT from "src/app/assets/img/picture_review_tablet.jpg";
import pictureM from "src/app/assets/img/picture_review_mobile.jpg";
import textD from "src/app/assets/img/Text_review_desktop.jpg";
import textT from "src/app/assets/img/Text_review_tablet.jpg";
import textM from "src/app/assets/img/Text_review_mobile.jpg";
import testimonialD from "src/app/assets/img/Testimonial_review_desktop.jpg";
import testimonialT from "src/app/assets/img/Testimonial_review_tablet.jpg";
import testimonialM from "src/app/assets/img/Testimonial_review_mobile.jpg";
interface IProps {}
const Wrap = styled("div", {
  display: "flex",
  p: "$4",
  position: "relative",
  pt: "$7",
  mb: 150,
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
    ".tab": { color: "#9f9f9f", p: "$3", m: "auto", fontSize: "$3" },
    ".active": { bc: "$primary", br: 34, m: "$2", color: "white" },
  },
  ".bg-wrapper": { position: "absolute", zIndex: 1 },
  ".img-wrap": { zIndex: 3 },
});

const Choose = () => {
  const [menuIndex, setMenuIndex] = useState("picture");
  const setMenu = (type: string) => {
    setMenuIndex(type);
  };
  function menuMap(type: string) {
    switch (type) {
      case "picture":
        return (
          <picture>
            <source srcSet={pictureD.src} media="(min-width: 1024px)" />
            <source srcSet={pictureT.src} media="(min-width: 600px)" />
            <img src={pictureM.src} alt="" />
          </picture>
        );
      case "text":
        return (
          <picture>
            <source srcSet={textD.src} media="(min-width: 1024px)" />
            <source srcSet={textT.src} media="(min-width: 600px)" />
            <img src={textM.src} alt="" />
          </picture>
        );
      case "testimonial":
        return (
          <picture>
            <source srcSet={testimonialD.src} media="(min-width: 1024px)" />
            <source srcSet={testimonialT.src} media="(min-width: 600px)" />
            <img src={testimonialM.src} alt="" />
          </picture>
        );

      default:
        break;
    }
  }
  return (
    <Wrap id="portfolio">
      <div className="bg-wrapper">
        <Image src={imgbg} alt="" />
      </div>
      <div className="header">
        <div className="title">บริการและผลงาน</div>
        <div className="tab-wrap">
          <div
            className={`tab ${menuIndex == "picture" ? "active" : ""}`}
            onClick={() => setMenu("picture")}
          >
            Picture review
          </div>
          <div
            className={`tab ${menuIndex == "text" ? "active" : ""}`}
            onClick={() => setMenu("text")}
          >
            Text review
          </div>
          <div
            className={`tab ${menuIndex == "testimonial" ? "active" : ""}`}
            onClick={() => setMenu("testimonial")}
          >
            Testimonial review
          </div>
        </div>
      </div>

      <div className="img-wrap">{menuMap(menuIndex)}</div>
    </Wrap>
  );
};

export default Choose;
