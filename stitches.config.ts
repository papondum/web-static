import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";
import localFont from "next/font/local";
const interReg = localFont({
  src: "src/app/assets/Font/Inter 2/static/Inter-Regular.ttf",
  weight: "400",
});
const interBold = localFont({
  src: "src/app/assets/Font/Inter 2/static/Inter-Bold.ttf",
  weight: "600",
});
const kanitReg = localFont({
  src: "src/app/assets/Font/Inter 2/Kanit-Regular.ttf",
  weight: "400",
});
const kanitBold = localFont({
  src: "src/app/assets/Font/Inter 2/Kanit-Bold.ttf",
  weight: "600",
});
export const {
  config,
  createTheme,
  css,
  globalCss,
  getCssText,
  styled,
  keyframes,
  theme,
} = createStitches({
  theme: {
    colors: {
      primary: "#24BC61",
      secondary: "#E9E9E9",
      gray: "#9F9F9F",
      highlight: "#E6517A",
      white: "#FFFFFF",
      basebg: "#fafafa",
      text: "#000",
      backdrop90: "rgba(0, 0, 0, 0.9)",
    },
    shadows: {
      primary: "#ED1C24",
      primaryDark: "#94141E",
      white: "#FFFFFF",
      black: "#000000",
      gray900: "#444444",
      gray800: "#5D5D5D",
      gray700: "#777777",
      gray600: "#909090",
      gray500: "#AAAAAA",
      gray400: "#C3C3C3",
      gray300: "#EBEBEB",
      gray200: "#F6F6F6",
      gray100: "#FFFFFF",
      shadow100: "0px 8px 16px rgba(0, 0, 0, 0.04)",
      shadow200: "0px 16px 40px rgba(0, 0, 0, 0.08)",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "36px",
      9: "40px",
      10: "44px",
      11: "48px",
      12: "56px",
      13: "64px",
      14: "80px",
      15: "96px",
      16: "112px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "36px",
      9: "40px",
      10: "44px",
      11: "48px",
      12: "56px",
      13: "64px",
      14: "80px",
      15: "96px",
      16: "112px",
    },
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "20px",
      4: "24px",
      5: "30px",
      6: "36px",
      7: "56px",
    },
    fonts: {
      regular: `${interReg.style.fontFamily}, sans-serif`,
      bold: `${interBold.style.fontFamily}, sans-serif`,
      thReg: `${kanitReg.style.fontFamily}, sans-serif`,
      thBold: `${kanitBold.style.fontFamily}, sans-serif`,
    },
  },
  media: {
    maxxs: "(max-width: 479px)",
    maxsm: "(max-width: 639px)",
    maxmd: "(max-width: 767px)",
    maxlg: "(max-width: 1023px)",
    maxxl: "(max-width: 1279px)",
    max2xl: "(max-width: 1439px)",
    init: "(min-width: 0px)",
    xs: "(min-width: 390px)",
    // sm: "(min-width: 640px)",
    md: "(min-width: 843px)",
    lg: "(min-width: 1024px)",
    // xl: "(min-width: 1280px)",
    xl: "(min-width: 1440px)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),
    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    ap: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),
    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
    linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const globalStyles = globalCss({
  ":root": {
    "--transition-duration": "0.5s",
    "--transition-easing": "cubic-bezier(0.25, 0.74, 0.22, 0.99)",
    "--transition-delay": "0s",
    "--transition-easing-slider": "cubic-bezier(0.39, 0.01, 0.04, 1)",
    "--viewport-height": "calc(var(--vh, 1vh)*100)",
    "--secondary-nav-height": "0px",
    "--primary-nav-height": "60px",
    "@lg": {
      "--secondary-nav-height": "40px",
      "--primary-nav-height": "54px",
    },
    "--header-height":
      "calc(var(--secondary-nav-height) + var(--primary-nav-height))",
    "--sticky-top": 0,
    "--sticky-viewport-height": "calc(var(--vh, 1vh)*100)",
    "--product-nav-height": "60px",
  },
  html: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    bc: "$white",
  },
  "html, body": {
    "-ms-text-size-adjust": "none",
    "-moz-text-size-adjust": "none",
    "-webkit-text-size-adjust": "none",
    textSizeAdjust: "none",
    bc: "$basebg",
  },
  "*": {
    margin: 0,
    padding: 0,
    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  },
  "*, :after, :before": {
    boxSizing: "border-box",
  },
  body: {
    width: "100%",
    margin: 0,
    fontFamily: "$thReg",
    scrollBehavior: "smooth",
    color: "$text",
  },
  "article, aside, footer, header, nav, main, section, picture, figcaption, figure":
    {
      display: "block",
    },
  "ul, ol": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  ".swiper-wrapper": { justifyContent: "center" },
  ".anticon-close": { color: "white" },
  ".ant-collapse-header-text": { color: "white" },
  ".ant-collapse-header": { p: "0px !important" },
  ".ant-collapse-expand-icon": { display: "none !important" },
  a: {
    textDecoration: "none",
    outline: "none",
  },
  "blockquote,dd,dl,dt": {
    margin: 0,
  },
  "img, embed, object, video": {
    maxWidth: "100%",
  },
  img: {
    display: "block",
    us: "none",
    border: 0,
    "&[draggable=false]": {
      pe: "none",
      "-webkit-user-drag": "none",
    },
  },
  iframe: {
    display: "block",
    border: 0,
  },
});

export type CSS = Stitches.CSS<typeof config>;
