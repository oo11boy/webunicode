"use client";
import "./CategorySelection.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FlightIcon from '@mui/icons-material/Flight';
import PersonIcon from '@mui/icons-material/Person';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import FactoryIcon from '@mui/icons-material/Factory';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import TitleSection from "./TitleSection";
import ListCategories from "./ListCategories";

// import required modules

export default function CategorySelection() {
    const category = [
        { id: 1, title: "طراحی سایت شرکتی", link: "#", icon: <ApartmentIcon /> },
        { id: 2, title: "طراحی فروشگاهی", link: "#", icon: <StorefrontIcon /> },
        { id: 3, title: "طراحی سایت خبری", link: "#", icon: <NewspaperIcon /> },
        { id: 4, title: "طراحی سایت آموزشی", link: "#", icon: <SchoolIcon /> },
        { id: 5, title: "طراحی سایت پزشکی", link: "#", icon: <LocalHospitalIcon /> },
        { id: 6, title: "طراحی سایت املاک", link: "#", icon: <HomeWorkIcon /> },
        { id: 7, title: "طراحی سایت گردشگری", link: "#", icon: <FlightIcon /> },
        { id: 8, title: "طراحی سایت شخصی", link: "#", icon: <PersonIcon /> },
        { id: 9, title: "طراحی سایت هنری", link: "#", icon: <BrushIcon /> },
        { id: 10, title: "طراحی سایت خدماتی", link: "#", icon: <BuildIcon /> },
        { id: 11, title: "طراحی سایت صنعتی", link: "#", icon: <FactoryIcon /> },
      ];

  return (
    <div
      dir="rtl"
      className="w-[100%] categorysection  h-auto py-10 xl:flex justify-start items-center"
    >
        <TitleSection/>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        centeredSlides={1}
        speed={500}
        loop={true}
        spaceBetween={30}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        breakpoints={{
            298: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              770: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
          1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="categoryslider mt-8 xl:!mt-[unset] container"
      >

        {category.map((item) => (
          <SwiperSlide
            key={item.id}
          >
          <ListCategories item={item}/>
   
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
