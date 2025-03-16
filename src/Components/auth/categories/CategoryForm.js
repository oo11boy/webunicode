"use client";

import React from "react";

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

export default React.memo(CategoryForm);