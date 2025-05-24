"use client";

import React, {  useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { apiUrl } from "@/lib/ApiUrl";
import "./CustomEditor.css";

const CustomEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  // تابع آپلود فایل برای تصاویر و ویدیوها
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append("file", file);
            fetch(`${apiUrl}/upload`, {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.url) {
                  resolve({ default: data.url });
                } else {
                  reject(new Error("خطا در آپلود فایل"));
                }
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  // تنظیم آپلودر برای CKEditor
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  // پلاگین محدود کردن H1
  function restrictH1Plugin(editor) {
    editor.model.document.on("change:data", () => {
      const data = editor.getData();
      if (/<h1\b[^>]*>/i.test(data)) {
        alert("استفاده از تگ H1 در متن مجاز نیست، زیرا عنوان اصلی به‌صورت خودکار به‌عنوان H1 اضافه می‌شود. لطفاً از H2 یا H3 استفاده کنید.");
        const updatedData = data.replace(/<h1\b[^>]*>/gi, "<h2>").replace(/<\/h1>/gi, "</h2>");
        editor.setData(updatedData);
      }
    });
  }

  return (
    <div className="bg-white lg:!w-2/3 rounded-lg shadow-lg border border-gray-200" dir="rtl">
      <CKEditor
        editor={ClassicEditor}
        data={value || ""}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "link",
            "imageUpload",
            "mediaEmbed",
            "codeBlock",
            "|",
            "undo",
            "redo",
          ],
          heading: {
            options: [
              { model: "paragraph", title: "پاراگراف", class: "ck-heading_paragraph" },
              { model: "heading2", view: "h2", title: "عنوان H2", class: "ck-heading_heading2" },
              { model: "heading3", view: "h3", title: "عنوان H3", class: "ck-heading_heading3" },
              { model: "heading4", view: "h4", title: "عنوان H4", class: "ck-heading_heading4" },
            ],
          },
          link: {
            addTargetToExternalLinks: true,
            decorators: [
              {
                mode: "manual",
                label: "Nofollow لینک",
                attributes: {
                  rel: "nofollow",
                },
              },
              {
                mode: "manual",
                label: "باز شدن در تب جدید",
                attributes: {
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
              },
            ],
          },
          image: {
            toolbar: ["imageTextAlternative"],
          },
          language: "fa",
          extraPlugins: [uploadPlugin, restrictH1Plugin],
        }}
        onReady={(editor) => {
          editorRef.current = editor;
          editor.editing.view.change((writer) => {
            writer.setStyle("direction", "rtl", editor.editing.view.document.getRoot());
            writer.setStyle("text-align", "right", editor.editing.view.document.getRoot());
          });
        }}
      />
    </div>
  );
};

export default CustomEditor;