"use client"
import React, { useEffect, useState } from 'react'

import ResponsiveIframe from '@/Components/UiComponents/ResponsiveIframe/ResponsiveIframe'
import { useRouter } from 'next/navigation'

export default function Page({ params }) {
  const { portfolioid } = params
  const router = useRouter()
const [url,seturl]=useState(null)
  const portfolio = [
    { id: 1, url: "https://demo.unlimitedweb.ir/Consua/new" },
    { id: 2, url: "https://demo.unlimitedweb.ir/Consua/new-demo/" },
  ]

  useEffect(() => {

    const validPortfolio = portfolio.some(item => item.id === parseInt(portfolioid))

    if (!validPortfolio) {
      router.push('/')
    }else {
      const filter=portfolio.find((item)=>item.id==portfolioid)
    seturl(filter.url)
    }
  }, [portfolioid, router])

  return (
    <ResponsiveIframe  url={url}/>
  )
}
