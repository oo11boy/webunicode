export default function AboutUsBox({number, text}) {
  return (
    <div class="flex justify-center items-center flex-col p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
      <span class="w-24 text-center p-3 text-blue-500 font-bold text-4xl rounded-lg bg-blue-100/80 dark:bg-gray-700">
        {number}
      </span>

      <h2 class="mt-4 alibaba text-3xl font-medium text-gray-800 dark:text-white">
        {text}
      </h2>
    </div>
  );
}
