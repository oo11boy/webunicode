import CircleProgressBar from '@/Components/GeneralComponents/CircleProgressBar/CircleProgressBar'
import React from 'react'

export default function General_Info_Service() {
  return (
    <div class="w-[50%] flex flex-col justify-start md:pt-24 lg:py-16 ">
    <div class=" relative  m-auto lg:ml-20  lg:pl-8">
      <div class="absolute hidden md:flex -right-5 lg:right-[unset] lg:-left-20 lg:-top-14 -top-20 arrow-shape mb-8">
        <img class="w-32" src="/image/red-arrow.png" alt="arrow" />
      </div>
      <h3 class="mb-6 text-4xl gradianttext text-center md:text-right md:text-white ">
        انعطاف‌پذیری و ویژگی‌های متناسب با سبک هر تیم.
      </h3>
      <p class="my-6 pt-6 text-black text-center md:text-right md:text-white ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
        در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
        نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>

      <div class="circle-progress md:hidden lg:flex justify-between w-full  space-x-8">
        <CircleProgressBar percentage={58} text={"رشد شرکت"} />
        <CircleProgressBar percentage={99} text={"رضایت مشتری"} />
      </div>
    </div>
  </div>
  )
}
