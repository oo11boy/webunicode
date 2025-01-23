import { FaFileContract, FaMoneyCheckAlt, FaCheckCircle } from "react-icons/fa";
import TopSectionText from "../UiComponents/TopSectionsTitle/TopSectionText";

const LandingHowPay = () => {
  return (
    <div className="flex py-8 flex-col justify-center items-center m-auto w-[90%] lg:w-[70%] text-center">
            <TopSectionText
              toptext={"قدم چهارم"}
              linecolor={"red"}
              maintext={"نحوه پرداخت "}
            />
        <p className="mt-4">
    پس از تنظیم قرارداد، نصف مبلغ را پرداخت می‌کنید و نصف دیگر پس از تحویل کامل کار. این روش برای راحتی و حفظ اعتماد دو طرف است.
    </p>
    <p className="pb-4">
    سایت ما دارای نماد اعتماد از وزارت صنعت، معدن و تجارت است و اطلاعات ما در این سازمان ثبت شده‌است. برای مشاهده نماد اعتماد به انتهای صفحه مراجعه کنید.
    </p>
    
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* مرحله ۱: تنظیم قرارداد */}
      <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
        </div>
        <div className="fill-violet-500 w-12">
          <FaFileContract className="w-12 h-12 text-violet-500" />
        </div>
        <h1 className="font-bold text-xl">تنظیم قرارداد</h1>
        <p className="text-sm text-zinc-500 leading-6">
          پس از توافق، قرارداد را تنظیم و امضا می‌کنیم.
        </p>
      </div>

      {/* مرحله ۲: پرداخت اولیه */}
      <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
        </div>
        <div className="fill-violet-500 w-12">
          <FaMoneyCheckAlt className="w-12 h-12 text-violet-500" />
        </div>
        <h1 className="font-bold text-xl">پرداخت اولیه</h1>
        <p className="text-sm text-zinc-500 leading-6">
          نصف مبلغ قرارداد را در این مرحله پرداخت می‌کنید.
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
          پس از تحویل کامل کار، مابقی مبلغ را پرداخت می‌کنید.
        </p>
      </div>
    </div>
    </div>
  );
};

export default LandingHowPay;