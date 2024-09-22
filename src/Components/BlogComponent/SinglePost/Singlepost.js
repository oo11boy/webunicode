import React from "react";
import ResoponsiveHeader from "@/Components/Header/ResoponsiveHeader";
import Footer from "@/Components/Footer/Footer";
import "./SinglePost.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
export default function Singlepost({ findpost }) {
  return (
    <>
      <ResoponsiveHeader />
      <div dir="rtl" className="w-[90%] SinglePost  mx-auto">
        <main class="mt-10 ">
          <TopBar findpost={findpost} />

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <MainContent findpost={findpost} />
            <SideBar />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
