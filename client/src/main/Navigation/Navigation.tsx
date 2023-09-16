import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ change }: { change: any }) => {
  const handleScroll = (target: string) => {
    change(true);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="ml-auto flex h-[46px]">
      <button
        onClick={() => handleScroll(".backPortFolio")}
        className="mr-[8px] transition ease-in-out duration-300 hover:text-[#C4C4C4] p-[10px] text-center text-white text-[17px] font-bold font-['Montserrat']"
      >
        <Link to={"/blanchard"}>CLICK ME</Link>
      </button>
      <button
        onClick={() => handleScroll(".backAboutMe")}
        className="mr-[8px] transition ease-in-out duration-300 hover:text-[#C4C4C4] p-[10px] text-center text-white text-[17px] font-bold font-['Montserrat']"
      >
        About me
      </button>
      <button
        onClick={() => handleScroll(".skills")}
        className="mr-[30px] transition ease-in-out duration-300 hover:text-[#C4C4C4] p-[10px] text-center text-white text-[17px] font-bold font-['Montserrat']"
      >
        Skills
      </button>
      <button
        onClick={() => handleScroll(".contact")}
        className="bg-white transition ease-in-out duration-300 hover:text-[#C4C4C4] hover:bg-black p-[10px] rounded-[30px] text-center text-black text-[15px] font-bold font-['Montserrat']"
      >
        CONTACT ME
      </button>
    </div>
  );
};

export default Navigation;
