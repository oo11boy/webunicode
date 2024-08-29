import React from "react";

export default function ContentSlider({fadeKey,items}) {
  return (
    <div className="text-right contentslider  flex justify-center items-start flex-col w-[50%]">
      <h3
        key={`h3-${fadeKey}`} // استفاده از کلید جدید برای ایجاد انیمیشن مجدد
        className="text-5xl mb-10 font-extrabold intorslideranim-h3"
      >
        {items.titr}
      </h3>
      <p
        key={`p-${fadeKey}`} // استفاده از کلید جدید برای ایجاد انیمیشن مجدد
        className="mb-10 font-extrabold intorslideranim-p"
      >
        {items.info}
      </p>

      <a
        key={`a-${fadeKey}`}
        className="bg-red-600 text-white rounded-full intorslideranim-btn px-6 py-3"
        href="#"
      >
        ثبت سفارش طراحی سایت
      </a>
    </div>
  );
}
