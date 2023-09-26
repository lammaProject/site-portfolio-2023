import React, { useCallback, useState } from "react";
import Navigation from "../Navigation/Navigation";
import useScroll from "../hooks/useScroll";
import { getStorage, setStorage } from "../hooks/useLocal";
const Header = () => {
  const lang = getStorage().lang;
  const [changeState, setChangeState] = useState(false);
  const change = useCallback((item: any) => {
    setChangeState(() => item);
  }, []);
  const scroll = useScroll({ click: changeState, changeClick: change });

  const show = "transform transition easy-in-out .3s ";
  const dontShow = "transform translate-y-[-100px] transition easy-in-out .3s ";

  const display = changeState ? show : scroll ? show : dontShow;

  return (
    <div
      className={
        display +
        "fixed z-10 top-0 bottom-0 left-0 right-0 w-full bg-neutral-950 h-[66px] flex items-center px-[65px] py-[15px]"
      }
    >
      <div className="flex items-center justify-between min-w-[100px]">
        <button
          onClick={() => setStorage("ru")}
          disabled={lang === "ru"}
          className="text-white opacity-50 disabled:opacity-100 hover:opacity-100 transition duration-300"
        >
          RU
        </button>
        <div className="text-white">/</div>
        <button
          onClick={() => setStorage("eng")}
          disabled={lang === "eng"}
          className="text-white opacity-50 disabled:opacity-100 hover:opacity-100 transition duration-300"
        >
          ENG
        </button>
      </div>
      <Navigation change={change} scroll={scroll} />
    </div>
  );
};

export default Header;
