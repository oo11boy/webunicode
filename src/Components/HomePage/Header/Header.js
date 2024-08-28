import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
export default function Header() {
  return (
    <div className="h-[100vh] relative flex flex-col header">
  <TopHeader/>
<div className="slideheader">
    <h3 className="text-5xl">
    طراحی سایت ارزان با یونیکد
    </h3>
    <p>
    یونیکد مرجع طراحی انواع سایت های مختلف با قیمتی ارزان و کیفیتی متاسب میتواند شما را در بهبود کسب و کارتان همراهی نماید
    </p>
</div>
    </div>
  );
}
