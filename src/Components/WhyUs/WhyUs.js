import React from "react";
import "./WhyUs.css";

import WhyUsImageSide from "./WhyUsImageSide";
import WhyUsTextSide from "./WhyUsTextSide";
export default function WhyUs() {
  return (
    <div dir="rtl" className="whyus pb-[7.5%] lg:pb-[unset] pt-[7.4%] relative h-auto ">
      <img
        className="absolute  h-[100px] right-10 bottom-20"
        src="/image/sharpwhyus.png"
        alt=""
      />
      <img
        className="absolute hidden lg:flex right-0 top-28 h-[200px] rounded-xl w-[200px]"
        src="/image/bg2whyus.jpeg"
        alt=""
      />

      <div className="container flex flex-col lg:flex-row justify-between items-start">
      <WhyUsImageSide/>
      <WhyUsTextSide/>
      </div>
    </div>
  );
}
