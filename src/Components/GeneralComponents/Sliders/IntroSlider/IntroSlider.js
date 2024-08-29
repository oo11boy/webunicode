"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./IntroSlider.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function IntroSlider() {
  return (
    <div className="w-100 z-0 h-screen relative">
      <Swiper
        modules={[Navigation]}
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

        <SwiperSlide className=" w-100">
          <div className="flex justify-between w-[80%] item-center">
            <div className="text-right w-1/2">
              <h3 className="text-5xl mb-6 font-extrabold">
            
                شرکت طراحی سایت یونیکد
              </h3>
              <p className="mb-6">
                یونیکد مرجع طراحی انواع سایت های مختلف با قیمتی ارزان و کیفیتی
                متاسب میتواند شما را در بهبود کسب و کارتان همراهی نماید
              </p>

              <a
                className="bg-red-600 text-white rounded-lg px-4 py-2"
                href="#"
              >
                ثبت سفارش طراحی سایت
              </a>
            </div>
            <div className="text-left  w-1/2">
              <img
                className="w-2/6  absolute right-32 bottom-0"
                src="https://www.pngmart.com/files/23/Shop-PNG-Image.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-100">
          <div className="flex justify-between w-[80%] item-center">
            <div className="text-right w-1/2">
              <h3 className="text-5xl mb-6 font-extrabold">
                {" "}
                شرکت طراحی سایت یونیکد
              </h3>
              <p className="mb-6">
                یونیکد مرجع طراحی انواع سایت های مختلف با قیمتی ارزان و کیفیتی
                متاسب میتواند شما را در بهبود کسب و کارتان همراهی نماید
              </p>

              <a
                className="bg-red-600 text-white rounded-lg px-4 py-2"
                href="#"
              >
                ثبت سفارش طراحی سایت
              </a>
            </div>
            <div className="text-left  w-50">
              <img
                className="w-2/6  absolute right-32 bottom-0"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/07/2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-green-500">Slide 3</SwiperSlide>
      </Swiper>

      {/* دکمه‌های ناوبری سفارشی */}
      <button className="custom-next-button absolute bottom-5  left-10 z-10">
        <span class="icon-arrow-right2"></span>
      </button>
      <button className="custom-prev-button absolute bottom-5 left-5 z-10">
        <span class="icon-arrow-left2"></span>
      </button>
    </div>
  );
}
