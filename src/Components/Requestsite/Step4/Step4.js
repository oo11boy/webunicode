import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useEffect, useState } from "react";
import InformationCard from "./InformationCard";
import ImagePortfolioCard from "./ImageportfolioCard";
import PlanInfoCard from "./PlanInfoCard";
import ExtraSettingCard from "./ExtraSettingCard";
import PriceCard from "./PriceCard";
import SubmitBtnCard from "./SubmitBtnCard";
import { PriceProtfolio } from "@/lib/PriceProtfolio";

export default function Step4({ setStep, setFormData, formData }) {
  const [domainNeeded, setDomainNeeded] = useState(false);
  const [extraHosting, setExtraHosting] = useState(0);
  const [selection, setSelection] = useState(0);
  const [infodemo, setInfoDemo] = useState("");
  const [checkout, setCheckout] = useState("");
  useEffect(() => {
    const finddemo = PortfolioDb.find(
      (item) => item.id == formData.portfolioid
    );
    setInfoDemo(finddemo);
    setFormData((prev) => ({
      ...prev,
      exterahost: extraHosting,
      selection: selection,
      comdomain: domainNeeded,
    }));
  }, [extraHosting, selection, domainNeeded]);

  const storeOptions = [
    { label: "زیر 100 محصول", value: "under_100" },
    { label: "100 تا 1000 محصول", value: "100_to_1000" },
    { label: "بیش از 1000 محصول", value: "above_1000" },
  ];

  const companyOptions = [
    { label: "شرکتم کوچک است", value: "small_company" },
    { label: "شرکتم بزرگ است", value: "large_company" },
  ];

  return (
    <div className="w-[95%] step4 h-[80vh] py-2 md:py-[unset] overflow-y-auto mx-auto">
      <div className="flex flex-col-reverse sm:!flex-row sm:!h-[180px]  mt-6 gap-x-4 justify-center items-start w-full">
        <InformationCard
          formData={formData}
          storeOptions={storeOptions}
          companyOptions={companyOptions}
          infodemo={infodemo}
          Selection={selection}
          setSelection={setSelection}
        />
        <ImagePortfolioCard infodemo={infodemo} />
        {formData.sitetype}
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:!h-[220px] mt-6 gap-x-4 justify-center items-start w-full">
        <PlanInfoCard checkout={checkout} formData={formData} />
        <ExtraSettingCard
          domainNeeded={domainNeeded}
          setDomainNeeded={setDomainNeeded}
          extraHosting={extraHosting}
          setExtraHosting={setExtraHosting}
        />
      </div>

      <div className="flex flex-col lg:!flex-row h-auto lg:!h-[60px] mt-6 gap-x-4 justify-center items-start w-full">
        <PriceCard />
        <SubmitBtnCard setStep={setStep} />
      </div>
    </div>
  );
}
