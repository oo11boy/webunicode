"use client";

import React from "react";
import { tiptapToHtml } from "./tiptapToHtml";

const ToHtml = ({ content }) => {
  const renderContent = () => {
    if (!content) {
      return "<p>محتوایی برای نمایش وجود ندارد</p>";
    }

    // اگر رشته باشد و با < شروع شود، فرض می‌کنیم HTML است
    if (typeof content === "string" && content.trim().startsWith("<")) {
      return content;
    }

    // در غیر این صورت، فرض می‌کنیم JSON است و باید تبدیل شود
    try {
      return tiptapToHtml(content);
    } catch (error) {
      console.error("خطا در تبدیل JSON به HTML:", error);
      return "<p>خطا در نمایش محتوا</p>";
    }
  };

  return <div className="mainarticle" dangerouslySetInnerHTML={{ __html: renderContent() }} />;
};

export default ToHtml;