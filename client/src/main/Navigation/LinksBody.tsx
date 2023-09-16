import React from "react";
import { LogoCodeWars, LogoGitHub, LogoTelegram } from "../../assets/logos";

const LinksBody = () => {
  return (
    <div className="flex ">
      <button className="mr-[30px] w-[60px] p-[10px] bg-stone-300 shadow">
        <LogoTelegram />
      </button>
      <button className="mr-[30px] w-[60px] p-[10px] bg-stone-300 shadow">
        <LogoGitHub />
      </button>
      <button className="w-[60px] p-[10px] bg-stone-300 shadow">
        <LogoCodeWars />
      </button>
    </div>
  );
};

export default LinksBody;
