"use client";
import { usePost } from "@/CustomHooks/usePost/usePost";
import React, { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const { data, loading, error, postData } = usePost(
    process.env.NEXT_PUBLIC_API + "/introslider"
  );
console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
};

  return (
    <form  onSubmit={handleSubmit} action="" dir="rtl" className="flex flex-col w-1/2 m-auto  gap-5">
      <input
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="p-3 border-1 border-black border"
        type="text"
        placeholder="عنوان"
      />
      <input
         value={formData.link}
         onChange={(e) => setFormData({ ...formData, link: e.target.value })}
     
        className="p-3 border-1 border-black border"
        type="text"
        placeholder="لینک"
      />
      <input
         value={formData.content}
         onChange={(e) => setFormData({ ...formData, content: e.target.value })}
     
        className="p-3 border-1 border-black border"
        type="text"
        placeholder="متن"
      />
      <input
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      
        className="p-3 border-1 border-black border"
        type="text"
        placeholder="تصویر"
      />
       <button type="submit" disabled={loading}>
                    {loading ? 'در حال ارسال...' : 'ارسال'}
                </button>
    </form>
  );
}
