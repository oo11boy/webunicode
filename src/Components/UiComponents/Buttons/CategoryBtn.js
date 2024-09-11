export default function CategoryBtn({
  text,
  category,
  itemCategory,
  onClick,
}) {
  return (
    <div className="py-2 mx-5 lg:mx-2">
      <button
        onClick={onClick}
        className={`border p-2 w-64 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-100 ${
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
