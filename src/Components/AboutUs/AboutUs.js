import TopHeader from "../Header/TopHeader";
import ImageWithLoader from "../UiComponents/ImageWithLoader/Image";
import TopSectionText from "../UiComponents/TopSectionsTitle/TopSectionText";

export default function AboutUs() {
  return (
    <>
      <TopHeader />
      <div className="container-field pt-20">
        <div className="container justify-between">
          <div className="w-full">
            <TopSectionText
              toptext={"درباره‌ ما"}
              maincolor={"black"}
              maintext={"ما کی هستیم؟"}
              linecolor={"red"}
            />
            <div className="flex mt-12">
              <div className="w-full leading-loose p-5">
                <span>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </span>
              </div>
              <div className="w-full">
                <img src="/image/about-us.png" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
