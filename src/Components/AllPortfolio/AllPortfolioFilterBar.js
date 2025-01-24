import React from 'react'
import { FilterAlt, Store, Business, Badge } from "@mui/icons-material";

export default function AllPortfolioFilterBar({status=true,selectedFilter,setSelectedFilter}) {
  return (
    <div dir="rtl" className={`${status && 'mt-20'} overflow-auto container FilterBar flex justify-start gap-x-5`}>
     <button
          onClick={() => setSelectedFilter("همه")}
          className={`flex items-center gap-2 px-4 py-2 text-white rounded transition ${
            selectedFilter === "همه" ? "bg-blue-700" : "bg-blue-600"
          }`}
        >
          <FilterAlt /> همه
        </button>
        <button
          onClick={() => setSelectedFilter("store")}
          className={`flex items-center gap-2 px-4 py-2 text-white rounded transition ${
            selectedFilter === "store" ? "bg-green-700" : "bg-green-600"
          }`}
        >
          <Store /> فروشگاهی
        </button>
        <button
          onClick={() => setSelectedFilter("company")}
          className={`flex items-center gap-2 px-4 py-2 text-white rounded transition ${
            selectedFilter === "company" ? "bg-purple-700" : "bg-purple-600"
          }`}
        >
          <Business /> شرکتی
        </button>
        <button
          onClick={() => setSelectedFilter("service")}
          className={`flex items-center gap-2 px-4 py-2 text-white rounded transition ${
            selectedFilter === "service" ? "bg-red-700" : "bg-red-600"
          }`}
        >
          <Badge /> خدماتی
        </button>
  </div>
  )
}
