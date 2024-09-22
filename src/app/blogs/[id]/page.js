
import React from "react";
import { redirect } from "next/navigation";
import { getPosts } from "@/lib/DataFetching";
import Singlepost from "@/Components/BlogComponent/SinglePost/Singlepost";
import TopHeader from "@/Components/Header/TopHeader";
import Footer from "@/Components/Footer/Footer";



export default async function page({ params }) {
  const { id } = params;
  const dataposts = await getPosts();

  const findpost = await dataposts.filter((item) => item.id == id)[0];
  !findpost && redirect("../");

  return (
    <>
      <TopHeader />
      <Singlepost findpost={findpost} id={id}/>
      <Footer/>
      </>
 
  );
}
