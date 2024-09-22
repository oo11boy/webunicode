
import React from "react";
import { redirect } from "next/navigation";
import { getPosts } from "@/lib/DataFetching";
import Singlepost from "@/Components/BlogComponent/SinglePost/Singlepost";



export default async function page({ params }) {
  const { id } = params;
  const dataposts = await getPosts();

  const findpost = await dataposts.filter((item) => item.id == id)[0];
  !findpost && redirect("../");

  return (
   <Singlepost findpost={findpost} id={id}/>
  );
}
