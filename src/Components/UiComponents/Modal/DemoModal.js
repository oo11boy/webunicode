import Link from "next/link";
import "../../Requestsite/Step3/PortofolioCards/PortofolioCards.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImageWithLoader from "../ImageWithLoader/Image";
import './Modal.css'

export default function DemoModal({ setIsModalOpen, item, requestTemplate }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal bg-white p-8 rounded-lg shadow-lg w-full md:w-full max-w-xl">
        <div className="flex md:!flex-row flex-col justify-between w-full">
          <div className="relative w-full ml-6 shadow-xl group">
            <ImageWithLoader
              src={item.img}
              alt={item.content}
              className="portfolio-image  w-full max-h-[200px]"
            />
            <Link
              target="_blank"
              href={`../viewportfolio/${item.id}`}
              className="w-full hover-cart-button absolute bottom-[-32px] h-16 left-1/2 transform -translate-x-1/2 rounded-xl translate-y-0 opacity-0 text-white text-sm flex items-center justify-center group-hover:opacity-100 group-hover:translate-y-[-50%] transition-all duration-500 ease-in-out hover:bg-black hover:bg-opacity-500"
            >
              <VisibilityIcon className="w-6 h-6" />
            </Link>
          </div>

          <div className="flex flex-col md:space-y-10 space-y-4 mt-5">
            <span className="text-xl font-bold">{item.name}</span>
            <span className="">{item.content}</span>
            <a
              style={{ fontFamily: "iransans" }}
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                requestTemplate(item.id);
                setIsModalOpen(false);
              }}
            >
              ثبت درخواست سایت
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-8 px-6 py-2 bg-[#1f9d7e] text-white text-center rounded-lg"
        >
          بستن
        </button>
      </div>
    </div>
  );
}
