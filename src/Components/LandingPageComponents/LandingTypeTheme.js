import React from 'react';
import { FaPaintBrush, FaCode, FaLightbulb } from 'react-icons/fa';
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText';

export default function LandingTypeTheme() {
  return (
    <div className="flex py-8 flex-col justify-center items-center m-auto w-[90%] lg:w-[70%] text-center">
      <TopSectionText
        toptext={"قدم اول"}
        linecolor={"red"}
        maintext={"انتخاب نوع قالب"}
      />

      <div className="mt-8 space-y-6">
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <FaPaintBrush className="text-4xl text-blue-600" />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              قالب‌های از پیش طراحی شده
            </p>
            <p className="text-gray-700 leading-7 mt-2">
              اگر از <span className="font-medium text-gray-900">قالب‌های از پیش طراحی شده</span> استفاده کنید، می‌توانید تغییرات مورد نظر خود را به ما اطلاع دهید. تمامی این قالب‌ها، شامل متن‌ها، رنگ‌ها، افزونه‌ها و سایر امکانات، تا حد امکان قابل تنظیم هستند.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <FaCode className="text-4xl text-green-600" />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              قالب‌های اختصاصی
            </p>
            <p className="text-gray-700 leading-7 mt-2">
              در مورد <span className="font-medium text-gray-900">قالب‌های اختصاصی</span>، شما طرح مورد نظر خود را به ما ارائه می‌دهید و ما از ابتدا بر اساس نیازها و درخواست‌های شما شروع به طراحی می‌کنیم.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaLightbulb className="text-4xl text-yellow-600" />
          </div>
          <p className="text-gray-800 font-semibold">
            پیشنهاد ما:
          </p>
          <p className="text-gray-700 mt-2 leading-7">
            اگر به دنبال سایتی با امکانات رایج و مشابه سایت‌های موجود هستید، استفاده از <span className="font-medium text-gray-900">قالب‌های از پیش طراحی شده</span> گزینه‌ی بهتری است. اما اگر نیاز به طراحی خاص و منحصر به فرد دارید، <span className="font-medium text-gray-900">قالب‌های اختصاصی</span> بهترین انتخاب خواهند بود.
          </p>
        </div>
      </div>
    </div>
  );
}