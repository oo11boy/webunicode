"use client";

import {  useState } from "react";
import Sidebar from "@/Components/auth/sidebar";
import DashContent from "@/Components/auth/DashContent";

export default function AdminPannelContainer() {
  const [Page, setPage] = useState("dashboard");
 

  return (
    <div dir="rtl" className="flex yekan min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setPage={setPage} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6  md:mt-0">
        <DashContent Page={Page} />
      </div>
    </div>
  );
}