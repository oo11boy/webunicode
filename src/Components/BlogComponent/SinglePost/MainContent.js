import SharePost from "@/Components/UiComponents/SharePost/SharePost";
import ToHtml from "@/Components/UiComponents/ToHtml/ToHtml";

export default function MainContent({ findpost }) {
  return (
    <article className="w-full lg:w-3/4 px-4 sm:px-6 lg:px-1 mt-12 text-gray-700 text-lg leading-relaxed">
      <ToHtml content={findpost.text} />
      <section className="mt-8 p-4 bg-cyan-100 rounded-2xl">
        <SharePost
          title={findpost.metatitle}
          shareUrl={`https://unicodewebdesign.com/blog/${findpost.id}`}
        />
      </section>
    </article>
  );
}