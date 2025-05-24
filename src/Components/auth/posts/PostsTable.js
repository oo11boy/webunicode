"use client";

import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

function PostsTable({ posts, handleDelete, openEditModal }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-right">شناسه</th>
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
              <td className="p-3 flex gap-2 justify-end">
                <Link href={`/blogs/${post.link}`} className="text-green-600 hover:text-green-800 p-1">
                  <VisibilityIcon />
                </Link>
                <button onClick={() => openEditModal(post)} className="text-blue-600 hover:text-blue-800 p-1">
                  <EditIcon />
                </button>
                <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-800 p-1">
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

export default PostsTable;