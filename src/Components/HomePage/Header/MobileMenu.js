import NavLinks from "@/Components/GeneralComponents/NavbarItems/NavLinks";
import "./MobileMenu.css";
import { useState } from "react";

export default function MobileMenu({ close }) {
    const [openItemId, setOpenItemId] = useState(null)

    const handleToggle = (id) => {
      setOpenItemId(prevId => (prevId === id ? null : id));
    };

    const navItems = [
        {
          title: "نمونه کارها",
          icon: "icon-briefcase",
          to: '1',
          id: 1,
        },
        {
          title: "فروشگاه",
          icon: "icon-cart",
          to: '2',
          id: 2,
        },
        {
          title: "طراحی سایت",
          icon: "icon-circle-left",
          to: '3',
          id: 3,
          items: [
            {
                title: "طراحی سایت فروشگاهی",
                icon: "icon-cart",
                to: '3,1',
                id: 4,
              },
              {
                title: "طراحی سایت شرکتی",
                icon: "icon-office",
                to: '3,2',
                id: 5,
              },
              {
                title: "طراحی سایت اختصاصی",
                icon: "icon-user-tie",
                to: '3,3',
                id: 6,
              },
          ],
        },
        {
            title: "خانه",
            icon: "icon-home3",
            to: '4',
            id: 7,
          },
          {
            title: "درباره‌ی ما",
            icon: "icon-info",
            to: '5',
            id: 8,
          },
      ];
  return (
    <div class="navbar-collapse" id="navbar-menu">
      <div class="flex justify-between mb-6">
        <button
          onClick={close}
          type="button"
          class="icon-cancel-circle text-xl hover:text-red-500"
        ></button>

        <a href="/">
          <img
            className="skew-x-[15deg] h-[40px]"
            src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/logo.png"
            alt=""
          />
        </a>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <div
              onClick={() => handleToggle(item.id)}
              className={`nav-link ${openItemId === item.id ? 'text-red-500' : ''}`}
            >
              <i className={openItemId === item.id && item.items ? "icon-circle-down" : item.icon}></i>
              {item.title}
            </div>
            {item.items && openItemId === item.id && (
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
  );
}
