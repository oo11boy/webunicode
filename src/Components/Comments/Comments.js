"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper styles for Pagination
import TopSectionsTitle from "../UiComponents/TopSectionsTitle/TopSectionText";
import { Autoplay, Pagination } from "swiper/modules";
import "./Comments.css";
import CardComment from "./CardComment";

export default function Comments() {
  const infocomment = [
    {
      id: 3,
      title: "سرعت و کیفیت بالا",
      comment:
        "طراحی سایت شرکتی ما با این تیم بسیار عالی بود. آنها با دقت و حرفه‌ای‌گری تمامی نیازهای ما را پیاده‌سازی کردند. نتیجه نهایی یک سایت زیبا و کاربردی است و پشتیبانی آنها نیز بسیار عالی بود.",
      name: "سحر نادری",
      sitename: "شرکت میهن سازه",
    },
    {
      id: 4,
      title: "تجربه‌ای لذت‌بخش",
      comment:
        "همکاری با این تیم در طراحی سایت بسیار لذت‌بخش بود. آنها به جزئیات توجه کرده و طراحی سایت را به گونه‌ای انجام دادند که کاملاً با برند ما هماهنگ است. سرعت عمل و کیفیت کار آنها بسیار عالی بود.",
      name: "علی عابدی",
      sitename: "کسب‌وکار من",
    },
    {
      id: 5,
      title: "پشتیبانی فوق‌العاده",
      comment:
        "طراحی سایت من توسط این تیم بسیار خوب انجام شد و پشتیبانی پس از طراحی فوق‌العاده بود. هر بار که مشکلی پیش می‌آمد، تیم به سرعت و با دقت عمل می‌کرد. طراحی سایت کاربرپسند و مطابق با استانداردهای روز بود.",
      name: "مریم سلیمانی",
      sitename: "پشتیبانی وب سایت",
    },
    {
      id: 6,
      title: "خدمات بی‌نظیر",
      comment:
        "طراحی سایت توسط این تیم به طور کامل مطابق با انتظارات ما بود. آنها با دقت به نیازهای ما گوش دادند و طراحی را به شکلی انجام دادند که هم از نظر بصری و هم عملکردی عالی باشد.",
      name: "حمید حسینی",
      sitename: "دیزاین عالی",
    },
    {
      id: 7,
      title: "پروژه‌ای موفق",
      comment:
        "تیم طراحی سایت با تخصص و تجربه خود، پروژه ما را به بهترین نحو انجام داد. طراحی سایت بسیار باکیفیت و مطابق با خواسته‌های ما بود و به موفقیت کسب‌وکار ما کمک زیادی کرد.",
      name: "فاطمه آقایی",
      sitename: "پروژه‌های موفق",
    },
    {
      id: 8,
      title: "ایده‌های خلاقانه",
      comment:
        "طراحی سایت با ایده‌های خلاقانه و نوآورانه تیم، به نتیجه‌ای فوق‌العاده رسید. سایت نهایی مدرن و جذاب بود و همکاری با این تیم یکی از بهترین تجربیات ما بود.",
      name: "مهدی کرمی",
      sitename: "ایده‌های وب",
    },
    
    {
      id: 12,
      title: "بینظیر هستند",
      comment:
        "طراحی سایت با سرعت و کیفیت بسیار بالا انجام شد. تیم به تمام نیازها و خواسته‌های ما توجه کرد و طراحی نهایی بسیار جذاب و کاربرپسند بود. روند کار بسیار روان و بدون مشکل بود.",
      name: "سعید نیک‌پور",
      sitename: "سایت پلیمر پرگاس",
    },
  ];

  return (
    <>
    <div className="container-field relative flex justify-start flex-col items-center pt-20 bg-cover bg-[#1D2027] comment-section min-h-[80vh]  overflow-x-clip">
      <TopSectionsTitle
        toptext={"تعدادی از"}
        maintext={"نظرات مشتریان"}
        linecolor={"white"}
        maincolor={"white"}
      />
      <div className="w-full flex justify-center items-center">
        <Swiper
          modules={[Autoplay, Pagination]} // Add Pagination module
          slidesPerView={3}
          centeredSlides={2}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }} // Add pagination configuration
          breakpoints={{
            1500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="comments commentcontainer absolute  !pb-[10%] md:!pb-[5%] top-60 lg:top-80"
        >
          {infocomment.map((item, index) => (
            <SwiperSlide key={item.id}>
              <CardComment item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    <div className="h-[300px] w-full bg-[#F7F7F7]">sa</div>
    </>
  );
}
