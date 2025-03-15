"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/auth/sidebar";

export default function EditPostPage({ params }) {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts`);
      const posts = await res.json();
      const post = posts.find((p) => p.id === Number(id));
      setFormData(post);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/posts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formData }),
      });
      if (res.ok) {
        router.push("/dashboard/posts");
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

  if (!formData) return <p>در حال بارگذاری...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">ویرایش پست</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-2 gap-4">
            <input name="metatitle" value={formData.metatitle} onChange={handleChange} className="p-2 border rounded" required />
            <input name="metadescription" value={formData.metadescription} onChange={handleChange} className="p-2 border rounded" required />
            <input name="h1title" value={formData.h1title} onChange={handleChange} className="p-2 border rounded" required />
            <input name="mainimg" value={formData.mainimg} onChange={handleChange} className="p-2 border rounded" required />
            <textarea name="text" value={formData.text} onChange={handleChange} className="p-2 border rounded col-span-2" rows="4" required />
            <input name="keyword" value={formData.keyword} onChange={handleChange} className="p-2 border rounded" required />
            <input name="link" value={formData.link} onChange={handleChange} className="p-2 border rounded" required />
            <input name="shorttext" value={formData.shorttext} onChange={handleChange} className="p-2 border rounded" required />
            <input name="cat" value={formData.cat} onChange={handleChange} className="p-2 border rounded" required />
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}