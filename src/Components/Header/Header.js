import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import IntroSlider from "@/Components/IntroSlider/IntroSlider";
export default function Header() {
  return (
    <div className="h-auto relative flex flex-col header">
<TopHeader/>
<IntroSlider/>
    </div>
  );
}
