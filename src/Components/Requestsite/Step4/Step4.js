import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useEffect, useState } from "react";
import InformationCard from "./InformationCard";

import ExtraSettingCard from "./ExtraSettingCard";
import PriceCard from "./PriceCard";
import SubmitBtnCard from "./SubmitBtnCard";
import PlanInfoCard from "./PlanInfoCard";
import { PriceProtfolio } from "@/lib/PriceProtfolio";
import ImagePortfolioCard from "./ImagePortfolioCard";


export default function Step4({id, setStep, setFormData, formData }) {
  const [domainNeeded, setDomainNeeded] = useState(false);
  const [extraHosting, setExtraHosting] = useState(0);
  const [selection, setSelection] = useState("");
  const [infoorder, setInfoOrder] = useState("");

  const [checkout, setCheckout] = useState("");

  useEffect(() => {
    const findportfolio = PortfolioDb.filter(
      (item) => item.id == formData.portfolioid || item.id ==id
    );
    setInfoOrder(findportfolio[0]);
  }, [formData.portfolioid]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      type: infoorder.category,
      selection: selection,
      extrahost: extraHosting,
      comdomain: domainNeeded,
    }));
  }, [infoorder, domainNeeded, extraHosting, selection]);

  useEffect(() => {
    const findprice = PriceProtfolio.filter(
      (item) => item.Category == infoorder.category
    );
    if (findprice.length > 1) {
      const typefindprice = findprice.filter(
        (item) => item.selection == selection
      );
      setCheckout(typefindprice[0]);
    } else {
      setCheckout(findprice[0]);
    }
  }, [infoorder, selection]);

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
    <div className="w-[95%] step4 h-[80vh] py-1 md:py-[unset] overflow-y-auto mx-auto">
      <div className="flex flex-col-reverse sm:!flex-row  sm:!h-[180px] mt-6 gap-x-4 justify-center items-start w-full">
        <InformationCard
          formData={formData}
          storeOptions={storeOptions}
          companyOptions={companyOptions}
          infoorder={infoorder}
          Selection={selection}
          
          setSelection={setSelection}
        />
        <ImagePortfolioCard id={formData.portfolioid || id} infoorder={infoorder} />
      </div>

      <div className="flex flex-col xl:!flex-row h-auto xl:!h-[220px] mt-6 gap-x-4 justify-center items-start w-full">
        <ExtraSettingCard
          infoorder={infoorder}
          domainNeeded={domainNeeded}
          setDomainNeeded={setDomainNeeded}
          extraHosting={extraHosting}
          setExtraHosting={setExtraHosting}
          companyOptions={companyOptions}
          storeOptions={storeOptions}
          setSelection={setSelection}
          Selection={selection}
        />
        <PlanInfoCard infoorder={infoorder} checkout={checkout} />
      </div>

      <div className="flex flex-col lg:!flex-row h-auto lg:!h-[80px] mt-6 gap-x-4 justify-center items-center mr-auto w-full xl:!w-[68.5%]">
        <PriceCard
          formData={formData}
          infoorder={infoorder}
          checkout={checkout}
        />
        <SubmitBtnCard setStep={setStep} />
      </div>
    </div>
  );
}
