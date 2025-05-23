'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import SiteLogo from '../UiComponents/SiteLogo/SiteLogo';
import { navItems } from '@/lib/NavbarDb';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  // بهینه‌سازی رندر منو با useMemo
  const memoizedNavItems = useMemo(() => navItems, []);

  return (
    <header
      dir="rtl"
      lang="fa"
      className="bg-gradient-to-r from-white to-gray-50 shadow-lg sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="منوی اصلی">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" title="صفحه اصلی">
              <SiteLogo alt="لوگوی سایت" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:!block">
            <div className="mr-10 flex items-baseline space-x-1 space-x-reverse">
              {memoizedNavItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.to ? (
                    <Link
                      href={item.to}
                      className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 flex items-center"
                      title={item.title}
                    >
                      {item.icon && (
                        <span className="material-icons !text-sm ml-2 text-gray-500" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <span
                      className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 cursor-pointer flex items-center"
                    >
                      {item.icon && (
                        <span className="material-icons ml-2 text-gray-500" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.title}</span>
                    </span>
                  )}
                  {item.items && (
                    <div
                      className="absolute right-0 top-full mt-1 w-56 rounded-xl shadow-2xl bg-white ring-1 ring-gray-100 transform transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible invisible"
                      aria-hidden="true"
                    >
                      <div className="py-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.to}
                            className="px-5 py-3 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center"
                            title={subItem.title}
                          >
                            {subItem.icon && (
                              <span className="material-icons ml-2 text-gray-500" aria-hidden="true">
                                {subItem.icon}
                              </span>
                            )}
                            <span>{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:!block">
            <Link
              href="/ContactUs"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              title="تماس با ما"
              rel="nofollow"
            >
              ارتباط با ما
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-300"
              aria-label={isOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={isOpen}
            >
              <div className="relative w-7 h-7">
                <span
                  className={`absolute h-0.5 w-7 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-3.5' : 'top-2'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-7 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'top-3.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-7 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 top-3.5' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-screen w-64 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
          {memoizedNavItems.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center justify-between text-gray-800 hover:text-blue-600 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-blue-50 cursor-pointer"
                onClick={() => item.items && toggleSubmenu(item.id)}
                aria-expanded={activeSubmenu === item.id}
              >
                <div className="flex items-center">
                  {item.icon && (
                    <span className="material-icons ml-2 text-gray-500" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.to ? (
                    <Link href={item.to} title={item.title} onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </div>
                {item.items && (
                  <span className="material-icons" aria-hidden="true">
                    {activeSubmenu === item.id ? 'expand_less' : 'expand_more'}
                  </span>
                )}
              </div>
              {item.items && (
                <div
                  className={`pr-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSubmenu === item.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.to}
                      className="flex items-center text-gray-600 hover:text-blue-600 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-50"
                      title={subItem.title}
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.icon && (
                        <span className="material-icons ml-2 text-gray-500" aria-hidden="true">
                          {subItem.icon}
                        </span>
                      )}
                      <span>{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/ContactUs"
            className="!block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg text-base font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            title="تماس با ما"
            rel="nofollow"
            onClick={() => setIsOpen(false)}
          >
            ارتباط با ما
          </Link>
        </div>
      </div>
    </header>
  );
}