import Link from 'next/link'
import React from 'react'

export default function DashboardItems() {
  return (
    <div className='p-5 border border-black h-screen mx-3 w-[20%]'> 
    <ul className='flex flex-col gap-5 text-right'>
        <li>اسلایدر های صفحه اصلی</li>
        <li>
          <Link href={'./HR/AddSlider'}>
          افزودن اسلایدر جدید
</Link>
        </li>
       
    </ul>
</div>
  )
}
