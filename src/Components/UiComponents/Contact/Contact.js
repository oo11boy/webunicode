import { Phone } from '@mui/icons-material'
import React from 'react'

export  function SiteEmail() {
  return (
    <div className='flex gap-3 items-center'>
    <p>unicodewebdesign@gmail.com</p>
    <span class="icon-envelop text-red-500  mb-[4px]"></span>
    </div>      
  )
}

export  function SitePhone() {
    return (
      <div className='flex gap-3 items-center'>
        <p>09332884700</p>
        <Phone/>
        </div>
    )
  }
  