import { useState } from "react"

export default function HamburgerMenu({toggleMenu}) {
  return (
    <span onClick={toggleMenu} class="icon-menu text-2xl text-gray-700 md:hidden"></span>
  )
}
