// pages/dashboard/posts.jsx
"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/Components/auth/sidebar";
import Modal from "@/Components/auth/Modal";


export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [formData, setFormData] = useState({
    metatitle: "",
    metadescription: "",
    h1title: "",
    mainimg: "",
    text: "",
    keyword: "",
    link: "",
    shorttext: "",
    cat: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("آیا مطمئن هستید که می‌خواهید این پست را حذف کنید؟")) {
      try {
        const res = await fetch("/api/posts", {
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsAddModalOpen(false);
        fetchPosts();
        setFormData({
          metatitle: "",
          metadescription: "",
          h1title: "",
          mainimg: "",
          text: "",
          keyword: "",
          link: "",
          shorttext: "",
          cat: "",
        });
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedPost.id, ...formData }),
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        fetchPosts();
      } else {
        const data = await res.json();
        setError(data.error || "خطایی رخ داد");
      }
    } catch (err) {
      setError("خطا در اتصال به سرور");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openEditModal = (post) => {
    setSelectedPost(post);
    setFormData(post);
    setIsEditModalOpen(true);
  };

  const PostForm = () => (
    <form onSubmit={isEditModalOpen ? handleEditSubmit : handleAddSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="metatitle" value={formData.metatitle} onChange={handleChange} placeholder="Meta Title" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="metadescription" value={formData.metadescription} onChange={handleChange} placeholder="Meta Description" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="h1title" value={formData.h1title} onChange={handleChange} placeholder="H1 Title" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="mainimg" value={formData.mainimg} onChange={handleChange} placeholder="Main Image URL" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Text" className="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" required />
        <input name="keyword" value={formData.keyword} onChange={handleChange} placeholder="Keyword" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="link" value={formData.link} onChange={handleChange} placeholder="Link" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="shorttext" value={formData.shorttext} onChange={handleChange} placeholder="Short Text" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="cat" value={formData.cat} onChange={handleChange} placeholder="Category" className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
        {isEditModalOpen ? "ذخیره تغییرات" : "ثبت پست"}
      </button>
    </form>
  );

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;

  return (
    <div  dir="rtl"  className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">مدیریت پست‌ها</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
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

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="افزودن پست جدید"
      >
        <PostForm />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="ویرایش پست"
      >
        <PostForm />
      </Modal>
    </div>
  );
}