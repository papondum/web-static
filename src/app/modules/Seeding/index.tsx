"use client";
import { styled } from "@/stitches.config";
import { Image } from "../../components/image";
import Text from "src/app/components/text";
import seedingImg from "src/app/assets/img/1-1-what-seeding-desktop.gif";
import seedingImgTablet from "src/app/assets/img/1-2-what-seeding-tablet.gif";
import seedingImgMobile from "src/app/assets/img/1-3-what-seeding-mobile.gif";
interface IProps {}
const Wrap = styled("div", {
  display: "flex",
  pt: "$7",
  maxWidth: 1145,
  m: "auto",
  p: "$4",
  gap: "$10",
  flexDirection: "column",
  mb: 126,
  ".container": {
    display: "flex",

    flexDirection: "row",
    "@maxlg": { flexDirection: "column" },
  },
  "@maxlg": { flexDirection: "column" },
  alignItems: "center",
  img: { width: "100%", height: "auto" },
  ".title": {
    fontSize: "$7",
    // fontFamily: "$thBold",
    color: "$primary",
    flex: 1,
    mb: "auto",
    span: {
      color: "black",
    },
  },
  ".sub-title": {
    fontSize: "$4",
    flex: 1,
    textAlign: "start",
  },
});
const Seeding = () => {
  return (
    <Wrap id="about">
      <div className="container">
        <div className="title">
          Seeding <span>คืออะไร?</span>
        </div>

        <Text className="sub-title">
          กลยุทธ์ทางการตลาดที่ช่วยสร้างความน่าเชื่อถือให้กับแบรนด์ของคุณ โดย
          เสียงจากผู้ใช้จริงบนโลกออนไลน์ ไม่ว่าจะเป็น การคอมเมนต์ การมีส่วนร่วม
          หรือกระทั่งการทดลอง ใช้สินค้าและรีวิวจริง บนโซเชียลมีเดียช่องทางต่างๆ
          <br />
          <br />
          ความคิดเห็นและการใช้จริงเหล่านี้จะถูกกระจายไปทั่วทุก
          สังคมบนออนไลน์เหมือนกับเมล็ดพันธุ์ที่ถูกหว่านกระจายไป ทั่วพื้นดิน
          และกลายเป็นเสียงที่ทรงพลัง!
        </Text>
      </div>
      <picture>
        <source srcSet={seedingImg.src} media="(min-width: 1024px)" />
        <source srcSet={seedingImgTablet.src} media="(min-width: 600px)" />
        <img src={seedingImgMobile.src} alt="" />
      </picture>
    </Wrap>
  );
};

export default Seeding;
