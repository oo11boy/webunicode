import React from "react";
import "./ArticlesSection.css";
import { PostCard } from "./PostCard";
import TopSectionText from "@/Components/UiComponents/TopSectionsTitle/TopSectionText";

export default function ArticlesSection() {
  const posts = [
    {
      id: 2,
      title: "عنوان پست 2 اینجاست",
      Category: "طراحی سایت",
      date: "1 آبان 1402",
      content: "توضیجی کوتاه برای پست 2",
      img: "https://demo.unlimitedweb.ir/Consua/new/wp-content/uploads/2023/09/blog-3-598x321.jpg",
    },
    {
      id: 3,
      title: "عنوان پست 3 اینجاست",
      Category: "هوش مصنوعی",
      date: "16 مهر 1402",
      content: "توضیجی کوتاه برای پست 3",
      img: "https://demo.unlimitedweb.ir/Consua/new/wp-content/uploads/2023/09/blog-6-598x321.jpg",
    },
    {
      id: 1,
      title: "عنوان پست 1 اینجاست",
      Category: "سئو",
      date: "29 شهریور 1402",
      content: "توضیجی کوتاه برای پست 1",
      img: "https://demo.unlimitedweb.ir/Consua/new/wp-content/uploads/2023/01/blog-1-598x673.jpg",
    },
  ];

  return (
    <div dir="rtl">
      <div className="container mt-20 articles">
        <TopSectionText toptext={'آخرین'} maincolor={'black'} maintext={"مطالب وبلاگ"} linecolor={'red-600'}/>
        <div className=" py-10 lg:py-14 ">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              {posts.slice(-1).map((item) => (
                <PostCard heightcard={"730px"} item={item} className="" />
              ))}
            </div>

            <div>
              {posts.slice(0, -1).map((item) => (
                <PostCard
                  heightcard={"355px"}
                  item={item}
                  className="mb-[20px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
