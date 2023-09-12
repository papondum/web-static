"use client";
import { styled } from "@/stitches.config";
interface IProps {}
const Wrap = styled("div", {
  display: "flex",
  maxWidth: 1144,
  justifyContent: "space-between",
  m: "auto",
  mb: 150,
  p: "$4 $5",
  "@maxlg": {
    flexDirection: "column",
    alignItems: "center",
    gap: 36,
    textAlign: "center",
  },
  ".header": { m: "auto 0px" },
  ".title": { fontSize: "$7", fontWeight: 600, span: { color: "$primary" } },
  ".content": {
    bc: "$white",
    p: "$8 $6",
    fontSize: "$4",
    width: "100%",
    maxWidth: 560,
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
    <Wrap id="future">
      <div className="header">
        <div className="title">
          เปลี่ยนการทำงาน
          <br />
          <span>เพื่ออนาคต</span>
        </div>
      </div>

      <div className="content">
        <div className="label">
          จากตัวเลขเหล่านี้ นี่คือสิ่งที่คุณคาดหวังสำหรับ ผลตอบแทนจากการลงทุน
        </div>
        <div className="list">
          <div className="item">
            <div>Engagement</div>
            <div>5x</div>
          </div>
          <div className="item">
            <div>Credibility</div>
            <div>90%</div>
          </div>
          <div className="item">
            <div>Client retention</div>
            <div>96%</div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Future;
