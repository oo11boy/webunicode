import React from 'react'

export default function AllPosts({dataposts}) {
  return (
<div dir='rtl' class="container px-4 py-[20%] sm:px-6 lg:px-8 lg:py-[10%] mx-auto">
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h3 class="text-2xl font-bold md:text-4xl md:leading-tight">
   
        پست های سایت
      </h3>
      <p class="mt-1 text-gray-600">
        تمام پست های سایت را میتوانید در اینجا مشاهده نمایید.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dataposts.map((item) => {
        return (
          <a
            class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
            href={`../blogs/${item.id}`}
            title={item.h1title}
          >
            <div class="aspect-w-16 aspect-h-11">
              <img
                class="w-full object-cover rounded-xl h-[200px]"
                src={item.mainimg}
                alt="Image Description"
              />
            </div>
            <div class="my-6">
              <h2 class="text-xl font-semibold text-gray-800">
                {item.h1title}
              </h2>
              <p class="mt-5 text-gray-600">{item.metadescription}</p>
            </div>
            <div class="mt-auto flex items-center gap-x-3">
              <img
                class="size-8 rounded-full"
                src="/image/logo.webp"
                alt="سفارش طراحی سایت ارزان"
              />
              <div>
                <h5 class="text-sm text-gray-800">یونیکد</h5>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  </div>
  )
}
