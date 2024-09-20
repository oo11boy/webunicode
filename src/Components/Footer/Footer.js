import NavbarItems from "../Header/NavbarItems/NavbarItems";
import { SitePhone } from "../UiComponents/Contact/Contact";
import Title from "../UiComponents/H4Title/Title";
import SmallLogo from "../UiComponents/SiteLogo/SiteLogo";
import SocialIcons from "../UiComponents/SocialIcons/SocialIcons";

export default function Footer() {
  const navChildren = [
    {
      title: "طراحی سایت فروشگاهی",
      icon: "icon-cart",
      to: "store",
      id: 1,
    },
    {
      title: "طراحی سایت شرکتی",
      icon: "icon-office",
      to: "company",
      id: 2,
    },
    {
      title: "طراحی سایت رزومه ای",
      icon: "icon-user-tie",
      to: "resume",
      id: 3,
    },
  ];
  return (
    <div className="container-field bg-gray-900 text-light pt-10">
      <footer className="relative overflow-hidden">
        <div className="absolute lg:pl-2 lg:-bottom-60 overflow-hidden right-0 w-16 sm:w-24 md:w-32 lg:w-48 opacity-30">
          <img src="/image/footer-img.png" alt="" />
        </div>
        {/* Company Information */}
        <div className="footer-content container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-80 mt-20 lg:gap-0 gap-20 text-sm text-white">
          {/* Logo and Info Section */}

          <div className="about text-start lg:mx-auto">
            <SmallLogo />
            <p className="mb-8 mt-4 yekan leading-loose">
            یونیکد مرجع طراحی انواع سایت های مختلف با قیمتی ارزان و کیفیتی متاسب میتواند شما را در بهبود کسب و کارتان همراهی نماید
            </p>
            <div className="opening-hours">
              <h5 className="text-red-500 mb-2">ساعات کاری</h5>
              <ul>
                <li className="flex justify-between">
                  <span>شنبه تا جمعه:</span>
                  <span className="text-gray-400">9:00 - 21:00</span>
                </li>
             
              </ul>
            </div>
          </div>

          {/* Links Section */}
          <div className="company-links lg:mx-auto">
            <Title text="دسترسی سریع" />
            <NavbarItems hiddenitem={true} footerview={true} />
          </div>

          <div className="services-links lg:mx-auto">
            <Title text="خدمات ما" />
            <ul className="space-y-4">
              {navChildren.map((item) => (
                <li key={item.id}>
                  <a href={`../${item.to}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="newsletter  w-full lg:mx-auto">
            <Title text="نماد اعتماد" />

            <div className="bg-white rounded-lg mb-4 flex justify-center items-center w-full">
              <a
                target="_blank"
                href="https://trustseal.enamad.ir/?id=467521&Code=8RJb5Bl8uzBsckWVX7RfaZnom53ODxSQ"
                className="flex justify-center items-center w-full"
              >
                <img
                  alt="نماد اعتماد"
                  className="h-[180px]"
                  src="http://unicodewebdesign.com/_next/image?url=%2Fimg%2Fnamad.png&w=256&q=75"
                />
              </a>
            </div>

         
            <SocialIcons size={'text-2xl'}/>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom bg-black text-gray-500 text-center w-full py-4">
          <div className="container flex flex-wrap w-full lg:flex-nowrap justify-between items-end">
            <div className="mx-auto sm:m-[unset]">
              <span className="sm:m-[unset] alibaba flex justify-center items-center">
                <p> تمامی حقوق برای </p>
               
                 <a href="../" className="mx-2 text-yellow-300">قالب یونیکد</a> 
               <p>
               محفوظ است.
               </p>
            
              </span>
            </div>
            <div className="flex justify-center items-center mt-4 w-full sm:flex-none sm:!w-[unset] sm:!mt-[unset]">
            <SitePhone/>
            </div>
         
          </div>
        </div>
      </footer>
    </div>
  );
}
