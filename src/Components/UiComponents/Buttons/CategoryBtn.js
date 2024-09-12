import './Buttons.css'

export default function CategoryBtn({
  text,
  category,
  itemCategory,
  onClick,
}) {
  return (
    <div className="py-2 md:mx-5 mx-1 lg:mx-2">
      <button
        onClick={onClick}
        className={`categoryBtn border p-2 lg:w-64 md:w-28 w-24 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-100 ${
          category === itemCategory
            ? "bg-green-100 border-green-800"
            : "bg-slate-50"
        }`}
      >
        {text}
      </button>
    </div>
  );
}
