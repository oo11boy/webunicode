import Comments from "@/Components/Comments/Comments";
import FAQ from "@/Components/FAQ/FAQ";
import "../fonts.css";

import Footer from "@/Components/Footer/Footer";
import LandingForm from "@/Components/LandingPageComponents/LandingForm";
import LandingHeader from "@/Components/LandingPageComponents/LandingHeader";
import LandingHowPay from "@/Components/LandingPageComponents/LandingHowPay";
import LandingPlans from "@/Components/LandingPageComponents/LandingPlans";
import LandingTypeTheme from "@/Components/LandingPageComponents/LandingTypeTheme";
import TopSectionText from "@/Components/UiComponents/TopSectionsTitle/TopSectionText";
import React from "react";
import FloatingContact from "@/Components/LandingPageComponents/FloatingContact";
import AllPortfolio from "@/Components/AllPortfolio/AllPortfolio";

export const metadata = {
  title: "جشنواره زمستانه طراحی سایت – 50 درصد تخفیف ویژه",
  description:
    "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",

  keywords:
    "طراحی سایت ارزان ، خرید سایت ارزان ، طراحی سایت شرکتی ارزان ، طراحی سایت فروشگاهی ارزان ، طراحی سایت شخصی رزومه ای ارزان ، سفارش طراحی سایت ارزان ، خرید سایت فروشگاهی",
  author: "unicodewebdeisgn",
  openGraph: {
    title: "جشنواره زمستانه طراحی سایت – 50 درصد تخفیف ویژه",
    description:
      "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",
    image: "/image/logo.webp",
    url: "https://unicodewebdesign.com",
    locale: "fa_IR",
  },
  twitter: {
    title: "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
    description:
      "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",
    image: "../img/logo.webp",
  },
};

export default function page() {
  return (
    <div dir="rtl" className="bg-[#E3EFFB] w-full snowd">
      <LandingHeader />
      <LandingTypeTheme />
      <LandingPlans />
      <div style={{direction:"rtl"}} className="w-[90%] m-auto flex-wrap mt-4 flex justify-between items-center gap-4">
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center">
          <TopSectionText
            toptext={"لیست"}
            linecolor={"red"}
            maintext={"نمونه کارها"}
          />
          <p className="my-4">
            چند قالب پیش‌فرض برای انتخاب شما آماده شده است. پس از انتخاب قالب
            مورد نظر، آن را برای شخصی‌سازی به ما اطلاع دهید.
          </p>
        </div>
        <AllPortfolio status={false} />
      </div>
      <LandingForm />
      <LandingHowPay />
      <FAQ />
      <Comments />
      <div
        className="flex relative h-[50vh] justify-center items-center bg-cover bg-center "
        style={{ backgroundImage: "url('/image/Slide5.jpg')" }}
      >
        <div className="text-center yekan text-white">
          <h2 className="text-3xl font-bold mb-4">تماس با کارشناسان</h2>
          <p className="text-xl">۰۹۳۳۲۸۸۴۷۰۰</p>
        </div>
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
}
