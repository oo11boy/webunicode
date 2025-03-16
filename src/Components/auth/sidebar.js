"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import CategoryIcon from "@mui/icons-material/Category";

export default function Sidebar({ setPage }) {
  const [isPostsOpen, setIsPostsOpen] = useState(false);

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col shadow-lg">
      <h2 className="text-2xl font-bold mb-6">پنل مدیریت</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li
            onClick={() => setPage("dashboard")}
            className="flex items-center cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors gap-2"
          >
            <DashboardIcon />
            داشبورد
          </li>
          <li className="group">
            <div
              onClick={() => setIsPostsOpen(!isPostsOpen)}
              className="flex items-center justify-between cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors gap-2"
            >
              <div className="flex items-center gap-2">
                <ArticleIcon />
                پست ها
              </div>
              {isPostsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <ul
              className={`space-y-2 mt-2 overflow-hidden transition-all duration-300 ${
                isPostsOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <li
                onClick={() => setPage("manage-posts")}
                className="flex items-center cursor-pointer py-2 px-5 rounded-lg hover:bg-gray-600 transition-colors gap-2 text-sm"
              >
                <EditIcon fontSize="small" />
                مدیریت پست ها
              </li>
              <li
                onClick={() => setPage("categories")}
                className="flex items-center cursor-pointer py-2 px-5 rounded-lg hover:bg-gray-600 transition-colors gap-2 text-sm"
              >
                <CategoryIcon fontSize="small" />
                دسته بندی
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}