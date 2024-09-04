import React from 'react'
import ServiceCard from './ServiceCard'

export default function ListServices({infoservice}) {
  return (
    <div class="w-full md:w-[50%] flex flex-col justify-start  md:py-12 ">
    <div class=" md:ml-auto lg:pr-4 flex-wrap lg:flex-col items-baseline justify-start flex">
      {infoservice.map((item) => (
      <ServiceCard key={item.id} item={item}/>
      ))}
    </div>
  </div>
  )
}
