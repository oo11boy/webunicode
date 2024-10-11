import axios from 'axios';
import React, { useState } from 'react'
import { ClipLoader } from "react-spinners";

export default function SubmitBtnCard({setStep, formData}) {
  const [loading, setLoading] = useState(false);

  async function postData () {
    try {
      setLoading(true)
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/request_site`, formData)
      setStep(5)
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false)
    }
  }
  

  return (
  
    <div className="w-full lg:!w-1/3 h-full overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200">
    <button
      onClick={postData}
      className="btnnext p-4 lg:!p-[unset] text-sm w-full h-full flex justify-center items-center"
    >
      <span>ثبت درخواست مشاوره و تماس</span>
      <span><ClipLoader loading={loading} color='#fffff' size={30} /></span>
    </button>
  </div>
  )
}
