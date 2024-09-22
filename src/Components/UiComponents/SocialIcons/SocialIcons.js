import React from 'react'

export default function SocialIcons({size}) {
  return (
    <div className="flex gap-3 justify-center items-center">
    <a href="#">
      <span class={`icon-github ${size}`}></span>
    </a>
    <a href="#">
    
      <span class={`icon-instagram ${size}`}></span>
    </a>
    <a href="#">
    
      <span class={`icon-telegram ${size}`}></span>
    </a>
    <a href="#">
    
      <span class={`icon-linkedin ${size}`}></span>
    </a>
  </div>
  )
}
