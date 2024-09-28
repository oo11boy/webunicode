"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./IntroSlider.css";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import ImgSlide from "./ImgSlide/ImgSlide";
import ContentSlider from "./ContentSlider/ContentSlider";
import PrevNextButton from "./PrevNextButton/PrevNextButton";
import { infointroslider } from "@/lib/DataFetching";

export default function IntroSlider() {

  const [fadeKey, setFadeKey] = useState(0);

  const changesilder = () => {
    setFadeKey((prevKey) => prevKey + 1);
  };


  return (
    <div className="w-100 z-0 h-screen bg-slider-mob Introslider relative">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        speed={0} // حذف سرعت تغییرات
         allowTouchMove={false}
      
        loop={true} // اضافه کردن ویژگی loop
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        onSlideChange={changesilder}
        className="mt-5 relative h-full overflow-hidden"
        loopAdditionalSlides={0} // جلوگیری از نمایش اسلاید قبلی در هنگام کشیدن
      
      >
        <div className="h-3/4 sharpbgslider absolute right-0">
          <img
            src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/07/3.png"
            alt="طراحی سایت ارزان و با کیفیت"
          />
        </div>

        {infointroslider.map((item) => (
          <SwiperSlide key={item.id} className="w-100">
            <div className="flex slidesintro justify-between h-100% w-[100%] item-center">
              <ContentSlider fadeKey={fadeKey} items={item} />
              <ImgSlide fadeKey={fadeKey} items={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <PrevNextButton />
   
    </div>
  );
}
