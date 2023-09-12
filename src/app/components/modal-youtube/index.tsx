import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { styled } from "@/stitches.config";
// import { IconButton } from '@/components/shared/element/icon-button';
// import { Icon, getIcon } from '@/components/shared/element/icons';
// import { useWindowSize } from '@/components/shared/utility/hooks';

const youtubeURL = (id: string) => {
  return `https://www.youtube.com/embed/${id}/?autoplay=1&rel=0&modestbranding=1`;
};
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

interface IProps {
  youtubeId: string;
  onClose: () => void;
}

const Container = styled("div", {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 1000,
  bc: "$backdrop90",
  ".wrapper": {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".youtube": {
    position: "relative",
    width: "100%",
    "&::before": {
      content: "",
      display: "block",
      width: "100%",
      paddingTop: "56.25%",
    },
    iframe: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    },
  },
  ".close-bt": {
    position: "absolute",
    top: 12,
    right: 12,
    fontSize: 24,
    color: "white",
    cursor: "pointer",
  },

  button: {
    position: "absolute",
    right: "$4",
    top: "$4",
    cursor: "pointer",
    zIndex: "3",
  },
});

const View: React.FunctionComponent<IProps> = (props: IProps) => {
  const [videoSrc, setVideoSrc] = useState("");
  const windowSize = useWindowSize();
  const [videoWidth, setVideoWidth] = useState(windowSize.width);

  const onClose = () => {
    props.onClose && props.onClose();
  };

  useEffect(() => {
    return () => {
      setVideoSrc("");
    };
  }, []);

  useEffect(() => {
    setVideoSrc(youtubeURL(props.youtubeId));
  }, [props.youtubeId]);

  useEffect(() => {
    let vdo_width;
    const vdo_ratio_main = 9 / 16;
    const vdo_ratio = 16 / 9;
    const screen_ratio = windowSize.height / windowSize.width;

    if (screen_ratio < vdo_ratio_main) {
      vdo_width = vdo_ratio * (windowSize.height - 0);
    } else {
      vdo_width = windowSize.width;
    }
    setVideoWidth(vdo_width);
  }, [windowSize]);

  return createPortal(
    <Container>
      <div className="wrapper">
        <div className="youtube" style={{ width: videoWidth }}>
          {videoSrc && (
            <iframe
              src={videoSrc}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="close-bt" onClick={onClose}>
        <div>X</div>
      </div>
    </Container>,
    document.body
  );
};

export default View;
