// pages/dashboard.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/auth/sidebar";
import PostsPage from "@/Components/auth/posts/posts";
import Categories from "@/Components/auth/categories/categories";

export default function DashboardPage() {
  const router = useRouter();
  const [ Page, setPage ] = useState("dashboard");
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div dir="rtl" className="flex min-h-screen yekan bg-gray-100">
      <Sidebar setPage={setPage} />
      <div className="flex-1 p-4 md:p-6">
        {Page == "dashboard" && <h2>dash</h2> }
        
        {Page == "manage-posts" && (
          <PostsPage />
        )}
        {Page === "categories" && <Categories />}
      </div>
    </div>
  );
}
