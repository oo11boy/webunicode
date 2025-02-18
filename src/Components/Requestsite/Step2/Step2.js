import React, { useState, useEffect } from "react";

export default function Step2({ step, setStep, formData, setFormData, portfolioid }) {
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Update button state whenever form data changes
  useEffect(() => {
    const { name, phone, email } = formData;
    const isPhoneValid = validatePhone(phone);
    const isEmailValid = validateEmail(email);

    if (name && isPhoneValid && isEmailValid) {
      setIsNextDisabled(false); // Enable the button if all fields are filled and valid
    } else {
      setIsNextDisabled(true); // Disable the button if any field is empty or invalid
    }
  }, [formData]);

  const validatePhone = (phone) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update formData with input values
      portfolioid: portfolioid,
    });

    if (name === "phone") {
      if (!validatePhone(value)) {
        setPhoneError("شماره تلفن باید با 09 شروع شود و 11 رقم باشد.");
      } else {
        setPhoneError("");
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("لطفاً یک آدرس ایمیل معتبر وارد کنید.");
      } else {
        setEmailError("");
      }
    }
  };

  return (
    <div className="flex min-h-[80vh] step1 flex-col justify-center items-center">
      <h3 className="text-2xl text-bold text-[#9844F1] sm:!text-4xl mb-8">اطلاعات زیر را وارد نمایید:</h3>
      <form className="flex w-full flex-col justify-center items-center">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-[#F7F8F9] border mb-4 border-gray-500 w-[85%] md:w-[60%] p-8 rounded-xl"
          placeholder="نام و نام خانوادگی."
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="bg-[#F7F8F9] border mb-4 border-gray-500 w-[85%] md:w-[60%] p-8 rounded-xl"
          placeholder="شماره تماس"
        />
        {phoneError && <p className="text-red-500 text-sm mb-4">{phoneError}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-[#F7F8F9] w-[85%] md:w-[60%] border mb-4 border-gray-500 p-8 rounded-xl"
          placeholder="آدرس ایمیل"
        />
        {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}
      </form>

      <div className="flex gap-8">
        <button
          className="btnnext text-2xl py-2 px-8 mt-12 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          onClick={() => setStep(step - 1)}
        >
          قبلی
        </button>
        <button
          className="btnnext text-2xl py-2 px-8 mt-12 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
          onClick={() => setStep(step + 1)}
          disabled={isNextDisabled}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}