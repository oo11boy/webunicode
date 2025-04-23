"use client";

import React from "react";
import { tiptapToHtml } from "./tiptapToHtml";

const ToHtml = ({ content }) => {
  const renderContent = () => {
    if (!content) {
      console.log("محتوا خالی است");
      return "<p>محتوایی برای نمایش وجود ندارد</p>";
    }

    if (typeof content === "string") {
      // اگر با < شروع شود، فرض می‌کنیم HTML است
      if (content.trim().startsWith("<")) {
        console.log("محتوا به صورت HTML تشخیص داده شد");
        return content;
      }

      // در غیر این صورت، فرض می‌کنیم JSON است
      try {
        console.log("تلاش برای پارسه کردن JSON...");
        const parsedContent = JSON.parse(content);
        console.log("محتوای پارسه‌شده:", parsedContent);
        const html = tiptapToHtml(parsedContent);
        console.log("خروجی HTML از tiptap:", html);
        return html;
      } catch (e) {
        console.error("خطا در پارسه کردن JSON:", e);
        return "<p>خطا در نمایش محتوا</p>";
      }
    }

    // اگر ورودی از قبل آبجکت JSON باشد
    try {
      console.log("ورودی مستقیماً آبجکت JSON است");
      const html = tiptapToHtml(content);
      console.log("خروجی HTML از tiptap:", html);
      return html;
    } catch (error) {
      console.error("خطا در تبدیل JSON به HTML:", error);
      return "<p>خطا در نمایش محتوا</p>";
    }
  };

  const htmlContent = renderContent();
  console.log("محتوای نهایی برای رندر:", htmlContent);

  return <div className="mainarticle" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ToHtml;