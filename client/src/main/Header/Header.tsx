import React, { useCallback, useState } from "react";
import Navigation from "../Navigation/Navigation";
import useScroll from "../hooks/useScroll";
const Header = () => {
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
      <Navigation change={change} />
    </div>
  );
};

export default Header;
