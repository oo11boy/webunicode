"use client";
import Comments from "@/Components/Comments/Comments";
import FAQ from "@/Components/FAQ/FAQ";
import Footer from "@/Components/Footer/Footer";
import ResoponsiveHeader from "@/Components/Header/ResoponsiveHeader";
import PortfolioSlider from "@/Components/PortfolioSlider/PortfolioSlider";
import Feature from "@/Components/SinglePageComponents/Feature/Feature";
import Poster from "@/Components/SinglePageComponents/Poster/Poster";
import WhyUsSinglePage from "@/Components/SinglePageComponents/WhyUsSinglePage/WhyUsSinglePage";
import WhyUs from "@/Components/WhyUs/WhyUs";
import { notFound } from "next/navigation";

import React from "react";

export default function page({ params }) {
  
  const { singlepage } = params;
  const validPages = ['store', 'company', 'resume'];

  if (!validPages.includes(singlepage)) {
    return notFound();
  }
  return (
    <div>
      <ResoponsiveHeader />
      <Poster singlepageid={singlepage}/>
      <WhyUs />
      <WhyUsSinglePage />
      <Feature singlepageid={singlepage}/>
      <PortfolioSlider singlepageid={singlepage} />
      <FAQ singlepageid={singlepage} />
      <Comments />
      <Footer />
    </div>
  );
}
