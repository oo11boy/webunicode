"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/auth/sidebar";
import DashContent from "@/Components/auth/DashContent";

export default function DashboardPage() {
  const router = useRouter();
  const [Page, setPage] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true); // حالت برای بررسی وضعیت لاگین

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const token = localStorage.getItem("token");

    if (!isLoggedIn || !token) {
      router.push("/login"); // اگر کاربر لاگین نکرده باشد، به صفحه‌ی لاگین هدایت شود
    } else {
      setIsLoading(false); // اگر کاربر لاگین کرده باشد، isLoading را false کنید
    }
  }, [router]);

  // اگر در حال بررسی وضعیت لاگین هستیم، چیزی رندر نکنید
  if (isLoading) {
    return null; // یا می‌توانید یک اسپینر یا پیام "در حال بررسی..." نمایش دهید
  }

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