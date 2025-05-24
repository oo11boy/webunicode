import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// در حالت واقعی، این اطلاعات از دیتابیس خوانده می‌شود
const users = [
  {
    id: 1,
    username: "admin",
    password: "$2a$10$hRyHdkX.W3qG.NigonBrF.Y2qJ3PbhLJFbXBQivWMf7JAUR479e3O",
  },
];

export async function POST(request) {
  try {
    // خواندن بدنه درخواست
    const { username, password } = await request.json();

    // اعتبارسنجی ورودی
    if (!username || !password) {
      return NextResponse.json(
        { message: "نام کاربری و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    // پیدا کردن کاربر
    const user = users.find((u) => u.username === username);
    if (!user) {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    // بررسی رمز عبور
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    // ایجاد توکن JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // تنظیم کوکی برای توکن
    const response = NextResponse.json({ message: "ورود موفقیت‌آمیز بود" });
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // فقط در محیط پروداکشن امن است
      sameSite: "strict",
      maxAge: 3600, // 1 ساعت
      path: "/",
    });
    response.cookies.set({
      name: "isLoggedIn",
      value: "true",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("خطا در فرآیند لاگین:", error);
    return NextResponse.json(
      { message: "خطایی در سرور رخ داد" },
      { status: 500 }
    );
  }
}