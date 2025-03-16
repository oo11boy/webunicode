import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    // Set a timeout for the API calls (10 seconds)
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

    const imageResult = await timeoutPromise(
      cloudinary.api.resources({
        resource_type: "image",
        max_results: 100,
        prefix: "uploads/",
        type: "upload",
      }),
      10000 // 10 seconds timeout
    );

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

    return NextResponse.json({ resources: allResources }, { status: 200 });
  } catch (error) {
    console.error("خطا در دریافت لیست فایل‌ها:", error);
    return NextResponse.json(
      { 
        error: "خطا در دریافت لیست فایل‌ها",
        details: error.message,
        code: error.code 
      }, 
      { status: 500 }
    );
  }
}