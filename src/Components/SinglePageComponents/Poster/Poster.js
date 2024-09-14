import { useEffect, useState } from "react";
import "./Poster.css";
import RequestSiteBtn from "@/Components/UiComponents/Buttons/RequestSiteBtn";

export default function Poster() {
  const [slider, setSlider] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setSlider((prev) => (prev === 5 ? 1 : prev + 1));
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [slider]);

  const images = [
    {
      main: "https://i-wp.ir/wp-content/uploads/2022/11/custom1.jpg",
      small: "/image/storeresponsive.png",
    },
    {
      main: "https://i-wp.ir/wp-content/uploads/2024/08/aroj.jpg",
      small: "/image/store2res.png",
    },
    {
      main: "https://i-wp.ir/wp-content/uploads/2024/05/lighto.jpg",
      small: "/image/storeres3.png",
    },
    {
      main: "https://i-wp.ir/wp-content/uploads/2024/06/petland.jpg",
      small: "/image/storeres4.png",
    },
    {
      main: "https://i-wp.ir/wp-content/uploads/2022/11/cosmetic.jpg",
      small: "/image/storeres5.png",
    },
  ];

  return (
    <div className="poster-bg container-field">
      <div className="container flex items-center justify-center lg:pt-[250px] pt-[100px]">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="lg:w-[40%] md:w-[60%] w-full space-y-5 pb-20 text-white">
            <h2 className="text-2xl text-start">قالب فروشگاهی</h2>
            <h4 className="text-4xl font-bold text-start">
              تیم قویه این طرحو با کمترین قیمت در اختیار شما قرار میده ددددد
            </h4>
            <h4 className="text-xl font-bold text-start">
              سفارش بدید حالشو ببرید
            </h4>
            <RequestSiteBtn text="درخواست سایت" />
          </div>
          <div className="relative z-50 lg:w-[50%] w-full flex justify-center">
            <div className={fade ? "show" : "fade"}>
              <div className="z-20">
                <img
                  className="w-[95%] rounded-2xl lg:skew-x-6 lg:-skew-y-6"
                  src={images[slider - 1].main}
                  alt=""
                />
                <img
                  className="w-[40%] rounded-2xl absolute bottom-0 lg:right-0 -right-5 lg:-skew-x-12 lg:skew-y-12"
                  src={images[slider - 1].small}
                  alt=""
                />
              </div>
            </div>
            <span className="poster-content -z-10"></span>

          </div>
        </div>
      </div>
    </div>
  );
}
