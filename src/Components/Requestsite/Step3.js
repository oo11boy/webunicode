import React from 'react'

export default function Step3({step,setStep}) {
  return (
    <div>
      <button onClick={()=>setStep(step-1)}>قبلی</button>
    </div>
  )
}
