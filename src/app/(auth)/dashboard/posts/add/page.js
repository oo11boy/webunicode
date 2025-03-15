"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/auth/sidebar";

export default function AddPostPage() {
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
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">افزودن پست جدید</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-2 gap-4">
            <input name="metatitle" placeholder="Meta Title" onChange={handleChange} className="p-2 border rounded" required />
            <input name="metadescription" placeholder="Meta Description" onChange={handleChange} className="p-2 border rounded" required />
            <input name="h1title" placeholder="H1 Title" onChange={handleChange} className="p-2 border rounded" required />
            <input name="mainimg" placeholder="Main Image URL" onChange={handleChange} className="p-2 border rounded" required />
            <textarea name="text" placeholder="Text" onChange={handleChange} className="p-2 border rounded col-span-2" rows="4" required />
            <input name="keyword" placeholder="Keyword" onChange={handleChange} className="p-2 border rounded" required />
            <input name="link" placeholder="Link" onChange={handleChange} className="p-2 border rounded" required />
            <input name="shorttext" placeholder="Short Text" onChange={handleChange} className="p-2 border rounded" required />
            <input name="cat" placeholder="Category" onChange={handleChange} className="p-2 border rounded" required />
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">
            ثبت پست
          </button>
        </form>
      </div>
    </div>
  );
}