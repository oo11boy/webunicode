import React from 'react'

export default function PrevNextButton() {
  return (
    <>
      {/* دکمه‌های ناوبری سفارشی */}
      <button className="custom-next-button absolute bottom-5 right-5 z-10">
        <span className="icon-arrow-right2"></span>
      </button>
      <button className="custom-prev-button absolute bottom-5 right-10 z-10">
        <span className="icon-arrow-left2"></span>
      </button>
    </>
  )
}
