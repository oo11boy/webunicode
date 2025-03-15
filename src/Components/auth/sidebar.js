// components/auth/sidebar.jsx
"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col shadow-lg">
      <h2 className="text-2xl font-bold mb-6">پنل مدیریت</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors">
              داشبورد
            </Link>
          </li>
          <li>
            <span className="block font-semibold py-2 px-3">پست‌ها</span>
            <ul className="mr-4 mt-2 space-y-2">
              <li>
                <Link href="/dashboard/posts" className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors">
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