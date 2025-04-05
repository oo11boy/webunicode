import AllPortfolio from "@/Components/AllPortfolio/AllPortfolio";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React from "react";


export async function generateMetadata() {
  return {
    title: "نمونه کارها",
    description:
      "اگر به دنبال نمونه کارهای شرکت طراحی سایت یونیکد هستید در اینجا نمونه کار ها را برای شما آورده ایم",

    author: "unicodewebdeisgn",
  };
}
export default function page() {
  return (
    <div>
      <Header />
      <div>

      </div>
      <AllPortfolio />
      <Footer />
    </div>
  );
}
