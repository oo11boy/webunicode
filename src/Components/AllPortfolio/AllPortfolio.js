"use client";

import { PortfolioDb } from "@/lib/PortfolioDb";
import React, { useState, useEffect } from "react";
import AllPortfolioCard from "./AllPortfolioCard";
import AllPortfolioFilterBar from "./AllPortfolioFilterBar";
import "./AllPortfolio.css";
export default function AllPortfolio() {
  const [selectedFilter, setSelectedFilter] = useState("همه");
  const [filteredItems, setFilteredItems] = useState(PortfolioDb);
  const [animateItems, setAnimateItems] = useState(false);

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
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedFilter]);

  return (
    <>
      <AllPortfolioFilterBar
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <div className="container filteredItems h-lvh overflow-auto flex flex-wrap justify-between gap-y-4 mt-5 mb-10">
        {filteredItems.map((item) => (
          
          <AllPortfolioCard key={item.id}  item={item} animateItems={animateItems} />
        ))}
      </div>
    </>
  );
}
