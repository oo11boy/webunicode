"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ItemsContent() {
  const [sliderItems, setSliderItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API + `/introslider`
        );
        setSliderItems(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(process.env.NEXT_PUBLIC_API + `/introslider/${id}`);
      // به‌روزرسانی لیست پس از حذف آیتم
      setSliderItems(sliderItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  if (!sliderItems) {
    return (
      <div dir="rtl" className="p-5 text-center">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="p-5 border border-black h-screen text-right mx-3 w-[80%]"
    >
      <table className="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300">تصویر</th>
            <th className="border border-slate-300">عنوان</th>
            <th className="border border-slate-300">توضیح</th>
            <th className="border border-slate-300">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {sliderItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-300">
                <img src={item.image} alt={item.title} />
              </td>
              <td className="border border-slate-300">{item.title}</td>
              <td className="border border-slate-300">{item.content}</td>
              <td className="border border-slate-300">
                <p
                  onClick={() => deleteHandler(item.id)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  حذف
                </p>
                <p style={{ cursor: "pointer", color: "blue" }}>ویرایش</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
