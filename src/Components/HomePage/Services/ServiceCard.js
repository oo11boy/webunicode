import React from "react";
export default function ServiceCard({ item }) {
  return (
    <div
      key={item.id}
      class=" w-full  md:w-[50%] feature-style-one lg:w-full wow fadeInUp mb-10"
    >
      <div class="flex flex-col lg:flex-row items-center md:items-start justify-start md:flex-nowrap flex-wrap ">
        <div class="icon relative text-3xl md:ml-10 mb-8 lg:mb-0  text-white">
          <img
            class="w-[100px] max-w-[unset]"
            src="/image/feature_icon.png"
            alt=""
          />
          <span class="absolute top-5 left-10">{item.icon}</span>
        </div>
        <div class="info text-center md:text-right ml-4">
          <h3 class="text-xl flex flex-col justify-center items-center md:flex-none md:items-start lg:text-2xl h-[25px] lg:h-[unset] font-bold text-black md:text-white lg:text-gray-600 mb-8 ">
            {item.title}
          </h3>
          <p class="text-gray-600 lg:text-gray-600  md:text-[#dedede] lg:text-lg">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}
