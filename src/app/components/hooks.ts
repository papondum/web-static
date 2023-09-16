import {
  useEffect,
  useCallback,
  useState,
  MutableRefObject,
  RefObject,
} from "react";

export type HTMLElementOrNull = HTMLElement | null;
export type RefElementOrNull<T> = T | null;
export type CallbackRef = (node: HTMLElementOrNull) => unknown;
export type AnyRef = CallbackRef | MutableRefObject<HTMLElementOrNull>;

const config: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

function useInViewRef(
  options?: IntersectionObserverInit
): [CallbackRef, boolean] {
  const { root = null, rootMargin, threshold } = { ...config, ...options };

  const [node, setNode] = useState<HTMLElementOrNull>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    if (node) {
      const observer = new IntersectionObserver(
        (entries, observerRef) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              observerRef.unobserve(node);
            }
          });
        },
        {
          root,
          rootMargin,
          threshold,
        }
      );

      observer.observe(node);
      return () => {
        observer.disconnect();
      };
    }
  }, [node, root, rootMargin, threshold]);

  const ref = useCallback((node: HTMLElementOrNull) => {
    setNode(node);
  }, []);

  return [ref, inView];
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
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

function useHover() {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    setIsHover(window.matchMedia("(hover: hover)").matches);
  }, []);
  return isHover;
}

export { useInViewRef, useWindowSize, useHover };

export function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}
