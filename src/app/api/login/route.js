import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// اطلاعات کاربران (در حالت واقعی باید از دیتابیس استفاده کنید)
const users = [
  {
    id: 1,
    username: "admin",
    password: "$2a$10$hRyHdkX.W3qG.NigonBrF.Y2qJ3PbhLJFbXBQivWMf7JAUR479e3O", // رمز عبور هش شده با bcrypt
  },
];

export async function POST(request) {
  const { username, password } = await request.json();

  // پیدا کردن کاربر
  const user = users.find((u) => u.username === username);
  if (!user) {
    return NextResponse.json(
      { message: "نام کاربری یا رمز عبور اشتباه است" },
      { status: 400 }
    );
  }

  // بررسی رمز عبور
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "نام کاربری یا رمز عبور اشتباه است" },
      { status: 400 }
    );
  }

  // ایجاد توکن JWT
  const token = jwt.sign({ userId: user.id }, "your-secret-key", {
    expiresIn: "1h",
  });

  // بازگرداندن توکن
  return NextResponse.json({ token });
}