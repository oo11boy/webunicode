import React from 'react'
import WhyUsInfoCard from './WhyUsInfoCard'

export default function WhyUsTextSide({DynamicWhyUs}) {

  return (
    <div className="w-full  lg:w-[50%] lg:pr-[7%]">
    <h1 className="text-4xl mb-8 font-extrabold">
     {DynamicWhyUs.title}
    </h1>
    <p className="whyusptext">
     {DynamicWhyUs.content}
    </p>

 <WhyUsInfoCard/>
  </div>
  )
}
