import React from 'react'

export default function ImagePortfolioCard({infoorder}) {
  return (
 
    <div className="!h-[250px] sm:!h-full w-[95%] m-auto sm:!m-[unset] sm:!w-1/3">
    <a className="image-container !m-auto !max-w-full !h-full">
      <img
        src={infoorder.img}
        className="portfolio-image object-top h-full object-cover"
        alt="Portfolio"
      />
      <button className="hover-eye-button text-white text-sm hover:text-black hover:bg-white transition-all">
        دیدن
      </button>
    </a>
  </div>
  )
}
