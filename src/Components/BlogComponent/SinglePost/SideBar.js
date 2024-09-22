import Link from 'next/link'
import React from 'react'

export default function SideBar() {
  return (
    <div class="w-full lg:!w-1/4 m-auto mt-12 max-w-screen-sm">
    <div class="w-full ">
      <div class="p-4 border-t border-b md:border md:rounded">
        <div class="flex py-2">
          <img
            src="/image/logo.webp"
            alt="طراحی سایت ارزان"
            class="h-10 w-10 rounded-full ml-2 object-cover"
          />
          <div>
            <p class="font-semibold text-gray-700 text-sm">
              طراحی سایت ارزان با یونیکد
            </p>
            <p class="font-semibold text-gray-600 text-xs">
              {" "}
              unicodewebdesign
            </p>
          </div>
        </div>
        <p class="text-gray-700 py-3">
          اگر به دنبال خرید سایت ارزان و با کیفیت بالا برای خودتان ،
          شرکتتان و یا کسب و کارتان هستید تیم یونیکد با بیش از 8 سال
          سابقه طراحی سایت میتوانید به شما در ایجاد سایت کمک کند.
        </p>
        <Link
          href={"../"}
          title="سفارش طراحی سایت ارزان"
          class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
        >
          اطلاعات بیشتر
          <i class="bx bx-user-plus ml-2"></i>
        </Link>
      </div>
    </div>
  
  </div>
  )
}
