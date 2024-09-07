import React from "react";
import './Buttons.css'
import Link from "next/link";
export default function ViewMoreBtn({text,link='/'}) {
  return (
   
   <Link  className="bg-white  active:shadow-inner seemorebtn p-5 shadow-md rounded-xl" href={link}>
   {text}
   </Link>
  

  );
}
