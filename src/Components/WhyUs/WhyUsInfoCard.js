import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
export default function WhyUsInfoCard() {
  const infocard = [
    { id: 1, title: "پشتیبانی 24/7", icon: <HeadsetMicIcon /> },
    { id: 2, title: "سرعت بالا", icon: <SpeedIcon /> },
    { id: 3, title: "مشاوره رایگان", icon: <SupportAgentIcon /> },
  ];
  return (
    <div className="flex flex-col md:!flex-row  z-50 mt-10 w-full justify-between items-center">
  {infocard.map((item)=>(
 <div key={item.id} className="border w-full md:w-[150px] flex justify-center flex-col items-center bg-white p-4 h-[150px]">
 <span>
  {item.icon}
 </span>
 <p className="text-[14px]">{item.title}</p>
</div>
  ))}
     
    </div>
  );
}
