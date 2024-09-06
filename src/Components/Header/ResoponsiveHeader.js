import HamburgerMenu from "@/Components/Header/HamburgerMenu/HamburgerMenu";
import HoverNav from "@/Components/Header/NavbarItems/HoverNav";
import NavLinks from "@/Components/Header/NavbarItems/NavLinks";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";

export default function ResoponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(e => !e)
  }

  const showMobileMenu = isOpen ? <MobileMenu close={toggleMenu} status={isOpen}/> : null;
  return (
    <>
      <nav class="flex z-10 items-center justify-between w-full mt-5 bg-white shadow-md">
        <div class="mx-auto p-4 flex w-full justify-between items-center">
          <div class="hidden md:flex items-center pl-[9%]">
            <a
              href="/contact-us"
              class="text-sm font-medium text-white bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900"
            >
              سوالی دارید؟
            </a>
          </div>

          <div class="hidden md:flex items-center m-auto" id="navbar-menu">
            <ul class="flex flex-row space-x-8 ml-auto items-center">
              <NavLinks title={"خانه"} to={"#"} size={'xs'}/>
              <NavLinks title={"درباره‌ی ما"} to={"#"} size={'xs'}/>
              <HoverNav size={'xs'}/>
              <NavLinks title={"فروشگاه"} to={"#"} size={'xs'}/>
              <NavLinks title={"نمونه کارها"} to={"#"} size={'xs'}/>
            </ul>
          </div>

          <div class="flex items-center m-auto pr-[4%]">
            <a class="ml-4" href="/">
            <SmallLogo skew={0}/>
            </a>
          </div>
          <HamburgerMenu toggleMenu={toggleMenu}/>
        </div>
        {showMobileMenu}
      </nav>
    </>
  );
}
