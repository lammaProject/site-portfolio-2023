import React, { useEffect, useMemo, useRef, useState } from "react";
import { getStorage } from "../hooks/useLocal";
import baseLang from "../../assets/language.json";
import useSize from "../hooks/useSize";
interface BaseLang {
  [key: string]: any;
}

const baseLangTyped: BaseLang = baseLang;
const Navigation = ({ change, scroll }: { change: any; scroll: boolean }) => {
  const lang = getStorage().lang;
  const ref: any = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrollOn, setScrollOn] = useState(true);
  const { containerWidth, containerWidthIn } = useSize();
  const checkAdaptive = useMemo(() => {
    if (containerWidth > 500 && containerWidthIn < 500) return true;
    return containerWidth < 500 && containerWidthIn > 500;
  }, [containerWidth, containerWidthIn]);

  useEffect(() => {
    if (!scroll) {
      setScrollOn(false);
    } else {
      setScrollOn(true);
    }
  }, [scroll]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const text = (num: number) => {
    return baseLangTyped.navigation[lang][num];
  };
  const handleScroll = (target: string) => {
    change(true);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = () => {
    const burger = `absolute left-0 right-0 z-10 flex justify-center flex-col ${
      scrollOn ? "top-[66px]" : "top-[100px]"
    }`;
    const item =
      "mr-[8px] transition ease-in-out duration-300 hover:text-[#C4C4C4] p-[10px] text-center text-white text-[17px] font-bold font-['Montserrat']";
    const burgerItem = "animate-scale-up py-[40px] bg-black/50 text-white text-[17px] font-bold font-['Montserrat']";
    const lastItem =
      "bg-white transition ease-in-out duration-300 hover:text-[#C4C4C4] hover:bg-black p-[10px] rounded-[30px] text-center text-black text-[15px] font-bold font-['Montserrat']";
    const lastBurgerItem = "py-[40px] animate-scale-up text-[17px] text-black font-bold font-['Montserrat'] bg-white";

    return (
      <div className={open ? burger : ""}>
        <button onClick={() => handleScroll(".backPortFolio")} className={open ? burgerItem : item}>
          {text(0)}
        </button>
        <button onClick={() => handleScroll(".backAboutMe")} className={open ? burgerItem : item}>
          {text(1)}
        </button>
        <button onClick={() => handleScroll(".skills")} className={open ? burgerItem : item + "mr-[30px]"}>
          {text(2)}
        </button>
        <button onClick={() => handleScroll(".contact")} className={open ? lastBurgerItem : lastItem}>
          {text(3)}
        </button>
      </div>
    );
  };

  return (
    <div ref={ref} className="ml-auto flex h-[46px] items-center">
      {checkAdaptive ? (
        <div className="min-h-screen flex flex-col justify-center sm:py-12">
          <div className="relative sm:max-w-xl mx-auto z-20">
            <button
              className="text-gray-500 w-10 h-10 relative focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <>{buttons()}</>
      )}
      {open && <>{buttons()}</>}
    </div>
  );
};

export default Navigation;
