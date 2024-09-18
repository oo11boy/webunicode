"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideCard from "./SlideCard/SlideCard";
import "./PortfolioSlider.css";
import TopSectionsTitle from "../UiComponents/TopSectionsTitle/TopSectionText";
import ViewMoreBtn from "../UiComponents/Buttons/ViewMoreBtn";
import { Autoplay } from "swiper/modules";
import { PortfolioDb } from "@/lib/PortfolioDb";

export default function PortfolioSlider({filteredCategory}) {
  const filterPortfolio = () => {
    if (filteredCategory === 'store') {
      return PortfolioDb.filter(item => item.category === 'store');
    } else if (filteredCategory === 'company') {
      return PortfolioDb.filter(item => item.category === 'company');
    } else if (filteredCategory === 'resume') {
      return PortfolioDb.filter(item => item.category === 'resume');
    } else {
      return PortfolioDb;
    }
  };

  const filteredPortfolio = filterPortfolio();

  return (
    <div className="container-field flex justify-center flex-col items-center py-20 bg-cover bg-[#F7F7F7] portfolio-slider-section">
    <TopSectionsTitle toptext={'اندکی از'} maintext={'نمونه کارها'} linecolor={'red'} maincolor={'black'}/>
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
          290: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="Portfolio container"
      >
        
        {filteredPortfolio.map((item, index) => (
          <SwiperSlide key={item.id}>
            <SlideCard items={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <ViewMoreBtn text={'نمایش سایر نمونه کارها'}/>
    </div>
  );
}
