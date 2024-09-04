import React from "react";
import './Buttons.css'
export default function ViewMoreBtn({text}) {
  return (
    <button className="bg-white  active:shadow-inner seemorebtn p-5 shadow-md rounded-xl">
    {text}
    </button>
  );
}
