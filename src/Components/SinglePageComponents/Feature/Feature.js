import React from 'react';

import './Feature.css';
import { Filter, ShoppingCart, Payment, Loyalty, Star, LocalShipping, SupportAgent, CompareArrows } from '@mui/icons-material';
import TopSectionText from '@/Components/UiComponents/TopSectionsTitle/TopSectionText';

export default function Feature() {
  const features = [
    { icon: <Filter style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "فیلتر محصولات", description: "محصولات خود را بر اساس ویژگی های آنها فیلتر کنید و نمایش دهید." },
    { icon: <ShoppingCart style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "سبد خرید", description: "مدیریت سبد خرید و خرید آسان محصولات." },
    { icon: <Payment style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "پرداخت آنلاین", description: "پرداخت امن و سریع از طریق درگاه‌های پرداخت." },
    { icon: <Loyalty style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "امتیازدهی", description: "امکان امتیازدهی و نظردهی به محصولات." },
    { icon: <Star style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "محصولات ویژه", description: "ویژگی‌های خاص و محصولات ویژه برای کاربران." },
    { icon: <LocalShipping style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "تحویل سریع", description: "تحویل سریع و مطمئن محصولات به مشتریان." },
    { icon: <SupportAgent style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "پشتیبانی آنلاین", description: "پشتیبانی 24 ساعته و پاسخگویی به سوالات مشتریان." },
    { icon: <CompareArrows style={{ color: "#D41CCE", fontSize: "50px" }} />, title: "مقایسه محصولات", description: "امکان مقایسه محصولات برای انتخاب بهتر." },
  ];

  return (
    <div dir='rtl' className='bg-[#252932] featuresection h-auto pb-16 mt-20 w-full'>
  
 
      <div className='container flex justify-between gap-y-16 flex-wrap pt-16'>
      <TopSectionText linecolor={'white'} maincolor={'#fff'} maintext={'امکانات قالب فروشگاهی' } toptext={'برخی از'} />

        {features.map((feature, index) => (
          <div key={index} className='featurecard w-full sm:!w-[49%] lg:!w-[33%] xl:!w-[24%] flex gap-y-3 justify-center items-center flex-col'>
            {feature.icon}
            <h3 className='text-white font-semibold'>{feature.title}</h3>
            <p className='text-white text-center'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
