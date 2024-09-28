import Header from "@/Components/Header/Header";
import Services from "@/Components/Services/Services";
import React from "react";
import "./fonts.css";
import PortfolioSlider from "@/Components/PortfolioSlider/PortfolioSlider";
import FAQ from "@/Components/FAQ/FAQ";
import Comments from "@/Components/Comments/Comments";
import CategorySelection from "@/Components/CategorySelection/CategorySelection";
import Footer from "@/Components/Footer/Footer";
import WhyUs from "@/Components/WhyUs/WhyUs";
import ArticlesSection from "@/Components/ArticlesSection/ArticlesSection";

export const metadata = {
  title: "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
  description:   "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",

    keywords: "طراحی سایت ارزان ، خرید سایت ارزان ، طراحی سایت شرکتی ارزان ، طراحی سایت فروشگاهی ارزان ، طراحی سایت شخصی رزومه ای ارزان ، سفارش طراحی سایت ارزان ، خرید سایت فروشگاهی",
    author: "unicodewebdeisgn",
    openGraph: {
      title: "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
      description:  "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",
      image: "/image/logo.webp",
      url:"https://unicodewebdesign.com",
      locale:"fa_IR"

    },
    twitter: {
    
      title:  "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
      description: "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",
      image: "../img/logo.webp",
    },
  };


export default async function Page() {


  return (
    <>
      <Header />
      <WhyUs />
      <Services />
      <PortfolioSlider />
      <CategorySelection />
      <FAQ />
      <Comments />
      <ArticlesSection />
  
      <Footer />
    </>
  );
}
