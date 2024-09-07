

export default function ListCategories({ item }) {
  return (
    <div className=" p-2 bg-white border border-gray-200 rounded-lg shadow flex justify-center items-center">
      <span className="ml-2"> {item.icon}</span>
      <a href={item.link} className="text-gray-600 text-[14px]">
        {item.title}
      </a>
    </div>
  );
}
