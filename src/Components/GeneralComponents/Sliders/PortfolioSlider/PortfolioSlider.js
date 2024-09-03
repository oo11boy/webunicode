"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideCard from './SlideCard/SlideCard';
import './PortfolioSlider.css'

export default function PortfolioSlider() {
  return (
    <div className='container-field py-44 bg-cover bg-[#F7F7F7] portfolio-slider-section'>
      <Swiper
        slidesPerView={3}
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
        <SwiperSlide><SlideCard/></SwiperSlide>
        <SwiperSlide><SlideCard/></SwiperSlide>
        <SwiperSlide><SlideCard/></SwiperSlide>
        <SwiperSlide><SlideCard/></SwiperSlide>
      </Swiper>
    </div>
  );
}
