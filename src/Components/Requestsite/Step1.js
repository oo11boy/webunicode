import { useState } from "react";
import { FaStore, FaBuilding, FaIndustry } from "react-icons/fa";

export default function Step2({ step, setStep }) {
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const siteTypes = [
    { label: "فروشگاهی", value: "store", icon: <FaStore /> },
    { label: "شرکتی", value: "company", icon: <FaBuilding /> },
    { label: "رزومه‌ای", value: "resume", icon: <FaIndustry /> },
  ];

  const storeOptions = [
    { label: "زیر 100 محصول", value: "under_100" },
    { label: "100 تا 1000 محصول", value: "100_to_1000" },
    { label: "بیش از 1000 محصول", value: "above_1000" },
  ];

  const companyOptions = [
    { label: "شرکتم کوچک است", value: "small_company" },
    { label: "شرکتم بزرگ است", value: "large_company" },
  ];

  const handleSelect = (value) => {
    setSelectedType(value);
    setSelectedOption(""); // Reset the secondary option when type changes

    // Open modal only if there are options to select
    if (value === "store" || value === "company") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const isNextButtonEnabled = () => {
    if (selectedType === "resume") {
      return true;
    }
    if (
      (selectedType === "store" || selectedType === "company") &&
      selectedOption
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex step1 min-h-[80vh] step1 flex-col justify-center items-center">
      <h3 className="text-2xl sm:!text-4xl text-[#9844F1]  mb-8">نوع سایت را انتخاب نمایید:</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {siteTypes.map((type) => (
          <div
            key={type.value}
            onClick={() => handleSelect(type.value)}
            className={`relative p-8 w-32 h-32 lg:!w-64 lg:!h-64 cursor-pointer border rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-100 ${
              selectedType === type.value
                ? "border-blue-500 bg-blue-50"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-3xl text-[#1f9d7e] sm:!text-5xl mb-4">{type.icon}</span>
              <h4 className="text-xl text-[#077c5f]  font-semibold">{type.label}</h4>
            </div>
            {selectedType === type.value && (
              <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-blue-200 opacity-20"></div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[95%] md:w-full max-w-md">
            <h2 className="text-xl text-[#1f9d7e] mb-4">انتخاب کنید:</h2>
            {selectedType === "store" && (
              <div className="flex flex-wrap justify-center items-center gap-8">
                {storeOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setSelectedOption(option.value);
                      setIsModalOpen(false); // Close modal after selection
                    }}
                    className={`p-6 cursor-pointer w-56 text-center border rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-green-100 ${
                      selectedOption === option.value
                        ? "border-green-500 bg-green-50"
                        : "bg-white"
                    }`}
                  >
                    <h4 className="text-lg text-[#1f9d7e] font-medium">{option.label}</h4>
                  </div>
                ))}
              </div>
            )}

            {selectedType === "company" && (
              <div className="flex flex-wrap justify-center items-center gap-8">
                {companyOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setSelectedOption(option.value);
                      setIsModalOpen(false); // Close modal after selection
                    }}
                    className={`p-6 cursor-pointer w-56 text-center border rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-100 ${
                      selectedOption === option.value
                        ? "border-yellow-500 bg-yellow-50"
                        : "bg-white"
                    }`}
                  >
                    <h4 className="text-lg text-[#1f9d7e] font-medium">{option.label}</h4>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              بستن
            </button>
          </div>
        </div>
      )}

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
