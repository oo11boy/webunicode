import React from 'react'

export default function SubmitBtnCard({setStep}) {
  return (
  
    <div className="w-full lg:!w-1/3 h-full overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200">
    <button
      onClick={() => setStep(5)}
      className="btnnext p-4 lg:!p-[unset] text-xl w-full h-full"
    >
      ثبت درخواست مشاوره و تماس
    </button>
  </div>
  )
}
