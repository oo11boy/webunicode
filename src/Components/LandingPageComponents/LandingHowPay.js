import { FaFileContract, FaMoneyCheckAlt, FaCheckCircle } from "react-icons/fa";
import TopSectionText from "../UiComponents/TopSectionsTitle/TopSectionText";

const LandingHowPay = () => {
  return (
    <div style={{direction:"rtl"}} className="flex py-8 flex-col justify-center items-center m-auto w-[90%] lg:w-[70%] text-center">
      <TopSectionText
        toptext={"قدم چهارم"}
        linecolor={"red"}
        maintext={"نحوه پرداخت "}
      />
      <p className="mt-4">
        پرداخت به سه مرحله تقسیم شده است: یک سوم پس از ثبت قرارداد، یک سوم در اواسط طراحی، و یک سوم نهایی پس از اتمام کامل طراحی سایت. این روش برای راحتی و حفظ اعتماد دو طرف است.
      </p>
      <p className="pb-4">
        سایت ما دارای نماد اعتماد از وزارت صنعت، معدن و تجارت است و اطلاعات ما در این سازمان ثبت شده‌است. برای مشاهده نماد اعتماد به انتهای صفحه مراجعه کنید.
      </p>
      
      <div className="flex yekan flex-wrap justify-center gap-6 p-6">
        {/* مرحله ۱: تنظیم قرارداد و پرداخت اولیه */}
        <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
          </div>
          <div className="fill-violet-500 w-12">
            <FaFileContract className="w-12 h-12 text-violet-500" />
          </div>
          <h1 className="font-bold text-xl">تنظیم قرارداد و پرداخت اولیه</h1>
          <p className="text-sm text-zinc-500 leading-6">
            پس از توافق، قرارداد را تنظیم و امضا می‌کنیم و یک سوم مبلغ را پرداخت می‌کنید.
          </p>
        </div>

        {/* مرحله ۲: آغاز طراحی و پرداخت دوم */}
        <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
          </div>
          <div className="fill-violet-500 w-12">
            <FaMoneyCheckAlt className="w-12 h-12 text-violet-500" />
          </div>
          <h1 className="font-bold text-xl">آغاز طراحی و پرداخت دوم</h1>
          <p className="text-sm text-zinc-500 leading-6">
            پس از آغاز طراحی، در اواسط کار یک سوم دیگر از مبلغ را پرداخت می‌کنید.
          </p>
        </div>

        {/* مرحله ۳: تحویل و پرداخت نهایی */}
        <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
          </div>
          <div className="fill-violet-500 w-12">
            <FaCheckCircle className="w-12 h-12 text-violet-500" />
          </div>
          <h1 className="font-bold text-xl">تحویل و پرداخت نهایی</h1>
          <p className="text-sm text-zinc-500 leading-6">
            پس از اتمام کار، یک سوم نهایی مبلغ را پرداخت می‌کنید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingHowPay;