import ResponsiveIframe from "@/Components/UiComponents/ResponsiveIframe/ResponsiveIframe";

export const metadata = {
  title: "مشاهده دمو قالب",
  author: "unicodewebdeisgn",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page({ params }) {
  const { portfolioid } = params;
  return <ResponsiveIframe id={portfolioid} />;
}