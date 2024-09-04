import React from "react";
export default function ServiceCard({ item }) {
  return (
    <div
      key={item.id}
      class=" w-full shadow rounded-xl mt-10 md:mt-auto border-red-200 md:border-none md:shadow-none my-4 border-2 p-4 md:w-[50%] feature-style-one lg:w-full wow fadeInUp mb-10"
    >
      <div class="flex flex-col lg:flex-row items-center md:items-start justify-start md:flex-nowrap flex-wrap ">
       
        <div class="icon pb-6 md:pb-auto relative text-3xl md:ml-10 mb-8 lg:mb-0  text-white">
       <div className="absolute -top-14 -left-14 md:static">
          <img
            class="w-[100px] max-w-[unset]"
            src="/image/feature_icon.png"
            alt=""
          />
          <span class="absolute top-5 left-10">{item.icon}</span>
       
          </div>
           </div>
        <div class="info text-center md:text-right md:ml-4">
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
