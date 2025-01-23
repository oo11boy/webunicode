"use client";
import React from 'react'
import Snowfall from 'react-snowfall'

export default function LandingHeader() {
  return (
        <div className="w-full relative">
           <img
             src="image/banner.png"
             className="w-full object-cover h-[200px]  md:!h-[auto] md:!object-fill"
             alt=""
           />
              <Snowfall speed={[0.1,0.4]} changeFrequency={5} />
         </div>
  )
}
