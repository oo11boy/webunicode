"use client";
import React, { useState } from "react";
import Step1 from "./Step1/Step1";
import Step3 from "./Step3/Step3";
import Step2 from "./Step2/Step2";
import Step4 from "./Step4/Step4";
import "./Requestsite.css";
import Step5 from "./Step5/Step5";


export default function Requestsite({portfolioid}) {

 
  const [step, setStep] = useState(1);

  const steptitle = ["1", "2", "3", "4", "5"];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    portfolioid:"",
    type:"",
    selection:"",
    comdomain:"",
    extrahost:""
  });

  return (
    <div className="bg-[#9844F1] Requestsite flex flex-col min-h-lvh">
      <div className="flex h-[8vh] lg:h-[10vh] bg-[#9844F1] mx-auto w-[80%] items-center">
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
      <div className="w-[95%] steps m-auto sm:container min-h-[85vh] bg-white rounded-2xl">
        {step == 1 && <Step1 id={portfolioid} setStep={setStep} step={step} setFormData={setFormData} />}
        {step == 2 && <Step2 setStep={setStep} portfolioid={portfolioid} step={step} formData={formData} setFormData={setFormData}/>}
        {step == 3 && <Step3 id={portfolioid} setStep={setStep} step={step} setFormData={setFormData} />}
        {step == 4 && <Step4 id={portfolioid} setStep={setStep} step={step} formData={formData}  setFormData={setFormData}/>}
        {step == 5 && <Step5 setStep={setStep} step={step} />}
      </div>
    </div>
  );
}
