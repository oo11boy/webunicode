import { Flat } from "@alptugidin/react-circular-progress-bar";

import React from "react";

export default function CircleProgressBar({ percentage, text, value = "%" }) {
  return (
    <div class="progressbar lg:my-10 md:my-auto w-full md:w-auto items-center flex md:flex-none flex-col justify-center  text-center text-black">
      <div
        class="circle relative w-28 h-28 rounded-full mb-4"
        data-percent={percentage}
      >
        <Flat
          progress={percentage}
          range={{ from: 0, to: 100 }}
          sign={{ value: value, position: "end" }}
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
      <h4 class="text-xl font-medium text-black md:text-white">{text}</h4>
    </div>
  );
}
