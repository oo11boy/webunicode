import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { apiUrl } from "@/lib/ApiUrl";

export async function GET() {
  const healthStatus = {
    posts: { status: "unknown", message: "" },
    categories: { status: "unknown", message: "" },
    cloudinary: { status: "unknown", message: "" },
    overall: "unknown",
  };

  try {
    // 1. بررسی وضعیت دریافت پست‌ها
    const postsRes = await fetch(`${apiUrl}/posts`, {
      method: "HEAD", // فقط بررسی اتصال
      signal: AbortSignal.timeout(5000), // تایم‌اوت 5 ثانیه
    });
    healthStatus.posts = {
      status: postsRes.ok ? "healthy" : "unhealthy",
      message: postsRes.ok ? "اتصال به پست‌ها موفق" : "خطا در اتصال به پست‌ها",
    };
  } catch (error) {
    healthStatus.posts = {
      status: "unhealthy",
      message: `خطا در بررسی پست‌ها: ${error.message}`,
    };
  }

  try {
    // 2. بررسی وضعیت دریافت دسته‌بندی‌ها
    const categoriesRes = await fetch(`${apiUrl}/categories`, {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
    });
    healthStatus.categories = {
      status: categoriesRes.ok ? "healthy" : "unhealthy",
      message: categoriesRes.ok ? "اتصال به دسته‌بندی‌ها موفق" : "خطا در اتصال به دسته‌بندی‌ها",
    };
  } catch (error) {
    healthStatus.categories = {
      status: "unhealthy",
      message: `خطا در بررسی دسته‌بندی‌ها: ${error.message}`,
    };
  }

  try {
    // 3. بررسی اتصال به Cloudinary
    const cloudinaryRes = await cloudinary.api.ping(); // استفاده از متد ping در Cloudinary
    healthStatus.cloudinary = {
      status: cloudinaryRes.status === "ok" ? "healthy" : "unhealthy",
      message: cloudinaryRes.status === "ok" ? "اتصال به Cloudinary موفق" : "خطا در اتصال به Cloudinary",
    };
  } catch (error) {
    healthStatus.cloudinary = {
      status: "unhealthy",
      message: `خطا در بررسی Cloudinary: ${error.message}`,
    };
  }

  // 4. وضعیت کلی
  healthStatus.overall =
    healthStatus.posts.status === "healthy" &&
    healthStatus.categories.status === "healthy" &&
    healthStatus.cloudinary.status === "healthy"
      ? "healthy"
      : "unhealthy";

  // پاسخ نهایی
  return NextResponse.json(healthStatus, {
    status: healthStatus.overall === "healthy" ? 200 : 503,
  });
}