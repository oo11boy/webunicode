import React from "react";
import "./ArticlesSection.css";
import { PostCard } from "./PostCard";
import TopSectionText from "@/Components/UiComponents/TopSectionsTitle/TopSectionText";
import ViewMoreBtn from "@/Components/UiComponents/Buttons/ViewMoreBtn";
import { getPosts } from "@/lib/DataFetching";



export default async function ArticlesSection() {
  let posts = await getPosts()
  return (
    <div dir="rtl">
      <div className="container mt-20 articles">
        <TopSectionText
          toptext={"آخرین"}
          maincolor={"black"}
          maintext={"مطالب وبلاگ"}
          linecolor={"red"}
        />
        <div className="py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              {posts.slice(-1).map((item) => (
                <span key={item.id}>
                  <PostCard heightcard={"730px"} item={item} className="" />
                </span>
              ))}
            </div>

            <div>
              {posts.slice(0, 2).map((item) => (
                <span key={item.id}>
                  <PostCard
                    heightcard={"355px"}
                    item={item}
                    className="mb-[20px]"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mb-5">
          <ViewMoreBtn link={"./blog"} text={"مشاهده تمام مقالات"} />
        </div>
      </div>
    </div>
  );
}
