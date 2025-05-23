import React from 'react';
import CircleProgressBar from '@/Components/UiComponents/CircleProgressBar/CircleProgressBar';

export default function General_Info_Service() {
  return (
    <div className="w-full md:w-[50%] flex flex-col justify-start md:pt-24 lg:py-8">
      <div className="relative m-auto lg:ml-20 lg:pl-8">
        <div className="absolute hidden md:flex lg:-left-20 lg:-top-24 -top-20 arrow-shape mb-8">
          <img
            className="w-32"
            src="/image/red-arrow.png"
            alt="تصویر فلش تزئینی"
            loading="lazy"
          />
        </div>
        <h2
          id="services-title"
          className="mt-24 md:mt-0 mb-6 text-4xl gradianttext text-center md:text-right md:text-white"
        >
          انعطاف‌پذیری و ویژگی‌های متناسب با سبک هر تیم
        </h2>
        <div className="circle-progress md:hidden flex justify-between w-full">
          <CircleProgressBar percentage={58} text="رشد شرکت" />
          <CircleProgressBar percentage={99} text="رضایت مشتری" />
        </div>
        <p className="my-6 pt-6 text-black text-center md:text-right md:text-white">
          در دنیای امروز که تکنولوژی و اینترنت بخش بزرگی از زندگی ما را تشکیل می‌دهند، داشتن یک سایت فروشگاهی، شرکتی یا حتی یک سایت برای معرفی شخصی یا رزومه، اهمیت فراوانی دارد. سایت‌ها می‌توانند به ما کمک کنند تا حضور آنلاین موثری داشته باشیم و از این طریق به اهداف خود برسیم. در این مقاله به بررسی دلایل نیاز به یک سایت و اهمیت استفاده از خدمات طراحی سایت ارزان خواهیم پرداخت.
        </p>
        <div className="circle-progress hidden lg:flex justify-between w-full">
          <CircleProgressBar percentage={58} text="رشد شرکت" />
          <CircleProgressBar percentage={99} text="رضایت مشتری" />
          <CircleProgressBar percentage={100} value="+" text="پروژه" />
        </div>
      </div>
    </div>
  );
}