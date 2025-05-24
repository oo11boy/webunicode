import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import CategoriesPage from "./categories/categories";
import Uploads from "./Uploads/Uploads";
import PostsPage from "./posts/posts";

export default function DashContent({ Page }) {
  return (
    <>
      {Page == "dashboard" && <Dashboard />}
      {Page == "manage-posts" && <PostsPage />}
      {Page === "categories" && <CategoriesPage />}
      {Page === "uploads" && <Uploads />}
    </>
  );
}
