import React from "react";

export default function PriceCard({ checkout, infoorder, formData }) {
  const priceFormat = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <div className="w-full mb-4 lg:!mb-[unset] lg:!w-3/4 h-full flex justify-between items-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-sm md:!text-lg">هزینه تقریبی برای این سفارش:</h2>
      <p className="text-sm md:!text-lg">
        {priceFormat(
          (checkout
            ? checkout.price
            : infoorder.category == "store"
            ? 8.9 * 1000000
            : infoorder.category == "company"
            ? 5.9 * 1000000
            : 5.9 * 1000000) +
            (formData.comdomain ? 1000000 : 0) +
            (formData.extrahost == 5
              ? 500000
              : formData.extrahost == 10
              ? 1000000
              : 0)
        )}
        تومان
      </p>
    </div>
  );
}
