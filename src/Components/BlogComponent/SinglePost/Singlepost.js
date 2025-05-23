import { notFound } from "next/navigation";
import TopBar from "./TopBar";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import './SinglePost.css';
export default async function Singlepost({ post }) {

  if (!post) {
    notFound();
  }

  return (
    <div dir="rtl" className="w-[90%] SinglePost mt-20 mx-auto">
      <main className="mt-10">
        <TopBar findpost={post} />
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <MainContent findpost={post} />
          <SideBar />
        </div>
      </main>
    </div>
  );
}