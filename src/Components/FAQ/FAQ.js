"use client";

// import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordions from "./Accordions";
import "./FAQ.css";
import { useState } from "react";
import TopSectionText from "../UiComponents/TopSectionsTitle/TopSectionText";

export default function FAQ() {
    const [isExpand, setIsExpand] = useState(null);

  const accordions = [
    {
      summery: "سوال یک",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      icon: <ExpandMoreIcon />,
    },
    {
      summery: "سوال دوم",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      icon: <ExpandMoreIcon />,
    },
    {
      summery: "سوال سوم",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      icon: <ExpandMoreIcon />,
    },
    {
      summery: "سوال چهارم",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      icon: <ExpandMoreIcon />,
    },
    {
      summery: "سوال پنجم",
      detail:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      icon: <ExpandMoreIcon />,
    },
  ];
  return (
    <div class="container-field faq-field">
      <div class="container pt-20 m-auto">
      <TopSectionText toptext={'مهمترین'} maintext={'سوالات متدوال'} linecolor={'red-600'} maincolor={'black'}/>
        
        <div class="flex flex-wrap md:flex-nowrap items-center">
    
          <div class="accordion-box relative">
           <div class="faq-style-one w-92 md:w-[80%] default-padding mt-8 mb-20">
              {accordions.map((item, index) => (
                <Accordions key={index} {...item} index={index} isExpand={isExpand} setIsExpand={setIsExpand}/>
              ))}
            </div>
          </div>
          <div class="w-full">
            <div class="faq-thumb  mr-0 md:mr-10">
              <img
                decoding="async"
                src="/image/FAQ-img.png"
                alt="FAQ Thumbnail"
                className="w-80 md:w-full m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
