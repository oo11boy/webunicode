import TopSectionText from "@/Components/UiComponents/TopSectionsTitle/TopSectionText";
import {
  ComputerRounded,
  SupportAgent,
  Speed,
  Security,
  AttachMoney,
  DesignServices,
} from "@mui/icons-material";
import React from "react";
import "./WhyUs.css"
import WhyUsCard from "./WhyUsCard";

export default function WhyUs({bgcolor}) {
  // تابع برای تولید رنگ تصادفی بدون تکرار
  const getUniqueRandomColors = (numOfColors) => {
    const colors = [
      "#F4E5FF",
      "#E5F4FF",
      "#FFE5E5",
      "#E5FFE5",
      "#FFF5E5",
      "#F5E5FF",
    ];
    const selectedColors = [];

    // اگر تعداد کارت‌ها بیشتر از تعداد رنگ‌ها باشد، تعداد کارت‌ها محدود می‌شود
    const availableColors = colors.slice(
      0,
      Math.min(numOfColors, colors.length)
    );

    for (let i = 0; i < numOfColors; i++) {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      selectedColors.push(availableColors.splice(randomIndex, 1)[0]);
    }

    return selectedColors;
  };

  const cardContent = [
    {
      title: "رعایت اصول سئو",
      description:
        "بهینه‌سازی سایت شما برای موتورهای جستجو، به منظور جذب بازدیدکنندگان بیشتر.",
      icon: <ComputerRounded fontSize="large" />,
    },
    {
      title: "طراحی حرفه‌ای",
      description:
        "طراحی وب‌سایت‌هایی با ظاهر جذاب و رابط کاربری بهینه برای تجربه کاربری بهتر.",
      icon: <DesignServices fontSize="large" />,
    },
    {
      title: "پشتیبانی مداوم",
      description:
        "ارائه خدمات پشتیبانی فنی 24/7 برای رفع مشکلات و نیازهای شما.",
      icon: <SupportAgent fontSize="large" />,
    },
    {
      title: "سرعت بالا",
      description: "تضمین سرعت بارگذاری بالا و عملکرد روان وب‌سایت شما.",
      icon: <Speed fontSize="large" />,
    },
    {
      title: "هزینه مناسب",
      description: "ارائه خدمات با قیمت‌های رقابتی و مناسب با بودجه شما.",
      icon: <AttachMoney fontSize="large" />,
    },
    {
      title: "امنیت بالا",
      description:
        "مراقبت از داده‌ها و اطلاعات شما با استفاده از تکنولوژی‌های پیشرفته امنیتی.",
      icon: <Security fontSize="large" />,
    },
  ];

  // دریافت رنگ‌های تصادفی منحصر به فرد
  const randomColors = getUniqueRandomColors(cardContent.length);

  return (
    <div dir="rtl" className={`container ${bgcolor} single-why-us !py-16`}>
      <TopSectionText
        toptext={"دلایل انتخاب ما"}
        maintext={"برای طراحی سایت"}
        linecolor={"red"}
      />
      <div className="flex gap-y-6 flex-wrap justify-between mt-16 w-full items-center">
        
     <WhyUsCard cardContent={cardContent} randomColors={randomColors}/>
     
      </div>
    </div>
  );
}
