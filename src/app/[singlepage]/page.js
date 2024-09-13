import Footer from '@/Components/Footer/Footer'
import TopHeader from '@/Components/Header/TopHeader'
import WhyUs from '@/Components/SinglePageComponents/WhyUs/WhyUs'
import DynamicComponent from '@/Components/UiComponents/DynamicComponent/DynamicComponent'

import React from 'react'

export default function page({params}) {
  return (
    <div>
        <TopHeader/>
      <DynamicComponent categoryname={params.singlepage}/>
        <Footer/>
    </div>
  )
}
