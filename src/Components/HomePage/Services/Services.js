"use client";
import React from "react";
import "./Services.css";
import ListServices from "./ListServices";
import General_Info_Service from "./General_Info_Service";
export default function Services() {
  const infoservice = [
    {
      id: 1,
      title: "طراحی ریسپانسیو",
      content: "ما برای شما ریسپانسیو طراحی میکنیم",
    },
    {
      id: 2,
      title: "بهینه‌سازی برای موتورهای جستجو",
      content: "خدمات بهینه‌سازی برای افزایش رتبه سایت شما در موتورهای جستجو",
    },
    {
      id: 3,
      title: "طراحی رابط کاربری",
      content: "ایجاد رابط کاربری زیبا و کاربرپسند برای وب‌سایت و اپلیکیشن",
    },
  ];

  return (
    <>
      <section class="elementor-container container-field  ">
        <div className="container fatherdivservice  md:bg-transparent relative justify-between items-center flex lg:flex-row-reverse flex-col-reverse">
          {/* <!-- Left Content Section --> */}
          <ListServices infoservice={infoservice} />

          {/* <!-- Right Content Section with Full Width Dark Background --> */}
          <General_Info_Service />
        </div>
      </section>
    </>
  );
}
