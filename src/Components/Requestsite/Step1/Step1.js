import { PortfolioDb } from "@/lib/PortfolioDb";
import { useEffect, useState } from "react";
import { FaStore, FaBuilding, FaIndustry } from "react-icons/fa";

export default function Step2({ step, setStep, id }) {
  const [selectedType, setSelectedType] = useState("");

  const siteTypes = [
    { label: "فروشگاهی", value: "store", icon: <FaStore /> },
    { label: "شرکتی", value: "company", icon: <FaBuilding /> },
    { label: "رزومه‌ای", value: "resume", icon: <FaIndustry /> },
  ];

  const handleSelectType = (value) => {
    setSelectedType(value);
    // Store the selected type in formData
  
  };

  const isNextButtonEnabled = () => {
    return selectedType !== "";
  };

  useEffect(()=>{
    id>0 && setStep(2) 
  },[id])

  return (
    <div className="flex step1 min-h-[80vh] step1 flex-col justify-center items-center">
      <h3 className="text-2xl sm:!text-4xl text-[#9844F1] mb-8">
        نوع سایت را انتخاب نمایید:
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {siteTypes.map((type) => (
          <div
            key={type.value}
            onClick={() => handleSelectType(type.value)}
            className={`relative p-8 w-32 h-32 lg:!w-64 lg:!h-64 cursor-pointer border rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-100 ${
              selectedType === type.value
                ? "border-blue-500 bg-blue-50"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-3xl text-[#1f9d7e] sm:!text-5xl mb-4">
                {type.icon}
              </span>
              <h4 className="text-xl text-[#077c5f] font-semibold">
                {type.label}
              </h4>
            </div>
            {selectedType === type.value && (
              <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-blue-200 opacity-20"></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex my-3 md:my-[unset] gap-8">
        <button
          className="btnnext text-2xl py-2 px-8 mt-12 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
          onClick={() => setStep(step + 1)}
          disabled={!isNextButtonEnabled()}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
