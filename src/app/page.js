import Header from "@/Components/Header/Header";
import Services from "@/Components/Services/Services";
import React from "react";
import "./fonts.css";
import PortfolioSlider from "@/Components/PortfolioSlider/PortfolioSlider";
import FAQ from "@/Components/FAQ/FAQ";
import Comments from "@/Components/Comments/Comments";
import CategorySelection from "@/Components/CategorySelection/CategorySelection";
import ArticlesSection from "@/Components/IntroSlider/ArticlesSection/ArticlesSection";
export default function page() {
  return (
    <>
      <Header />
     
      <Services />
     
      <PortfolioSlider />
      <CategorySelection/>
      <FAQ />
      <Comments />
      <ArticlesSection/>
    </>
  );
}
