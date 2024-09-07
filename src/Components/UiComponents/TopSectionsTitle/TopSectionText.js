import React from 'react'
import './TopSectionText.css'
export default function TopSectionText({toptext,maintext,maincolor,linecolor}) {
  return (
    <div className="top-section w-full justify-center flex-col flex items-center">
   <p className={`mb-4  text-4xl before-top-section-text`}>{toptext}</p>
    <h3 style={{color:maincolor}} className={`text-4xl text-${maincolor}`}>{maintext}</h3>
    <div className='section-divider'>
    <span style={{backgroundColor:linecolor}} className={`line2 bg-${linecolor}`}></span>
       <span style={{backgroundColor:linecolor}} className={`line1 bg-${linecolor}`}></span>
  
    </div>
  </div>

  )
}
