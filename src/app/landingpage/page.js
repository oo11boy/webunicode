import Comments from "@/Components/Comments/Comments";
import EnamadBadge from "@/Components/EnamadBadge";
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

export default function page() {
  return (
    <div dir="rtl" className="bg-[#E3EFFB] w-full snowd">

      <LandingHeader />
      <LandingTypeTheme/>
      <LandingPlans />
      <div className="w-[90%] m-auto flex-wrap mt-4 flex justify-between items-center gap-4">
         <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center"> 
       <TopSectionText toptext={'لیست'} linecolor={'red'}  maintext={'نمونه کارها'}/>
       <p className="my-4">
   چند قالب پیش‌فرض برای انتخاب شما آماده شده است. پس از انتخاب قالب مورد نظر، آن را برای شخصی‌سازی به ما اطلاع دهید.
</p>
         </div>
      <AllPortfolio status={false} />
      </div>
      <LandingForm />
      <LandingHowPay />
<FAQ/>
<Comments/>
<div 
  className="flex relative h-[50vh] justify-center items-center bg-cover bg-center " 
  style={{ backgroundImage: "url('/image/Slide5.jpg')" }}
>
  <div className="text-center yekan text-white">
    <h2 className="text-3xl font-bold mb-4">تماس با کارشناسان</h2>
    <p className="text-xl">۰۲۱۹۱۶۹۰۳۷۵</p>

  </div>
</div>
<Footer/>
<FloatingContact/>
      </div>

  );
}
