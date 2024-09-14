import "./Poster.css";
import RequestSiteBtn from "@/Components/UiComponents/Buttons/RequestSiteBtn";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';
import { PortfolioDb } from "@/lib/PortfolioDb";

export default function Poster() {
  return (
    <div className="poster-bg container-field">
      <div className="container flex items-center justify-center lg:pt-[250px] pt-[100px]">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="lg:w-[40%] md:w-[60%] w-full space-y-5 pb-20 text-white">
            <h2 className="text-2xl text-start">قالب فروشگاهی</h2>
            <h4 className="text-4xl font-bold text-start ">
              تیم قویه این طرحو با کمترین قیمت در اختیار شما قرار میده ددددد
            </h4>
            <h4 className="text-xl font-bold text-start ">
              سفارش بدید حالشو ببرید
            </h4>
            <RequestSiteBtn text='درخواست سایت'/>
          </div>
          <div className="relative lg:w-[50%] w-full rounded-lg flex justify-center">
            <div className="z-20 w-full rounded-xl  absolute top-0">
            <>
      <Swiper
        effect={'cards'}
        autoplay={{ delay: 1000 }}  
        loop={true}
  grabCursor={true}
  modules={[EffectCards, Autoplay]}
         className="w-full"
      >
        {PortfolioDb.map((item)=>(
  <SwiperSlide >
  <img src={item.img} className="w-full m-auto !object-contain" alt="" srcset="" />
</SwiperSlide>
        ))}
      
       
      </Swiper>
    </>
 
            </div>
            <span className="poster-content"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
