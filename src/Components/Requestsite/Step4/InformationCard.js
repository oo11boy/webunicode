import React from "react";

export default function InformationCard({
  formData,
  infoorder
}) {
  return (
    <div className="w-full sm:!w-3/4 h-full p-4 bg-gray-100 rounded-xl shadow-md">
      <ul className="space-y-2 mt-2">
        <li className="text-gray-700">
          <span className="font-medium">نام:</span> {formData.name}
        </li>
        <li className="text-gray-700">
          <span className="font-medium">ایمیل:</span> {formData.email}
        </li>
        <li className="text-gray-700">
          <span className="font-medium">شماره تلفن:</span> {formData.phone}
        </li>
        <li className="text-gray-700">
          <span className="font-medium">نوع سایت درخواستی:</span>{infoorder.name}
      
        </li>

     
      </ul>
    </div>
  );
}
