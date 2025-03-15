"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/Components/auth/sidebar";


export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

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

  if (loading) return <p>در حال بارگذاری...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">مدیریت پست‌ها</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">ID</th>
                <th className="p-2">عنوان H1</th>
                <th className="p-2">دسته‌بندی</th>
                <th className="p-2">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t">
                  <td className="p-2">{post.id}</td>
                  <td className="p-2">{post.h1title}</td>
                  <td className="p-2">{post.cat}</td>
                  <td className="p-2">
                    <Link href={`/dashboard/posts/edit/${post.id}`}>
                      <button className="bg-blue-500 text-white p-1 rounded mr-2">ویرایش</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-500 text-white p-1 rounded"
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
    </div>
  );
}