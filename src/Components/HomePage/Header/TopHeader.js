
import React from "react";
import "@/app/icons.css";
import SocialIcons from "@/Components/GeneralComponents/SocialIcons/SocialIcons";
import { SiteEmail, SitePhone } from "@/Components/GeneralComponents/Contact/Contact";
import NavbarItems from "@/Components/GeneralComponents/NavbarItems/NavbarItems";
import SmallLogo from "@/Components/GeneralComponents/SiteLogo/SiteLogo";
import './TopHeader.css'

export default function TopHeader() {
  return (
    <div>
      <div className="navbar-header w-100">
        <div className="flex justify-between">
          <div className="top-navbar  bg-[#1D2027] w-3/4 h-100">
            <div className=" h-full pl-[10%] pr-[5%]  m-auto flex justify-between items-center text-white">
              <SocialIcons />

              <div className="flex gap-3 justify-center items-center">
                <SiteEmail />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <SitePhone />
              </div>
            </div>
            <div className=" h-full w-100 pl-[10%] pr-[5%]  m-auto flex justify-between items-center text-white">
              <div className="w-2/12 z-10 text-center">
                <p className="bg-red-600 py-1   rounded-md">درخواست سایت</p>
              </div>
              <NavbarItems />

            </div>
          </div>
          <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-[#CFD2D5] absolute top-[-10px] z-1 right-[25px]"></div>
          <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-white absolute top-0  right-5 z-[1]">

            <SmallLogo />

          

          </div>
        </div>
      </div>
    </div>
  )
}
