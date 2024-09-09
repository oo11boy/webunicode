import React from 'react'

export default function Step1() {
  return (
    <div className='flex h-[100%] flex-col justify-center items-center'>
    <h3 className='text-3xl mb-8'>اطلاعات زیر را وارد نمایید</h3>
        <form action="" className='flex w-full flex-col justify-center items-center'>
            <input type="text" name="" id="" className='bg-[#F7F8F9] border mb-4 border-gray-500 w-[60%] p-4 rounded-md' placeholder='نام و نام خانوادگی خود را وارد نمایید.'/>
            <input type="number" className='bg-[#F7F8F9] border mb-4 border-gray-500 w-[60%] p-4 rounded-md' placeholder="شماره تماس خود را وارد نمایید."/>
            <input type="mail" className='bg-[#F7F8F9] border mb-4 border-gray-500 w-[60%] p-4 rounded-md' placeholder='ایمیل خود را وارد کنید.'/>
        </form>
    </div>
  )
}
