"use client";
import React, { useState, useEffect } from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletIcon from "@mui/icons-material/Tablet";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import SmallLogo from "@/Components/UiComponents/SiteLogo/SiteLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PortfolioDb } from "@/lib/PortfolioDb";

const ResponsiveIframe = ({ id }) => {
  const router = useRouter();
  const [url, seturl] = useState(null);

  useEffect(() => {
    const validPortfolio = PortfolioDb.some((item) => item.id === parseInt(id));

    if (!validPortfolio) {
      router.push("/");
    } else {
      const filter = PortfolioDb.find((item) => item.id == id);
      seturl(filter.link);
    }
  }, [id, router]);

  const [size, setSize] = useState("desktop");

  const sizes = {
    mobile: { width: "375px", height: "100%" },
    tablet: { width: "768px", height: "100%" },
    desktop: { width: "100%", height: "100%" },
  };

  return (
    <div className="flex h-lvh flex-col items-center">
      <>
        <div className="shadow-md bg-gray-100 z-50 flex p-4 border border-gray-200 xl:!px-[10%] justify-between w-full items-center">
          <div>
            <Link
              style={{ fontFamily: "iransans" }}
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              href={`../requestSite/${id}`}
            >
              ثبت درخواست سایت
            </Link>
          </div>
          <div className=" space-x-4 hidden lg:flex">
            <button
              onClick={() => setSize("mobile")}
              className={`p-2 rounded-lg ${
                size === "mobile" ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-400 transition-colors`}
            >
              <SmartphoneIcon />
            </button>
            <button
              onClick={() => setSize("tablet")}
              className={`p-2 rounded-lg ${
                size === "tablet" ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-400 transition-colors`}
            >
              <TabletIcon />
            </button>
            <button
              onClick={() => setSize("desktop")}
              className={`p-2 rounded-lg ${
                size === "desktop" ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-400 transition-colors`}
            >
              <DesktopWindowsIcon />
            </button>
          </div>

          <div>
            <SmallLogo size={"100px"} />
          </div>
        </div>
        <iframe
          src={url}
          style={{
            width: sizes[size].width,
            height: sizes[size].height,
            transition: "width 0.5s ease, height 0.5s ease", // انیمیشن برای تغییر سایز iframe
          }}
          className="border border-gray-300 shadow-lg rounded-lg"
          title="Responsive Preview"
        ></iframe>
      </>
    </div>
  );
};

export default ResponsiveIframe;
