import HamburgerMenu from "@/Components/GeneralComponents/HamburgerMenu/HamburgerMenu";
import HoverNav from "@/Components/GeneralComponents/NavbarItems/HoverNav";
import NavLinks from "@/Components/GeneralComponents/NavbarItems/NavLinks";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function ResoponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(e => !e)
  }

  const showMobileMenu = isOpen ? <MobileMenu close={toggleMenu}/> : null;
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
              <img
                className="skew-x-[15deg] h-[40px]"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/logo.png"
                alt=""
              />
            </a>
          </div>
          <HamburgerMenu toggleMenu={toggleMenu}/>
        </div>
        {showMobileMenu}
      </nav>
    </>
  );
}
