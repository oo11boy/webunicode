import React from 'react';
import './TopSectionText.css';

export default function TopSectionText({ toptext, maintext, maincolor = 'black', linecolor }) {
  return (
    <header className="top-section w-full flex flex-col items-center" lang="fa">
      <p className="mb-4 text-4xl before-top-section-text">{toptext}</p>
      <h2 className={`text-4xl text-${maincolor}`}>{maintext}</h2>
      <div className="section-divider">
        <span className={`line2 bg-${linecolor}`}></span>
        <span className={`line1 bg-${linecolor}`}></span>
      </div>
    </header>
  );
}