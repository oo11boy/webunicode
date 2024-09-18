'use client'
import Footer from '@/Components/Footer/Footer'
import ResoponsiveHeader from '@/Components/Header/ResoponsiveHeader'
import Feature from '@/Components/SinglePageComponents/Feature/Feature'
import OrderSteps from '@/Components/SinglePageComponents/OrderSteps/OrderSteps'
import Poster from '@/Components/SinglePageComponents/Poster/Poster'
import WhyUsSinglePage from '@/Components/SinglePageComponents/WhyUsSinglePage/WhyUsSinglePage'
import WhyUs from '@/Components/WhyUs/WhyUs'

import React from 'react'

export default function page({params}) {
  return (
    <div>
        <ResoponsiveHeader/>
        <Poster />
        <WhyUs/>
        <WhyUsSinglePage/>
<OrderSteps/>
        <Feature/>
        <Footer/>
    </div>
  )
}
