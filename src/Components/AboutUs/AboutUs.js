import { SocialDistance } from "@mui/icons-material";
import TopHeader from "../Header/TopHeader";
import { SiteEmail, SitePhone } from "../UiComponents/Contact/Contact";
import ImageWithLoader from "../UiComponents/ImageWithLoader/Image";
import TopSectionText from "../UiComponents/TopSectionsTitle/TopSectionText";
import SocialIcons from "../UiComponents/SocialIcons/SocialIcons";
import AboutUsBox from "./AboutUsBox";
import Footer from "../Footer/Footer";

export default function AboutUs() {
  return (
    <>
      <TopHeader />
      <section dir="rtl" class="bg-white mt-10 dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="text-center ">
            <p class="font-medium text-blue-500 dark:text-blue-400 alibaba">
              درباره‌ی ما
            </p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white yekan">
              ما کی هستیم؟
            </h1>
          </div>

          <div className="relative m-auto mt-10">
            <img
              className="m-auto w-[1000px] rounded-xl"
              src="/image/about.jpg"
              alt=""
            />
            <div className="absolute m-auto inset-0 w-[1000px] bg-black opacity-50"></div>
            <img
              className="absolute w-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              src="/image/play-icon.png"
              alt="Play Icon"
            />
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <AboutUsBox number='10+' text='کارمندان باتجربه'/>

            <AboutUsBox number='50+' text='پروژه موفق'/>

            <AboutUsBox number='10+' text='سال تجربه'/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
