import AllPortfolio from "@/Components/AllPortfolio/AllPortfolio";
import Footer from "@/Components/Footer/Footer";
import TopHeader from "@/Components/Header/TopHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <TopHeader />
      <AllPortfolio />
      <Footer />
    </div>
  );
}
