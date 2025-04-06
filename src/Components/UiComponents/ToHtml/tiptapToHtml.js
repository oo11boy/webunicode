import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import CodeBlock from "@tiptap/extension-code-block";

export function tiptapToHtml(jsonContent) {
  try {
    console.log("JSON Content Input:", jsonContent); // لاگ ورودی برای دیباگ

    // اگر ورودی رشته باشد، ابتدا آن را به JSON تبدیل می‌کنیم
    const content = typeof jsonContent === "string" ? JSON.parse(jsonContent) : jsonContent;

    if (!content || !content.type || !Array.isArray(content.content)) {
      throw new Error("ساختار JSON نامعتبر است");
    }

    const html = generateHTML(content, [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-400 underline cursor-pointer",
        },
      }),
      Image.configure({
        inline: false,
      }),
      Youtube.configure({
        inline: false,
        width: 640,
        height: 360,
      }),
      TextStyle,
      Color,
      CodeBlock.configure({
        HTMLAttributes: {
          class: "bg-gray-800 text-gray-200 p-4 rounded-md",
        },
      }),
    ]);

    console.log("Generated HTML:", html); // لاگ خروجی برای دیباگ
    return html;
  } catch (error) {
    console.error("خطا در تبدیل JSON به HTML:", error.message, error.stack);
    throw error; // خطا را به بالا پرتاب می‌کنیم تا در ToHtml مدیریت شود
  }
}