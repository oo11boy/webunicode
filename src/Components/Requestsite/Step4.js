import React, { useState } from "react";

export default function Step4({ step, setStep }) {
  const [domainNeeded, setDomainNeeded] = useState(false);
  const [extraHosting, setExtraHosting] = useState(0);

  const userData = {
    name: "علی",
    email: "ali@example.com",
    phone: "09123456789",
    siteType: "شرکتی",
  };

  return (
    <div className="w-[95%] h-[80vh] py-2 md:py-[unset] overflow-y-auto mx-auto">
      <div className="flex flex-col-reverse sm:!flex-row sm:!h-[180px]  mt-6 gap-x-4 justify-center items-start w-full">
        <div className="w-full sm:!w-3/4 h-full p-4 bg-gray-100 rounded-xl shadow-md">
          <ul className="space-y-2 mt-2">
            <li className="text-gray-700">
              <span className="font-medium">نام:</span> {userData.name}
            </li>
            <li className="text-gray-700">
              <span className="font-medium">ایمیل:</span> {userData.email}
            </li>
            <li className="text-gray-700">
              <span className="font-medium">شماره تلفن:</span> {userData.phone}
            </li>
            <li className="text-gray-700">
              <span className="font-medium">نوع سایت درخواستی:</span>{" "}
              {userData.siteType}
            </li>
          </ul>
        </div>

        <div className="h-full w-[95%] m-auto sm:!m-[unset] sm:!w-1/3">
          <a className="image-container !m-auto !max-w-full !h-full">
            <img

              src="https://ghaleblake.ir/landing/wp-content/uploads/2022/09/savis-4.jpeg"
              className="portfolio-image h-full object-cover"
              alt="Portfolio"
            />
            <button className="hover-eye-button text-white text-sm hover:text-black hover:bg-white transition-all">
              دیدن
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:!h-[220px] mt-6 gap-x-4 justify-center items-start w-full">
        <div className="w-full lg:!w-3/4 h-full py-4">
          <h2 className="text-md lg:!text-2xl mb-8 font-bold text-gray-900">
            پکیج پیشنهادی با توجه به اطلاعات دریافتی:
          </h2>
          <ul className="flex  flex-wrap sm:!flex-nowrap gap-8  justify-between items-center w-full">
            <li className="text-gray-700  border h-[100px] sm:!h-[140px] border-gray-200 bg-white w-5/12 md:!w-1/4 p-4 shadow-md flex flex-col items-center justify-center">
              <p>5 گیگابایت</p>
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

        <div className="w-full lg:!w-1/3 h-full p-4 bg-white rounded-xl shadow-lg border border-gray-200">
          {/* دامنه */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              آیا دامنه .com می‌خواهید؟
            </label>
            <div className="flex space-x-4 mt-2">
              <button
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  domainNeeded
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setDomainNeeded(true)}
              >
                بله
              </button>
              <button
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  !domainNeeded
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setDomainNeeded(false)}
              >
                خیر
              </button>
            </div>
          </div>

          {/* فضای هاست */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              فضای هاست اضافه می‌خواهید؟
            </label>
            <div className="flex text-[10px] sm:text-sm mt-2">
              <button
                className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                  extraHosting === 5
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setExtraHosting(5)}
              >
                5 گیگابایت
              </button>
              <button
                className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                  extraHosting === 10
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setExtraHosting(10)}
              >
                10 گیگابایت
              </button>
              <button
                className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                  extraHosting === 0
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setExtraHosting(0)}
              >
                نمیخواهم
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:!flex-row h-auto lg:!h-[60px] mt-6 gap-x-4 justify-center items-start w-full">
        <div className="w-full mb-4 lg:!mb-[unset] lg:!w-3/4 h-full flex justify-between items-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-sm md:!text-lg">هزینه تقریبی برای این سفارش:</h2>
          <p  className="text-sm md:!text-lg">6,000,000 تومان</p>
        </div>

        <div className="w-full lg:!w-1/3 h-full overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200">
          <button className="btnnext p-4 lg:!p-[unset] text-xl w-full h-full">
            ثبت درخواست مشاوره و تماس
          </button>
        </div>
      </div>
    </div>
  );
}
