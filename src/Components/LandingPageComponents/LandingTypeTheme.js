import React from 'react'
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText'

export default function LandingTypeTheme() {
  return (
    
    <div className="flex py-8 flex-col justify-center items-center m-auto w-[90%] lg:w-[70%] text-center">
    <TopSectionText
      toptext={"قدم اول"}
      linecolor={"red"}
      maintext={"انتخاب نوع قالب"}
    />
<div className="mt-8 space-y-6">

<p className="text-xl font-bold text-gray-900">
انتخاب قالب مناسب برای سایت شما:
</p>

<p className="text-lg font-semibold text-gray-800">
شما می‌توانید از دو نوع قالب استفاده کنید:
<span className="font-medium text-blue-600 mx-2">قالب‌های از پیش طراحی شده</span> یا
<span className="font-medium text-blue-600 mx-2">قالب‌های اختصاصی</span>.
</p>

<div className="space-y-4">
<p className="text-gray-700 leading-7">
اگر از <span className="font-medium text-gray-900">قالب‌های از پیش طراحی شده</span> استفاده کنید، می‌توانید تغییرات مورد نظر خود را به ما اطلاع دهید. تمامی این قالب‌ها، شامل متن‌ها، رنگ‌ها، افزونه‌ها و سایر امکانات، تا حد امکان قابل تنظیم هستند. بنابراین، توصیه می‌کنیم قالبی را انتخاب کنید که بیشترین شباهت را به چیزی که در ذهن دارید، داشته باشد.
</p>

<p className="text-gray-700 leading-7">
در مورد <span className="font-medium text-gray-900">قالب‌های اختصاصی</span>، شما طرح مورد نظر خود را به ما ارائه می‌دهید و ما از ابتدا بر اساس نیازها و درخواست‌های شما شروع به طراحی می‌کنیم.
</p>
</div>

<div className="bg-blue-50 p-4 rounded-lg">
<p className="text-gray-800 font-semibold">
پیشنهاد ما:
</p>
<p className="text-gray-700 mt-2 leading-7">
اگر به دنبال سایتی با امکانات رایج و مشابه سایت‌های موجود هستید، استفاده از <span className="font-medium text-gray-900">قالب‌های از پیش طراحی شده</span> گزینه‌ی بهتری است. اما اگر نیاز به طراحی خاص و منحصر به فرد دارید، <span className="font-medium text-gray-900">قالب‌های اختصاصی</span> بهترین انتخاب خواهند بود.
</p>
</div>

</div>

</div>
  )
}
