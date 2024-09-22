import React from "react";
import NavLinks from "./NavLinks";
import HoverNav from "./HoverNav";
import "./NavbarItems.css";

export default function NavbarItems({footerview,hiddenitem}) {
  return (
    // <div className="bg-white z-10 w-full">
      <ul class={`${footerview ? 'space-y-4' : 'navmenu z-10 w-full h-full pl-[10%] pr-[5%] m-auto flex flex-row-reverse justify-between items-center bg-white text-black'} `}>
        <NavLinks title={"خانه"} to={"../"}  />
        <HoverNav hiddenitem={hiddenitem} />
        <NavLinks title={"نمونه کارها"} to={"../listportfolio"} />
        <NavLinks title={"ارتباط با ما"} to={"../ContactUs"} />
        <NavLinks title={"درباره‌ی ما"} to={"#"} />
         </ul>
    // </div>
  );
}
