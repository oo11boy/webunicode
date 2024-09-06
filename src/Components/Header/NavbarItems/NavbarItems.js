import React from "react";
import NavLinks from "./NavLinks";
import HoverNav from "./HoverNav";
import "./NavbarItems.css";

export default function NavbarItems() {
  return (
    // <div className="bg-white z-10 w-full">
      <ul class="navmenu z-10 w-full h-full pl-[10%] pr-[5%] m-auto flex justify-between items-center bg-white text-black">
        <NavLinks title={"خانه"} to={"#"} />
        <NavLinks title={"درباره‌ی ما"} to={"#"} />
        <HoverNav />
        <NavLinks title={"فروشگاه"} to={"#"} />
        <NavLinks title={"نمونه کارها"} to={"#"} />
      </ul>
    // </div>
  );
}
