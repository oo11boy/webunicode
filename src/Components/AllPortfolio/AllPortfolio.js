"use client";

import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useState, useEffect } from "react";
import AllPortfolioCard from "./AllPortfolioCard";
import AllPortfolioFilterBar from "./AllPortfolioFilterBar";
import "./AllPortfolio.css";

export default function AllPortfolio({ status = true }) {
  const [selectedFilter, setSelectedFilter] = useState("همه");
  const [filteredItems, setFilteredItems] = useState(PortfolioDb);
  const [animateItems, setAnimateItems] = useState(false);
  const [visibleItems, setVisibleItems] = useState(8); // تعداد آیتم‌های نمایش داده شده

  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => {
      if (selectedFilter === "همه") {
        setFilteredItems(PortfolioDb);
      } else {
        setFilteredItems(
          PortfolioDb.filter((item) => item.category === selectedFilter)
        );
      }
      setAnimateItems(true);
      setVisibleItems(8); // Reset visible items when filter changes
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedFilter]);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8); // افزایش تعداد آیتم‌های نمایش داده شده
  };

  return (
    <>
      <AllPortfolioFilterBar
      status={status}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <div
      
        className={`container filteredItems h-1vh overflow-auto flex flex-wrap justify-between gap-y-4 mt-5 mb-10`}
      >
        {filteredItems.slice(0, visibleItems).map((item) => (
          <AllPortfolioCard key={item.id} item={item} animateItems={animateItems} />
        ))}
      </div>
      {visibleItems < filteredItems.length && (
        <div className="flex w-full mb-16 justify-center mt-2">
          <button
            onClick={loadMoreItems}
            className="bg-blue-500 yekan text-white px-4 py-2 rounded"
          >
           مشاهده بیشتر
          </button>
        </div>
      )}
    </>
  );
}