import { useState, useEffect } from "react";
import "./MobileMenu.css";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";

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

  const navItems = [
    {
      title: "نمونه کارها",
      icon: "icon-briefcase",
      to: "1",
      id: 1,
    },
    {
      title: "فروشگاه",
      icon: "icon-cart",
      to: "2",
      id: 2,
    },
    {
      title: "طراحی سایت",
      icon: "icon-circle-left",
      to: "3",
      id: 3,
      items: [
        {
          title: "طراحی سایت فروشگاهی",
          icon: "icon-cart",
          to: "3,1",
          id: 4,
        },
        {
          title: "طراحی سایت شرکتی",
          icon: "icon-office",
          to: "3,2",
          id: 5,
        },
        {
          title: "طراحی سایت اختصاصی",
          icon: "icon-user-tie",
          to: "3,3",
          id: 6,
        },
      ],
    },
    {
      title: "خانه",
      icon: "icon-home3",
      to: "4",
      id: 7,
    },
    {
      title: "درباره‌ی ما",
      icon: "icon-info",
      to: "5",
      id: 8,
    },
  ];

  return (
    <>
      <div
        className={`bg-black opacity-50 transition-all bg-navbar absolute right-0 top-0 w-full h-full ${
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
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${openItemId === item.id ? "active" : ""}`}
            >
              <div
                onClick={() => handleToggle(item.id)}
                className={`nav-link ${openItemId === item.id ? "text-red-500" : ""}`}
              >
                <i
                  className={
                    openItemId === item.id && item.items
                      ? "icon-circle-down"
                      : item.icon
                  }
                ></i>
                {item.title}
              </div>
              {item.items && (
                <ul className="sub-menu">
                  {item.items.map((subItem) => (
                    <li key={subItem.id} className="sub-item">
                      <a href={subItem.to} className="sub-link">
                        <i className={subItem.icon}></i> {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
