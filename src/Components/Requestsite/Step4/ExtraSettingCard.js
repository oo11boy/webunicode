import React from 'react'

export default function ExtraSettingCard({vipOptions,domainNeeded,setDomainNeeded,extraHosting,setExtraHosting,companyOptions,storeOptions,serviceOptions,infoorder,setSelection,Selection}) {
  return (
    <div className="w-full xl:!w-1/3 !h-[325px] p-4 bg-white rounded-xl shadow-lg border border-gray-200">
            {infoorder.category === "store" && (
       <div className='mb-8'>
             <label className="block text-lg font-semibold text-gray-700 mb-2">
            
           پلن مدنظر شما چیست؟
            </label>
              <div className="flex text-[10px] sm:text-sm mt-2">
              {storeOptions.map((option) => (
                <button
                  key={option.value}
                  className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                    Selection === option.value
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelection(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            </div>
        )}

        {infoorder.category === "company" && (
          <div className='mb-8'>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
            
           پلن مدنظر شما چیست؟
            </label>
            <div className="flex text-[10px] sm:text-sm mt-2">
              {companyOptions.map((option) => (
                <button
                  key={option.value}
                  className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                    Selection === option.value
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelection(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}


{infoorder.category === "service" && (
          <div className='mb-8'>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
            
           پلن مدنظر شما چیست؟
            </label>
            <div className="flex text-[10px] sm:text-sm mt-2">
              {serviceOptions.map((option) => (
                <button
                  key={option.value}
                  className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                    Selection === option.value
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelection(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}





{infoorder.category === "vip" && (
          <div className='mb-8'>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
            
           پلن مدنظر شما چیست؟
            </label>
            <div className="flex text-[10px] sm:text-sm mt-2">
              {vipOptions.map((option) => (
                <button
                  key={option.value}
                  className={`py-2 ml-2 px-4 rounded-lg transition-all duration-300 ${
                    Selection === option.value
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelection(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
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
  )
}
