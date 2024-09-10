import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useState } from "react";
import PortofolioCards from "./PortofolioCards/PortofolioCards";
import CategoryBtn from "../UiComponents/Buttons/CategoryBtn";

export default function Step3({ step, setStep }) {
  const [category, setCategory] = useState('all');
  const categories = [
    { id: 1, title: "همه قالب‌ها", category: "all" },
    { id: 2, title: "قالب‌های فروشگاهی", category: "store_design" },
    { id: 3, title: "قالب‌های شرکتی", category: "company_design" },
    { id: 4, title: "قالب‌های رزومه‌ای", category: "goodprice_design" },
    { id: 5, title: "قالب‌های پزشکی", category: "pez_design" },
  ];

  const chooseCategory = (value) => {
    setCategory(value)
  }
  return (
    <div>
      <h3 className="text-3xl my-4 text-center">
        قالب مورد نظر را انتخاب کنید
      </h3>
      <div className="flex justify-between">
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
        <div className="w-3/4 grid-container">
          {PortfolioDb.map((item, index) => (
            <PortofolioCards item={item} key={index} category={category}/>
          ))}
        </div>
      </div>
    </div>
  );
}
