"use client"
import { useState, useEffect } from "react";
import HamburgerMenu from "@/Components/Header/HamburgerMenu/HamburgerMenu";
import HoverNav from "@/Components/Header/NavbarItems/HoverNav";
import NavLinks from "@/Components/Header/NavbarItems/NavLinks";
import MobileMenu from "./MobileMenu";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";

export default function ResoponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen((e) => !e);
  };

  const showMobileMenu = isOpen ? <MobileMenu close={toggleMenu} status={isOpen}/> : null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
       <nav className={`flex z-[99] items-center justify-between w-full bg-transparent fixed top-0 left-0 shadow-md ${isSticky ? 'sticky-header' : ''}`}>
        <div className="mx-auto p-4 flex w-full justify-between items-center">
          <div className="hidden md:flex items-center pl-[9%]">
            <a
              href="/ContactUs"
              className="text-sm font-medium text-white bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900"
            >
              سوالی دارید؟
            </a>
          </div>

          <div className="hidden md:flex items-center m-auto" id="navbar-menu">
            <ul  className={`flex flex-row-reverse gap-x-8 ml-auto items-center ${isSticky ? 'text-black' : ''}`}>
              <NavLinks isSticky={isSticky} title={"خانه"} to={"../"} size={"sm"} />
              <HoverNav isSticky={isSticky} size={"xs"} />
              <NavLinks isSticky={isSticky} title={"نمونه کارها"} to={"../listportfolio"} size={"sm"} />
              <NavLinks isSticky={isSticky} title={"وبلاگ"} to={"../blogs"} size={"sm"} />
            
              <NavLinks isSticky={isSticky} title={"ارتباط با ما"} to={"../ContactUs"} size={"sm"} />
              <NavLinks isSticky={isSticky} title={"درباره‌ی ما"} to={"../AboutUs"} size={"sm"} />
            </ul>
          </div>

          <div className="flex items-center m-auto pr-[4%] lg:pr-[unset]">
            <a className="ml-4" href="/">
              <SmallLogo skew={0} />
            </a>
          </div>
          <HamburgerMenu toggleMenu={toggleMenu} />
        </div>
        {showMobileMenu}
      </nav>
    </>
  );
}
