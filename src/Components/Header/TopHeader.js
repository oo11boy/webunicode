"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SmallLogo from "../UiComponents/SiteLogo/SiteLogo";

const TopHeader = ({ pathName }) => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setNavIsOpened((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

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
      <div
        aria-hidden={true}
        onClick={closeNavbar}
        className={`fixed bg-white inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />
      <nav
        className={`flex z-[99] items-center justify-between w-full bg-transparent fixed top-0 left-0 shadow-md ${
          isSticky ? "sticky-header bg-white dark:bg-gray-950" : "bg-white"
        }`}
        dir="rtl"
      >
        <div className="mx-auto p-4 flex w-full justify-between items-center lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
          {/* لوگو */}
          <div className="flex items-center pr-[4%] lg:pr-[unset]">
          <SmallLogo  />
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center m-auto" id="navbar-menu">
            <ul
              className={`flex flex-row-reverse gap-x-8 ml-auto items-center ${
                isSticky ? "text-black" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className={`relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600 ${
                    pathName === "/" ? "text-pink-600" : ""
                  }`}
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutUs"
                  className={`relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600 ${
                    pathName === "/AboutUs" ? "text-pink-600" : ""
                  }`}
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/listportfolio"
                  className={`relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600 ${
                    pathName === "/listportfolio" ? "text-pink-600" : ""
                  }`}
                >
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600 ${
                    pathName === "/blogs" ? "text-pink-600" : ""
                  }`}
                >
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactUs"
                  className={`relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600 ${
                    pathName === "/ContactUs" ? "text-pink-600" : ""
                  }`}
                >
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* دکمه تماس در دسکتاپ */}
          <div className="hidden md:flex items-center pl-[9%]">
            <Link
              href="/ContactUs"
              className="text-sm font-medium text-white bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900"
            >
              سوالی دارید؟
            </Link>
          </div>

          {/* منوی همبرگری */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleNavbar}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""
                }`}
              />
              <span
                aria-hidden={true}
                className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {navIsOpened && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 py-8 px-5 sm:px-10 md:px-12">
            <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300">
              <li>
                <Link href="/" onClick={closeNavbar} className="hover:text-pink-600">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/AboutUs" onClick={closeNavbar} className="hover:text-pink-600">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/listportfolio" onClick={closeNavbar} className="hover:text-pink-600">
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={closeNavbar} className="hover:text-pink-600">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link href="/ContactUs" onClick={closeNavbar} className="hover:text-pink-600">
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default TopHeader;