import { useEffect, useState } from "react";
import { styled } from "@/stitches.config";
import { useInViewRef } from "@/src/app/components/hooks";
import Head from "next/head";

const ImageWrap = styled("div", {
  display: "block",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  fontSize: 0,
  userSelect: "none",
  "& picture, & img": {
    userSelect: "none",
  },
  variants: {
    size: {
      "16by9": {
        "&::before": {
          pt: [`${(9 / 16) * 100 + "%"}`],
        },
      },
      "2by3": {
        "&::before": {
          pt: [`${(3 / 2) * 100 + "%"}`],
        },
      },
      "3by2": {
        "&::before": {
          pt: [`${(2 / 3) * 100 + "%"}`],
        },
      },
      "7by4": {
        "&::before": {
          pt: [`${(4 / 7) * 100 + "%"}`],
        },
      },
      "4by3": {
        "&::before": {
          pt: [`${(3 / 4) * 100 + "%"}`],
        },
      },
      "3by4": {
        "&::before": {
          pt: [`${(4 / 3) * 100 + "%"}`],
        },
      },
      "1by1": {
        "&::before": {
          pt: [`${(1 / 1) * 100 + "%"}`],
        },
      },
      "21by9": {
        "&::before": {
          pt: [`${(9 / 21) * 100 + "%"}`],
        },
      },
      "2by1": {
        "&::before": {
          pt: [`${(1 / 2) * 100 + "%"}`],
        },
      },
      "finance-banner": {
        "&::before": {
          pt: "66.66666666666666%",
          "@md": {
            pt: [`${(9 / 16) * 100 + "%"}`],
          },
          "@lg": {
            pt: [`${(500 / 1344) * 100 + "%"}`],
          },
        },
      },
      splash: {
        "&::before": {
          pt: [`${(1920 / 1080) * 100 + "%"}`],
          "@md": {
            pt: [`${(1366 / 1024) * 100 + "%"}`],
          },
          "@lg": {
            pt: [`${(1080 / 1920) * 100 + "%"}`],
            "@media(min-height: 1024px)": {
              pt: [`${(1920 / 1080) * 100 + "%"}`],
            },
          },
        },
      },
    },
    fit: {
      cover: {
        objectFit: "cover",
      },
      contain: {
        objectFit: "contain",
      },
    },
    position: {
      center: {
        objectPosition: "center",
      },
      top: {
        objectPosition: "top",
      },
      bottom: {
        objectPosition: "bottom",
      },
    },
    ratio: {
      true: {
        "&::before": {
          content: '""',
          display: "block",
          position: "relative",
          width: "100%",
        },
        "& picture, & img": {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
        "& img": {
          objectFit: "cover",
          objectPosition: "center",
        },
      },
    },
    fade: {
      true: {
        "& picture img": {
          opacity: 0,
        },
        "&.is-load": {
          "& picture img": {
            "--transition-duration": "1s",
            opacity: 1,
            transitionProperty: "opacity",
            transitionDelay: "var(--transition-delay)",
            transitionDuration: "var(--transition-duration)",
            transitionTimingFunction: "var(--transition-easing)",
            willChange: "opacity",
          },
        },
      },
    },
    fullheight: {
      true: {
        height: "100%",
        "& picture, & img": {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
        "& img": {
          objectFit: "cover",
          objectPosition: "center",
        },
      },
    },
    auto: {
      true: {
        mx: "auto",
        width: "100%",
        maxWidth: "var(--width)",
        "&::before": {
          content: '""',
          display: "block",
          position: "relative",
          width: "100%",
          pt: "var(--aspect-ratio)",
        },
        "& picture, & img": {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
      },
    },
    hoverImage: {
      true: {
        "& picture": {
          "--transition-duration": "1s",
          transitionProperty: "transform",
          transitionDelay: "var(--transition-delay)",
          transitionDuration: "var(--transition-duration)",
          transitionTimingFunction: "var(--transition-easing)",
          // Caused blink icon overlay on ios
          // willChange: 'transform',
        },
        "@hover": {
          "&.is-hover-image, &:hover": {
            cursor: "pointer",
            "& picture": {
              transform: "scale(1.05)",
            },
          },
        },
      },
    },

    over: {
      true: {},
    },
  },
  defaultVariants: {
    fade: true,
  },
});

const BlurImg = styled("img", {});

const Img = styled("img", {
  "&.auto-img": {
    display: "inline-block",
    maxWidth: "100%",
    mx: "auto",
  },
  "&.t2h-img": {
    width: "100%",
  },
});

const getImageOptions = (_options) => {
  let urlWithOptions = `${_options.src}?format=pjpg&auto=webp`;
  const options = [];
  if (_options.width) {
    options.push(`width=${_options.width}`);
  }

  if (_options.height) {
    options.push(`height=${_options.height}`);
  }

  if (_options.fit) {
    options.push(`fit=crop`);
  }

  if (_options.dpr) {
    options.push(`dpr=${_options.dpr}`);
  }

  if (_options.blur) {
    options.push(`blur=${_options.blur}`);
  }

  options.push(`quality=${_options.quality}`);

  options.forEach((o) => {
    urlWithOptions += `&${o}`;
  });

  return urlWithOptions;
};

const normaliseSrcset = (params) => {
  const srcsetOrder = params.srcset.sort((a, b) => b.breakpoint - a.breakpoint);

  const srcsetBreakpoint = srcsetOrder.map((o) => {
    const src = o.src;
    const breakpoint = o.breakpoint;
    const width = o.width || o.breakpoint;
    const height = o.height || 0;
    const maxwidth = o.maxwidth || o.width;
    const maxheight = o.maxheight || o.height;
    const fit = o.fit;

    const srcset = `${getImageOptions({
      src: src,
      width: width,
      height: height,
      fit: fit,
      quality: params.quality,
    })}, ${getImageOptions({
      src: src,
      width: maxwidth,
      height: maxheight,
      fit: fit,
      dpr: 2,
      quality: params.quality,
    })} 2x`;

    return {
      srcset,
      media: `(min-width: ${breakpoint}px)`,
      breakpoint: breakpoint,
    };
  });

  return srcsetBreakpoint.map((o, i) => {
    let media = "";
    if (i > 0) {
      const prev = srcsetBreakpoint[i - 1];
      media = `(min-width: ${o.breakpoint}px) and (max-width: ${
        prev.breakpoint - 1
      }px)`;
    } else {
      media = `(min-width: ${o.breakpoint}px)`;
    }
    return {
      srcset: o.srcset,
      media: media,
    };
  });
};

const isSVG = (src) => {
  if (!src) return false;
  if (typeof src !== "string") return;
  return src.includes(".svg");
};
export const PreloadSVG = (props) => {
  return (
    <Head>
      <link key={props.key} rel="preload" as="image" href={props.src}></link>
    </Head>
  );
};

export const PreloadImage = (props) => {
  const _srcset = () => {
    return normaliseSrcset({
      srcset: props.srcset,
      quality: props.quality,
    });
  };
  return (
    <Head>
      {_srcset().map((o, i) => (
        <link
          key={props.id ? props.id + i : i}
          imagesrcset={o.srcset}
          rel="preload"
          as="image"
          media={o.media}
        />
      ))}
    </Head>
  );
};
PreloadImage.defaultProps = {
  srcset: [],
  quality: 85,
};

export const defaultSrc =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const Image = (props) => {
  const {
    lazy = true,
    fade = true,
    blur = true,
    srcset = [],
    offsetX = 1,
    offsetY = 0,
    quality = 85,
    imageWidth = 280,
  } = props;
  const [refEl, inview] = useInViewRef({
    rootMargin: `0px -${offsetX}px ${offsetY * -100}% -${offsetX}px`,
    // NOTE: left, right -1px for prevent siblings slide load in swiper slider
  });
  const [loadBlur, setLoadBlur] = useState(false);
  const [hideBlur, setHideBlur] = useState(false);
  const [load, setLoad] = useState(false);
  const [timeID, setTimeID] = useState(null);

  const _srcBlur = () => {
    const targetSrc = getImageOptions({
      src: props.src,
      width: imageWidth,
      height: 0,
      fit: false,
      dpr: 1,
      blur: 50,
      quality: quality,
    });

    return inview ? targetSrc : defaultSrc;
  };

  const _src = () => {
    const targetSrc = isSVG(props.src)
      ? props.src
      : getImageOptions({
          src: props.src,
          width: imageWidth,
          quality: quality,
        });

    if (blur && !loadBlur) {
      return defaultSrc;
    }

    if (!lazy) {
      return props.src ? targetSrc : defaultSrc;
    }

    return inview ? targetSrc : defaultSrc;
  };

  const _srcset = () => {
    if (!srcset || !srcset.length) {
      return [];
    }

    if (blur && !loadBlur) {
      return [];
    }

    if (!lazy) {
      return normaliseSrcset({
        srcset: srcset,
        quality: quality,
      });
    }

    return inview
      ? normaliseSrcset({
          srcset: srcset,
          quality: quality,
        })
      : [];
  };

  const onImageBlurLoaded = () => {
    setLoadBlur(true);
  };

  const onImageLoaded = async (e) => {
    if (e.target.src == defaultSrc) return;

    setLoad(true);
    props.onLoad && props.onLoad();

    await new Promise((resolve) => {
      const id = setTimeout(resolve, 1000);
      setTimeID(id);
    });
    setHideBlur(true);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeID);
    };
  }, [timeID]);

  return (
    <ImageWrap
      ref={refEl}
      className={`${load ? "is-load" : ""}`}
      size={props.size}
      ratio={props.ratio}
      fade={props.fade}
      fullheight={props.fullheight}
      auto={props.auto}
      hoverImage={props.hoverImage}
      css={
        props.auto && {
          "--aspect-ratio": `${(props.autoh / props.autow) * 100 + "%"}`,
          "--width": `${props.autow + "px"}`,
          "--height": `${props.autoh + "px"}`,
        }
      }
    >
      {props.blur && !hideBlur && (
        <BlurImg
          src={_srcBlur()}
          alt={props.alt}
          onLoad={onImageBlurLoaded}
          draggable={false}
        />
      )}
      <picture draggable={false} onLoad={onImageLoaded}>
        {_srcset().map((o, i) => (
          <source key={i} srcSet={o.srcset} media={o.media} />
        ))}
        <Img
          src={`${_src()}`}
          alt={props.alt}
          draggable={false}
          className={props.ratio ? "ratio-img" : "auto-img"}
        />
      </picture>
    </ImageWrap>
  );
};
