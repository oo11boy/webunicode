import AllPosts from "@/Components/BlogComponent/AllPosts/AllPosts";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { getPosts } from "@/lib/DataFetching";
import React from "react";

export async function generateMetadata() {
  return {
    title: "وبلاگ",
    description:
      "اگر به دنبال مقالات شرکت طراحی سایت یونیکد هستید در اینجا مقالات را برای شما آورده ایم",

    author: "unicodewebdeisgn",
  };
}

export default async function page() {
  const dataposts = await getPosts();
  return (
    <>
      <Header />
      <AllPosts dataposts={dataposts} />
      <Footer />
    </>
  );
}
