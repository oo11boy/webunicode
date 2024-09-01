import HoverNav from "@/Components/GeneralComponents/NavbarItems/HoverNav";
import NavLinks from "@/Components/GeneralComponents/NavbarItems/NavLinks";

export default function ResoponsiveHeader() {
  return (
    <>
      <nav class="flex z-10 items-center justify-between w-full mt-5 bg-white shadow-md">
        <div class="mx-auto p-4 flex w-full justify-between items-center">
          <div class="flex items-center pl-[9%]">
            <a
              href="/contact-us"
              class="text-sm font-medium text-white bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900"
            >
              سوالی دارید؟
            </a>
          </div>

          <div class="flex items-center m-auto" id="navbar-menu">
            <ul class="flex flex-row space-x-8 ml-auto items-center">
              <NavLinks title={"خانه"} to={"#"} />
              <NavLinks title={"درباره‌ی ما"} to={"#"} />
              <HoverNav />
              <NavLinks title={"فروشگاه"} to={"#"} />
              <NavLinks title={"نمونه کارها"} to={"#"} />
            </ul>
          </div>

          <div class="flex items-center pr-[4%]">
            <a class="ml-4" href="/">
              <img
                className="skew-x-[15deg] h-[40px]"
                src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/logo.png"
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
