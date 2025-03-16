"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CategoriesTable({ categories, handleDelete, openEditModal }) {
  return (
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
  );
}

export default CategoriesTable;