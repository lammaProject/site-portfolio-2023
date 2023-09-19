import React from "react";
import { LogoGoToTop } from "../../assets/logos";
import baseLang from "../../assets/language.json";
import { getStorage } from "../hooks/useLocal";
interface BaseLang {
  [key: string]: any;
}

const baseLangTyped: BaseLang = baseLang;

const Footer = () => {
  const lang = getStorage().lang;
  const text = (num: number) => {
    return baseLangTyped.footer[lang][num];
  };
  const handleScroll = () => {
    const element = document.querySelector(".h-screen");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full items-center justify-center relative bg-[#1A1A1A] min-h-[250px]">
      <div className="flex flex-col items-center">
        <div onClick={handleScroll} className="flex flex-col items-center cursor-pointer">
          <div className="mb-[7px] animate-bounce">
            <LogoGoToTop />
          </div>
          <p className="text-center text-white text-base font-bold font-['Montserrat'] tracking-widest mb-[100px]">
            {text(0)}
          </p>
        </div>
        <div className="text-white text-lg font-normal font-['Montserrat']">{text(1)}</div>
      </div>
    </div>
  );
};

export default Footer;
