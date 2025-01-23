"use client";
import PortfolioSlider from "@/Components/PortfolioSlider/PortfolioSlider";
import Requestsite from "@/Components/Requestsite/Requestsite";
import TopSectionText from "@/Components/UiComponents/TopSectionsTitle/TopSectionText";
import React from "react";
import Snowfall from "react-snowfall";

export default function page() {
  return (
    <div dir="rtl" className="bg-[#E3EFFB] w-full snowd">
   

      <div className="w-full relative">
        <img
          src="image/banner.png"
          className="w-full object-cover h-[200px]  md:!h-[auto] md:!object-fill"
          alt=""
        />
           <Snowfall speed={[0.1,0.4]} changeFrequency={5} />
      </div>

      <div className="my-4">
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center"> 
      <TopSectionText toptext={'قدم اول'} linecolor={'red'}  maintext={'انتخاب پلن'}/>
          <p className="mt-4">
            هر کسب‌وکاری برای شروع به یه سری معیارهای مهم نیاز داره؛ مثل یه نقشه
            راه که بهتون کمک کنه بهترین مسیر رو انتخاب کنید. این معیارها می‌تونن
            شامل وسعت کسب‌وکار، بودجه، مشتری‌های هدف و عواملی باشن که توی انتخاب
            یه پلن مناسب نقش دارن.
          </p>
          <p className="pb-4">
            ما با توجه به نیاز شما، یه سری پلن‌ها و دسته‌بندی‌های مختلف آماده
            کردیم تا بتونید با خیال راحت و با توجه به نیاز و هدفتون، بهترین
            گزینه رو انتخاب کنید.
          </p>
        </div>
        <div className="w-[90%] m-auto flex-wrap mt-4 flex justify-between items-center gap-4">
  {/* تصویر اول */}
  <div className="w-full sm:!w-[48%] lg:!w-[23%]">
    <img className="w-full rounded-lg " src="image/33.png" alt="plan" />
  </div>

  {/* تصویر دوم */}
  <div className="w-full sm:!w-[48%] lg:!w-[23%]">
    <img className="w-full rounded-lg " src="image/33.png" alt="plan" />
  </div>

  {/* تصویر سوم */}
  <div className="w-full sm:!w-[48%] lg:!w-[23%]">
    <img className="w-full rounded-lg " src="image/33.png" alt="plan" />
  </div>

  {/* تصویر چهارم */}
  <div className="w-full sm:!w-[48%] lg:!w-[23%]">
    <img className="w-full rounded-lg " src="image/33.png" alt="plan" />
  </div>
</div>
      </div>
      <div className="my-4">
      
      <div className="w-[90%] m-auto flex-wrap mt-4 flex justify-between items-center gap-4">
<PortfolioSlider bgcolor=""/>
</div>
    </div>




      <div className="my-4">
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center"> 
      <TopSectionText toptext={'قدم دوم'} linecolor={'red'}  maintext={'تنظیم قرارداد'}/>
          <p className="mt-4">
            هر کسب‌وکاری برای شروع به یه سری معیارهای مهم نیاز داره؛ مثل یه نقشه
            راه که بهتون کمک کنه بهترین مسیر رو انتخاب کنید. این معیارها می‌تونن
            شامل وسعت کسب‌وکار، بودجه، مشتری‌های هدف و عواملی باشن که توی انتخاب
            یه پلن مناسب نقش دارن.
          </p>
          <p className="pb-4">
            ما با توجه به نیاز شما، یه سری پلن‌ها و دسته‌بندی‌های مختلف آماده
            کردیم تا بتونید با خیال راحت و با توجه به نیاز و هدفتون، بهترین
            گزینه رو انتخاب کنید.
          </p>
        </div>
        <div className="w-[90%] m-auto flex-wrap mt-4 flex justify-between items-center gap-4">

</div>
      </div>




      
    </div>
  );
}
