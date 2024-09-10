import React from "react";
import "./PortofolioCards.css";
import Link from "next/link";
import PortofolioContent from "./PortofolioContent";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function PortofolioCards({ item, category }) {

  if (category === "all" || item.category === category) {
    return (
      <div className="w-full">
        <Link href={`../viewportfolio/${item.id}`} className="image-container">
          <img src={item.img} alt={item.content} className="portfolio-image" />
          <button className="hover-button text-white text-xl">
            <VisibilityIcon />
          </button>
        </Link>
      </div>
    );
  }
  return null;
}
