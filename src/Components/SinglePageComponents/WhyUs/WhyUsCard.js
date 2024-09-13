import React from 'react'

export default function WhyUsCard({cardContent,randomColors}) {
  return (
    cardContent.map((content, index) => (
    <div
    key={index}
    className=" !w-[100%] sm:!w-[49%] lg:!w-[32%] !h-[250px] xl:!h-[210px] flex rounded-lg flex-col justify-start items-start p-8"
    style={{ backgroundColor: randomColors[index] }} // اعمال رنگ منحصر به فرد به عنوان بک‌گراند
  >
    <div className="border rounded-full p-4 bg-white">
      {content.icon}
    </div>
    <h2 className="mt-4 mb-2 font-semibold">{content.title}</h2>
    <p>{content.description}</p>
  </div>
     ))
  )
}
