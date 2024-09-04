"use client";
import React from "react";
import "./Services.css";
import ListServices from "./ListServices";
import General_Info_Service from "./General_Info_Service";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
export default function Services() {
  const infoservice = [
    {
      id: 1,
      title: "طراحی ریسپانسیو",
      content: "ما برای شما ریسپانسیو طراحی میکنیم",
      icon: <MobileFriendlyIcon fontSize="large"/>
    },
    {
      id: 2,
      title: "بهینه‌سازی برای موتورهای جستجو",
      content: "خدمات بهینه‌سازی برای افزایش رتبه سایت شما در موتورهای جستجو",
      icon: <EngineeringIcon fontSize="large"/>
    },
    {
      id: 3,
      title: "طراحی رابط کاربری",
      content: "ایجاد رابط کاربری زیبا و کاربرپسند برای وب‌سایت و اپلیکیشن",
      icon: <HandshakeIcon fontSize="large"/>
    },
    {
      id: 4,
      title: "رعایت اصول سئو",
      content: "تمام قالب های طراحی شده توسط ما با رعایت کامل اصول سئو بهینه سازی شده اند.",
      icon: <SystemSecurityUpdateGoodIcon fontSize="large"/>
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
