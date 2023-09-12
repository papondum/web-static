"use client";
import { styled } from "@/stitches.config";
import { useState } from "react";
import fbIcon from "src/app/assets/img/Touchpoint/1.facebook.png";
import igIcon from "src/app/assets/img/Touchpoint/2.Instagram.png";
import twIcon from "src/app/assets/img/Touchpoint/3.tw.png";
import youtubeIcon from "src/app/assets/img/Touchpoint/4.youtube.png";
import tiktokIcon from "src/app/assets/img/Touchpoint/5.tiktok.png";
import lineIcon from "src/app/assets/img/Touchpoint/6.line.png";
import lazIcon from "src/app/assets/img/Touchpoint/7.Lazada.png";
import shopIcon from "src/app/assets/img/Touchpoint/8.Shopee.png";
import pantipIcon from "src/app/assets/img/Touchpoint/9.Pantip.png";
import konvyIcon from "src/app/assets/img/Touchpoint/10.Konvy.png";
import Image from "next/image";
import imgOverFacebookD from "src/app/assets/img/Touchpoint/desktop/facebook.png";
import imgOverFacebookM from "src/app/assets/img/Touchpoint/ipad, mobile/facebook.png";
import imgOverIgD from "src/app/assets/img/Touchpoint/desktop/ig.png";
import imgOverIgM from "src/app/assets/img/Touchpoint/ipad, mobile/ig.png";
import imgOverKonvyD from "src/app/assets/img/Touchpoint/desktop/Konvy.png";
import imgOverKonvyM from "src/app/assets/img/Touchpoint/ipad, mobile/Konvy.png";
import imgOverLazadaD from "src/app/assets/img/Touchpoint/desktop/Lazada.png";
import imgOverLazadaM from "src/app/assets/img/Touchpoint/ipad, mobile/Lazada.png";
import imgOverLineD from "src/app/assets/img/Touchpoint/desktop/Line.png";
import imgOverLineM from "src/app/assets/img/Touchpoint/ipad, mobile/Line.png";
import imgOverPantipD from "src/app/assets/img/Touchpoint/desktop/Pantip.png";
import imgOverPantipM from "src/app/assets/img/Touchpoint/ipad, mobile/Pantip.png";
import imgOverShoppeeD from "src/app/assets/img/Touchpoint/desktop/Shopee.png";
import imgOverShoppeeM from "src/app/assets/img/Touchpoint/ipad, mobile/Shopee.png";
import imgOverTiktokD from "src/app/assets/img/Touchpoint/desktop/tiktok.png";
import imgOverTiktokM from "src/app/assets/img/Touchpoint/ipad, mobile/tiktok.png";
import imgOverTwitterD from "src/app/assets/img/Touchpoint/desktop/twiter.png";
import imgOverTwitterM from "src/app/assets/img/Touchpoint/ipad, mobile/twiter.png";
import imgOverYoutubeD from "src/app/assets/img/Touchpoint/desktop/youtube.png";
import imgOverYoutubeM from "src/app/assets/img/Touchpoint/ipad, mobile/youtube.png";

interface IProps {}
const Wrap = styled("div", {
  maxWidth: 1144,
  m: "auto",
  mb: 150,
  ".header": {
    fontSize: "$4",
    color: "#9f9f9f",
    textAlign: "center",
    mb: "$9",
    zIndex: 10,
    position: "relative",
  },
  ".over": {
    position: "absolute",
    zIndex: -1,
    width: 258,
    right: "40%",
    bottom: 0,
  },
  ".second": {
    top: 0,
    bottom: "unset",
    "@maxlg": {
      bottom: 0,
      top: "unset",
    },
  },
  ".node": {
    display: "grid",
    gridTemplate: "1fr 1fr / 1fr 1fr 1fr 1fr 1fr",
    ".label": { textAlign: "center", color: "#9f9f9f" },

    "@maxlg": {
      gridTemplate: "1fr 1fr 1fr / 1fr 1fr 1fr",
      ".center": {
        gridRow: "span 2",
        gridColumn: "span 3",
      },
    },
    "@maxsm": {
      gridTemplate: "1fr 1fr 1fr 1fr 1fr  / 1fr 1fr",
      ".center": {
        gridRow: "unset",
        gridColumn: "unset",
      },
    },
    gap: "$9",
    ".icon": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      zIndex: 1,
      ".base-logo": {
        img: {
          m: "auto",
          width: 99,
          height: "auto",
        },
      },
    },
    ".title": {
      position: "relative",
      zIndex: 11,
    },
  },
});
const iconSet = [
  {
    label: "Facebook",
    icon: fbIcon,
    img: (
      <picture>
        <source srcSet={imgOverFacebookD.src} media="(min-width: 800px)" />
        <img src={imgOverFacebookM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Instagram",
    icon: igIcon,
    img: (
      <picture>
        <source srcSet={imgOverIgD.src} media="(min-width: 800px)" />
        <img src={imgOverIgM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Twitter",
    icon: twIcon,
    img: (
      <picture>
        <source srcSet={imgOverTwitterD.src} media="(min-width: 800px)" />
        <img src={imgOverTwitterM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "YouTube",
    icon: youtubeIcon,
    img: (
      <picture>
        <source srcSet={imgOverYoutubeD.src} media="(min-width: 800px)" />
        <img src={imgOverYoutubeM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "TikTok",
    icon: tiktokIcon,
    img: (
      <picture>
        <source srcSet={imgOverTiktokD.src} media="(min-width: 800px)" />
        <img src={imgOverTiktokM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Line OPEN chat / Line group",
    icon: lineIcon,
    img: (
      <picture>
        <source srcSet={imgOverLineD.src} media="(min-width: 800px)" />
        <img src={imgOverLineM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Lazada",
    icon: lazIcon,
    img: (
      <picture>
        <source srcSet={imgOverLazadaD.src} media="(min-width: 800px)" />
        <img src={imgOverLazadaM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Shoppee",
    icon: shopIcon,
    img: (
      <picture>
        <source srcSet={imgOverShoppeeD.src} media="(min-width: 800px)" />
        <img src={imgOverShoppeeM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Pantip",
    icon: pantipIcon,
    img: (
      <picture>
        <source srcSet={imgOverPantipD.src} media="(min-width: 800px)" />
        <img src={imgOverPantipM.src} alt="" />
      </picture>
    ),
  },
  {
    label: "Konvy",
    icon: konvyIcon,
    img: (
      <picture>
        <source srcSet={imgOverKonvyD.src} media="(min-width: 800px)" />
        <img src={imgOverKonvyM.src} alt="" />
      </picture>
    ),
  },
];

const Touchpoint = () => {
  const [currentSelect, setCurrent] = useState({ label: "", img: "" });
  const setOverItem = (item: any) => {
    setCurrent(item);
  };
  return (
    <Wrap id="touch">
      <div className="header">
        <div className="title">Touchpoint</div>
      </div>

      <div className="node">
        {iconSet.map((i, ii) => (
          <div
            className={`icon ${iconSet.length == ii + 1 ? "center" : ""}`}
            key={ii}
            style={{ zIndex: iconSet.length - ii }}
            onMouseEnter={() => setOverItem(i)}
            onMouseLeave={() => setCurrent({ label: "", img: "" })}
          >
            {currentSelect?.label === i.label && (
              <div className={`over ${ii >= 5 ? "second" : ""}`}>
                {currentSelect && currentSelect?.img}
              </div>
            )}
            <div className="base-logo">
              <Image src={i.icon} alt="" />
              <div className="label">{i.label}</div>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
};

export default Touchpoint;
