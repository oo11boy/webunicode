"use client";

import { useState, useEffect, useRef } from "react";
import Modal from "@/Components/auth/Modal";
import { apiUrl } from "@/lib/ApiUrl";
import CategoryForm from "./CategoryForm";
import CategoriesTable from "./CategoriesTable";

// Initial empty form data for categories
const initialCategoryFormData = {
  text: "",
  link: "",
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState(initialCategoryFormData);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${apiUrl}/categories`);
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    } catch (err) {
      console.error("خطا در دریافت دسته‌بندی‌ها:", err);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("آیا مطمئن هستید که می‌خواهید این دسته‌بندی را حذف کنید؟")) {
      try {
        const res = await fetch(`${apiUrl}/categories`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (res.ok) {
          setCategories(categories.filter((cat) => cat.id !== id));
        }
      } catch (err) {
        console.error("خطا در حذف دسته‌بندی:", err);
      }
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsAddModalOpen(false);
        fetchCategories();
        setFormData(initialCategoryFormData);
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
      const res = await fetch(`${apiUrl}/categories`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedCategory.id, ...formData }),
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        fetchCategories();
        setFormData(initialCategoryFormData);
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (inputRef.current) inputRef.current.focus();
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setFormData(category);
    setIsEditModalOpen(true);
  };

  const handleCancel = () => {
    setFormData(initialCategoryFormData);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
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
          <h1 className="text-2xl md:text-3xl font-bold">مدیریت دسته‌بندی‌ها</h1>
          <button
            onClick={() => {
              setFormData(initialCategoryFormData);
              setIsAddModalOpen(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            افزودن دسته‌بندی جدید
          </button>
        </div>
        <CategoriesTable
          categories={categories}
          handleDelete={handleDelete}
          openEditModal={openEditModal}
        />
      </div>

      <Modal isOpen={isAddModalOpen} onClose={handleCancel} title="افزودن دسته‌بندی جدید">
        <CategoryForm
          isEditModalOpen={false}
          formData={formData}
          error={error}
          handleChange={handleChange}
          onSubmit={handleAddSubmit}
          onCancel={handleCancel}
        />
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={handleCancel} title="ویرایش دسته‌بندی">
        <CategoryForm
          isEditModalOpen={true}
          formData={formData}
          error={error}
          handleChange={handleChange}
          onSubmit={handleEditSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </>
  );
}