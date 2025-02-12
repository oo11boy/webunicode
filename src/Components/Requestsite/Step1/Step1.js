import { useEffect, useState } from "react";
import { FaStore, FaBuilding } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import SiteType from "./SiteType";

export default function Step1({ step, setStep, id }) {
  const [selectedType, setSelectedType] = useState("");

  const siteTypes = [
    { label: "فروشگاهی", value: "store", icon: <FaStore /> },
    { label: "شرکتی", value: "company", icon: <FaBuilding /> },
    { label: "خدماتی", value: "service", icon: <MdHomeRepairService /> },
    { label: "اختصاصی", value: "vip", icon: <MdHomeRepairService /> },
  
  ];

  const handleSelectType = (value) => {
    setSelectedType(value);
    // Store the selected type in formData

  };

  const isNextButtonEnabled = () => {
    return selectedType !== "";
  };

  useEffect(() => {
    id > 0 && setStep(2);

    
  }, [id]);

  return (
    <div className="flex step1 min-h-[80vh] step1 flex-col justify-center items-center">
      <h3 className="text-2xl sm:!text-4xl text-[#9844F1] mb-8">
        نوع سایت را انتخاب نمایید:
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {siteTypes.map((type, index) => (
          <SiteType
            type={type}
            key={index}
            selectedType={selectedType}
            handleSelectType={handleSelectType}
          />
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
