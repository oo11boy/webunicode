"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./IntroSlider.css";
import { Navigation, EffectFade } from "swiper/modules";
import ImgSlide from "./Components/ImgSlide/ImgSlide";
import ContentSlider from "./Components/ContentSlider/ContentSlider";
import PrevNextButton from "./Components/PrevNextButton/PrevNextButton";

export default function IntroSlider() {
  const infointroslider = [
    {
      id: 1,
      img: "https://png.pngtree.com/png-clipart/20231115/original/pngtree-shopper-girl-lifestyle-flying-photo-png-image_13567112.png",
      titr: "سفارش طراحی سایت فروشگاهی",
      info: `  سفارش طراحی سایت فروشگاهی ارزان و با کیفیت در تهران و سراسر
      ایران به کسب‌وکارها این امکان را می‌دهد تا با هزینه کم، یک
      فروشگاه آنلاین حرفه‌ای و کارآمد ایجاد کنند`,
    },
    {
      id: 2,
      img: "https://www.nicepng.com/png/full/253-2532179_our-company-company.png",
      titr: "سفارش طراحی سایت شرکتی",
      info: `    سفارش طراحی سایت شرکتی ارزان به کسب‌وکارها این امکان را می‌دهد
        تا با کمترین هزینه، یک وب‌سایت حرفه‌ای و تاثیرگذار داشته باشند.
        این خدمات شامل طراحی گرافیکی زیبا، بهینه‌سازی برای موتورهای
        جستجو (SEO)، و ارائه بخش‌های مختلف برای معرفی شرکت و خدمات آن
        است.`,
    },
  ];

  const [fadeKey, setFadeKey] = useState(0);

  const changesilder = () => {
    setFadeKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="w-100 z-0 h-screen relative">
      <Swiper
        modules={[Navigation, EffectFade]}
        effect="fade"
        speed={800}
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        onSlideChange={changesilder}
        className="Introslider mt-5 relative h-full overflow-hidden"
      >
        <img
          className="h-3/4 absolute right-0 bottom-0"
          src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/07/3.png"
          alt=""
        />
        
        {infointroslider.map((item, index) => (
          <SwiperSlide key={item.id} className="w-100">
            <div className="flex justify-between w-[80%] item-center">
              <ImgSlide fadeKey={fadeKey} items={item} />
              <ContentSlider fadeKey={fadeKey} items={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <PrevNextButton />
    </div>
  );
}
