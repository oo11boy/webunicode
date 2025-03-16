"use client";

import { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

export default function Uploads() {
  const [file, setFile] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch uploaded files from Cloudinary on mount
  useEffect(() => {
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    try {
      const response = await fetch("/api/upload/list", {
        cache: "no-store", // Prevent caching to ensure fresh data
      });
      if (!response.ok) {
        throw new Error("Failed to fetch uploads");
      }
      const data = await response.json();
      setUploads(data.resources || []);
    } catch (error) {
      console.error("Error fetching uploads:", error);
      setMessage("خطا در بارگذاری لیست فایل‌ها");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("لطفاً ابتدا یک فایل انتخاب کنید");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    // Optimistic update: Create a temporary upload object
    const tempUpload = {
      public_id: `temp_${Date.now()}`,
      secure_url: URL.createObjectURL(file),
      resource_type: file.type.startsWith("video") ? "video" : "image",
    };
    setUploads((prev) => [tempUpload, ...prev]);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("فایل با موفقیت آپلود شد");
        setFile(null);
        // Replace the temporary upload with the real one
        await fetchUploads(); // Fetch the latest list
      } else {
        // Remove the temporary upload if the request fails
        setUploads((prev) => prev.filter((upload) => upload.public_id !== tempUpload.public_id));
        setMessage(data.error || "خطا در آپلود فایل");
      }
    } catch (error) {
      setUploads((prev) => prev.filter((upload) => upload.public_id !== tempUpload.public_id));
      setMessage("خطا در اتصال به سرور: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (publicId) => {
    if (!confirm("آیا مطمئن هستید که می‌خواهید این فایل را حذف کنید؟")) return;

    // Optimistic update: Remove the item immediately
    const deletedUpload = uploads.find((upload) => upload.public_id === publicId);
    setUploads((prev) => prev.filter((upload) => upload.public_id !== publicId));

    try {
      const response = await fetch("/api/upload/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (response.ok) {
        setMessage("فایل با موفقیت حذف شد");
      } else {
        // Revert the optimistic update if the delete fails
        setUploads((prev) => [...prev, deletedUpload].sort((a, b) => b.public_id - a.public_id));
        setMessage("خطا در حذف فایل");
      }
    } catch (error) {
      setUploads((prev) => [...prev, deletedUpload].sort((a, b) => b.public_id - a.public_id));
      setMessage("خطا در اتصال به سرور: " + error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">مدیریت فایل‌ها</h2>

      {/* Upload Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
              <CloudUploadIcon />
              انتخاب فایل
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif,video/mp4,video/webm"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {file && <span className="text-sm text-gray-600">{file.name}</span>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-32 py-2 px-4 rounded-lg text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {loading ? "در حال آپلود..." : "آپلود"}
          </button>
          {message && (
            <p className={`text-sm ${message.includes("موفقیت") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </form>
      </div>

      {/* Uploaded Files List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uploads.map((upload) => (
          <div
            key={upload.public_id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col"
          >
            {upload.resource_type === "image" ? (
              <img
                src={upload.secure_url}
                alt={upload.public_id}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            ) : (
              <video
                src={upload.secure_url}
                controls
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 flex items-center gap-1">
                {upload.resource_type === "image" ? <ImageIcon /> : <VideoCameraBackIcon />}
                {upload.public_id.split("/").pop()}
              </span>
              <button
                onClick={() => handleDelete(upload.public_id)}
                className="text-red-600 hover:text-red-800"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}