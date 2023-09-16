import React from "react";
import { LogoGoToTop } from "../../assets/logos";

const Footer = () => {
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
            BACK TO TOP
          </p>
        </div>
        <div className="text-white text-lg font-normal font-['Montserrat']">
          @2020 Tomasz Gajda All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
