import React, { useState } from "react";

export default function SlideCard({items}) {

    const [hoverlink, setHoverlink] = useState(false);

    return (
        <div className="w-full shadow-md my-10 slidecard  relative bg-white rounded-xl overflow-hidden h-[400px]">
            <img
                className="h-[50%] w-full"
                src={items.img}
                alt=""
            />
            <a
                onMouseEnter={() => setHoverlink(true)}
                onMouseLeave={() => setHoverlink(false)}
                href={'#'}
                className="w-[90%] portfolio-slide-title flex bg-[#1D2027] h-16 absolute skew-x-12 right-[-5%] top-[40%]"
            >
                <div className="skew-x-11 icontitletext flex w-[40%] bg-red-700 justify-center items-center h-full">
                    <span className={`${items.icon} text-2xl -skew-x-12 text-white pr-4`}></span>
                </div>
                <div className="flex justify-center items-center -skew-x-12 pr-4 text-xl">
                    <div href="#" className="text-white text-lg titletext">{items.name}</div>
                </div>
            </a>
            <p className="p-4 opacity-60 mt-16 h-[30%]">
             {items.content}
            </p>

            <a
                href={items.link}
                className={`portfolio-slider-link flex items-center px-4 ${hoverlink ? 'hover' : ''}`}
            >
                <p className="pl-2">مشاهده</p>
                <div className="divider"></div>
            </a>
        </div>
    );
}
