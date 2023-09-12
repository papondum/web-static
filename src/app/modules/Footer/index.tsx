"use client";
import { styled } from "@/stitches.config";
import Image from "next/image";
import logo from "src/app/assets/img/logo-sd.png";
interface IProps {}
const Wrap = styled("div", {
  display: "flex",
  bc: "#73D889",
  justifyContent: "space-between",
  p: "$4 $5",
  position: "relative",
  ".floor-circle": {
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    overflow: "hidden",
    ".half": {
      height: "100vw",
      bc: "#47D27F",
      position: "absolute",
      zIndex: 1,
      width: "100%",
      borderRadius: "50% 50% 0% 0%",
    },
  },

  ".inner-content": {
    maxWidth: 907,
    margin: "auto",
    width: "100%",
    display: "flex",
    gap: 36,
    mb: 64,
    px: 36,
    zIndex: 2,
    "@maxsm": {
      flexDirection: "column",
      ".content": { p: 0, textAlign: "initial" },
    },
  },
  "@maxlg": {
    flexDirection: "column",
    alignItems: "center",
    gap: 36,
    textAlign: "center",
  },
  ".header": {
    m: "auto 0px",
    textAlign: "initial",
    color: "$white",
    fontSize: "$2",
  },
  ".title": {
    fontSize: "$1",
    fontWeight: 600,
    span: { color: "white" },
    img: { width: 81, height: 81, mb: 12 },
    "@maxsm": { img: { width: 48, height: 48 } },
  },
  ".content": {
    p: "$8 $6",
    color: "$white",
    fontSize: "$2",
    width: "100%",
    maxWidth: 560,
    gap: 24,
    display: "flex",
    textAlign: "initial",
    flexDirection: "column",
    ".contact": { display: "flex", gap: 24 },
    "@maxsm": { ".contact": { display: "block" } },
    ".label": { p: "0 32px", textAlign: "center", fontWeight: 600 },
    ".list": {
      mt: 32,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      ".item": { display: "flex", justifyContent: "space-between" },
    },
  },
});
const Future = () => {
  return (
    <Wrap id="contact">
      <div className="floor-circle">
        <div className="half" />
      </div>
      <div className="inner-content">
        <div className="header">
          <div className="title">
            <Image src={logo} alt="" />
            <div className="copy">SDTeam.co Copyright © 2022</div>
          </div>
        </div>

        <div className="content">
          <div>
            <div>เริ่มเลย!</div>
            <div style={{ fontSize: 14 }}>ต่อยอดความสำเร็จเพียงติดต่อเรา</div>
          </div>
          <div className="contact">
            <div>ติดต่อได้ที่</div>
            <div style={{ fontSize: 14 }}>
              Email : wongsakorn.wee@ideaslabs.co
              <br /> Tel : 02-2645425
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Future;
