import React from 'react'
import ImageWithLoader from "@/Components/UiComponents/ImageWithLoader/Image";

export default function AllPortfolioCard({item,animateItems}) {
  return (
    <a
    key={item.id}
    dir="rtl"
    target="_blank"
    className={`group relative h-[250px] block rounded-xl !w-[100%] sm:!w-[49%] lg:!w-[24%] focus:outline-none transition-all duration-500 ${
      animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    href={`../viewportfolio/${item.id}`}
  >
    <div
      className={`shrink-0 h-full relative rounded-xl overflow-hidden w-full before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-black`}
    >
      <ImageWithLoader
        className="size-full absolute top-0 start-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
        src={item.img}
        alt={item.content}
      />
    </div>

    <div className="absolute bottom-0 left-0 z-10">
      <div className="p-4 flex flex-col h-full sm:p-6">
        <div className="flex items-center">
          <div className="ms-2.5 justify-between flex w-full items-center sm:ms-4">
            <h3 className="bg-red-600 py-1 textarticlecategory rounded px-3 text-white">
              {item.category}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 inset-x-0 z-10">
      <div className="flex titlearticlesection flex-col h-full p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
          {item.name}
        </h3>
      </div>
    </div>
  </a>
  )
}
