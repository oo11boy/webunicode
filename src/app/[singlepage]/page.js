'use client'
import Footer from '@/Components/Footer/Footer'
import ResoponsiveHeader from '@/Components/Header/ResoponsiveHeader'
import PortfolioSlider from '@/Components/PortfolioSlider/PortfolioSlider'
import Feature from '@/Components/SinglePageComponents/Feature/Feature'
import Poster from '@/Components/SinglePageComponents/Poster/Poster'
import WhyUs from '@/Components/SinglePageComponents/WhyUs/WhyUs'

import React from 'react'

export default function page({params}) {
  return (
    <div>
        <ResoponsiveHeader/>
        <Poster />
        <WhyUs/>
        <PortfolioSlider filteredCategory='store'/>
        <Feature/>
        <Footer/>
    </div>
  )
}
