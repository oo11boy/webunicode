"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HoverNav({size, isSticky, hiddenitem}) {
  const pathName = usePathname();
  
  const navChildren = [
    {
      title: "طراحی سایت فروشگاهی",
      icon: "icon-cart",
      to: 'store',
      param: '/store',
      id: 1,
    },
    {
      title: "طراحی سایت شرکتی",
      icon: "icon-office",
      to: 'company',
      param: '/company',
      id: 2,
    },
    {
      title: "طراحی سایت اختصاصی",
      icon: "icon-user-tie",
      to: 'resume',
      param: '/resume',
      id: 3,
    },
  ];
  return (
    <li class={`${hiddenitem && '!hidden'} relative group flex items-center gap-2 text-${size} xl:text-[17px] ${isSticky ? 'text-black' : ''}`}>
      طراحی سایت
      <ul class="absolute opacity-0 group-hover:opacity-100  text-black bg-white text-right top-10 right-0 mt-1 py-2 w-auto rounded-lg shadow-lg z-10 transition-opacity duration-400 ease-in">
        {navChildren.map((item) => {
          const isActive = (item.param === pathName)
          return (
          <li key={item.id} class={`px-4 py-2 whitespace-nowrap flex xl:text-[17px] justify-end`}>
            <Link href={item.to} class={`${isActive ? 'text-red-500' : ''}`}>
             <span class="pr-1">{item.title}</span>
             <span class={item.icon}></span>
            </Link>
          </li>
        )})}
      </ul>
      <span class="icon-circle-down opacity-80"></span>
    </li>
  );
}
