"use client"
import React, { useEffect, useState } from 'react'

import ResponsiveIframe from '@/Components/UiComponents/ResponsiveIframe/ResponsiveIframe'
import { useRouter } from 'next/navigation'
import { PortfolioDb } from '@/lib/PortfolioDb'

export default function Page({ params }) {
  const { portfolioid } = params
  const router = useRouter()
const [url,seturl]=useState(null)

  useEffect(() => {

    const validPortfolio = PortfolioDb.some(item => item.id === parseInt(portfolioid))

    if (!validPortfolio) {
      router.push('/')
    }else {
      const filter=PortfolioDb.find((item)=>item.id==portfolioid)
    seturl(filter.link)
    }
  }, [portfolioid, router])

  return (
    <ResponsiveIframe  url={url}/>
  )
}
