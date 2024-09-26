import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImageWithLoader from '@/Components/UiComponents/ImageWithLoader/Image';

export default function ImagePortfolioCard({infoorder,id}) {
  return (
 
    <div className="!h-[250px] sm:!h-full w-[95%] m-auto sm:!m-[unset] sm:!w-1/3">
    <a href={`../viewportfolio/${id}`} target='_blank' className="image-container !m-auto !max-w-full !h-full">
      <img
      
      />
      <ImageWithLoader 
        src={infoorder.img}
        className="portfolio-image object-top h-full object-cover"
        alt={infoorder.title}
      />
      <button className="hover-eye-button text-white text-sm hover:text-black hover:bg-white transition-all">
      <VisibilityIcon className="w-6 h-6" />
      </button>
    </a>
  </div>
  )
}
