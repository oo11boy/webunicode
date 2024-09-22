import React from 'react'

export default function TopBar({findpost}) {
  return (
    <div class="mb-4 md:mb-0 w-full mx-auto relative">
    <div class="px-4  lg:px-0">
      <h1 class="my-8  text-2xl font-semibold text-gray-800 leading-tight">
        {findpost.h1title}
      </h1>

    </div>

    <img
      src={findpost.mainimg}
      alt={findpost.metatitle}
      class="w-full h-[200px] md:!h-[500px] object-cover rounded-2xl "
    />
  </div>
  )
}
