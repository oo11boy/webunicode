import React from "react";

export default function PlanInfoCard({ checkout, infoorder }) {

  return (
    <div className="w-full lg:!w-3/4 h-full py-4">
      <h2 className="text-md lg:!text-2xl mb-8 font-bold text-gray-900">
        پکیج پیشنهادی با توجه به اطلاعات دریافتی:
      </h2>
      <ul className="flex plans flex-wrap sm:!flex-nowrap gap-8  justify-between items-center w-full">
        <li className="text-gray-700  border h-[100px] sm:!h-[140px] border-gray-200 bg-white w-5/12 md:!w-1/4 p-4 shadow-md flex flex-col items-center justify-center">
          <p>
            {checkout ? checkout.host : (infoorder.category == "store" ? 5 : 2)}
            گیگابایت
          </p>
          <p>هاست</p>
        </li>
        <li className="text-gray-700 border h-[100px] sm:!h-[140px] border-gray-200 bg-white w-5/12 md:!w-1/4 p-4 shadow-md flex flex-col items-center justify-center">
          <p>رایگان</p>
          <p>دامنه ir</p>
        </li>
        <li className="text-gray-700 border h-[100px] sm:!h-[140px] border-gray-200 bg-white  w-5/12 md:!w-1/4 p-4 shadow-md flex flex-col items-center justify-center">
          <p>رایگان</p>
          <p>ssl</p>
        </li>
        <li className="text-gray-700 border h-[100px] sm:!h-[140px] border-gray-200 bg-white w-5/12 md:!w-1/4 p-4 shadow-md flex flex-col items-center justify-center">
          <p>1 سال</p>
          <p>پشتیبانی</p>
        </li>
      </ul>
    </div>
  );
}
