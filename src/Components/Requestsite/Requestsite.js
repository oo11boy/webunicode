"use client";
import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step3 from "./Step3";
import Step2 from "./Step2";
import Step4 from "./Step4";
import "./Requestsite.css";
import Step5 from "./Step5";

export default function Requestsite({portfolioid}) {

 
  const [step, setStep] = useState(4);
  const steptitle = ["1", "2", "3", "4", "5"];

  return (
    <div className="bg-[#9844F1] Requestsite flex flex-col min-h-lvh">
      <div className="flex h-[8vh] lg:h-[15vh] bg-[#9844F1] mx-auto w-[80%] items-center">
        {steptitle.map((item, index) => (
          <React.Fragment key={index}>
            <span
              className={`w-[2.5%] flex justify-center ${
                step === index + 1 ? "text-yellow-300 font-bold text-2xl" : "text-white"
              }`}
            >

              {item}
            </span>
            {index < steptitle.length - 1 && (
              <div className="linediv w-[30%] h-[2px] bg-white"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="w-[95%] steps m-auto container min-h-[80vh] bg-white rounded-2xl">
        {step == 1 && <Step1 id={portfolioid} setStep={setStep} step={step} />}
        {step == 2 && <Step2 setStep={setStep} step={step} />}
        {step == 3 && <Step3 setStep={setStep} step={step} />}
        {step == 4 && <Step4 setStep={setStep} step={step} />}
        {step == 5 && <Step5 setStep={setStep} step={step} />}
      </div>
    </div>
  );
}
