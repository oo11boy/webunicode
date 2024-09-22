import React from "react";
import "./RequestSiteBtn.css";

export default function RequestSiteBtn({text}) {
  return (
    <div class="button-container text-start flex ">
      <a href="#">
        <span>{text}</span>
      </a>
    </div>
  );
}
