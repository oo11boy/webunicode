"use client";
import { useState, useEffect } from "react"; // Removed useMemo from imports since it's not needed at the top level
import Modal from "@/Components/auth/Modal";
import { apiUrl } from "@/lib/ApiUrl";
import React from "react";
import CustomEditor from "../CustomEditor";

// Initial empty form data for posts
const initialPostFormData = {
  metatitle: "",
  metadescription: "",
  h1title: "",
  mainimg: "",
  text: "",
  keyword: "",
  link: "",
  shorttext: "",
  cat: [],
};

// Define PostForm as a regular function component
function PostForm({ isEditModalOpen, formData, error, categories, handleChange, onSubmit, onCancel }) {
  const [imagePreview, setImagePreview] = useState(formData.mainimg || ""); // Image preview
  const [uploading, setUploading] = useState(false); // Upload status
  const [imageUrl, setImageUrl] = useState(formData.mainimg || ""); // Image URL
  const baseUrl = apiUrl.replace("/api", "");

  // Handle image upload
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

  // Handle image URL change
  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    handleChange({ target: { name: "mainimg", value: url } });
    setImagePreview(url);
  };

  // Remove image
  const handleImageRemove = () => {
    handleChange({ target: { name: "mainimg", value: "" } });
    setImagePreview("");
    setImageUrl("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Meta Title */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Meta Title</label>
          <input
            name="metatitle"
            value={formData.metatitle}
            onChange={handleChange}
            placeholder="عنوان متا"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
        </div>

        {/* Meta Description */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Meta Description</label>
          <input
            name="metadescription"
            value={formData.metadescription}
            onChange={handleChange}
            placeholder="توضیحات متا"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
        </div>

        {/* H1 Title */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">H1 Title</label>
          <input
            name="h1title"
            value={formData.h1title}
            onChange={handleChange}
            placeholder="عنوان H1"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
        </div>

        {/* Main Image Section */}
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
            <div>
              <input
                type="url"
                value={imageUrl}
                onChange={handleImageUrlChange}
                placeholder="یا لینک تصویر را وارد کنید"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
              />
            </div>
            {imagePreview && (
              <div className="mt-2 relative border border-gray-200 rounded-lg p-2 bg-gray-50 shadow-md">
                <img
                  src={imagePreview}
                  alt="پیش‌نمایش تصویر"
                  className="w-48 h-48 object-cover rounded-md"
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
        </div>

        {/* Text Editor */}
        <div className="col-span-1 md:col-span-2 space-y-1">
          <label className="block text-sm font-medium text-gray-700">متن پست</label>
          <CustomEditor
            value={formData.text}
            onChange={(content) => handleChange({ target: { name: "text", value: content } })}
          />
        </div>

        {/* Keyword */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Keyword</label>
          <input
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="کلمه کلیدی"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
        </div>

        {/* Link */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Link</label>
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="لینک"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
        </div>

        {/* Short Text */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Short Text</label>
          <input
            name="shorttext"
            value={formData.shorttext}
            onChange={handleChange}
            placeholder="متن کوتاه"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-md"
            required
          />
        </div>

        {/* Categories */}
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
          <p className="text-xs text-gray-500 mt-1">برای انتخاب چند گزینه، Ctrl را نگه دارید.</p>
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

// Optionally memoize the PostForm component if needed
const MemoizedPostForm = React.memo(PostForm);

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [formData, setFormData] = useState(initialPostFormData);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(`${apiUrl}/posts`);
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${apiUrl}/categories`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("خطا در دریافت دسته‌بندی‌ها:", err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("آیا مطمئن هستید که می‌خواهید این پست را حذف کنید؟")) {
      try {
        const res = await fetch(`${apiUrl}/posts`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          setPosts(posts.filter((post) => post.id !== id));
        }
      } catch (err) {
        console.error("خطا در حذف پست:", err);
      }
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cat: formData.cat.join(",") }),
      });
      if (res.ok) {
        setIsAddModalOpen(false);
        fetchPosts();
        setFormData(initialPostFormData);
      } else {
        const data = await res.json();
        setError(data.error || "خطایی رخ داد");
      }
    } catch (err) {
      setError("خطا در اتصال به سرور");
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/posts`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedPost.id, ...formData, cat: formData.cat.join(",") }),
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        fetchPosts();
        setFormData(initialPostFormData);
      } else {
        const data = await res.json();
        setError(data.error || "خطایی رخ داد");
      }
    } catch (err) {
      setError("خطا در اتصال به سرور");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cat") {
      const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
      setFormData((prev) => ({ ...prev, cat: selectedOptions }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const openEditModal = (post) => {
    setSelectedPost(post);
    setFormData({
      ...post,
      cat: post.cat ? post.cat.split(",") : [],
    });
    setIsEditModalOpen(true);
  };

  const handleCancel = () => {
    setFormData(initialPostFormData);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;

  return (
    <>
      <div className="flex-1 p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">مدیریت پست‌ها</h1>
          <button
            onClick={() => {
              setFormData(initialPostFormData);
              setIsAddModalOpen(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            افزودن پست جدید
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-right">ID</th>
                <th className="p-3 text-right">عنوان H1</th>
                <th className="p-3 text-right">دسته‌بندی</th>
                <th className="p-3 text-right">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{post.id}</td>
                  <td className="p-3">{post.h1title}</td>
                  <td className="p-3">{post.cat}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => openEditModal(post)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      ویرایش
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isAddModalOpen} onClose={handleCancel} title="افزودن پست جدید">
        <MemoizedPostForm
          isEditModalOpen={false}
          formData={formData}
          error={error}
          categories={categories}
          handleChange={handleChange}
          onSubmit={handleAddSubmit}
          onCancel={handleCancel}
        />
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={handleCancel} title="ویرایش پست">
        <MemoizedPostForm
          isEditModalOpen={true}
          formData={formData}
          error={error}
          categories={categories}
          handleChange={handleChange}
          onSubmit={handleEditSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </>
  );
}