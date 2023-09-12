"use client";
import { styled } from "@/stitches.config";
import { motion, Variants } from "framer-motion";
const introTextVariants: Variants = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
interface IProps {
  children?: React.ReactNode;
  className?: string;
  style?: any;
}
const View: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <TextStyle
      {...props}
      initial="hide"
      whileInView="show"
      variants={introTextVariants}
      exit="hide"
    >
      {props.children}
    </TextStyle>
  );
};

const TextStyle = styled(motion.div, {
  width: "100%",
  variants: {
    // size: {
    //   "1": {
    //     maxWidth: "none",
    //     mx: "auto",
    //     px: "$6",
    //     "@sm": {
    //       px: "$11",
    //     },
    //   },
    //   "2": {
    //     maxWidth: "1280px",
    //     mx: "auto",
    //     px: "$6",
    //     "@sm": {
    //       px: "$11",
    //     },
    //   },
    //   "3": {
    //     "@sm": {
    //       maxWidth: "1328px",
    //       mx: "auto",
    //       px: "$11",
    //     },
    //   },
    //   "4": {
    //     "@md": {
    //       maxWidth: "1328px",
    //       mx: "auto",
    //       px: "$11",
    //     },
    //   },
    //   "5": {
    //     "@lg": {
    //       maxWidth: "1328px",
    //       mx: "auto",
    //       px: "$11",
    //     },
    //   },
    //   "6": {
    //     maxWidth: "none",
    //     mx: "auto",
    //     px: "$3",
    //     "@sm": {
    //       px: "$6",
    //     },
    //   },
    //   "7": {
    //     maxWidth: "none",
    //     mx: "auto",
    //     px: "$6",
    //     "@sm": {
    //       px: "$11",
    //     },
    //     "@md": {
    //       px: "$12",
    //     },
    //   },
    //   "8": {
    //     "@xl": {
    //       maxWidth: "1328px",
    //       mx: "auto",
    //       px: "$11",
    //     },
    //   },
    //   "9": {
    //     maxWidth: "1440px",
    //     mx: "auto",
    //   },
    //   "10": {
    //     maxWidth: "1328px",
    //     mx: "auto",
    //     px: "$4",
    //     "@sm": {
    //       px: "$11",
    //     },
    //   },
    //   "11": {
    //     maxWidth: "1440px",
    //     mx: "auto",
    //     px: "$6",
    //     "@sm": {
    //       px: "$11",
    //     },
    //   },
    // },
  },
  //   defaultVariants: {
  size: "2",
  //   },
});
export default View;
