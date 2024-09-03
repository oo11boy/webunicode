import React from "react";
import './buttons.css'
export default function ViewMoreBtn({text}) {
  return (
    <button className="bg-white  active:shadow-inner seemorebtn p-5 shadow-md rounded-xl">
    {text}
    </button>
  );
}
