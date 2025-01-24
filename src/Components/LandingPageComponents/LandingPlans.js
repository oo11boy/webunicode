import React from 'react';
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText';

export default function LandingPlans() {
  return (
    <div className="my-4">
      <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center">
        <TopSectionText toptext={'قدم دوم'} linecolor={'red'} maintext={'انتخاب پلن'} />
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
      <div className="w-[90%] m-auto flex-wrap mt-4 flex justify-center items-center gap-4">
        {/* تصویر اول */}
        <div className="w-full relative sm:!w-[48%] lg:!w-[32%]">
          <img className="w-full rounded-lg" src="image/serviceplan.png" alt="plan" />
        
        </div>

        {/* تصویر دوم */}
        <div className="w-full  sm:!w-[48%] lg:!w-[32%]">
          <img className="w-full rounded-lg" src="image/storeplan.png" alt="plan" />
        
        </div>

        {/* تصویر سوم */}
        <div className="w-full relative sm:!w-[48%] lg:!w-[32%]">
          <img className="w-full rounded-lg" src="image/companyplan.png" alt="plan" />
      
        </div>
      </div>
    </div>
  );
}