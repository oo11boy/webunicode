import Header from '@/Components/Header/Header'
import Services from '@/Components/Services/Services'
import React from 'react'
import './fonts.css'
import PortfolioSlider from '@/Components/PortfolioSlider/PortfolioSlider'
import FAQ from '@/Components/FAQ/FAQ'
export default function page() {
  return (
    <>
    <Header/>
    <Services />
    <PortfolioSlider/>
    <FAQ />
 
    </>
  )
}
