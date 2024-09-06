import Header from '@/Components/Header/Header'
import Services from '@/Components/Services/Services'
import React from 'react'
import './fonts.css'
import PortfolioSlider from '@/Components/PortfolioSlider/PortfolioSlider'
import Comments from '@/Components/Comments/Comments'
export default function page() {
  return (
    <>
    <Header/>
    <Services />
    <PortfolioSlider/>
 <Comments/>
 
    </>
  )
}
