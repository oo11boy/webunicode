import ResponsiveIframe from "@/Components/UiComponents/ResponsiveIframe/ResponsiveIframe";

export const metadata = {
  title: "مشاهده دمو قالب",

  author: "unicodewebdeisgn",
};

export default function Page({ params }) {
  const { portfolioid } = params;

  return <ResponsiveIframe id={portfolioid} />;
}
