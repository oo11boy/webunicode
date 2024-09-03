import { useState } from "react"

export default function HamburgerMenu({toggleMenu}) {
  return (
    <span onClick={toggleMenu} className="icon-menu cursor-pointer text-2xl text-gray-700 md:hidden"></span>
  )
}
