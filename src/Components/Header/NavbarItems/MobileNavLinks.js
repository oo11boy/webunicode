import { usePathname } from 'next/navigation'
import React from 'react'

export default function MobileNavLinks({ navItems, openItemId, handleToggle }) {
  const pathName = usePathname();
  
  return (
    <ul className="nav-list">
      {navItems.map((item) => {
        const isActive = item.param === pathName;
        const isOpen = openItemId === item.id;
        
        return (
          <li
            key={item.id}
            className={`nav-item ${isOpen ? "active" : ""}`}
          >
            <a
              onClick={() => handleToggle(item.id)}
              className={`nav-link ${isActive ? "text-red-500" : ""}`}
              href={item.to}
            >
              <i
                className={isOpen ? "icon-circle-down" : item.icon}
              ></i>
              {item.title}
            </a>

            {item.items && isOpen && (
              <ul className="sub-menu">
                {item.items.map((subItem) => {
                  const isActiveSubMenu = subItem.param === pathName;
                  
                  return (
                    <li
                      key={subItem.id}
                      className={`sub-item ${
                        isActiveSubMenu ? "text-red-500" : ""
                      }`}
                    >
                      <a href={subItem.to} className={`sub-link ${
                        isActiveSubMenu ? "text-red-500" : ""
                      }`}>
                        <i className={subItem.icon}></i> {subItem.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

  
