"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/auth/sidebar";


export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">خوش آمدید به داشبورد</h1>
        <p className="text-gray-600">اینجا می‌توانید پست‌های خود را مدیریت کنید.</p>
      </div>
    </div>
  );
}