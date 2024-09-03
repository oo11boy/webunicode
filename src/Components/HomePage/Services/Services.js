"use client"
import React from "react";
import "./Services.css";
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'
export default function Services() {
  const infoservice = [
    {
      id: 1,
      title: "طراحی ریسپانسیو",
      content: "ما برای شما ریسپانسیو طراحی میکنیم",
    },
    {
      id: 2,
      title: "بهینه‌سازی برای موتورهای جستجو",
      content: "خدمات بهینه‌سازی برای افزایش رتبه سایت شما در موتورهای جستجو",
    },
    {
      id: 3,
      title: "طراحی رابط کاربری",
      content: "ایجاد رابط کاربری زیبا و کاربرپسند برای وب‌سایت و اپلیکیشن",
    },
  ];

  return (
    <>
      <section class="elementor-container container-field  ">
        <div className="container fatherdivservice  md:bg-transparent relative justify-between items-center flex lg:flex-row-reverse flex-col-reverse">
          {/* <!-- Left Content Section --> */}

          <div class="w-full md:w-[50%] flex flex-col justify-start  md:py-12 ">
            <div class=" md:ml-auto md:pr-4 flex-wrap lg:flex-col items-baseline justify-start flex">
              {infoservice.map((item) => (
                <div
                  key={item.id}
                  class=" w-full  md:w-[50%] feature-style-one lg:w-full wow fadeInUp mb-10"
                >
                  <div class="flex flex-col lg:flex-row items-center md:items-start justify-start md:flex-nowrap flex-wrap ">
                    <div class="icon text-3xl md:ml-10 mb-8 lg:mb-0  text-white">
                      <img class="w-[100px] max-w-[unset]" src="/image/feature_icon.png" alt="" />
                    </div>
                    <div class="info text-center md:text-right ml-4">
                      <h3 class="text-xl flex flex-col justify-center items-center md:flex-none md:items-start lg:text-2xl h-[25px] lg:h-[unset] font-bold text-black md:text-white lg:text-gray-600 mb-8 ">
                        {item.title}
                      </h3>
                      <p class="text-gray-600 lg:text-gray-600  md:text-[#dedede] lg:text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Right Content Section with Full Width Dark Background --> */}
          <div class="w-[50%] flex flex-col justify-start md:pt-24 lg:py-16 ">
            <div class=" relative  m-auto lg:ml-20  lg:pl-8">
              <div class="absolute hidden md:flex -right-5 lg:right-[unset] lg:-left-20 lg:-top-14 -top-20 arrow-shape mb-8">
                <img class="w-32" src="/image/red-arrow.png" alt="arrow" />
              </div>
              <h3 class="mb-6 text-4xl gradianttext text-center md:text-right md:text-white ">
                انعطاف‌پذیری و ویژگی‌های متناسب با سبک هر تیم.
              </h3>
              <p class="my-6 pt-6 text-black text-center md:text-right md:text-white ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>

              <div class="circle-progress md:hidden lg:flex justify-between w-full  space-x-8">
                <div class="progressbar my-10 md:my-auto w-full md:w-auto items-center flex md:flex-none flex-col justify-center md: text-center text-black">
                  <div
                    class="circle relative w-28 h-28 rounded-full mb-4"
                    data-percent="58"
                  >
<Flat  
   progress={50}
   range={{ from: 0, to: 100 }}
   sign={{ value: '%', position: 'end' }}
  
   showMiniCircle={true}
   showValue={true}
   sx={{
     strokeColor: '#ff0000',
     
     barWidth: 5, 
     bgStrokeColor: '#ffffff',
     bgColor: { value: '#F3F4F6', transparency: '99' },  
     shape: 'full',
     strokeLinecap: 'round',
     valueSize: 25,
     valueWeight: 'bold',
     valueColor: '#333',
     valueFamily: 'alibaba',
     loadingTime: 1000,
     miniCircleColor: '#ff0000',
     miniCircleSize: 5,
     valueAnimation: true,
     intersectionEnabled: true
   }}
/>
                  </div>
                  <h4 class="text-xl font-medium text-black md:text-white">رشد شرکت</h4>
                </div>
                <div class="progressbar  mb-10 md:mb-auto w-full md:w-auto items-center flex md:flex-none flex-col justify-center md: text-center text-black">
                <div
                    class="circle relative w-28 h-28 rounded-full mb-4"
                    data-percent="87"
                  >
                  <Flat  
   progress={87}
   range={{ from: 0, to: 100 }}
   sign={{ value: '%', position: 'end' }}
  
   showMiniCircle={true}
   showValue={true}
   sx={{
     strokeColor: '#ff0000',
     
     barWidth: 5, 
     bgStrokeColor: '#ffffff',
     bgColor: { value: '#F3F4F6', transparency: '99' },  
     shape: 'full',
     strokeLinecap: 'round',
     valueSize: 25,
     valueWeight: 'bold',
     valueColor: '#333',
     valueFamily: 'alibaba',
     loadingTime: 1000,
     miniCircleColor: '#ff0000',
     miniCircleSize: 5,
     valueAnimation: true,
     intersectionEnabled: true
   }}
/>
                  </div>
                  <h4 class="text-xl font-medium  text-black md:text-white">مشتریان راضی</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
