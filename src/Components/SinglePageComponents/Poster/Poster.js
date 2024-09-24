import { useEffect, useState } from "react";
import "./Poster.css";
import RequestSiteBtn from "@/Components/UiComponents/Buttons/RequestSiteBtn";

export default function Poster({ singlepageid }) {
  const [slider, setSlider] = useState(1);
  const [fade, setFade] = useState(true);

  const dynamicSinglePage = 
    singlepageid === 'store' ? [
      {
        title: 'خرید سایت فروشگاهی',
        description: 'اگر به دنبال سایتی برای فروش محصولاتتان هستید یونیکد میتواند شما را در طراحی سایت ارزان فروشگاهی یاری نماید.',
      
        images: [
          { main: "https://i-wp.ir/wp-content/uploads/2022/11/custom1.jpg", small: "/image/storeresponsive.png" },
          { main: "https://i-wp.ir/wp-content/uploads/2024/08/aroj.jpg", small: "/image/store2res.png" },
          { main: "https://i-wp.ir/wp-content/uploads/2024/05/lighto.jpg", small: "/image/storeres3.png" },
          { main: "https://i-wp.ir/wp-content/uploads/2024/06/petland.jpg", small: "/image/storeres4.png" },
          { main: "https://i-wp.ir/wp-content/uploads/2022/11/cosmetic.jpg", small: "/image/storeres5.png" },
        ],
      }
    ] : singlepageid === 'company' ? [
      {
        title: 'خرید سایت شرکتی',
        description: 'اگر به دنبال سایتی برای معرفی کسب و کار و شرکت خودتان هستید یونیکد میتواند شما را در طراحی سایت شرکتی یاری نماید.',
      
        images: [
          { main: "https://wp-theme.xyz/images/1_1.jpg", small: "/image/c1.png" },
          { main: "https://wp-theme.xyz/images/4_1.jpg", small: "/image/c2.png" },
          ],
      }
    ] : singlepageid === 'resume' ? [
      {
        title: 'خرید سایت رزومه ای و شخصی',
        description: 'اگر به دنبال سایتی برای معرفی خودتان هستید یونیکد میتواند شما را در طراحی سایت ارزان اقتصادی و رزومه ای یاری نماید.',
      
        images: [
          { main: "/image/r1.png", small: "/image/rs1.png" },
          { main: "/image/r2.png", small: "/image/rs2.png" },
        ],
      }
    ] : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setSlider((prev) => (prev === dynamicSinglePage[0]?.images.length ? 1 : prev + 1));
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [slider, dynamicSinglePage]);

  return (
    <div className="poster-bg container-field">
      <div className="container flex items-center justify-center lg:pt-[250px] pt-[100px]">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full">
          {dynamicSinglePage.map((page, index) => (
            <div key={index} className="flex lg:flex-row flex-col justify-between items-center w-full">
              <div className="lg:w-[40%] md:w-[60%] w-full space-y-5 pb-20 text-white">
                <h2 className="text-2xl text-start">{page.title}</h2>
                <h4 className="text-2xl font-bold text-start">{page.description}</h4>
                <RequestSiteBtn  text="درخواست سایت" />
              </div>
              <div className="relative z-50 lg:w-[50%] w-full flex justify-center">
                <div className={fade ? "show" : "fade"}>
                  <div className="z-20">
                    <img
                      className="w-[95%]  rounded-2xl lg:skew-x-6 lg:-skew-y-6"
                      src={page.images[slider - 1].main}
                      alt={page.title}
                    />
                    <img
                      className="w-[40%] rounded-2xl absolute bottom-0 lg:right-0 -right-5 lg:-skew-x-12 lg:skew-y-12"
                      src={page.images[slider - 1].small}
                      alt={page.title}
                    />
                  </div>
                </div>
                <span className="poster-content -z-10"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

