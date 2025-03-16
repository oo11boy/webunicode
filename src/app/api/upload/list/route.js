import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    // تنظیم تایم‌اوت برای درخواست‌ها
    const timeoutPromise = (promise, ms) => {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error("Request timed out"));
        }, ms);
        promise.then(
          (res) => {
            clearTimeout(timeout);
            resolve(res);
          },
          (err) => {
            clearTimeout(timeout);
            reject(err);
          }
        );
      });
    };

    // دریافت تصاویر
    const imageResult = await timeoutPromise(
      cloudinary.api.resources({
        resource_type: "image",
        max_results: 100,
        prefix: "uploads/",
        type: "upload",
      }),
      10000
    );

    // دریافت ویدیوها
    const videoResult = await timeoutPromise(
      cloudinary.api.resources({
        resource_type: "video",
        max_results: 100,
        prefix: "uploads/",
        type: "upload",
      }),
      10000
    );

    const allResources = [...imageResult.resources, ...videoResult.resources];

    // محاسبه حجم کل مصرفی (در بایت)
    const totalUsageBytes = allResources.reduce((sum, resource) => sum + resource.bytes, 0);

    return NextResponse.json(
      {
        resources: allResources,
        totalUsageBytes, // حجم کل مصرفی در بایت
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("خطا در دریافت لیست فایل‌ها:", error);
    return NextResponse.json(
      {
        error: "خطا در دریافت لیست فایل‌ها",
        details: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}