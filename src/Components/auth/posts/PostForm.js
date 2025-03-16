"use client";

import React, { useState } from "react";
import CustomEditor from "../CustomEditor";

function PostForm({ isEditModalOpen, formData, error, categories, handleChange, onSubmit, onCancel, apiUrl }) {
  const [imagePreview, setImagePreview] = useState(formData.mainimg || "");
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(formData.mainimg || "");
  const baseUrl = apiUrl.replace("/api", "");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      alert("فقط فرمت‌های JPEG، PNG و GIF مجاز هستند.");
      return;
    }

    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    setUploading(true);
    try {
      const res = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: uploadFormData,
      });
      const data = await res.json();
      if (res.ok) {
        const fullImageUrl = data.url.startsWith("http")
          ? data.url
          : `${baseUrl}${data.url.startsWith("/") ? "" : "/"}${data.url}`;
        handleChange({ target: { name: "mainimg", value: fullImageUrl } });
        setImagePreview(fullImageUrl);
        setImageUrl(fullImageUrl);
      } else {
        alert(data.error || "خطا در آپلود تصویر");
      }
    } catch (err) {
      alert("خطا در اتصال به سرور");
    } finally {
      setUploading(false);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    handleChange({ target: { name: "mainimg", value: url } });
    setImagePreview(url);
  };

  const handleImageRemove = () => {
    handleChange({ target: { name: "mainimg", value: "" } });
    setImagePreview("");
    setImageUrl("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Form fields remain the same as in your original code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">عنوان متا</label>
          <input
            name="metatitle"
            value={formData.metatitle}
            onChange={handleChange}
            placeholder="عنوان متا را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">عنوان متا:</span> این بخش عنوانی است که در نتایج جستجوی گوگل نمایش داده می‌شود.
          </p>
        </div>

        {/* Add other fields similarly */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">تصویر اصلی</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/gif"
            onChange={handleImageUpload}
            disabled={uploading}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {uploading && <span>در حال آپلود...</span>}
          <input
            type="url"
            value={imageUrl}
            onChange={handleImageUrlChange}
            placeholder="لینک تصویر را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {imagePreview && (
            <div className="mt-2 relative">
              <img src={imagePreview} alt="پیش‌نمایش" className="w-48 h-48 object-cover rounded-md" />
              <button type="button" onClick={handleImageRemove} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">
                ✕
              </button>
            </div>
          )}
        </div>

        <div className="col-span-1 md:col-span-2 mb-12">
          <label className="block text-sm font-medium text-gray-700">متن اصلی پست</label>
          <CustomEditor
            value={formData.text}
            onChange={(content) => handleChange({ target: { name: "text", value: content } })}
          />
        </div>

        {/* Add remaining fields */}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end gap-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg">
          انصراف
        </button>
        <button type="submit" disabled={uploading} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
          {isEditModalOpen ? "ذخیره تغییرات" : "ثبت پست"}
        </button>
      </div>
    </form>
  );
}

export default React.memo(PostForm);