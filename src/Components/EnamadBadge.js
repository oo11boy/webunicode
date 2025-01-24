import React from "react";

const EnamadBadge = ({ status = false }) => {
  return (
    <div
      className={`${
        status ? "absolute bottom-0 left-1/2 transform -translate-x-1/2 " : ""
      }`}
    >
      <a
        className="w-full"
        referrerPolicy="origin"
        target="_blank"
        href="https://trustseal.enamad.ir/?id=467521&Code=8RJb5Bl8uzBsckWVX7RfaZnom53ODxSQ"
        rel="noopener"
      >
        <img
          referrerPolicy="origin"
          src="/image/enmad.png"
          alt=""
          className="w-[20em]"
          style={{ cursor: "pointer" }}
          id="8RJb5Bl8uzBsckWVX7RfaZnom53ODxSQ"
        />
      </a>
    </div>
  );
};

export default EnamadBadge;
