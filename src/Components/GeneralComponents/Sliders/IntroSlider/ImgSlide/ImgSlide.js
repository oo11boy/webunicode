import React from 'react'

export default function ImgSlide({items,fadeKey}) {
  return (
    <div className="text-left  mt-20 imgintroslider w-[50%]">
    <img
      key={fadeKey}  // استفاده از کلید جدید برای ایجاد انیمیشن مجدد
      className={` bottom-0 fadeimg`}
      src={items.img}
      alt=""
    />
  </div>
  )
}
