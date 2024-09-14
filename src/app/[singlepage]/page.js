'use client'


import Footer from '@/Components/Footer/Footer'
import ResoponsiveHeader from '@/Components/Header/ResoponsiveHeader'
import TopHeader from '@/Components/Header/TopHeader'
import Poster from '@/Components/SinglePageComponents/Poster/Poster'
import WhyUs from '@/Components/SinglePageComponents/WhyUs/WhyUs'
import DynamicComponent from '@/Components/UiComponents/DynamicComponent/DynamicComponent'

import React from 'react'

export default function page({params}) {
  return (
    <div>
        <ResoponsiveHeader/>
        <Poster />
      <DynamicComponent categoryname={params.singlepage}/>
        <Footer/>
    </div>
  )
}
