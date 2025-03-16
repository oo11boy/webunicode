import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

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

    // آپلود فایل به Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: file.type.startsWith("video") ? "video" : "image",
          folder: "uploads", // پوشه‌ای که فایل‌ها در Cloudinary ذخیره می‌شوند
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    // URL فایل آپلود‌شده
    const url = uploadResult.secure_url;

    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error("خطا در آپلود فایل:", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}