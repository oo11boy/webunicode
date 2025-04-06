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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* عنوان متا */}
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
            <span className="font-semibold text-blue-600">عنوان متا:</span> این بخش عنوانی است که در نتایج جستجوی گوگل نمایش داده می‌شود. بهتر است بین 50 تا 60 کاراکتر باشد.
          </p>
        </div>

        {/* توضیحات متا */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">توضیحات متا</label>
          <input
            name="metadescription"
            value={formData.metadescription}
            onChange={handleChange}
            placeholder="توضیحات متا را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">توضیحات متا:</span> خلاصه‌ای کوتاه و جذاب (حدود 150-160 کاراکتر) از محتوای پست.
          </p>
        </div>

        {/* عنوان H1 */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">عنوان H1</label>
          <input
            name="h1title"
            value={formData.h1title}
            onChange={handleChange}
            placeholder="عنوان اصلی پست را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">عنوان H1:</span> عنوان اصلی صفحه که باید منحصربه‌فرد و جذاب باشد.
          </p>
        </div>

        {/* تصویر اصلی */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">تصویر اصلی</label>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageUpload}
                disabled={uploading}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {uploading && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                  در حال آپلود...
                </span>
              )}
            </div>
            <input
              type="url"
              value={imageUrl}
              onChange={handleImageUrlChange}
              placeholder="لینک تصویر را وارد کنید"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            />
            {imagePreview && (
              <div className="mt-2 relative border border-gray-200 rounded-lg p-2 bg-gray-50 shadow-md">
                <img
                  src={imagePreview}
                  alt="پیش‌نمایش تصویر"
                  className="w-48 h-48 object-cover rounded-md mx-auto"
                  onError={() => setImagePreview("")}
                />
                <button
                  type="button"
                  onClick={handleImageRemove}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-sm"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">تصویر اصلی:</span> تصویری باکیفیت و مرتبط با موضوع پست انتخاب کنید.
          </p>
        </div>

        {/* متن اصلی پست */}

<div className="col-span-1 md:col-span-2 space-y-1">
  <label className="block text-sm font-medium text-gray-700">متن اصلی پست</label>
  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
    محتوای اصلی پست را اینجا بنویسید. از کلمات کلیدی به‌صورت طبیعی استفاده کنید.
  </p>
  <CustomEditor
    value={formData.text}
    onChange={(content) => handleChange({ target: { name: "text", value: content } })}
  />
</div>

        {/* کلمه کلیدی */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">کلمه کلیدی</label>
          <input
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="کلمه کلیدی اصلی را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">کلمه کلیدی:</span> کلمه یا عبارتی که می‌خواهید پست شما با آن رتبه بگیرد.
          </p>
        </div>

        {/* لینک */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">لینک</label>
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="لینک مرتبط را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">لینک:</span> لینک داخلی یا خارجی مرتبط با پست.
          </p>
        </div>

        {/* متن کوتاه */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">متن کوتاه</label>
          <input
            name="shorttext"
            value={formData.shorttext}
            onChange={handleChange}
            placeholder="خلاصه پست را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">متن کوتاه:</span> خلاصه‌ای جذاب و کوتاه از پست (حدود 2-3 جمله).
          </p>
        </div>

        {/* دسته‌بندی‌ها */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">دسته‌بندی‌ها</label>
          <select
            name="cat"
            multiple
            value={formData.cat}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md max-h-40"
            required
          >
            {categories.map((category) => (
              <option key={category.id} value={category.link}>
                {category.text}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-semibold text-blue-600">دسته‌بندی‌ها:</span> دسته‌های مرتبط با پست را انتخاب کنید.
          </p>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          انصراف
        </button>
        <button
          type="submit"
          disabled={uploading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg disabled:bg-blue-400"
        >
          {isEditModalOpen ? "ذخیره تغییرات" : "ثبت پست"}
        </button>
      </div>
    </form>
  );
}

export default React.memo(PostForm);