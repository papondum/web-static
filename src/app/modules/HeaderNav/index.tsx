"use client";
import { styled } from "@/stitches.config";
import ScrollLink from "../../components/scrolllink";
import Logo from "src/app/assets/img/logo-sd.png";
import { useState } from "react";
import Image from "next/image";
import { Drawer, Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
interface IProps {}
const DrawerWrap = styled("div", {
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  fontFamily: "$thReg",
  gap: "$7",
  li: {
    "list-style-type": "none",
    position: "relative",
    width: "auto",
    p: "$3 $4",
  },
  a: {
    color: "black",
    display: "block",
    textDecoration: "none",
    "&:hover": { color: "$primary" },
  },
});
const Wrap = styled("div", {
  height: 72,
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  bc: "$basebg",
  p: "$3",
  zIndex: 4,
  ".container": {
    maxWidth: 1264,
    flex: 1,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    ".menu-tablet": {
      fontSize: "$5",
      cursor: "pointer",
      mr: 40,
      "@lg": { display: "none" },
      "@maxsm": { mr: 20 },
    },
    ".logo-wrap": {
      width: "16.11%",
      img: {
        width: 42,
        height: 42,
      },
    },
    ".link-wrapper": {
      display: "flex",
      alignItems: "center",
      gap: "$7",
      "@maxlg": { display: "none" },

      ".hover-elem": {
        position: "relative",
        ".submenu": {
          left: 0,
          opacity: 0,
          position: "absolute",
          top: 32,
          pt: 26,
          visibility: "hidden",
          zIndex: 1,
          listStyle: "none",
          bc: "black",
          width: 190,
          ".li-menu": {
            width: "100%",
            a: { textAlign: "start" },
          },
        },
        "&:hover": {
          ".submenu": {
            opacity: 1,
            visibility: "visible",
          },
        },
      },
      li: {
        float: "left",
        "list-style-type": "none",
        position: "relative",
        width: "auto",
        p: "$3 $4",
      },
      a: {
        color: "black",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        "&:hover": { color: "$primary" },
      },
    },
  },
  ".dropdown": {
    nav: {
      display: "none",
    },

    "&:hover": {
      nav: {
        display: "block",
      },
    },
  },
});

const View = ({}: IProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Wrap>
      <div className="container">
        <div className="logo-wrap">
          <Image src={Logo} alt="" />
        </div>
        <Drawer
          // title=""
          placement="right"
          onClose={onClose}
          bodyStyle={{ background: "#fff" }}
          headerStyle={{ background: "#fff" }}
          open={open}
        >
          <DrawerWrap>
            <ScrollLink href="">หน้าหลัก</ScrollLink>
            <ScrollLink href="#about">เกี่ยวกับ</ScrollLink>
            <ScrollLink href="#portfolio">ผลงาน</ScrollLink>
            <ScrollLink href="#package">แพ็คเกจ</ScrollLink>
            <ScrollLink href="#contact">ติดต่อ</ScrollLink>
          </DrawerWrap>
        </Drawer>
        <div className="menu-tablet" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <div className="link-wrapper">
          <ScrollLink href="">หน้าหลัก</ScrollLink>
          <ScrollLink href="#about">เกี่ยวกับ</ScrollLink>
          <ScrollLink href="#portfolio">ผลงาน</ScrollLink>
          <ScrollLink href="#package">แพ็คเกจ</ScrollLink>
          <ScrollLink href="#contact">ติดต่อ</ScrollLink>
        </div>
      </div>
    </Wrap>
  );
};

export default View;
