"use client";

import React, { useState, useEffect, useRef } from "react"; // Removed useMemo since it's not needed at the top level
import Modal from "@/Components/auth/Modal";
import { apiUrl } from "@/lib/ApiUrl";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Initial empty form data for categories
const initialCategoryFormData = {
  text: "",
  link: "",
};

// Define CategoryForm as a regular function component
function CategoryForm({ isEditModalOpen, formData, error, handleChange, onSubmit, onCancel }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">متن دسته‌بندی</label>
          <input
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="متن دسته‌بندی را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm hover:shadow-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">لینک</label>
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="لینک دسته‌بندی را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm hover:shadow-md"
            required
          />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          {isEditModalOpen ? "ذخیره تغییرات" : "ثبت دسته‌بندی"}
        </button>
      </div>
    </form>
  );
}

// Optionally memoize the CategoryForm component if needed
const MemoizedCategoryForm = React.memo(CategoryForm);

export default function Categories() {
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
        setFormData(initialCategoryFormData); // Reset form
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
        setFormData(initialCategoryFormData); // Reset form after successful edit
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
    setFormData(initialCategoryFormData); // Reset form on cancel
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;

  return (
    <>
      <div className="flex-1 p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">مدیریت دسته‌بندی‌ها</h1>
          <button
            onClick={() => {
              setFormData(initialCategoryFormData); // Reset form before opening add modal
              setIsAddModalOpen(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            افزودن دسته‌بندی جدید
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-right">شناسه</th>
                <th className="p-3 text-right">متن</th>
                <th className="p-3 text-right">لینک</th>
                <th className="p-3 text-right">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{category.id}</td>
                  <td className="p-3">{category.text}</td>
                  <td className="p-3">{category.link}</td>
                  <td className="p-3 flex gap-2 justify-end">
                    <button
                      onClick={() => openEditModal(category)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <DeleteIcon />
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
        onClose={handleCancel}
        title="افزودن دسته‌بندی جدید"
      >
        <MemoizedCategoryForm
          isEditModalOpen={false}
          formData={formData}
          error={error}
          handleChange={handleChange}
          onSubmit={handleAddSubmit}
          onCancel={handleCancel}
        />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCancel}
        title="ویرایش دسته‌بندی"
      >
        <MemoizedCategoryForm
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