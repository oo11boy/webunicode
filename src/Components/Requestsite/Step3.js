import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useState } from "react";
import PortofolioCards from "./PortofolioCards/PortofolioCards";
import CategoryBtn from "../UiComponents/Buttons/CategoryBtn";

export default function Step3({ step, setStep }) {
  const [category, setCategory] = useState('all');
  const categories = [
    { id: 1, title: "همه قالب‌ها", category: "all" },
    { id: 2, title: "قالب‌های فروشگاهی", category: "store" },
    { id: 3, title: "قالب‌های شرکتی", category: "company" },
    { id: 4, title: "قالب‌های رزومه‌ای", category: "resume" },
  ];

  const chooseCategory = (value) => {
    setCategory(value)
  }

  const isNextDisabled = () => {
    
  }
  return (
    <div className="w-full">
      <h3 className="text-3xl my-10 text-center text-[#9844F1]">
        قالب مورد نظر را انتخاب کنید
      </h3>
      <div className=" flex justify-between">
        <div className="w-1/4 border pt-6 text-center">
          {categories.map((item, index) => (
            <CategoryBtn
              text={item.title}
              key={index}
              category={category}
              itemCategory={item.category}
              onClick={() => chooseCategory(item.category)}
            />
          ))}
        </div>
        <div className="w-3/4 grid-container max-h-[50vh]">
          {PortfolioDb.map((item, index) => (
            <PortofolioCards item={item} key={index} category={category}/>
          ))}
        </div>
      </div>
      <div className="flex gap-8 m-auto w-full text-center">
        <button
          className="btnnext text-2xl py-2 px-8 mt-12 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          onClick={() => setStep(step - 1)}
        >
          قبلی
        </button>
        <button
          className="btnnext text-2xl py-2 px-8 mt-12 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
          onClick={() => setStep(step + 1)}
          disabled={isNextDisabled}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
