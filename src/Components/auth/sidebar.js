"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">پنل مدیریت</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="hover:text-gray-300">
              داشبورد
            </Link>
          </li>
          <li className="mb-4">
            <span className="font-semibold">پست‌ها</span>
            <ul className="ml-4 mt-2">
              <li>
                <Link href="/dashboard/posts/add" className="hover:text-gray-300">
                  افزودن پست جدید
                </Link>
              </li>
              <li>
                <Link href="/dashboard/posts" className="hover:text-gray-300">
                  مدیریت پست‌ها
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}