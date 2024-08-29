"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // اضافه کردن استایل برای افکت fade
import "./IntroSlider.css";
import { Navigation, EffectFade } from "swiper/modules";

export default function IntroSlider() {
  

  return (
    <div className="w-100 z-0 h-screen relative">
      <Swiper
        modules={[Navigation, EffectFade]}
        effect="slide" // تنظیم افکت انتقال به fade
        speed={800} // تنظیم سرعت انیمیشن
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        className="Introslider mt-5 relative h-full overflow-hidden"

      >
        <img
          className="h-3/4 absolute right-0 bottom-0"
          src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/07/3.png"
          alt=""
        />
        <SwiperSlide className="w-100">
          <div className="flex justify-between w-[80%] item-center">
            <div className="text-left w-1/2">
              <img
                className={"w-2/6 absolute right-32 bottom-0 "}
                src="https://png.pngtree.com/png-clipart/20231115/original/pngtree-shopper-girl-lifestyle-flying-photo-png-image_13567112.png"
                alt=""
              />
            </div>
            <div className="text-right w-1/2">
              <h3
                className="text-5xl  mb-6 font-extrabold"
              >
                سفارش طراحی سایت فروشگاهی
              </h3>
              <p
                className="mb-6 font-extrabold"
              >
                سفارش طراحی سایت فروشگاهی ارزان و با کیفیت در تهران و سراسر
                ایران به کسب‌وکارها این امکان را می‌دهد تا با هزینه کم، یک
                فروشگاه آنلاین حرفه‌ای و کارآمد ایجاد کنند{" "}
              </p>

              <a
                className="bg-red-600 text-white rounded-lg px-4 py-2"
                href="#"
              >
                ثبت سفارش طراحی سایت
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-100">
          <div className={`flex justify-between w-[80%] item-center `}>
            <div className="text-left w-1/2">
              <img
                className="w-2/6 absolute right-32 bottom-0 "
                src="https://www.nicepng.com/png/full/253-2532179_our-company-company.png"
                alt=""
              />
            </div>
            <div className="text-right w-1/2">
              <h3
                className="text-5xl mb-6 font-extrabold "
              >
                سفارش طراحی سایت شرکتی
              </h3>
              <p className="mb-6">
                سفارش طراحی سایت شرکتی ارزان به کسب‌وکارها این امکان را می‌دهد
                تا با کمترین هزینه، یک وب‌سایت حرفه‌ای و تاثیرگذار داشته باشند.
                این خدمات شامل طراحی گرافیکی زیبا، بهینه‌سازی برای موتورهای
                جستجو (SEO)، و ارائه بخش‌های مختلف برای معرفی شرکت و خدمات آن
                است.
              </p>

              <a
                className="bg-red-600 text-white rounded-lg px-4 py-2"
                href="#"
              >
                ثبت سفارش طراحی سایت
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* دکمه‌های ناوبری سفارشی */}
      <button className="custom-next-button absolute bottom-5 left-10 z-10">
        <span className="icon-arrow-right2"></span>
      </button>
      <button className="custom-prev-button absolute bottom-5 left-5 z-10">
        <span className="icon-arrow-left2"></span>
      </button>
    </div>
  );
}
