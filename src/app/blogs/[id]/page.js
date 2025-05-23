import React from "react";
import { getPosts } from "@/lib/DataFetching";
import Singlepost from "@/Components/BlogComponent/SinglePost/Singlepost";
import Footer from "@/Components/Footer/Footer";
import { generateArticleSchema } from "@/lib/generateArticleSchema";
import Header from "@/Components/Header/Header";

export async function generateMetadata({ params }) {
  const { id } = params;
  const dataposts = await getPosts();

  const findpost = dataposts.filter((item) => item.link == id)[0];
  if (!findpost) {
    return {
      title: "مقاله یافت نشد",
      description: "مقاله‌ای با این شناسه پیدا نشد.",
    };
  }

  return {
    title: findpost.metatitle,
    description: findpost.metadescription,
    keywords: findpost.keyword,
    author: "unicodewebdesign",
    openGraph: {
      title: findpost.h1title || findpost.metatitle,
      description: findpost.metadescription,
      images: findpost.mainimg ? [{ url: findpost.mainimg }] : [],
      url: `https://unicodewebdesign.com/blogs/${findpost.id}`,
    },
    twitter: {
      title: findpost.metatitle,
      description: findpost.metadescription,
      images: findpost.mainimg ? [findpost.mainimg] : [],
    },
  };
}

export default async function Page({ params }) {
  const { id } = params;
  const dataposts = await getPosts();
  const post = dataposts.filter((item) => item.link == id)[0];

  if (!post) {
    return <div>مقاله‌ای یافت نشد</div>;
  }

  const schema = generateArticleSchema(post);
  console.log("Generated Schema:", schema); // برای دیباگ

  return (
    <>
      {/* اضافه کردن اسکیما مستقیم توی JSX */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <Singlepost post={post} />
      <Footer />
    </>
  );
}