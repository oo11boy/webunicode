// import ClearIcon from "@mui/icons-material/Clear";
// import { useState } from "react";

export default function TemplateDemo({ item }) {
  
    // if (!isVisible) return null;
  return (
    <div className="flex w-[70%] m-auto mt-4 border-2 rounded-lg">
      <div className="w-28 p-2">
        <img
          className="w-full rounded-xl h-[90px]"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="text-right p-2 flex flex-col justify-between">
        <h4 className="font-bold text-xl ">{item.name}</h4>
        <span className="text-green-500 text-sm font-semibold whitespace-nowrap">
          قالب انتخابی شما
        </span>
      </div>
      {/* <div className="p-2 cursor-pointer">
        <ClearIcon />
      </div> */}
    </div>
  );
}
