import React from 'react';
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText';
import { CheckCircle } from '@mui/icons-material';

export default function LandingPlans() {
  return (
    <div style={{direction:"rtl"}} className="my-4 ">
      <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center">
        <TopSectionText toptext={'قدم دوم'} linecolor={'red'} maintext={'انتخاب پلن'} />
       
<video
  src="https://unicodewebdesign.storage.iran.liara.space/video/l2.mp4"
  controls
  className=" max-h-[300px] mt-4 rounded-lg shadow-lg"
>
</video>
       
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

      

      <div className="bg-gray-100 px-5 py-10 w-[90%] m-auto">
      <h2 className="text-4xl font-extrabold yekan text-center text-gray-800 mb-8">مقایسه پلن‌ها</h2>
    
      <div className="flex flex-col md:!flex-row justify-center items-center gap-8">

        {/* پلن اقتصادی */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">پلن اقتصادی</h3>
          <p className="text-gray-600 text-center text-sm mb-6 border p-2 border-[orange] rounded-lg">
            مناسب برای کسب‌وکارهای نوپا با محصولات یا خدمات محدود
          </p>
          <ul className="text-gray-600 space-y-3 mb-6">
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500"><CheckCircle/></span>
              <span>افزونه‌های درگاه پرداخت</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500"><CheckCircle/></span>
              <span>فرم‌های پیشرفته</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500"><CheckCircle/></span>
              <span>دامنه رایگان .ir</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500"><CheckCircle/></span>
              <span>SSL رایگان</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500"><CheckCircle/></span>
              <span>امکان افزودن شبکه‌های اجتماعی</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500"><CheckCircle/></span>
              <span>ثبت‌نام با ایمیل</span>
            </li>
          </ul>
   
        </div>

        {/* پلن استاندارد */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">پلن استاندارد</h3>
          <p className="text-gray-600 text-center text-sm mb-6 border p-2 border-[orange] rounded-lg">
            مناسب برای کسب‌وکارهای بزرگتر با محصولات یا خدمات بیشتر
          </p>
          <ul className="text-gray-600 space-y-3 mb-6">
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500"><CheckCircle/></span>
              <span>تمام امکانات پلن اقتصادی</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500"><CheckCircle/></span>
              <span>افزونه‌های سئو و امنیتی</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500"><CheckCircle/></span>
              <span>ثبت سایت در گوگل</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500"><CheckCircle/></span>
              <span>ثبت‌نام پیامکی</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500"><CheckCircle/></span>
              <span>بهینه‌سازی رایگان سایت برای سئو</span>
            </li>

            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500"><CheckCircle/></span>
              <span>مناسب برای کسب و کار بزرگتر</span>
            </li>
          </ul>
   
        </div>
      </div>
    </div>
    </div>
  );
}