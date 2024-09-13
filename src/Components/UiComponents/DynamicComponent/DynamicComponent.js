import WhyUs from '@/Components/SinglePageComponents/WhyUs/WhyUs'
import React from 'react'

export default function DynamicComponent({categoryname}) {
   
    return (
        <>
     {categoryname=="store" && <WhyUs bgcolor={'bg-red-600'}/>}
      {categoryname=="company" && <WhyUs bgcolor={'bg-yellow-600'}/>}
      </>
  )
}
