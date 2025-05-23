'use client';

import React, { useMemo } from 'react';
import { FaPaintBrush, FaCode, FaLightbulb } from 'react-icons/fa';
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText';
import './LandingPage.css';

export default function LandingTypeTheme() {
  const cardData = useMemo(
    () => [
      {
        id: 1,
        title: 'قالب‌های از پیش طراحی شده',
        content:
          'اگر از قالب‌های از پیش طراحی شده استفاده کنید، می‌توانید تغییرات مورد نظر خود را به ما اطلاع دهید. تمامی این قالب‌ها، شامل متن‌ها، رنگ‌ها، افزونه‌ها و سایر امکانات، تا حد امکان قابل تنظیم هستند.',
        icon: <FaPaintBrush className="text-4xl text-blue-600" aria-hidden="true" />,
      },
      {
        id: 2,
        title: 'قالب‌های اختصاصی',
        content:
          'در مورد قالب‌های اختصاصی، شما طرح مورد نظر خود را به ما ارائه می‌دهید و ما از ابتدا بر اساس نیازها و درخواست‌های شما شروع به طراحی می‌کنیم.',
        icon: <FaCode className="text-4xl text-green-600" aria-hidden="true" />,
      },
    ],
    []
  );

  return (
    <section
      className="landing-type-theme py-8 flex flex-col justify-center items-center m-auto w-[90%] lg:w-[70%] text-center"
      lang="fa"
      dir='rtl'
      aria-labelledby="theme-title"
    >
      <TopSectionText
        toptext="قدم اول"
        linecolor="red"
        maintext="انتخاب نوع قالب"
      />

      <video
        src="https://unicodewebdesign.storage.iran.liara.space/video/l1.mp4"
        controls
        className="max-h-[300px] mt-4 rounded-lg shadow-lg"
         title="ویدئو معرفی انتخاب نوع قالب"
        loading="lazy"
      >
     
      </video>

      <div className="mt-8 space-y-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card) => (
            <li
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              aria-label={card.title}
            >
              <div className="flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-700 leading-7 mt-2">{card.content}</p>
            </li>
          ))}
        </ul>

        <article className="bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaLightbulb className="text-4xl text-yellow-600" aria-hidden="true" />
          </div>
          <h3 className="text-gray-800 font-semibold">پیشنهاد ما:</h3>
          <p className="text-gray-700 mt-2 leading-7">
            اگر به دنبال سایتی با امکانات رایج و مشابه سایت‌های موجود هستید، استفاده از{' '}
            <span className="font-medium text-gray-900">قالب‌های از پیش طراحی شده</span> گزینه‌ی
            بهتری است. اما اگر نیاز به طراحی خاص و منحصر به فرد دارید،{' '}
            <span className="font-medium text-gray-900">قالب‌های اختصاصی</span> بهترین انتخاب
            خواهند بود.
          </p>
        </article>
      </div>
    </section>
  );
}