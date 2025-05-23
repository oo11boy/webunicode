import React from 'react';

export default function ServiceCard({ item }) {
  return (
    <li
      className="w-full shadow rounded-xl mt-10 md:mt-0 border-red-200 md:border-none md:shadow-none my-4 border-2 p-4 md:p-0 md:w-[50%] lg:w-full feature-style-one"
      aria-label={item.title}
    >
      <div className="flex flex-col lg:flex-row items-center md:items-start justify-start md:flex-nowrap flex-wrap">
        <div className="icon pb-6 md:pb-0 relative text-3xl md:ml-10 mb-8 lg:mb-0 text-white">
          <div className="absolute -top-14 -left-14 md:static">
            <img
              className="w-[100px]"
              src="/image/feature_icon.png"
              alt={`آیکون تزئینی برای ${item.title}`}
              loading="lazy"
            />
            <span className="absolute top-5 left-10">{item.icon}</span>
          </div>
        </div>
        <div className="info text-center md:text-right md:ml-4">
          <h3 className="text-xl lg:text-2xl font-bold text-black md:text-white lg:text-gray-600 mb-8">
            {item.title}
          </h3>
          <p className="text-gray-600 lg:text-lg md:text-[#dedede]">
            {item.content}
          </p>
        </div>
      </div>
    </li>
  );
}