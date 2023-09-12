"use client";
import { styled } from "@/stitches.config";
import iconfirst from "src/app/assets/img/1-สร้างแบรนด์.png";
import iconsecond from "src/app/assets/img/2-สร้างแบรนด์.png";
import iconthird from "src/app/assets/img/3-หมวดหมู่.png";
import Image from "next/image";
import Text from "src/app/components/text";
interface IProps {}
const Wrap = styled("div", {
  display: "flex",
  p: "$4",

  pt: "$7",
  flexDirection: "column",
  alignItems: "center",
  mb: "$9",
  ".header": { mb: "$7" },
  ".title": {
    fontSize: "$7",
    // "@maxlg": {
    //   fontSize: "$6",
    // },
    "@maxsm": {
      fontSize: "$5",
      textAlign: "center",
    },
    // fontFamily: "$thBold",
  },
  ".sub-title": {
    fontSize: "$7",
    color: "$primary",
    mb: "$4",
    "@maxlg": {
      fontSize: "$6",
    },
    "@maxsm": {
      fontSize: "$5",
      textAlign: "center",
    },

    textAlign: "center",
  },
  ".description": {
    textAlign: "center",
    fontSize: "$2",
    "@maxsm": {
      fontSize: "$1",
      maxWidth: 250,
      textAlign: "center",
    },
  },
  ".node": {
    display: "flex",
    maxWidth: 1145,
    width: "100%",
    justifyContent: "space-between",
    "@maxlg": {
      flexDirection: "column",
      gap: 54,
      alignItems: "center",
      mt: 54,
    },
    ".card": {
      maxWidth: 360,
      fontSize: 24,
      "@maxsm": { fontSize: "$1" },
      ".card-logo": { img: { margin: "auto", mb: 16 } },
      ".card-title": { textAlign: "center", mb: 24, fontWeight: 600 },
      ".card-text": { textAlign: "center" },
    },
  },
});
const objItems = [
  {
    img: iconfirst,
    title: "สร้างแบรนด์ให้เป็นที่จดจำ",
    text: `94% ของผู้บริโภคทั่วโลกเห็นด้วยว่า
พลังจากแบรนด์คือแหล่งกำเนิดของ ข้อมูลที่สามารถช่วยสร้างความน่า เชื่อถือผ่านเนื้อหาโฆษณาและ คอมมูนิตี้ออนไลน์
`,
  },
  {
    img: iconsecond,
    title: "การรีวิว",
    text: `รีวิวจาก
  10,000 ผู้ใช้จริง`,
  },
  {
    img: iconthird,
    title: "ครอบคลุมทุกหมวดหมู่สินค้า",
    text: `มีมากกว่า 10 หมวดหมู่!
  ที่ตรงกับประเภทธุรกิจของคุณ`,
  },
];
const Service = () => {
  return (
    <Wrap id="banner">
      <div className="header">
        <div className="title">ทำไมคุณถึงต้องเลือก</div>
        <div className="sub-title">SD TEAM</div>
        <div className="description">
          เพราะเรารีวิวสินค้าอย่างมีคุณภาพ ทำให้ขายได้เร็วกว่าที่เคย
        </div>
      </div>

      <div className="node">
        {objItems.map((i, ii) => (
          <div key={ii} className="card">
            <div className="card-logo">
              <Image src={i.img} alt="" />
            </div>
            <Text className="card-title">{i.title}</Text>
            <Text className="card-text">{i.text}</Text>
          </div>
        ))}
      </div>
    </Wrap>
  );
};

export default Service;
