"use client";

import React, { useState, useEffect } from "react";
import "@/app/icons.css";
import NavbarItems from "@/Components/Header/NavbarItems/NavbarItems";
import "./Header.css";
import ContactNavbar from "./ContactNavbar";
import ResoponsiveHeader from "./ResoponsiveHeader";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";
import { usePathname } from "next/navigation";


export default function TopHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [IsSticky, setIsSticky] = useState(false);
  const pathName = usePathname();
  
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
      <div className="flex w-full  text-center items-center justify-between">
        <div className="top-navbar lg:h-[50px]">
        {!isMobile && <ContactNavbar />}
          <div className="h-full w-full pt-1 m-auto flex justify-between items-center z-[2]">
            {isMobile || IsSticky ? <ResoponsiveHeader pathName={pathName}/> : <NavbarItems pathName={pathName}/>}
          </div>
        </div>
        <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-white absolute top-0  right-5 z-[1]">
          <a href="../">
            <SmallLogo skew={15} />
          </a>
        </div>
      </div>
    </>
  );
}
