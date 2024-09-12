import Requestsite from "@/Components/Requestsite/Requestsite";
import React from "react";

export default function page({params}) {
  const {id}=params
  return (
    <div dir="rtl">
      <Requestsite portfolioid={id} />
    </div>
  );
}
