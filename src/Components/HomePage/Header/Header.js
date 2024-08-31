import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";

import IntroSlider from "@/Components/GeneralComponents/Sliders/IntroSlider/IntroSlider";

export default function Header() {
  return (
    <div className="h-[100vh] relative flex flex-col header">
<TopHeader/>
<IntroSlider/>
    </div>
  );
}
