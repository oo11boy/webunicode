"use client"
import React, { useState } from 'react';

const page = () => {
  // تعریف state برای نگهداری رنگ متن
  const [textColor, setTextColor] = useState('black');

  // تابعی که هنگام کلیک روی دکمه فراخوانی می‌شود
  const handleButtonClick = () => {
    setTextColor('blue'); // تغییر رنگ متن به آبی
  };

  return (
    <div>
      {/* نمایش کلمه "محمد" با رنگ فعلی */}
      <h1 style={{ color: textColor }}>محمد</h1>

      {/* دکمه برای تغییر رنگ */}
      <button onClick={handleButtonClick}>تغییر رنگ به آبی</button>
    </div>
  );
};

export default page;