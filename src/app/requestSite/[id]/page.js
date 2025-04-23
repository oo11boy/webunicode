// app/requestSite/[id]/page.js
import Requestsite from "@/Components/Requestsite/Requestsite";
import React from "react";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page({ params }) {
  const { id } = params;
  return (
    <div dir="rtl">
      <Requestsite portfolioid={id} />
    </div>
  );
}