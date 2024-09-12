export default function SiteType({type, selectedType, handleSelectType}) {
  return (
    <div
      key={type.value}
      onClick={() => handleSelectType(type.value)}
      className={`relative p-8 w-32 h-32 lg:!w-64 lg:!h-64 cursor-pointer border rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-100 ${
        selectedType === type.value ? "border-blue-500 bg-blue-50" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-3xl text-[#1f9d7e] sm:!text-5xl mb-4">
          {type.icon}
        </span>
        <h4 className="text-xl text-[#077c5f] font-semibold">{type.label}</h4>
      </div>
      {selectedType === type.value && (
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-blue-200 opacity-20"></div>
      )}
    </div>
  );
}
