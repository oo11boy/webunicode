"use client"

import React, { useEffect } from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import IntroSlider from "@/Components/IntroSlider/IntroSlider";
export default function Header() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log(currentPath);
  }, [])

  return (
    <div className="h-auto relative flex flex-col header">
<TopHeader/>
<IntroSlider/>
    </div>
  );
}
