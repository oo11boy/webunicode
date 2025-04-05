import Comments from "@/Components/Comments/Comments";
import FAQ from "@/Components/FAQ/FAQ";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import PortfolioSlider from "@/Components/PortfolioSlider/PortfolioSlider";
import Feature from "@/Components/SinglePageComponents/Feature/Feature";
import Poster from "@/Components/SinglePageComponents/Poster/Poster";
import WhyUsSinglePage from "@/Components/SinglePageComponents/WhyUsSinglePage/WhyUsSinglePage";
import WhyUs from "@/Components/WhyUs/WhyUs";
import { company_design, goodprice_design, store_design } from "@/lib/DataFetching";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { singlepage } = params;

  const pageData = {
    store: store_design,
    company: company_design,
    resume: goodprice_design,
  };

  const defaultTitle = "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان";
  const defaultDescription = "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.";
  const defaultKeywords = "طراحی سایت ارزان ، خرید سایت ارزان ، طراحی سایت شرکتی ارزان ، طراحی سایت فروشگاهی ارزان ، طراحی سایت شخصی رزومه ای ارزان ، سفارش طراحی سایت ارزان ، خرید سایت فروشگاهی";

  const data = pageData[singlepage] || {};

  return {
    title: data.metatitle || defaultTitle,
    description: data.undertitlesec1 || defaultDescription,
    keywords: data.keywords || defaultKeywords,
    author: "unicodewebdeisgn",
    openGraph: {
      title: data.metatitle || defaultTitle,
      description: data.undertitlesec1 || defaultDescription,
      image: "../img/logo.webp",
    },
    twitter: {
      title: data.metatitle || defaultTitle,
      description: data.undertitlesec1 || defaultDescription,
      image: "../img/logo.webp",
    },
  };
}

export default function page({ params }) {
  const { singlepage } = params;
  const validPages = ['store', 'company', 'resume'];

  if (!validPages.includes(singlepage)) {
    return notFound();
  }

  return (
    <div>
      <Header />
      <Poster singlepageid={singlepage} />
      <WhyUs singlepageid={singlepage} />
      <WhyUsSinglePage />
      <Feature singlepageid={singlepage} />
      <PortfolioSlider singlepageid={singlepage} />
      <FAQ singlepageid={singlepage} />
      <Comments />
      <Footer />
    </div>
  );
}
