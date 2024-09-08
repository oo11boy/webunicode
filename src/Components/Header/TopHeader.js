"use client";

import React, { useState, useEffect } from "react";
import "@/app/icons.css";
import NavbarItems from "@/Components/Header/NavbarItems/NavbarItems";

import "./Header.css";
import ContactNavbar from "./ContactNavbar";
import ResoponsiveHeader from "./ResoponsiveHeader";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";

export default function TopHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [IsSticky,setIsSticky]=useState(false)
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1100);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <div className="navbar-header w-100"> */}
      <div className="flex w-full  text-center items-center justify-between">
        <div className="top-navbar lg:w-3/4 h-[50px]">
          {/* <div className="w-full"> */}
            <ContactNavbar />
          {/* </div> */}
          <div className="h-full w-full pt-1 m-auto flex justify-between items-center z-[2]">
            {isMobile || IsSticky ? <ResoponsiveHeader /> : <NavbarItems />}
 
          </div>
        </div>
        {/* <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-[#CFD2D5] absolute top-[-10px] z-1 right-[25px]"></div> */}
        <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-white absolute top-0  right-5 z-[1]">
          <SmallLogo skew={15} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
