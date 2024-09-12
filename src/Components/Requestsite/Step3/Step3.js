import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useEffect, useState } from "react";
import PortofolioCards from "./PortofolioCards/PortofolioCards";

import CategoryBtn from "@/Components/UiComponents/Buttons/CategoryBtn";
import TemplateDemo from "../TemplateDemo";


export default function Step3({ step, setStep,setFormData ,id}) {
  const [category, setCategory] = useState("all");
  const [chooseTemplate, setChooseTemplate] = useState(null);

  const requestTemplate = (id) => {
    const template = PortfolioDb.find((item) => item.id === id);
    setChooseTemplate(template)
    
  }
  const categories = [
    { id: 1, title: "همه قالب‌ها", category: "all" },
    { id: 2, title: "قالب‌های فروشگاهی", category: "store" },
    { id: 3, title: "قالب‌های شرکتی", category: "company" },
    { id: 4, title: "قالب‌های رزومه‌ای", category: "resume" },
  ];

  const chooseCategory = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    console.log('Updated chooseTemplate:', chooseTemplate);
    chooseTemplate &&  setFormData((prev) => ({
      ...prev,
      portfolioid:chooseTemplate.id,
     
    }));
  }, [chooseTemplate]);
  useEffect(()=>{
    id>0 && setStep(4) 
  },[id])
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-10 text-center text-[#9844F1]">
        قالب مورد نظر را انتخاب کنید
      </h3>
      <div className=" flex justify-between">
        <div className="lg:w-1/3 border pt-6 text-center">
          {categories.map((item, index) => (
            <CategoryBtn
              text={item.title}
              key={index}
              category={category}
              itemCategory={item.category}
              onClick={() => chooseCategory(item.category)}
            />
          ))}
          {chooseTemplate && <TemplateDemo item={chooseTemplate}/>}
        </div>
        <div className="w-3/4 grid-container max-h-[53vh]">
          {PortfolioDb.map((item, index) => (
            <PortofolioCards  item={item} key={index} category={category} requestTemplate={requestTemplate} />
          ))}
        </div>
      </div>
        <div className="flex gap-8 justify-center  my-10">
          <button
            className="btnnext text-2xl py-2 px-8 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            onClick={() => setStep(step - 1)}
          >
            قبلی
          </button>
          <button
            className="btnnext text-2xl py-2 px-8 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
            onClick={() => setStep(step + 1)}
            disabled={!chooseTemplate}
          >
            بعدی
          </button>
        </div>
    </div>
  );
}
