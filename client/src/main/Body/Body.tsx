import React, { useMemo } from "react";
import {
  LogoBootstrap,
  LogoBurgerFun,
  LogoCSS,
  LogoEnglish,
  LogoFigma,
  LogoGit,
  LogoHH,
  LogoHTML,
  LogoJS,
  LogoLine,
  LogoMySQL,
  LogoNodeJs,
  LogoPy,
  LogoReact,
  LogoSASS,
  LogoTailwind,
  LogoTelegram,
  LogoTS,
  LogoVK,
  LogoVSCode,
  LogoWebpack,
  LogoWS,
} from "../../assets/logos";
import LinksBody from "../Navigation/LinksBody";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import img1 from "../../assets/images/img1png.png";
import MainInfoAdaptive from "../Adaptive/MainInfoAdaptive";
import useSize from "../hooks/useSize";
import { getStorage } from "../hooks/useLocal";
import baseLang from "../../assets/language.json";
interface BaseLang {
  [key: string]: any;
}

const baseLangTyped: BaseLang = baseLang;
const Body = () => {
  const lang = getStorage().lang;
  const text = (half: string, num: number) => {
    return baseLangTyped[half][lang][num];
  };
  const { containerWidth, containerWidthIn } = useSize();

  const caruselItems = [
    { id: 1, title: "Item 1", name: "BANK", desc: "text", action: true, img: "bank", color: "black", location: "bank" },
    {
      id: 2,
      title: "Item 2",
      name: "BLANCHARD",
      desc: "text",
      action: true,
      img: "Blanchard",
      color: "black",
      location: "blanchard",
    },
    {
      id: 3,
      title: "Item 3",
      name: "TOKFOOD",
      desc: "text",
      action: true,
      img: "tokfood",
      color: "black",
      location: "https://tokfood.ru/course",
    },
    {
      id: 4,
      title: "Item 4",
      name: "POMODORO",
      desc: "text",
      action: true,
      img: "pomodoro",
      color: "black",
      location: "pomodoro",
    },
    {
      id: 5,
      title: "Item 2",
      name: "W-WAVE",
      desc: "text",
      action: true,
      img: "Wave",
      color: "black",
      location: "wave",
    },
    { id: 6, title: "Item 2", name: "SKB", desc: "text", action: true, img: "Skb", color: "black", location: "skb" },
    {
      id: 7,
      title: "Item 7",
      name: "WateBot",
      desc: "text",
      action: true,
      img: "waterBot",
      color: "white",
      location: "https://t.me/WaterAllDay_bot",
    },
    {
      id: 8,
      title: "Item 5",
      name: "ETC project",
      desc: "text",
      action: true,
      img: "etc",
      color: "white",
      location: "etc",
    },
  ];

  const checkAdaptive = useMemo(() => {
    if (containerWidth > 500 && containerWidthIn < 500) return true;
    return containerWidth < 500 && containerWidthIn > 500;
  }, [containerWidth, containerWidthIn]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: checkAdaptive ? "0px" : "60px",
    slidesToShow: checkAdaptive ? 1 : 3,
    speed: 500,
    initialSlide: 2,
    arrows: false,
  };

  return (
    <div className="w-full relative pt-[50px]">
      {/*main info*/}
      {checkAdaptive && <MainInfoAdaptive />}
      {!checkAdaptive && (
        <div className="w-full backCustomMain min-h-[600px] overflow-hidden bg-[#D7D7D7] relative xl:px-[20vh] md:px-[10vh]">
          <div className="myPhoto xl:right-[20%] md:right-[5%]"></div>
          <div className="flex mt-[50px] items-center mb-[80px]">
            <LogoBurgerFun />
          </div>
          <div className="flex flex-col m-w-[50%] mb-[100px]">
            <h2 className="text-black text-[40px] font-bold font-['Raleway'] xl:mb-[20px]">{text("mainInfo", 0)}</h2>
            <h1 className="text-black text-7xl font-bold font-['Raleway'] mb-[10px]">{text("mainInfo", 1)}</h1>
            <h3 className="text-neutral-400 text-2xl font-extrabold font-['Raleway'] mb-[120px]">
              {text("mainInfo", 2)}
            </h3>
            <LinksBody />
          </div>
        </div>
      )}
      {/*additionally*/}
      <div className="backCustomBerriesGradient w-full min-h-[200px] overflow-hidden relative">
        <div className="flex flex-col mt-[50px] ml-[100px] mb-[50px] mr-[300px]">
          <h2 className="text-white text-3xl font-bold font-['Montserrat'] tracking-widest mb-[20px]">
            {text("additionally", 0)}
          </h2>
          <p className="text-justify text-white text-base font-normal font-['Open Sans'] leading-tight mb-[30px]">
            {text("additionally", 1)}
          </p>
          <button className="max-w-[120px] text-center text-white text-base font-['Montserrat'] border-r-2 border-l-2">
            {text("additionally", 2)}
          </button>
        </div>
      </div>
      {/*about me*/}
      <div className="backAboutMe min-h-[2500px] flex flex-col items-center w-full relative pt-[140px]">
        <div className="mb-[80px] border-[8px] border-[#000]  py-[5px] px-[15px] text-center text-black text-3xl font-bold font-['Montserrat'] leading-10 tracking-widest">
          {text("aboutMe", 0)}
        </div>
        <p className="max-w-[700px] text-center text-zinc-950 text-base font-normal font-['Open Sans'] leading-tight mb-[85px]">
          {text("aboutMe", 1)}
        </p>
        <div className="mb-[100px]">
          <LogoLine />
        </div>
        <div className="flex mb-[100px]">
          <div className="flex flex-col max-w-[460px] relative p-[30px] items-start backDevTools">
            <h3 className="text-center text-black text-xl font-bold font-['Montserrat'] tracking-widest mb-[10px]">
              {text("aboutMe", 2)}
            </h3>
            <p className="text-justify text-black text-sm font-light font-['Open Sans']">{text("aboutMe", 3)}</p>
          </div>
        </div>
        <div className="skills mb-[100px]">
          <LogoLine />
        </div>
        <div className="mb-[80px] border-[8px] border-[#000]  py-[5px] px-[15px] text-center text-black text-3xl font-bold font-['Montserrat'] leading-10 tracking-widest">
          {text("aboutMe", 4)}
        </div>
        <div>
          <h2 className="text-black text-3xl font-bold font-['Montserrat'] tracking-widest mb-[75px] xl:p-0 md:ml-[20px]">
            {text("aboutMe", 5)}:
          </h2>
          <div className="flex flex-wrap justify-between mb-[100px]">
            <div className="w-[20%] items-center flex flex-col mb-[65px]">
              <div className="mb-[15px]">
                <LogoHTML />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">HTML</p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoCSS />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">CSS</p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoSASS />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">SASS</p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoJS />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                JAVASCRIPT
              </p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoReact />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">REACT</p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoBootstrap />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                BOOTSTRAP
              </p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoGit />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">GIT</p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoFigma />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">FIGMA</p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoTailwind />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                TAILWIND
              </p>
            </div>
            <div className="w-[20%] items-center flex flex-col">
              <div className="mb-[15px]">
                <LogoWebpack />
              </div>
              <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">WEBPACK</p>
            </div>
          </div>
          <div>
            <h2 className="text-black text-3xl font-bold font-['Montserrat'] tracking-widest mb-[75px] xl:p-0 md:ml-[20px]">
              {text("aboutMe", 6)}:
            </h2>
            <div className="flex flex-wrap justify-between mb-[100px]">
              <div className="w-[25%] items-center flex flex-col">
                <div className="mb-[15px]">
                  <LogoNodeJs />
                </div>
                <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                  NODEJS
                </p>
              </div>
              <div className="w-[25%] items-center flex flex-col">
                <div className="mb-[15px]">
                  <LogoTS />
                </div>
                <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                  TYPESCRIPT
                </p>
              </div>
              <div className="w-[25%] items-center flex flex-col">
                <div className="mb-[15px]">
                  <LogoMySQL />
                </div>
                <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">MYSQL</p>
              </div>
              <div className="w-[25%] items-center flex flex-col">
                <div className="mb-[15px]">
                  <LogoPy />
                </div>
                <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                  PYTHON
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-black text-3xl font-bold font-['Montserrat'] tracking-widest mb-[75px] xl:p-0 md:ml-[20px]">
                {text("aboutMe", 7)}:
              </h2>
              <div className="flex flex-wrap justify-between mb-[100px]">
                <div className="w-[50%] items-center flex flex-col mb-[65px]">
                  <div className="mb-[15px]">
                    <LogoWS />
                  </div>
                  <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                    WEBSTORM
                  </p>
                </div>
                <div className="w-[50%] items-center flex flex-col mb-[65px]">
                  <div className="mb-[15px]">
                    <LogoVSCode />
                  </div>
                  <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                    VSCode
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-black text-3xl font-bold font-['Montserrat'] tracking-widest mb-[75px] xl:p-0 md:ml-[20px]">
                {text("aboutMe", 8)}:
              </h2>
              <div className="flex flex-wrap justify-between mb-[100px]">
                <div className="w-[100%] items-center flex flex-col">
                  <div className="mb-[15px]">
                    <LogoEnglish />
                  </div>
                  <p className="text-center text-black text-2xl font-normal font-['Montserrat'] tracking-widest">
                    ENGLISH A2/B1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*portfolio*/}
      <div className="backPortFolio h-[300px] flex w-full relative items-center justify-center">
        <div className="border-[8px] border-[#000]  py-[5px] px-[15px] text-center text-black text-3xl font-bold font-['Montserrat'] leading-10 tracking-widest">
          {text("portfolio", 0)}
        </div>
      </div>
      {/*carousel*/}
      <div className="w-full min-h-[50px] bg-[#1A1A1A]"></div>
      <Slider {...settings}>
        {caruselItems.map((item) => (
          <div
            key={item.id}
            className={`slide bg-[#D7D7D7] min-h-[400px] !flex items-center justify-center ${item.img} `}
          >
            <div className="flex flex-col items-center">
              <h3 className={`text-center text-${item.color} text-xs font-semibold font-['Montserrat'] tracking-wide`}>
                {item.title}
              </h3>
              <h1
                className={`text-center text-${item.color} text-2xl font-bold font-['Montserrat'] leading-loose tracking-widest`}
              >
                {item.name}
              </h1>
              <p className={`text-center text-${item.color} text-xs font-medium font-['Montserrat']`}>{item.desc}</p>
              {item.action && (
                <button
                  onClick={() => {
                    if (item.location.startsWith("https")) {
                      window.open(item.location, "_self");
                    } else {
                      // @ts-ignore
                      window.location = item.location;
                    }
                  }}
                  className={`viewButton text-center border-l-2 border-r-2 border-${item.color} px-[15px] text-${item.color} text-xs font-semibold font-['Montserrat'] tracking-wide`}
                >
                  VIEW
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-full bg-[#1A1A1A] py-[10px]">
        <p className="text-center text-neutral-50 text-xl font-semibold font-['Montserrat']"> {text("portfolio", 1)}</p>
      </div>
      {/*contact*/}
      <div className="contact backAboutMe min-h-[600px] flex flex-col items-center w-full relative pt-[140px]">
        <div className="border-[8px] mb-[60px] border-[#000] py-[5px] px-[15px] text-center text-black text-3xl font-bold font-['Montserrat'] leading-10 tracking-widest">
          {text("contact", 0)}
        </div>
        <p className="max-w-[700px] text-center text-zinc-950 text-base font-normal font-['Open Sans'] leading-tight mb-[85px]">
          {text("contact", 1)}
        </p>
        <div className="mb-[120px]">
          <LogoLine />
        </div>
        <div className="flex mb-[60px]">
          <button className="mr-[10px] min-w-[100px] min-h-[100px]">
            <LogoHH />
          </button>
          <button className="mr-[10px] min-w-[100px] min-h-[100px]">
            <LogoVK />
          </button>
          <button className="min-w-[100px] min-h-[100px]">
            <LogoTelegram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
