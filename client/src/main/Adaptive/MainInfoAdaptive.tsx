import React from "react";
import { LogoCodeWars, LogoGitHub, LogoLine, LogoTelegram } from "../../assets/logos";
import baseLang from "../../assets/language.json";
import { getStorage } from "../hooks/useLocal";
interface BaseLang {
  [key: string]: any;
}

const MainInfoAdaptive = () => {
  const lang = getStorage().lang;
  const baseLangTyped: BaseLang = baseLang;
  const text = (half: string, num: number) => {
    return baseLangTyped[half][lang][num];
  };

  return (
    <div className={"backgroundMainAdaptive min-h-[50vh] flex w-full relative items-center justify-center"}>
      <div className="flex flex-col items-center">
        <h2 className="mb-[10px] text-center text-white text-6xl font-normal font-['Montserrat']">
          {text("adaptiveMain", 0)}
        </h2>
        <h1 className="mb-[30px] text-center text-white text-7xl font-semibold font-['Montserrat']">
          {text("adaptiveMain", 1)}
        </h1>
        <div className={"mb-[30px]"}>
          <LogoLine color={"white"} />
        </div>
        <div className="flex min-w-[500px] items-center justify-center">
          <div className="w-[100px]">
            <LogoTelegram color={"white"} />
          </div>
          <div className="w-[100px]">
            <LogoGitHub color={"white"} width={"70px"} />
          </div>
          <div className="w-[100px]">
            <LogoCodeWars color={"white"} width={"70px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfoAdaptive;
