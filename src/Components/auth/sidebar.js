import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import CategoryIcon from "@mui/icons-material/Category";
import UploadIcon from "@mui/icons-material/CloudUpload";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout"; // آیکون خروج
import { useRouter } from "next/navigation"; // برای هدایت کاربر

export default function Sidebar({ setPage }) {
  const [isPostsOpen, setIsPostsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter(); // استفاده از useRouter برای هدایت کاربر

  // تابع برای خروج از حساب کاربری
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // حذف وضعیت لاگین
    localStorage.removeItem("token"); // حذف توکن
    router.push("/login"); // هدایت کاربر به صفحه‌ی لاگین
  };

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
      >
        {isSidebarOpen ? <Close /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 z-50 bg-gray-800 text-white min-h-screen p-4 flex flex-col shadow-lg md:relative fixed transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[-1000px]"
        } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">پنل مدیریت یونیکد</h2>
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
            <li
              onClick={() => setPage("uploads")}
              className="flex items-center cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors gap-2"
            >
              <UploadIcon />
              مدیریت فایل‌ها
            </li>
            {/* آیتم خروج از حساب کاربری */}
            <li
              onClick={handleLogout}
              className="flex items-center cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors gap-2"
            >
              <LogoutIcon />
              خروج از حساب کاربری
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}