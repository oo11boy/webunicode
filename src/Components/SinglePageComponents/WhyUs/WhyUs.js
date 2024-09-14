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

export default function WhyUs() {
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
      title: "سئو اصولی",
      description:
        "سایتت رو برای موتورهای جستجو بهینه می‌کنیم تا بازدید بیشتری بگیری.",
      icon: <ComputerRounded fontSize="large" />,
    },
    {
      title: "طراحی حرفه‌ای",
      description:
        "سایت‌هایی با ظاهر جذاب و رابط کاربری راحت برای تجربه بهتر کاربر.",
      icon: <DesignServices fontSize="large" />,
    },
    {
      title: "پشتیبانی دائم",
      description:
        "هر ساعتی از شبانه‌روز پشتیبانی فنی داریم تا مشکلت رو حل کنیم.",
      icon: <SupportAgent fontSize="large" />,
    },
    {
      title: "سرعت فوق‌العاده",
      description: "سایتت رو با سرعت بالا و بدون لگ اجرا می‌کنیم.",
      icon: <Speed fontSize="large" />,
    },
    {
      title: "هزینه مناسب",
      description: "با قیمت‌هایی که با بودجه‌ات سازگاره، خدمات ارائه می‌کنیم.",
      icon: <AttachMoney fontSize="large" />,
    },
    {
      title: "امنیت تضمینی",
      description:
        "با تکنولوژی‌های پیشرفته امنیتی، از اطلاعاتت به بهترین شکل محافظت می‌کنیم.",
      icon: <Security fontSize="large" />,
    },
  ];
  
  // دریافت رنگ‌های تصادفی منحصر به فرد
  const randomColors = getUniqueRandomColors(cardContent.length);

  return (
    <div dir="rtl" className={`container  single-why-us !py-16`}>
   <TopSectionText
  toptext={"چرا ما؟"}
  maintext={"برای طراحی سایت"}
  linecolor={"red"}
/>

      <div className="flex gap-y-6 flex-wrap justify-between mt-16 w-full items-center">
        
     <WhyUsCard cardContent={cardContent} randomColors={randomColors}/>
     
      </div>
    </div>
  );
}
