import axios from 'axios';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

export default function SubmitBtnCard({ setStep, formData }) {
  const [loading, setLoading] = useState(false);
  async function postData() {
  
    try {
      setLoading(true);

      // ارسال درخواست به سرور برای ثبت داده‌ها
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/request_site`, formData);

      // آرایه‌ای از ایمیل‌های مقصد
      const emails = ['unicodewebdesign@gmail.com', 'mohammadkazemi704@gmail.com', 'editkhone@gmail.com'];

      // ارسال ایمیل به هر یک از آدرس‌ها
      await Promise.all(
        emails.map((email) =>
          axios.post('/api/sendEmail', {
            email, // ایمیل مقصد
            name: formData.name, // نام از formData
            phone: formData.phone,
            type: formData.type,
            selection: formData.selection,
            portfolioid:formData.portfolioid,
            emailaddress: formData.email,
           })
        )
      );

      setStep(5);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:!w-1/3 h-full overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200">
      <button
        onClick={postData}
        className="btnnext p-4 lg:!p-[unset] text-sm w-full h-full flex justify-center items-center"
      >
        <span>ثبت درخواست مشاوره و تماس</span>
        <span>
          <ClipLoader loading={loading} color="#fffff" size={30} />
        </span>
      </button>
    </div>
  );
}
