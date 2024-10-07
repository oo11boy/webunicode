import React from "react";
import NavLinks from "./NavLinks";
import HoverNav from "./HoverNav";
import "./NavbarItems.css";

export default function NavbarItems({ footerview, hiddenitem, pathName }) {

  return (
    <ul
      class={`${
        footerview
          ? "space-y-4"
          : "navmenu z-10 w-full h-full pl-[10%] pr-[5%] m-auto flex flex-row-reverse justify-between items-center bg-white text-black"
      } `}
    >
      <NavLinks title={"خانه"} to={"../"} param='/' pathName={pathName}/>
      <HoverNav hiddenitem={hiddenitem} pathName={pathName}/>
      <NavLinks title={"نمونه کارها"} to={"../listportfolio"} param='/listportfolio' pathName={pathName}/>
      <NavLinks title={"وبلاگ"} to={"../blogs"} param='/blogs' pathName={pathName}/>
      <NavLinks title={"ارتباط با ما"} to={"../ContactUs"} param='/ContactUs' pathName={pathName}/>
      <NavLinks title={"درباره‌ی ما"} to={"../AboutUs"} param='/AboutUs' pathName={pathName}/>
    </ul>
  );
}
