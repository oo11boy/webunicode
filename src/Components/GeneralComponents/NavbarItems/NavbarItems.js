import React from 'react'

export default function NavbarItems() {
  return (
    <ul class="navmenu z-10 w-10/12 h-full pl-[10%] pr-[5%] m-auto flex justify-between items-center text-black">
    <li class="relative group">خانه</li>
    <li class="relative group">درباره ما</li>
    <li class="relative group flex items-center gap-2">
      طراحی سایت
      <ul class="absolute opacity-0 group-hover:opacity-100  text-black bg-white text-right top-10 right-0 mt-1 py-2 w-48 rounded-lg shadow-lg z-10 transition-opacity duration-400 ease-in">
        <li class="px-4 py-2 ">طراحی سایت شرکتی</li>
        <li class="px-4 py-2 ">طراحی سایت فروشگاهی</li>
        <li class="px-4 py-2 ">طراحی سایت فروشگاهی</li>
      </ul>
      <span class="icon-circle-down opacity-80"></span>
    </li>
    <li class="relative group">فروشگاه</li>
    <li class="relative group">نمونه کارها</li>
  </ul>
  )
}
