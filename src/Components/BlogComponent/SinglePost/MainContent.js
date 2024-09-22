import SharePost from "@/Components/UiComponents/SharePost/SharePost";
import ToHtml from "@/Components/UiComponents/ToHtml/ToHtml";
import React from "react";

export default function MainContent({ findpost }) {
  return (
    <div class="px-4 postsingle lg:px-1 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:!w-3/4">
      <ToHtml html={findpost.text} />

      <div>
        <div className="underarticle">
          <SharePost
            title={findpost.metatitle}
            shareUrl={`https://unicodewebdesign.com/blog/${findpost.id}`}
          />
        </div>
      </div>
    </div>
  );
}
