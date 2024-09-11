import React from "react";

export default function PriceCard() {
  return (
    <div className="w-full mb-4 lg:!mb-[unset] lg:!w-3/4 h-full flex justify-between items-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-sm md:!text-lg">هزینه تقریبی برای این سفارش:</h2>
      <p className="text-sm md:!text-lg">6,000,000 تومان</p>
    </div>
  );
}
