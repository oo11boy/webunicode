import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      console.warn("No file provided");
      return NextResponse.json({ error: "هیچ فایلی ارسال نشده است" }, { status: 400 });
    }

    console.log("File received:", file.name, file.type, file.size);

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "video/mp4", "video/webm"];
    if (!allowedTypes.includes(file.type)) {
      console.warn("Invalid file type:", file.type);
      return NextResponse.json({ error: "نوع فایل مجاز نیست..." }, { status: 400 });
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      console.warn("File too large:", file.size);
      return NextResponse.json({ error: "حجم فایل باید کمتر از 10 مگابایت باشد" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log("Uploading to Cloudinary...");
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: file.type.startsWith("video") ? "video" : "image",
          folder: "uploads",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Error:", error.message, error.stack);
            reject(error);
          } else {
            console.log("Upload successful:", result.secure_url);
            resolve(result);
          }
        }
      );
      stream.end(buffer);
    });

    const url = uploadResult.secure_url;
    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error.message, error.stack);
    return NextResponse.json({ error: error.message || "خطا در سرور" }, { status: 500 });
  }
}