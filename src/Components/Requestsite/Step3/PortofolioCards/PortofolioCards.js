import React, { useState } from "react";
import "./PortofolioCards.css";
import DemoModal from "@/Components/UiComponents/Modal/DemoModal";
// import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";


export default function PortofolioCards({ item, category,setFormData, requestTemplate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  if (category === "all" || item.category === category) {
    return (
      <div className="w-full">
        <a className="image-container">
          <img src={item.img} alt={item.content} className="portfolio-image" />
          <button
            onClick={showModal}
            className="hover-eye-button text-white text-sm hover:text-black hover:bg-white transition-all"
          >
            <SearchIcon />
          </button>
        </a>
        <div className="">
          {isModalOpen && (
            <DemoModal item={item} setIsModalOpen={setIsModalOpen} requestTemplate={requestTemplate}/>
          )}
        </div>
      </div>
    );
  }
  return null;
}
