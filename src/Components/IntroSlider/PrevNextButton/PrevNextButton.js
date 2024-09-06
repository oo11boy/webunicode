import React from 'react'

export default function PrevNextButton() {
  return (
    <>
      {/* دکمه‌های ناوبری سفارشی */}
      <button className="custom-next-button absolute bottom-5  text-red-700  right-2 z-10">
    
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

      </button>
      <button className="custom-prev-button absolute bottom-5 right-16 text-red-700  z-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

        
      </button>
    </>
  )
}
