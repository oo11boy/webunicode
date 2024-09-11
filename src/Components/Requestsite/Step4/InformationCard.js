import React from "react";

export default function InformationCard({
  formData,
  storeOptions,
  companyOptions,
  infodemo,
  setSelection,
  Selection,
}) {
  return (
    <div className="w-full sm:!w-3/4 h-full p-4 bg-gray-100 rounded-xl shadow-md">
      <ul className="space-y-2 mt-2">
        <li className="text-gray-700">
          <span className="font-medium">نام:</span> {formData.name}
        </li>
        <li className="text-gray-700">
          <span className="font-medium">ایمیل:</span> {formData.email}
        </li>
        <li className="text-gray-700">
          <span className="font-medium">شماره تلفن:</span> {formData.phone}
        </li>
        <li className="text-gray-700">
          <span className="font-medium">نوع سایت درخواستی:</span>
          {infodemo.sitetype}
        </li>

        {infodemo.category === "store" && (
          <li>
            <span className="font-medium">مقدار حدودی محصولات:</span>
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
          </li>
        )}

        {infodemo.category === "company" && (
          <li>
            <span className="font-medium">مقدار حدودی محصولات:</span>
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
          </li>
        )}
      </ul>
    </div>
  );
}
