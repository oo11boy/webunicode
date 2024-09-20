// import ClearIcon from "@mui/icons-material/Clear";
// import { useState } from "react";

import ImageWithLoader from "../UiComponents/ImageWithLoader/Image";

export default function TemplateDemo({ item }) {
  // if (!isVisible) return null;
  return (
    <div className="flex w-[85%] m-auto mt-4 border-2 rounded-lg">
      <div className="w-28 p-2">
   
        <ImageWithLoader
          className="w-[100%] rounded-xl h-[90px]"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="text-right p-2 flex flex-col justify-between">
        <h4 className="font-bold md:text-xl ">{item.name}</h4>
        <span className="text-green-500 text-sm font-semibold whitespace-nowrap">
          قالب انتخابی شما
        </span>
      </div>
    </div>
  );
}
