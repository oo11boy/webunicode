import React from 'react'
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText'
import Requestsite from '../Requestsite/Requestsite'

export default function LandingForm() {
  return (
  
    <div>

    <div className="flex flex-col justify-center items-center w-[90%] lg:w-[70%] m-auto text-center"> 
  <TopSectionText toptext={'قدم سوم'} linecolor={'red'}  maintext={'تنظیم قرارداد'}/>
      <p className="my-4">
        با پر کردن فرم زیر میتوانید موارد پیش فرض قرارداد فیزیکی را به ما اطلاع دهید.
      </p>
    
    </div>
      <Requestsite/>
      </div>
  )
}
