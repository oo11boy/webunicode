import React from 'react'

export default function WhyUsImageSide() {
  return (
    <div className="relative mainimgwhyus w-full lg:w-[43%] lg:pr-[7%] md:!h-[450px]">
    <img
      className="lg:h-[80%]  lg:!w-full object-cover rounded-xl"
      src="/image/design-team.jpg"
      alt=""
    />
    <div className="p-6 hidden md:flex py-24 w-[180px] h-[180px] justify-center items-center flex-col text-4xl text-white absolute bottom-10 rounded-xl right-0 whyusgradiant border border-gray-2">
      <p className="whyusnumber">8</p>
      <p className="text-2xl whyusp">سال تجربه</p>
    </div>
  </div>
  )
}
