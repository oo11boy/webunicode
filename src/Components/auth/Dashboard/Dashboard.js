"use client";

import React, { useState, useEffect } from "react";
import { apiUrl } from "@/lib/ApiUrl";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import StorageIcon from "@mui/icons-material/Storage";
import HistoryIcon from "@mui/icons-material/History";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import CloudOffIcon from "@mui/icons-material/CloudOff";

export default function Dashboard() {
  const [stats, setStats] = useState({
    postsCount: 0,
    categoriesCount: 0,
    uploadsCount: 0,
    totalUsageBytes: 0,
    recentPosts: [],
    serverStatus: { posts: null, categories: null, cloudinary: null, overall: null },
  });
  const [loading, setLoading] = useState(true);

  const TOTAL_STORAGE_LIMIT = 10 * 1024 * 1024 * 1024; // 10GB در بایت

  useEffect(() => {
    fetchStats();
    checkServerStatus();
    const interval = setInterval(checkServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const postsRes = await fetch(`${apiUrl}/posts`);
      if (!postsRes.ok) throw new Error("خطا در دریافت پست‌ها");
      const postsData = await postsRes.json();
      const postsCount = postsData.length;

      const categoriesRes = await fetch(`${apiUrl}/categories`);
      if (!categoriesRes.ok) throw new Error("خطا در دریافت دسته‌بندی‌ها");
      const categoriesData = await categoriesRes.json();
      const categoriesCount = categoriesData.length;

      const uploadsRes = await fetch(`${apiUrl}/upload/list`);
      if (!uploadsRes.ok) throw new Error("خطا در دریافت آپلودها");
      const uploadsData = await uploadsRes.json();
      const uploadsCount = uploadsData.resources?.length || 0;
      const totalUsageBytes = uploadsData.totalUsageBytes || 0;

      setStats((prev) => ({
        ...prev,
        postsCount,
        categoriesCount,
        uploadsCount,
        totalUsageBytes,
        recentPosts: postsData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
      }));
    } catch (error) {
      console.error("خطا در دریافت آمار داشبورد:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${apiUrl}/health`);
      if (!response.ok) throw new Error("خطا در دریافت وضعیت سرور");
      const data = await response.json();
      setStats((prev) => ({
        ...prev,
        serverStatus: {
          posts: data.posts.status === "healthy",
          categories: data.categories.status === "healthy",
          cloudinary: data.cloudinary.status === "healthy",
          overall: data.overall === "healthy",
        },
      }));
    } catch (error) {
      console.error("خطا در بررسی وضعیت سرور:", error);
      setStats((prev) => ({
        ...prev,
        serverStatus: { posts: false, categories: false, cloudinary: false, overall: false },
      }));
    }
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 بایت";
    const units = ["بایت", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
  };

  const remainingStorage = TOTAL_STORAGE_LIMIT - stats.totalUsageBytes;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">داشبورد مدیریت</h1>

      {/* ویجت‌های اصلی */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4">
            <ArticleIcon fontSize="large" />
            <div>
              <h2 className="text-lg font-semibold">تعداد پست‌ها</h2>
              <p className="text-3xl font-bold">{stats.postsCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4">
            <CategoryIcon fontSize="large" />
            <div>
              <h2 className="text-lg font-semibold">تعداد دسته‌بندی‌ها</h2>
              <p className="text-3xl font-bold">{stats.categoriesCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4">
            <CloudUploadIcon fontSize="large" />
            <div>
              <h2 className="text-lg font-semibold">فایل‌های آپلود شده</h2>
              <p className="text-3xl font-bold">{stats.uploadsCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4">
            <StorageIcon fontSize="large" />
            <div>
              <h2 className="text-lg font-semibold">حجم مصرفی</h2>
              <p className="text-2xl font-bold">{formatBytes(stats.totalUsageBytes)}</p>
              <p className="text-sm opacity-80">باقیمانده: {formatBytes(remainingStorage)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* بخش‌های اضافی */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* آخرین پست‌ها */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <HistoryIcon className="text-blue-600" /> آخرین پست‌ها
          </h2>
          <ul className="space-y-4">
            {stats.recentPosts?.slice(0, 5).map((post) => (
              <li key={post.id} className="flex justify-between items-center text-gray-700 border-b pb-2">
                <span className="truncate max-w-xs">{post.h1title}</span>
                <span className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString("fa-IR")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* وضعیت سرور */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">وضعیت سرور</h2>
          <div className="space-y-4">
            {/* وضعیت پست‌ها */}
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-full ${
                  stats.serverStatus.posts === null
                    ? "bg-gray-100 animate-pulse"
                    : stats.serverStatus.posts
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {stats.serverStatus.posts === null ? (
                  <CloudDoneIcon className="text-gray-400" />
                ) : stats.serverStatus.posts ? (
                  <CloudDoneIcon className="text-green-600" />
                ) : (
                  <CloudOffIcon className="text-red-600" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-700">پست‌ها</p>
                <p className="text-sm text-gray-600">
                  {stats.serverStatus.posts === null
                    ? "در حال بررسی..."
                    : stats.serverStatus.posts
                    ? "سالم"
                    : "مشکل دارد"}
                </p>
              </div>
            </div>

            {/* وضعیت دسته‌بندی‌ها */}
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-full ${
                  stats.serverStatus.categories === null
                    ? "bg-gray-100 animate-pulse"
                    : stats.serverStatus.categories
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {stats.serverStatus.categories === null ? (
                  <CloudDoneIcon className="text-gray-400" />
                ) : stats.serverStatus.categories ? (
                  <CloudDoneIcon className="text-green-600" />
                ) : (
                  <CloudOffIcon className="text-red-600" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-700">دسته‌بندی‌ها</p>
                <p className="text-sm text-gray-600">
                  {stats.serverStatus.categories === null
                    ? "در حال بررسی..."
                    : stats.serverStatus.categories
                    ? "سالم"
                    : "مشکل دارد"}
                </p>
              </div>
            </div>

            {/* وضعیت Cloudinary */}
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-full ${
                  stats.serverStatus.cloudinary === null
                    ? "bg-gray-100 animate-pulse"
                    : stats.serverStatus.cloudinary
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {stats.serverStatus.cloudinary === null ? (
                  <CloudDoneIcon className="text-gray-400" />
                ) : stats.serverStatus.cloudinary ? (
                  <CloudDoneIcon className="text-green-600" />
                ) : (
                  <CloudOffIcon className="text-red-600" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-700">Cloudinary</p>
                <p className="text-sm text-gray-600">
                  {stats.serverStatus.cloudinary === null
                    ? "در حال بررسی..."
                    : stats.serverStatus.cloudinary
                    ? "سالم"
                    : "مشکل دارد"}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={checkServerStatus}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full"
          >
            بررسی مجدد
          </button>
        </div>
      </div>

      {/* خلاصه فعالیت */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">خلاصه فعالیت</h2>
        <p className="text-gray-600 leading-relaxed">
          در حال حاضر شما{" "}
          <span className="font-bold text-blue-600">{stats.postsCount}</span> پست،{" "}
          <span className="font-bold text-green-600">{stats.categoriesCount}</span> دسته‌بندی و{" "}
          <span className="font-bold text-purple-600">{stats.uploadsCount}</span> فایل آپلود شده دارید. حجم
          مصرفی شما{" "}
          <span className="font-bold text-red-600">{formatBytes(stats.totalUsageBytes)}</span> از{" "}
          {formatBytes(TOTAL_STORAGE_LIMIT)} است.
        </p>
      </div>
    </div>
  );
}