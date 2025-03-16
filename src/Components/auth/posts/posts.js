"use client";

import { useState, useEffect } from "react";
import Modal from "@/Components/auth/Modal";
import { apiUrl } from "@/lib/ApiUrl";
import PostForm from "./PostForm";
import PostsTable from "./PostsTable";

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
    setFormData({ ...post, cat: post.cat ? post.cat.split(",") : [] });
    setIsEditModalOpen(true);
  };

  const handleCancel = () => {
    setFormData(initialPostFormData);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

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
        <PostsTable posts={posts} handleDelete={handleDelete} openEditModal={openEditModal} />
      </div>

      <Modal isOpen={isAddModalOpen} onClose={handleCancel} title="افزودن پست جدید">
        <PostForm
          isEditModalOpen={false}
          formData={formData}
          error={error}
          categories={categories}
          handleChange={handleChange}
          onSubmit={handleAddSubmit}
          onCancel={handleCancel}
          apiUrl={apiUrl}
        />
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={handleCancel} title="ویرایش پست">
        <PostForm
          isEditModalOpen={true}
          formData={formData}
          error={error}
          categories={categories}
          handleChange={handleChange}
          onSubmit={handleEditSubmit}
          onCancel={handleCancel}
          apiUrl={apiUrl}
        />
      </Modal>
    </>
  );
}