import React from "react";

export default function ContentSlider({fadeKey,items}) {
  return (
    <div className="text-right w-1/2">
      <h3
        key={`h3-${fadeKey}`} // استفاده از کلید جدید برای ایجاد انیمیشن مجدد
        className="text-5xl mb-6 font-extrabold intorslideranim-h3"
      >
        {items.titr}
      </h3>
      <p
        key={`p-${fadeKey}`} // استفاده از کلید جدید برای ایجاد انیمیشن مجدد
        className="mb-6 font-extrabold intorslideranim-p"
      >
        {items.info}
      </p>

      <a
        key={`a-${fadeKey}`}
        className="bg-red-600 text-white rounded-lg intorslideranim-btn px-4 py-2"
        href="#"
      >
        ثبت سفارش طراحی سایت
      </a>
    </div>
  );
}
