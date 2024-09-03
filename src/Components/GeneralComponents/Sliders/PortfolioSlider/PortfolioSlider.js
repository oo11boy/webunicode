"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import SlideCard from './SlideCard/SlideCard';
import './PortfolioSlider.css'
export default function PortfolioSlider() {
  return (
    <div className='container-field py-44 bg-cover bg-[#F7F7F7] portfolio-slider-section'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
