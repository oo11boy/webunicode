
import React from "react";
import { redirect } from "next/navigation";
import { getPosts } from "@/lib/DataFetching";
import Singlepost from "@/Components/BlogComponent/SinglePost/Singlepost";
import TopHeader from "@/Components/Header/TopHeader";
import Footer from "@/Components/Footer/Footer";


export async function generateMetadata({ params }) {
  const { id } = params;
  const dataposts = await getPosts();

  const findpost = await dataposts.filter((item) => item.id == id)[0];
  return {
    title: findpost.metatitle,
    description: findpost.metadescription,
    keywords: findpost.keyword,
    author: "unicodewebdeisgn",
    openGraph: {
      title: findpost.h1title || findpost.metatitle,
      description: findpost.metadescription,
      image: findpost.mainimg,
      url: `https://unicodewebdesign.com/blogs/${findpost.id}`,
    },
    twitter: {
      title: findpost.metatitle,
      description: findpost.metadescription,
      image: findpost.mainimg,
    },
  };
}

export default async function page({ params }) {
  const { id } = params;

  return (
    <>
      <TopHeader />
      <Singlepost id={id}/>
      <Footer/>
      </>
 
  );
}
