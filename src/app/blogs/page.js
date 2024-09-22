import AllPosts from "@/Components/BlogComponent/AllPosts/AllPosts";
import Footer from "@/Components/Footer/Footer";
import TopHeader from "@/Components/Header/TopHeader";
import { getPosts } from "@/lib/DataFetching";
import React from "react";

export default async function page() {
  const dataposts = await getPosts();
  return (
    <>
      <TopHeader />
      <AllPosts dataposts={dataposts} />
      <Footer />
    </>
  );
}
