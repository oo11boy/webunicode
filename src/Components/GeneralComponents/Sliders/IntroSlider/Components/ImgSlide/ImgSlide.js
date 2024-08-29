import React from 'react'

export default function ImgSlide({items,fadeKey}) {
  return (
    <div className="text-left w-1/2">
    <img
      key={fadeKey}  // استفاده از کلید جدید برای ایجاد انیمیشن مجدد
      className={`w-2/6 absolute right-32 bottom-0 fadeimg`}
      src={items.img}
      alt=""
    />
  </div>
  )
}
