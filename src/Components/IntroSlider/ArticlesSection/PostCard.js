export const PostCard = ({ item, className, heightcard }) => (
    <a
      className={`group relative block rounded-xl focus:outline-none ${className}`}
      href="#"
 
    >
      <div
        className={`shrink-0 relative rounded-xl overflow-hidden w-full before:absolute max-md:!h-[355px] before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-black`}
        style={{ height: heightcard }}
      >
        <img
          className="size-full absolute top-0 start-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
          src={item.img}
          alt={item.title}
        />
      </div>
  
      <div className="absolute top-0 inset-x-0 z-10">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                className="size-[46px] bg-white p-2 border-2 border-white rounded-full"
             src="./image/logo.webp"
                alt="Avatar"
              />
            </div>
            <div className="ms-2.5 justify-between flex w-full items-center sm:ms-4">
             
            <p className="text-xs  text-white/80 ">{item.date}</p>
<h3 className=" bg-red-600 py-1 rounded px-3 text-white ">{item.Category}</h3>
            </div>
          </div>
        </div>
      </div>
  
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
            {item.title}
          </h3>
          <p className="mt-2 text-white/80">{item.content}</p>
        </div>
      </div>
    </a>
  );
