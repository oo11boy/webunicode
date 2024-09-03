import React, { useState } from "react";

export default function SlideCard() {

    const [hoverlink, setHoverlink] = useState(false);

    return (
        <div className="w-full slidecard  relative bg-white rounded-xl overflow-hidden h-[540px]">
            <img
                className="h-[50%] w-full"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/09/4.jpg"
                alt=""
            />
            <a
                onMouseEnter={() => setHoverlink(true)}
                onMouseLeave={() => setHoverlink(false)}
                href="#"
                className="w-[90%] portfolio-slide-title flex bg-[#1D2027] h-20 absolute skew-x-12 right-[-5%] top-[42%]"
            >
                <div className="skew-x-11 icontitletext flex w-[40%] bg-red-700 justify-center items-center h-full">
                    <span className="icon-office text-4xl -skew-x-12 text-white pr-4"></span>
                </div>
                <div className="flex justify-center items-center -skew-x-12 pr-4 text-xl">
                    <div href="#" className="text-white titletext">شرکتی مهندسی</div>
                </div>
            </a>
            <p className="p-4 mt-16 h-[30%]">
                این نمونه کار مربوط به لوازم خانگی است این نمونه کار مربوط به لوازم
                خانگی است این نمونه کار مربوط به لوازم خانگی است این نمونه کار مربوط به
                لوازم خانگی است
            </p>

            <a
                href="#"
                className={`portfolio-slider-link flex items-center px-4 ${hoverlink ? 'hover' : ''}`}
            >
                <p className="pl-2">مشاهده نمونه کار</p>
                <div className="divider"></div>
            </a>
        </div>
    );
}
