import Header from '@/Components/HomePage/Header/Header'
import Services from '@/Components/HomePage/Services/Services'
import React from 'react'
import './fonts.css'
import PortfolioSlider from '@/Components/GeneralComponents/Sliders/PortfolioSlider/PortfolioSlider'
export default function page() {
  return (
    <>
    <Header/>
    <PortfolioSlider/>
    <Services />
 
    </>
  )
}
