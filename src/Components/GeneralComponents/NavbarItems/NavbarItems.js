import React from 'react'
import NavLinks from './NavLinks'
import HoverNav from './HoverNav'

export default function NavbarItems() {

  return (
    <ul class="navmenu z-10 w-10/12 h-full pl-[10%] pr-[5%] m-auto flex justify-between items-center text-black">
    <NavLinks title={'خانه'} to={'#'}/>
    <NavLinks title={'درباره‌ی ما'} to={'#'}/>
    <HoverNav />
    <NavLinks title={'فروشگاه'} to={'#'}/>
    <NavLinks title={'نمونه کارها'} to={'#'}/>
  </ul>
  )
}
