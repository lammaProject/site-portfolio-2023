import { useEffect, useRef, useState } from "react";

const useScroll = ({ changeClick, click }: { changeClick: (item: any) => void; click: boolean }) => {
  const [changeScroll, setChangeScroll] = useState(true);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollYRef.current ? "down" : "up";
      const scrollDistance = Math.abs(currentScrollY - prevScrollYRef.current);

      if (scrollDirection === "up" && scrollDistance > 3) {
        if (click) {
          changeClick(false);
          setChangeScroll(() => false);
        } else {
          setChangeScroll(() => true);
        }
      }

      if (scrollDirection === "down") {
        setChangeScroll(() => false);
      }

      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [click]);

  return click ? click : changeScroll;
};

export default useScroll;
