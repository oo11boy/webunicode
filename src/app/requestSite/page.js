import { redirect } from 'next/navigation'
import React from 'react'


export default function page() {
redirect('../requestSite/create')
  return (
    <div>page create</div>
  )
}
