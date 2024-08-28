import React from 'react'
import '@/app/icons.css'
export default function TopHeader() {
  return (
    <div>
            <div className="navbar-header w-100">
        <div className="flex justify-between">
          <div className="top-navbar  bg-[#1D2027] w-3/4 h-100">
            <div className=" h-full pl-[10%] pr-[5%]  m-auto flex justify-between items-center text-white">
              <div className="flex gap-3 justify-center items-center">
                <a href="#">
                  <span class="icon-github"></span>
                </a>
                <a href="#">
                
                  <span class="icon-instagram"></span>
                </a>
                <a href="#">
                
                  <span class="icon-telegram"></span>
                </a>
                <a href="#">
                
                  <span class="icon-linkedin"></span>
                </a>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <p>info@unicodewebdesign.com</p>
                <span class="icon-envelop text-red-500  mb-[4px]"></span>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p>09354502369</p>
                <span class="icon-phone text-red-500 mb-[4px]"></span>
              </div>
            </div>
            <div className=" h-full w-100 pl-[10%] pr-[5%]  m-auto flex justify-between items-center text-white">
              <div className="w-2/12 text-center">
                <p className="bg-red-600 py-1  rounded-md">درخواست سایت</p>
              </div>
              <ul class="navmenu w-10/12 h-full pl-[10%] pr-[5%] m-auto flex justify-between items-center text-white">
    <li class="relative group">
        خانه
    </li>
    <li class="relative group">
        درباره ما
    </li>
    <li class="relative group flex items-center gap-2">
   
        طراحی سایت
        <ul class="absolute opacity-0 group-hover:opacity-100  text-black bg-white text-right top-10 right-0 mt-1 py-2 w-48 rounded-lg shadow-lg z-10 transition-opacity duration-400 ease-in">
            <li class="px-4 py-2 ">طراحی سایت شرکتی</li>
            <li class="px-4 py-2 ">طراحی سایت فروشگاهی</li>
            <li class="px-4 py-2 ">طراحی سایت فروشگاهی</li>
        </ul>
        <span class="icon-circle-down opacity-80"></span>
    </li>
    <li class="relative group">
        فروشگاه
    </li>
    <li class="relative group">
        نمونه کارها
    </li>
</ul>


            </div>
          </div>
          <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-[#CFD2D5] absolute top-[-10px] z-1 right-[25px]"></div>
          <div className="w-1/4 logosite  pr-[10%] text-right h-[100px] items-center flex justify-end bg-white absolute top-0  right-5 z-[1]">
            <img
              className="skew-x-[15deg] h-[40px]"
              src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/logo.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
