"use client";

import React, { useState } from "react";
import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import CodeBlock from "@tiptap/extension-code-block";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Link as LinkIcon,
  Image as ImageIcon,
  Video,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Palette,
} from "lucide-react";
import { TwitterPicker } from "react-color";
import { apiUrl } from "@/lib/ApiUrl";

const CustomEditor = ({ value, onChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mediaMenu, setMediaMenu] = useState(false);
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaAlt, setMediaAlt] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [mediaSource, setMediaSource] = useState("upload");
  const [selectedFile, setSelectedFile] = useState(null);

  const editor = useEditor({
    extensions: [
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
    ],
    content: value ? JSON.parse(value) : "",
    onUpdate: ({ editor }) => {
      onChange(JSON.stringify(editor.getJSON()));
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none p-6 focus:outline-none min-h-[400px] text-gray-200",
      },
    },
  });

  if (!editor) return null;

  const handleMediaInsert = async () => {
    let url = "";
    if (mediaSource === "upload" && selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const res = await fetch(`${apiUrl}/upload`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (res.ok) {
          url = data.url;
        }
      } catch (err) {
        console.error("Upload failed:", err);
        return;
      }
    } else if (mediaSource === "url" && mediaUrl) {
      url = mediaUrl;
    }

    if (url) {
      if (mediaType === "image") {
        editor.chain().focus().setImage({ src: url, alt: mediaAlt }).run();
      } else {
        editor.chain().focus().setYoutubeVideo({ src: url }).run();
      }
    }

    setMediaUrl("");
    setMediaAlt("");
    setSelectedFile(null);
    setMediaMenu(false);
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("لطفاً آدرس لینک را وارد کنید", previousUrl);

    if (url === null) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="bg-gray-900 relative rounded-lg overflow-hidden shadow-lg border border-gray-800">
      {/* Toolbar */}
      <div className="flex fixed left-5 top-5 items-center gap-1 p-2 bg-gray-800 border-b border-gray-700" dir="rtl">
        {/* دکمه‌های موجود */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().toggleBold()}
          className={`p-2 rounded ${editor.isActive("bold") ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="پررنگ"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().toggleItalic()}
          className={`p-2 rounded ${editor.isActive("italic") ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="کج"
        >
          <Italic size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().toggleUnderline()}
          className={`p-2 rounded ${editor.isActive("underline") ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="زیرخط"
        >
          <UnderlineIcon size={18} />
        </button>
        <div className="w-px h-6 bg-gray-700 mx-2" />

        {/* اضافه کردن انتخاب نوع تگ */}
        <div className="relative">
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "paragraph") {
                editor.chain().focus().setParagraph().run();
              } else if (value) {
                editor.chain().focus().toggleHeading({ level: Number(value) }).run();
              }
            }}
            className="p-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 focus:outline-none"
            title="نوع تگ"
          >
            <option value="">انتخاب تگ</option>
            <option value="1">H1</option>
            <option value="2">H2</option>
            <option value="3">H3</option>
            <option value="paragraph">پاراگراف</option>
          </select>
        </div>
        <div className="w-px h-6 bg-gray-700 mx-2" />

        {/* دکمه‌های ترازبندی */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: "right" }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="راست‌چین"
        >
          <AlignRight size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: "center" }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="وسط‌چین"
        >
          <AlignCenter size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: "left" }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="چپ‌چین"
        >
          <AlignLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: "justify" }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="تراز کامل"
        >
          <AlignJustify size={18} />
        </button>
        <div className="w-px h-6 bg-gray-700 mx-2" />

        {/* دکمه‌های لینک و رسانه */}
        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded ${editor.isActive("link") ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="لینک"
        >
          <LinkIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
          className={`p-2 rounded ${editor.isActive("link") ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"} text-gray-300`}
          title="حذف لینک"
        >
          <LinkIcon size={18} className="rotate-45" />
        </button>
        <button
          type="button"
          onClick={() => setMediaMenu(true)}
          className="p-2 rounded hover:bg-gray-700 text-gray-300"
          title="رسانه"
        >
          <ImageIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded ${editor.isActive("codeBlock") ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          title="کد"
        >
          <Code size={18} />
        </button>
        <button
          type="button"
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="p-2 rounded hover:bg-gray-700 text-gray-300"
          title="رنگ"
        >
          <Palette size={18} />
        </button>
      </div>

      {/* Floating Menu */}
      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{ duration: 200 }}
          className="bg-gray-800 rounded-md shadow-lg p-1 flex gap-1 border border-gray-700"
        >
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`px-2 py-1 text-sm rounded ${editor.isActive("heading", { level: 1 }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-2 py-1 text-sm rounded ${editor.isActive("heading", { level: 2 }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`px-2 py-1 text-sm rounded ${editor.isActive("heading", { level: 3 }) ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          >
            H3
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`px-2 py-1 text-sm rounded ${editor.isActive("paragraph") ? "bg-gray-700" : "hover:bg-gray-700"} text-gray-300`}
          >
            P
          </button>
        </FloatingMenu>
      )}

      {/* Color Picker */}
      {showColorPicker && (
        <div className="fixed top-20 left-5 z-10 p-2 bg-gray-800 rounded-md shadow-lg border border-gray-700">
          <TwitterPicker
            onChange={(color) => {
              editor.chain().focus().setColor(color.hex).run();
              setShowColorPicker(false);
            }}
          />
        </div>
      )}

      {/* Media Menu */}
      {mediaMenu && (
        <div className="fixed top-20 left-5 z-10 p-4 bg-gray-800 rounded-md shadow-lg border border-gray-700 flex flex-col gap-3 w-80 text-gray-200" dir="rtl">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMediaType("image")}
              className={`px-3 py-1 rounded ${mediaType === "image" ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"}`}
            >
              تصویر
            </button>
            <button
              type="button"
              onClick={() => setMediaType("video")}
              className={`px-3 py-1 rounded ${mediaType === "video" ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"}`}
            >
              ویدیو
            </button>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMediaSource("upload")}
              className={`px-3 py-1 rounded ${mediaSource === "upload" ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"}`}
            >
              آپلود
            </button>
            <button
              type="button"
              onClick={() => setMediaSource("url")}
              className={`px-3 py-1 rounded ${mediaSource === "url" ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"}`}
            >
              لینک
            </button>
          </div>
          {mediaSource === "upload" ? (
            <input
              type="file"
              accept={mediaType === "image" ? "image/*" : "video/*"}
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="w-full text-gray-300 bg-gray-700 rounded p-2 file:bg-gray-600 file:text-gray-200 file:border-0 file:rounded file:px-3 file:py-1"
            />
          ) : (
            <input
              type="text"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              placeholder="آدرس فایل"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-gray-200 placeholder-gray-400"
              dir="rtl"
            />
          )}
          {mediaType === "image" && (
            <input
              type="text"
              value={mediaAlt}
              onChange={(e) => setMediaAlt(e.target.value)}
              placeholder="متن Alt"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-gray-200 placeholder-gray-400"
              dir="rtl"
            />
          )}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleMediaInsert}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            >
              درج
            </button>
            <button
              type="button"
              onClick={() => setMediaMenu(false)}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
            >
              انصراف
            </button>
          </div>
        </div>
      )}

      {/* Editor Content */}
      <div className="bg-gray-900" dir="rtl">
        <EditorContent editor={editor} />
      </div>

      <style jsx global>{`
        .ProseMirror {
          direction: rtl !important;
          text-align: right !important;
          background: #1f2937 !important;
          color: #e5e7eb !important;
        }
        .ProseMirror p {
          margin: 1em 0;
          line-height: 1.6;
        }
        .ProseMirror h1,
        .ProseMirror h2,
        .ProseMirror h3 {
          margin: 1.5em 0 1em;
          line-height: 1.2;
        }
        .ProseMirror h1 {
          font-size: 2em;
        }
        .ProseMirror h2 {
          font-size: 1.5em;
        }
        .ProseMirror h3 {
          font-size: 1.25em;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1.5em 0;
          border-radius: 8px;
        }
        .ProseMirror iframe {
          max-width: 100%;
          margin: 1.5em 0;
          border-radius: 8px;
        }
        .ProseMirror pre {
          direction: ltr;
          text-align: left;
          white-space: pre-wrap;
          font-family: "JetBrains Mono", monospace;
        }
        .ProseMirror a {
          color: #60a5fa !important;
        }
      `}</style>
    </div>
  );
};

export default CustomEditor;