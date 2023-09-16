import { useEffect, useState } from "react";

const useSize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.outerWidth,
    widthIn: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.outerWidth,
      widthIn: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return { containerWidth: dimensions.width, containerHeight: dimensions.height, containerWidthIn: dimensions.widthIn };
};

export default useSize;
