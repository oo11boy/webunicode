import React from "react";

export default function ProgressBar() {
  return (
    <div class="progressbar my-10 md:my-auto w-full md:w-auto items-center flex md:flex-none flex-col justify-center md: text-center text-black">
      <div
        class="circle relative w-28 h-28 rounded-full mb-4"
        data-percent="58"
      >
        <Flat
          progress={50}
          range={{ from: 0, to: 100 }}
          sign={{ value: "%", position: "end" }}
          showMiniCircle={true}
          showValue={true}
          sx={{
            strokeColor: "#ff0000",

            barWidth: 5,
            bgStrokeColor: "#ffffff",
            bgColor: { value: "#F3F4F6", transparency: "99" },
            shape: "full",
            strokeLinecap: "round",
            valueSize: 25,
            valueWeight: "bold",
            valueColor: "#333",
            valueFamily: "alibaba",
            loadingTime: 1000,
            miniCircleColor: "#ff0000",
            miniCircleSize: 5,
            valueAnimation: true,
            intersectionEnabled: true,
          }}
        />
      </div>
      <h4 class="text-xl font-medium text-black md:text-white">رشد شرکت</h4>
    </div>
  );
}
