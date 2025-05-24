import { NextResponse } from "next/server";

export async function POST() {
  try {
    // ایجاد پاسخ برای حذف کوکی‌ها
    const response = NextResponse.json({ message: "خروج موفقیت‌آمیز بود" });

    // حذف کوکی‌های token و isLoggedIn
    response.cookies.delete("token");
    response.cookies.delete("isLoggedIn");

    return response;
  } catch (error) {
    console.error("خطا در فرآیند خروج:", error);
    return NextResponse.json(
      { message: "خطایی در سرور رخ داد" },
      { status: 500 }
    );
  }
}