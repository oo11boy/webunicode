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

export default function IntroSlider() {
  const infointroslider = [
    {
      id: 1,
      img: "https://png.pngtree.com/png-clipart/20231115/original/pngtree-shopper-girl-lifestyle-flying-photo-png-image_13567112.png",
      titr: "سفارش طراحی سایت فروشگاهی",
      info: `سفارش طراحی سایت فروشگاهی ارزان و با کیفیت در تهران و سراسر ایران به کسب‌وکارها این امکان را می‌دهد تا با هزینه کم، یک فروشگاه آنلاین حرفه‌ای و کارآمد ایجاد کنند`,
    },
    {
      id: 2,
      img: "https://www.nicepng.com/png/full/253-2532179_our-company-company.png",
      titr: "سفارش طراحی سایت شرکتی",
      info: `سفارش طراحی سایت شرکتی ارزان به کسب‌وکارها این امکان را می‌دهد تا با کمترین هزینه، یک وب‌سایت حرفه‌ای و تاثیرگذار داشته باشند. این خدمات شامل طراحی گرافیکی زیبا، بهینه‌سازی برای موتورهای جستجو (SEO)، و ارائه بخش‌های مختلف برای معرفی شرکت و خدمات آن است.`,
    },
  ];

  const [fadeKey, setFadeKey] = useState(0);

  const changesilder = () => {
    setFadeKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="w-100 z-0 h-screen Introslider relative">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        speed={800}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000, // مدت زمان تغییر اسلایدها به میلی‌ثانیه
          disableOnInteraction: false,
        }}
        loop={true} // اضافه کردن ویژگی loop
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        onSlideChange={changesilder}
        className="mt-5 relative h-full overflow-hidden"
      >
        <div  className="h-3/4 sharpbgslider absolute right-0 ">
        <img
         
          src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/07/3.png"
          alt=""
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
