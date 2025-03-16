import { writeFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "هیچ فایلی ارسال نشده است" }, { status: 400 });
    }

    // بررسی نوع فایل
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "video/mp4", "video/webm"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "نوع فایل مجاز نیست. فقط تصاویر (JPEG, PNG, GIF) و ویدیوها (MP4, WebM) پشتیبانی می‌شوند" },
        { status: 400 }
      );
    }

    // محدودیت حجم فایل (مثلاً 10 مگابایت)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "حجم فایل باید کمتر از 10 مگابایت باشد" }, { status: 400 });
    }

    // تبدیل فایل به Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // مسیر ذخیره‌سازی فایل
    const fileName = `${Date.now()}-${file.name}`;
    const path = join(process.cwd(), "public/uploads", fileName);
    await writeFile(path, buffer);

    // URL فایل آپلود‌شده
    const url = `/uploads/${fileName}`;

    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error("خطا در آپلود فایل:", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}