import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const { publicId } = await request.json();

    if (!publicId) {
      return NextResponse.json({ error: "شناسه فایل مورد نیاز است" }, { status: 400 });
    }

    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: publicId.includes("video") ? "video" : "image",
    });

    if (result.result === "ok") {
      return NextResponse.json({ message: "فایل با موفقیت حذف شد" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "خطا در حذف فایل" }, { status: 400 });
    }
  } catch (error) {
    console.error("خطا در حذف فایل:", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}