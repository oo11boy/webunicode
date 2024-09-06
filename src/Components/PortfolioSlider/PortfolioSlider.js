"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideCard from "./SlideCard/SlideCard";
import "./PortfolioSlider.css";
import TopSectionsTitle from "../UiComponents/TopSectionsTitle/TopSectionText";
import ViewMoreBtn from "../UiComponents/Buttons/ViewMoreBtn";
import { Autoplay } from "swiper/modules";

export default function PortfolioSlider() {
  const infoslider = [
    {
      id: 1,
      img: "https://v3dboy.ir/previews/wordpress/cvup/wp-content/uploads/2023/02/screenshot_green.jpg",
      title: "شخصی رزومه ای",
      content:
        "این یک قالب دمو شخصی است که به شما این امکان را می‌دهد تا نمونه کارها و تجربیات خود را به صورت حرفه‌ای و چشم‌نواز نمایش دهید. با این قالب، شما می‌توانید رزومه‌ی خود را به شکلی جذاب و سازمان‌یافته ارائه کنید و مخاطبان را تحت تأثیر قرار دهید.",
      link: "#",
      icon: "icon-user",
    },

    {
      id: 3,
      img: "https://mediax.harmonicweb.ir/landing/assets/img/pages/home-medical-clinic.jpg",
      title: "شرکتی پزشکی",
      content:
        "این قالب برای کلینیک‌ها و مطب‌های پزشکی طراحی شده و شامل امکانات متنوعی برای معرفی خدمات، پزشکان و نظرات بیماران است. با استفاده از این قالب، می‌توانید یک وب‌سایت حرفه‌ای و کاربرپسند برای کسب‌وکار پزشکی خود راه‌اندازی کنید.",
      link: "#",
      icon: "icon-heart-broken",
    },
    {
      id: 4,
      img: "https://wpshare.ir/zhaket/engitech-intro/Engitech_files/home-4.jpg",
      title: "شرکتی مهندسی",
      content:
        "این قالب برای شرکت‌های مهندسی طراحی شده و شامل بخش‌های مختلفی برای معرفی پروژه‌ها و خدمات است. این قالب به شما کمک می‌کند تا وب‌سایتی حرفه‌ای و مدرن برای شرکت مهندسی خود بسازید و به مشتریان خدمات خود را معرفی کنید.",
      link: "#",
      icon: "icon-office",
    },
    {
      id: 2,
      img: "https://files.rtl-theme.com/contents/post-112091/3bea7239d548d6d6cc166207c29905c831fd844cc51c6.png",
      title: "شخصی رزومه ای",
      content:
        "قالب‌های شخصی رزومه‌ای برای معرفی حرفه‌ای خود به کار می‌روند. این قالب‌ها به شما کمک می‌کنند تا به شیوه‌ای منظم و جذاب مهارت‌ها و تجربیات خود را به نمایش بگذارید و توجه کارفرمایان یا مشتریان بالقوه را جلب کنید.",
      link: "#",
      icon: "icon-user",
    },
  ];

  return (
    <div className="container-field flex justify-center flex-col items-center py-20 bg-cover bg-[#F7F7F7] portfolio-slider-section">
    <TopSectionsTitle toptext={'اندکی از'} maintext={'نمونه کارها'} linecolor={'red-500'} maincolor={'black'}/>
      <Swiper
      modules={[ Autoplay]}
        slidesPerView={3}
        centeredSlides={2}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          290: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          // when window width is >= 768px
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1500: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="Portfolio container"
      >
        {infoslider.map((item, index) => (
          <SwiperSlide key={item.id}>
            <SlideCard items={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <ViewMoreBtn text={'نمایش سایر نمونه کارها'}/>
    </div>
  );
}
