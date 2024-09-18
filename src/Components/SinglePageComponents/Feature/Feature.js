import React from 'react';

import './Feature.css';
import { Filter, ShoppingCart, Payment, Loyalty, Star, LocalShipping, SupportAgent, CompareArrows, Business, People, Verified, ContactSupport, TrendingUp, WorkOutline, Assessment, Public, Person, Work, Chat, School, VerifiedUser, Language, ThumbUp, PanToolSharp } from '@mui/icons-material';

import TopSectionText from '@/Components/UiComponents/TopSectionsTitle/TopSectionText';

export default function Feature({singlepageid}) {
  const features = 
  singlepageid === "store" ? [
    { 
      icon: <Filter style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "فیلتر محصولات", 
      description: "محصولات خود را بر اساس ویژگی‌های آنها فیلتر کنید و نمایش دهید." 
    },
    { 
      icon: <ShoppingCart style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "سبد خرید", 
      description: "مدیریت سبد خرید و خرید آسان محصولات." 
    },
    { 
      icon: <Payment style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "پرداخت آنلاین", 
      description: "پرداخت امن و سریع از طریق درگاه‌های پرداخت." 
    },
    { 
      icon: <Loyalty style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "امتیازدهی", 
      description: "امکان امتیازدهی و نظردهی به محصولات." 
    },
    { 
      icon: <Star style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "محصولات ویژه", 
      description: "ویژگی‌های خاص و محصولات ویژه برای کاربران." 
    },
    { 
      icon: <LocalShipping style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "تحویل سریع", 
      description: "تحویل سریع و مطمئن محصولات به مشتریان." 
    },
    { 
      icon: <SupportAgent style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "پشتیبانی آنلاین", 
      description: "پشتیبانی 24 ساعته و پاسخگویی به سوالات مشتریان." 
    },
    { 
      icon: <CompareArrows style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "مقایسه محصولات", 
      description: "امکان مقایسه محصولات برای انتخاب بهتر." 
    }
  ]
  : singlepageid === "company" ? [
    { 
      icon: <Business style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "پروفایل شرکت", 
      description: "ایجاد و مدیریت پروفایل حرفه‌ای شرکت." 
    },
    { 
      icon: <People style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "تیم ما", 
      description: "معرفی اعضای تیم و تخصص‌های آن‌ها." 
    },
    { 
      icon: <Verified style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "تجربه و اعتبار", 
      description: "نمایش پروژه‌ها و سوابق کاری شرکت." 
    },
    { 
      icon: <ContactSupport style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "پشتیبانی مشتری", 
      description: "پشتیبانی اختصاصی و پیگیری نیازهای مشتریان." 
    },
    { 
      icon: <TrendingUp style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "رشد و توسعه", 
      description: "برنامه‌های توسعه و آینده‌نگری شرکت." 
    },
    { 
      icon: <WorkOutline style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "پروژه‌های انجام شده", 
      description: "نمایش پروژه‌های موفق انجام‌شده توسط شرکت." 
    },
    { 
      icon: <Assessment style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "گزارش‌های مالی", 
      description: "ارائه گزارشات مالی و عملکردی شرکت." 
    },
    { 
      icon: <Public style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "حضور بین‌المللی", 
      description: "فعالیت‌های بین‌المللی و پروژه‌های خارج از کشور." 
    }
  ]
  : singlepageid === "resume" ? [
    { 
      icon: <Person style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "پروفایل شخصی", 
      description: "ایجاد و مدیریت پروفایل شخصی برای معرفی خود." 
    },
    { 
      icon: <Work style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "نمونه کارها", 
      description: "نمایش پروژه‌ها و نمونه‌کارهای شخصی." 
    },
    { 
      icon: <Chat style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "ارتباط با من", 
      description: "راه‌های تماس و ارتباط با شما." 
    },
    { 
      icon: <School style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "تحصیلات", 
      description: "نمایش مدارک تحصیلی و دوره‌های آموزشی." 
    },
    { 
      icon: <PanToolSharp style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "مهارت‌ها", 
      description: "معرفی مهارت‌ها و توانایی‌های شخصی." 
    },
    { 
      icon: <VerifiedUser style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "سوابق کاری", 
      description: "نمایش سوابق و تجربیات کاری شما." 
    },
    { 
      icon: <Language style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "زبان‌ها", 
      description: "معرفی زبان‌هایی که به آن‌ها تسلط دارید." 
    },
    { 
      icon: <ThumbUp style={{ color: "#D41CCE", fontSize: "50px" }} />, 
      title: "توصیه‌نامه‌ها", 
      description: "نمایش توصیه‌نامه‌های دریافت‌شده از همکاران و کارفرمایان." 
    }
  ]
  : [];



  return (
    <div dir='rtl' className='bg-[#252932] featuresection h-auto pb-16  w-full'>
  
 
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
