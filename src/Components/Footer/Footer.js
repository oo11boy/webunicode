import Title from "../UiComponents/H4Title/Title";

export default function Footer() {
    return (
      <div className="container-field bg-[#1b1919] text-light pt-10">
        <footer className="">
          {/* Company Information */}
          <div className="footer-content container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-80 mt-20 lg:gap-0 gap-20 text-sm text-white">
            
            {/* Logo and Info Section */}
            
            <div className="about text-start lg:mx-auto">
              <img
                className="mb-4"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/logo-light.png"
                width="205"
                height="60"
                alt="کانسوا"
              />
              <p className="mb-8 leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
              </p>
              <div className="opening-hours">
                <h5 className="text-red-500 mb-2">ساعات کاری</h5>
                <ul>
                  <li className="flex justify-between">
                    <span>شنبه تا چهارشنبه:</span>
                    <span className="text-gray-400">2pm – 2pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>پنج شنبه:</span>
                    <span className="text-gray-400">تعطیل</span>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Links Section */}
            <div className="company-links lg:mx-auto">
              <Title text='شرکت ما'/>
              <ul className="space-y-4">
                <li><a href="#">پروفایل شرکت</a></li>
                <li><a href="#">مرکز کمک</a></li>
                <li><a href="#">مراقب</a></li>
                <li><a href="#">طرح و قیمت گذاری</a></li>
                <li><a href="#">تماس با ما</a></li>
              </ul>
            </div>
  
            <div className="services-links lg:mx-auto">
            <Title text='خدمات ما'/>
              <ul className="space-y-4">
                <li><a href="#">مدیریت سرمایه گذاری</a></li>
                <li><a href="#">برنامه ریزی کسب و کار</a></li>
                <li><a href="#">توصیه های مالی</a></li>
                <li><a href="#">استراتژی مالیاتی</a></li>
                <li><a href="#">استراتژی بیمه</a></li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div className="newsletter lg:mx-auto">
            <Title text='لورم ایپسوم'/>
              <p className="mb-4 leading-loose">
                به لیست مشترکین ما بپیوندید تا جدیدترین ها را دریافت کنید اخبار و پیشنهادات ویژه
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="ایمیل ..."
                  className="p-2 w-full bg-gray-700 text-white"
                />
                <button type="submit" className="bg-red-500 text-white p-2 ml-2">
                  عضویت
                </button>
              </form>
  
              <ul className="social-icons flex justify-center space-x-4 mt-4">
                <li>
                  <a href="#"><i className="fab fa-linkedin text-white"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-youtube text-white"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-twitter text-white"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-facebook-f text-white"></i></a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="footer-bottom bg-gray-900 text-gray-500 text-center  py-4">
            <div className="container flex justify-between items-center">
                <p>تمامی حقوق برای قالب یونیکد محفوظ است. ددددددد</p>
                <div className="flex justify-center space-x-4 mt-2">
                <a href="#">مقررات</a>
                <a href="#">خط مشی</a>
                <a href="#">پشتیبانی</a>
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  