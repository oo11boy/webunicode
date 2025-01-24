"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper styles for Pagination
import TopSectionsTitle from "../UiComponents/TopSectionsTitle/TopSectionText";
import { Autoplay, Pagination } from "swiper/modules";
import "./Comments.css";
import CardComment from "./CardComment";
import { infocomment } from "@/lib/DataFetching";

export default function Comments() {


  return (
    <>
    <div className="container-field relative flex justify-start flex-col items-center pt-20 bg-cover bg-[#1D2027] comment-section min-h-[80vh]  overflow-x-clip">
      <TopSectionsTitle
        toptext={"تعدادی از"}
        maintext={"نظرات مشتریان"}
        linecolor={"white"}
        maincolor={"white"}
      />
      <div className="w-full flex justify-center items-center">
        <Swiper
          modules={[Autoplay, Pagination]} // Add Pagination module
          slidesPerView={3}
          centeredSlides={2}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }} // Add pagination configuration
          breakpoints={{
        
          }}
          className="comments commentcontainer absolute  !pb-[10%] md:!pb-[5%] top-60 lg:top-80"
        >
          {infocomment.map((item) => (
            <SwiperSlide key={item.id}>
              <CardComment item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    <div className="h-[300px] w-full bg-[#F7F7F7]">sa</div>
    </>
  );
}
