import React from "react";
import './Services.css'

export default function Services() {
  return (
    <>
      <section class="">
  <div class="elementor-container bg-[#202022] md:bg-transparent relative flex md:flex-row flex-col-reverse">
    {/* <!-- Left Content Section --> */}
    <div class="w-full lg:w-7/12 md:py-12 container-field">
      <div class="md:max-w-2xl md:ml-auto px-4 md:flex-col items-baseline justify-between flex">
        <div class="feature-style-one wow fadeInUp mb-10">
          <div class="flex justify-between md:flex-nowrap flex-wrap ">
            <div class="icon text-3xl mx-2 mb-8 md:mb-0 w-full text-white">
              <img class="w-24" src="/image/feature_icon.png" alt="" />
            </div>
            <div class="info ml-4">
              <h3 class="text-2xl font-semibold md:text-gray-600 mb-8 ">این راه حل ها را کنترل می کند</h3>
              <p class="md:text-gray-600 text-[#dedede] md:text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div class="feature-style-one wow fadeInUp mt-10">
          <div class="flex justify-between md:flex-nowrap flex-wrap">
          <div class="icon text-3xl mx-2 mb-8 md:mb-0 w-full text-white">
              <img class="w-24" src="/image/feature_icon.png" alt="" />
            </div>
            <div class="info ml-4">
              <h3 class="text-2xl font-semibold md:text-gray-600 mb-8 ">کار تیمی پیشرفته در این تیم</h3>
              <p class="md:text-gray-600 text-[#dedede] md:text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* <!-- Right Content Section with Full Width Dark Background --> */}
    <div class="w-full lg:w-5/12 py-16 container-field">
      <div class=" relative md:max-w-lg mr-auto md:ml-20 px-4">
        <div class="absolute md:-left-20 md:-top-14 -top-20 arrow-shape mb-8">
          <img class="w-32" src="/image/red-arrow.png" alt="arrow" />
        </div>
        <h3 class="mb-6 text-4xl font-black text-white ">انعطاف‌پذیری و ویژگی‌های متناسب با سبک هر تیم.</h3>
        <p class="my-6 pt-6 text-white ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        
        <div class="circle-progress md:flex justify-between hidden space-x-8">
          <div class="progressbar text-center text-white">
            <div class="circle relative w-28 h-28 rounded-full bg-gray-100 mb-4" data-percent="58">
              <canvas width="120" height="120"></canvas>
              <strong class="absolute inset-0 flex items-center justify-center text-lg font-semibold">58%</strong>
            </div>
            <h4 class="text-xl font-medium">رشد شرکت</h4>
          </div>
          <div class="progressbar text-center text-white">
            <div class="circle relative w-28 h-28 rounded-full bg-gray-100 mb-4" data-percent="87">
              <canvas width="120" height="120"></canvas>
              <strong class="absolute inset-0 flex items-center justify-center text-lg font-semibold">87%</strong>
            </div>
            <h4 class="text-xl font-medium">مشتریان راضی</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
