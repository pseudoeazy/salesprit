import { useReducer, useEffect, useRef } from "react";

const hoverReducer = (isHover: boolean) => !isHover;

const useHover = (initialValue = false) => {
  const [isHovered, setIsHover] = useReducer(hoverReducer, initialValue);
  const anchorRef = useRef<HTMLElement>(null);

  function handleHover() {
    setIsHover();
  }

  useEffect(() => {
    const element = anchorRef.current;
    if (element) {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleHover);
    }

    return () => {
      element?.removeEventListener("mouseenter", handleHover);
      element?.removeEventListener("mouseleave", handleHover);
    };
  }, []);

  return {
    ref: anchorRef,
    isHovered,
  };
};
export default useHover;
