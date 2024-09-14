import "./Poster.css";
import RequestSiteBtn from "@/Components/UiComponents/Buttons/RequestSiteBtn";

export default function Poster() {
  return (
    <div className="poster-bg container-field">
      <div className="container flex items-center justify-center lg:pt-[250px] pt-[100px]">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="lg:w-[40%] md:w-[60%] w-full space-y-5 pb-20 text-white">
            <h2 className="text-2xl text-start">قالب فروشگاهی</h2>
            <h4 className="text-4xl font-bold text-start ">
              تیم قویه این طرحو با کمترین قیمت در اختیار شما قرار میده ددددد
            </h4>
            <h4 className="text-xl font-bold text-start ">
              سفارش بدید حالشو ببرید
            </h4>
            <RequestSiteBtn text='درخواست سایت'/>
          </div>
          <div className="relative lg:w-[50%] w-full flex justify-center">
            <div className="z-20">
              <img
                className="w-[95%] rounded-2xl lg:skew-x-6 lg:-skew-y-6"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/1-3.jpg"
                alt=""
              />
              <img
                className="w-[40%] rounded-2xl absolute bottom-0 lg:right-0 -right-5 lg:-skew-x-12 lg:skew-y-12"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/2-3.jpg"
                alt=""
              />
            </div>
            <span className="poster-content"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
