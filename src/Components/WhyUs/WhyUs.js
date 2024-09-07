import React from "react";
import "./WhyUs.css";
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
export default function WhyUs() {
  return (
    <div dir="rtl" className="whyus pb-[7.5%] lg:pb-[unset] pt-[7.4%] relative h-auto xl:!h-lvh">
      <img
        className="absolute  h-[100px] right-10 bottom-20"
        src="/image/sharpwhyus.png"
        alt=""
      />
      <img
        className="absolute hidden lg:flex right-0 top-28 h-[200px] rounded-md w-[200px]"
        src="https://cdn-blog.flexi.ink/images/posts/post_9/15873771015e9d73cdf3cf6_s1000.jpeg"
        alt=""
      />

      <div className="container flex flex-col lg:flex-row justify-start items-start">
        <div className="relative mainimgwhyus w-full lg:w-[43%] lg:pr-[7%] md:!h-[450px]">
          <img
            className="lg:h-[80%]  lg:!w-full object-cover rounded-xl"
            src="https://lyncserve.com/images/design-team.jpg"
            alt=""
          />
          <div className="p-6 hidden md:flex py-24 w-[180px] h-[180px] justify-center items-center flex-col text-4xl text-white absolute bottom-10 rounded-xl right-0 whyusgradiant border border-gray-2">
            <p className="whyusnumber">8</p>
            <p className="text-2xl whyusp">سال تجربه</p>
          </div>
        </div>
        <div className="w-full  lg:w-[50%] lg:pr-[7%]">
          <h1 className="text-4xl mb-8 font-extrabold">
            سفارش طراحی سایت ارزان و با کیفیت در سراسر تهران و ایران
          </h1>
          <p className="whyusptext">
            شرکت یونیکد با افتخار خدمات سفارش طراحی سایت ارزان را به مشتریان خود
            ارائه می‌دهد. اگر به دنبال یک طراحی حرفه‌ای و باکیفیت با قیمت مناسب
            هستید، یونیکد بهترین گزینه برای شماست. تیم ما متشکل از طراحان و
            برنامه‌نویسان با تجربه است که با استفاده از آخرین فناوری‌ها و
            استانداردهای روز، وب‌سایتی منحصر به فرد و کاربرپسند برای شما طراحی
            می‌کنند.
          </p>

          <div className="flex flex-col md:!flex-row  z-50 mt-10 w-full justify-between items-center">
            <div className="border w-full md:w-[150px] flex justify-center flex-col items-center bg-white p-4 h-[150px]">
                <span>
                    <SupportAgentIcon />
                </span>
              <p className="text-[14px]">پشتیبانی 24/7</p>
            </div>
            <div className="border w-full md:w-[150px]  flex justify-center flex-col items-center bg-white p-4 h-[150px]">
            <span>
                    <SpeedIcon/>
                </span>
              <p  className="text-[14px]">سرعت و کیفیت بالا</p>
              
            </div>
            <div className="border w-full md:w-[150px] flex justify-center flex-col items-center bg-white p-4 h-[150px]">
            <span>
                    <HeadsetMicIcon/>
                </span>
              <p className="text-[14px]">تیم مشاوره فعال</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
