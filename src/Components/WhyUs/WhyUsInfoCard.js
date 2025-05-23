'use client';

import React, { useMemo } from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function WhyUsInfoCard() {
  const infocard = useMemo(
    () => [
      { id: 1, title: 'پشتیبانی 24/7', icon: <HeadsetMicIcon aria-hidden="true" /> },
      { id: 2, title: 'سرعت بالا', icon: <SpeedIcon aria-hidden="true" /> },
      { id: 3, title: 'مشاوره رایگان', icon: <SupportAgentIcon aria-hidden="true" /> },
    ],
    []
  );

  return (
    <ul
      className="flex flex-col md:!flex-row z-50 mt-10 w-full justify-between items-center"
      lang="fa"
      aria-label="ویژگی‌های خدمات ما"
    >
      {infocard.map((item) => (
        <li
          key={item.id}
          className="border w-full md:w-[150px] flex justify-center flex-col items-center bg-white p-4 h-[150px] rounded-lg shadow-sm"
        >
          <span className="text-gray-600">{item.icon}</span>
          <h3 className="text-[14px] font-semibold text-gray-800 mt-2">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
}