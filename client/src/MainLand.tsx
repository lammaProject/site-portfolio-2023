import React from "react";
import Header from "./main/Header/Header";
import Body from "./main/Body/Body";
import Footer from "./main/Footer/Footer";

const MainLand = () => {
  return (
    <div className="h-screen w-screen flex relative flex-col items-center bg-[#E7E7E7]">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default MainLand;
