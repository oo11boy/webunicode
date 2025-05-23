'use client';

import React, { useMemo } from 'react';
import WhyUsImageSide from './WhyUsImageSide';
import WhyUsTextSide from './WhyUsTextSide';
import { whyusdata } from '@/lib/DataFetching';
import './WhyUs.css';

export default function WhyUs({ singlepageid }) {
  const DynamicWhyUs = useMemo(() => {
    return singlepageid === 'store'
      ? whyusdata.storedata
      : singlepageid === 'company'
      ? whyusdata.companydata
      : singlepageid === 'resume'
      ? whyusdata.resumedata
      : whyusdata.maindata;
  }, [singlepageid]);

  const dataToPass = Array.isArray(DynamicWhyUs) ? DynamicWhyUs[0] : DynamicWhyUs;

  return (
    <section
      dir="rtl"
      lang="fa"
      className="whyus py-[7.5%] relative h-auto"
      aria-labelledby="whyus-title"
    >
      <img
        className="absolute h-[100px] right-10 bottom-20"
        src="/image/sharpwhyus.png"
        alt={`تصویر تزئینی برای ${dataToPass.title}`}
        loading="lazy"
      />
      <img
        className="absolute hidden lg:block right-0 top-28 h-[200px] rounded-xl w-[200px]"
        src="/image/bg2whyus.jpeg"
        alt={`تصویر پس‌زمینه برای ${dataToPass.title}`}
        loading="lazy"
      />

      <div className="container flex flex-col lg:flex-row justify-between items-start">
        <WhyUsImageSide DynamicWhyUs={dataToPass} />
        <WhyUsTextSide DynamicWhyUs={dataToPass} />
      </div>
    </section>
  );
}