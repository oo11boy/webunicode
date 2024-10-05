import { useState, useEffect } from "react";
import "./MobileMenu.css";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";
import MobileNavLinks from "./NavbarItems/MobileNavLinks";

export default function MobileMenu({ close, status }) {
  const [openItemId, setOpenItemId] = useState(null);
  const [showNavbar, setShowNavbar] = useState(status);

  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const handleClose = () => {
    setShowNavbar(false);
    setTimeout(() => {
      close();
    }, 500);
  };

  useEffect(() => {
    // جلوگیری از اسکرول صفحه وقتی منو باز است
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // بازگشت به حالت پیش‌فرض هنگام خروج از کامپوننت
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNavbar]);

  const navItems = [
    {
      title: "خانه",
      icon: "icon-home3",
      to: "../",
      param: '/',
      id: 7,
    },
    {
      title: "طراحی سایت",
      icon: "icon-circle-left",
      id: 3,
      items: [
        {
          title: "طراحی سایت فروشگاهی",
          icon: "icon-cart",
          to: "../store",
          param: '/store',
          id: 4,
        },
        {
          title: "طراحی سایت شرکتی",
          icon: "icon-office",
          to: "../company",
          param: '/company',
          id: 5,
        },
        {
          title: "طراحی سایت رزومه ای",
          icon: "icon-user-tie",
          to: "../resume",
          param: '/resume',
          id: 6,
        },
      ],
    },
 
    {
      title: "نمونه کارها",
      icon: "icon-briefcase",
      to: "../listportfolio",
      param: '/listportfolio',
      id: 1,
    },
    {
      title: "وبلاگ",
      icon: "icon-cart",
      to: "../blogs",
      param: '/blogs',
      id: 2,
    },

    {
      title: "درباره‌ی ما",
      icon: "icon-info",
      to: "../AboutUs",
      param: '/AboutUs',
      id: 8,
    },
    {
      title: "ارتباط با ما",
      icon: "icon-info",
      to: "../ContactUs",
      param: '/ContactUs',
      id: 9,
    },
  ];
  
  

  return (
    <>
      <div
        className={`bg-black opacity-50 transition-all bg-navbar absolute right-0 top-0 w-full h-[100vh] ${
          showNavbar ? "visible" : "invisible"
        }`}
      ></div>
      <div
        className={`navbar-collapse sm:w-[60%] lg-[50%] w-[90%] ${
          showNavbar ? "sidein" : "sideout"
        }`}
        id="navbar-menu"
      >
        <div className="flex justify-between mb-6">
          <button
            onClick={handleClose}
            type="button"
            className="icon-cancel-circle text-xl hover:text-red-500"
          ></button>
          <a href="/">
          <SmallLogo skew={0}/>
          </a>
        </div>
        <MobileNavLinks navItems={navItems} openItemId={openItemId} handleToggle={handleToggle}/>
      </div>
    </>
  );
}
