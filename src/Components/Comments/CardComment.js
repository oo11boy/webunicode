import React from "react";
import Stars from "../UiComponents/Stars/Stars";

export default function CardComment({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md shadow-gray-200 flex p-8 flex-col justify-start items-start w-full">
      <div className="flex w-full my-8 justify-between items-start gap-y-3">
        <div>
          <h3 className="text-4xl mb-4">{item.title}</h3>
          <Stars />
        </div>
        <img className="opacity-5 w-[50px] h-[50px]" src="/image/quote.png" />
      </div>
      <div className="mb-8 flex justify-start items-start">
        <p className="border-b pb-4 border-black">{item.comment}</p>
      </div>
      <div className="flex flex-row justify-between w-full items-center">
        <p>{item.name}</p>
        <p>{item.sitename}</p>
      </div>
    </div>
  );
}
