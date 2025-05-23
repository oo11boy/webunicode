'use client';

import React, { useMemo } from 'react';
import { CheckCircle } from '@mui/icons-material';
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText';
import './LandingPage.css';
import Image from 'next/image';

export default function LandingPlans() {
  const plans = useMemo(
    () => [
      {
        id: 1,
        title: 'پلن اقتصادی',
        description: 'مناسب برای کسب‌وکارهای نوپا با محصولات یا خدمات محدود',
        features: [
          'افزونه‌های درگاه پرداخت',
          'فرم‌های پیشرفته',
          'دامنه رایگان .ir',
          'SSL رایگان',
          'امکان افزودن شبکه‌های اجتماعی',
          'ثبت‌نام با ایمیل',
        ],
        color: 'blue-500',
        link: '/plans/economy',
      },
      {
        id: 2,
        title: 'پلن استاندارد',
        description: 'مناسب برای کسب‌وکارهای بزرگتر با محصولات یا خدمات بیشتر',
        features: [
          'تمام امکانات پلن اقتصادی',
          'افزونه‌های سئو و امنیتی',
          'ثبت سایت در گوگل',
          'ثبت‌نام پیامکی',
          'بهینه‌سازی رایگان سایت برای سئو',
          'مناسب برای کسب و کار بزرگتر',
        ],
        color: 'green-500',
        link: '/plans/standard',
      },
    ],
    []
  );

  const images = useMemo(
    () => [
      { id: 1, src: '/image/serviceplan.png', alt: 'پلن خدماتی' },
      { id: 2, src: '/image/storeplan.png', alt: 'پلن فروشگاهی' },
      { id: 3, src: '/image/companyplan.png', alt: 'پلن شرکتی' },
    ],
    []
  );

  return (
    <section className="landing-plans my-4" lang="fa" aria-labelledby="plans-title">
      <div className="flex flex-col justify-center items-center w-[90%] lg:!w-[70%] m-auto text-center">
        <TopSectionText toptext="قدم دوم" linecolor="red" maintext="انتخاب پلن" />
        <video
          src="https://unicodewebdesign.storage.iran.liara.space/video/l2.mp4"
          controls
          className="max-h-[300px] mt-4 rounded-lg shadow-lg"
       
          title="ویدئو معرفی پلن‌های وب‌سایت"
          loading="lazy"
        >
           </video>
        <p className="mt-4 text-gray-700">
          هر کسب‌وکاری برای شروع به یک سری معیارهای مهم نیاز دارد؛ مثل یک نقشه راه که به شما کمک می‌کند
          بهترین مسیر را انتخاب کنید. این معیارها می‌توانند شامل وسعت کسب‌وکار، بودجه، مشتری‌های هدف و
          عواملی باشند که در انتخاب یک پلن مناسب نقش دارند.
        </p>
        <p className="pb-4 text-gray-700">
          ما با توجه به نیاز شما، مجموعه‌ای از پلن‌ها و دسته‌بندی‌های مختلف آماده کرده‌ایم تا بتوانید با
          خیال راحت و با توجه به نیاز و هدفتان، بهترین گزینه را انتخاب کنید.
        </p>
      </div>

      <div className="w-[90%] m-auto mt-4 flex flex-wrap justify-center items-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-full sm:!w-[48%] lg:!w-[32%]">
            <Image
            width={320}
            height={320}
              className="!w-full rounded-lg"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="bg-gray-100 px-5 py-10 w-[90%] m-auto">
        <h2 id="plans-title" className="text-4xl font-extrabold yekan text-center text-gray-800 mb-8">
          مقایسه پلن‌ها
        </h2>
        <ul className="flex flex-col md:!flex-row justify-center items-center gap-8">
          {plans.map((plan) => (
            <li
              key={plan.id}
              className="w-full md:!w-1/3 bg-white shadow-lg rounded-lg p-6"
              aria-label={plan.title}
            >
              <h3 className={`text-2xl font-bold text-${plan.color} mb-4 text-center`}>
                {plan.title}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-6 border p-2 border-orange-400 rounded-lg">
                {plan.description}
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className={`text-${plan.color}`} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}