"use client";

// import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordions from "./Accordions";
import "./FAQ.css";
import { useState } from "react";
import TopSectionText from "../UiComponents/TopSectionsTitle/TopSectionText";

export default function FAQ({singlepageid}) {
    const [isExpand, setIsExpand] = useState(null);

    const accordions =
    singlepageid == "store"
      ? [
          {
            summery: "آیا امکان اضافه کردن محصولات جدید به سایت فروشگاهی وجود دارد؟",
            detail:
              "بله، شما می‌توانید به‌راحتی از طریق پنل مدیریت سایت، محصولات جدید اضافه کنید، قیمت‌ها را به‌روزرسانی کنید و موجودی انبار را مدیریت کنید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا سایت فروشگاهی به درگاه پرداخت متصل است؟",
            detail:
              "بله، ما سایت‌های فروشگاهی را با درگاه‌های پرداخت معتبر و امن مانند زرین‌پال، ملت و ... به صورت کامل یکپارچه می‌کنیم.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا سایت فروشگاهی من ریسپانسیو خواهد بود؟",
            detail:
              "بله، تمامی سایت‌های فروشگاهی به‌صورت ریسپانسیو طراحی می‌شوند تا در موبایل و تبلت به‌خوبی نمایش داده شوند.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان ارسال محصولات به مناطق مختلف جغرافیایی وجود دارد؟",
            detail:
              "بله، شما می‌توانید برای هر منطقه جغرافیایی، هزینه و زمان ارسال متفاوت تعیین کنید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان اتصال سایت فروشگاهی به سیستم‌های حسابداری وجود دارد؟",
            detail:
              "بله، در صورت تمایل، سایت فروشگاهی شما می‌تواند به سیستم‌های حسابداری متصل شود.",
            icon: <ExpandMoreIcon />,
          },
        ]
      : singlepageid == "company"
      ? [
          {
            summery: "آیا سایت شرکتی شامل صفحات مختلف خدمات و معرفی پروژه‌ها می‌شود؟",
            detail:
              "بله، سایت‌های شرکتی شامل صفحات مختلف برای معرفی خدمات، پروژه‌ها و تیم شرکت هستند.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان نمایش نمونه کارها و پروژه‌های انجام‌شده وجود دارد؟",
            detail:
              "بله، شما می‌توانید نمونه کارها و پروژه‌های انجام‌شده را با تصاویر و توضیحات دقیق به نمایش بگذارید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان درج نظرات مشتریان در سایت شرکتی وجود دارد؟",
            detail:
              "بله، شما می‌توانید بخش نظرات مشتریان را اضافه کنید تا تجربه‌های مثبت آن‌ها به اشتراک گذاشته شود.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا سایت شرکتی قابلیت چند زبانه بودن دارد؟",
            detail:
              "بله، سایت‌های شرکتی می‌توانند چند زبانه طراحی شوند تا مخاطبان بین‌المللی را نیز جذب کنند.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان اتصال سایت شرکتی به شبکه‌های اجتماعی وجود دارد؟",
            detail:
              "بله، سایت شما می‌تواند به‌راحتی به شبکه‌های اجتماعی مانند اینستاگرام، لینکدین و ... متصل شود.",
            icon: <ExpandMoreIcon />,
          },
        ]
      : singlepageid == "resume"
      ? [
          {
            summery: "آیا امکان نمایش رزومه و تجربیات کاری به‌صورت آنلاین وجود دارد؟",
            detail:
              "بله، شما می‌توانید به‌صورت آنلاین رزومه و تجربیات کاری خود را به نمایش بگذارید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان دانلود رزومه به‌صورت PDF وجود دارد؟",
            detail:
              "بله، شما می‌توانید گزینه‌ای برای دانلود رزومه به‌صورت فایل PDF فراهم کنید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا می‌توان مهارت‌ها و تحصیلات را به‌صورت مجزا نمایش داد؟",
            detail:
              "بله، شما می‌توانید مهارت‌ها، مدارک تحصیلی و تجربیات کاری را به‌صورت مجزا و دسته‌بندی‌شده نمایش دهید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان درج نمونه کارها در سایت رزومه وجود دارد؟",
            detail:
              "بله، شما می‌توانید نمونه کارهای خود را به‌همراه توضیحات و تصاویر در سایت رزومه نمایش دهید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان استفاده از فرم تماس برای سایت رزومه وجود دارد؟",
            detail:
              "بله، شما می‌توانید یک فرم تماس ساده در سایت خود اضافه کنید تا کارفرمایان بتوانند به‌راحتی با شما ارتباط برقرار کنند.",
            icon: <ExpandMoreIcon />,
          },
        ]
      : [
          {
            summery: "آیا سایت شامل پشتیبانی و نگهداری پس از راه‌اندازی خواهد بود؟",
            detail:
              "بله، ما خدمات پشتیبانی و نگهداری پس از راه‌اندازی را برای سایت‌های شما ارائه می‌دهیم.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا سایت بهینه‌سازی شده برای موتورهای جستجو (SEO) خواهد بود؟",
            detail:
              "بله، سایت‌ها با تکنیک‌های بهینه‌سازی سئو طراحی می‌شوند تا در موتورهای جستجو بهتر دیده شوند.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان مدیریت محتوا از طریق پنل کاربری وجود دارد؟",
            detail:
              "بله، شما می‌توانید تمامی محتوای سایت را به‌راحتی از طریق پنل کاربری مدیریت کنید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا سایت قابلیت اتصال به سرویس‌های ایمیل مارکتینگ دارد؟",
            detail:
              "بله، شما می‌توانید سایت خود را به سرویس‌های ایمیل مارکتینگ مانند MailChimp متصل کنید.",
            icon: <ExpandMoreIcon />,
          },
          {
            summery: "آیا امکان اضافه کردن گالری تصاویر و ویدئو به سایت وجود دارد؟",
            detail:
              "بله، شما می‌توانید به‌راحتی گالری تصاویر و ویدئو به سایت خود اضافه کنید.",
            icon: <ExpandMoreIcon />,
          },
        ];
  

  return (
    <div class="container-field faq-field">
      <div class="container pt-20 m-auto">
      <TopSectionText toptext={'مهمترین'} maintext={'سوالات متدوال'} linecolor={'red'} maincolor={'black'}/>
        
        <div class="flex flex-wrap md:flex-nowrap items-center">
    
          <div class="accordion-box relative">
           <div class="faq-style-one w-92 md:!w-[350px] lg:!w-[500px] default-padding mt-8 mb-20">
              {accordions.map((item, index) => (
                <Accordions key={index} {...item} index={index} isExpand={isExpand} setIsExpand={setIsExpand}/>
              ))}
            </div>
          </div>
          <div class="w-full flex justify-center">
            <div class="faq-thumb lg:!w-[400px] md:!w-[300px] md:mr-10">
              <img
                decoding="async"
                src="/image/FAQ-img.png"
                alt="FAQ Thumbnail"
                className="w-full md:w-full m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
