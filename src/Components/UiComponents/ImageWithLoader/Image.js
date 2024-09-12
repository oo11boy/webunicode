"use client"
import React, { useState, useEffect } from "react";
import { ClipLoader, PuffLoader } from "react-spinners";

const ImageWithLoader = ({ src, alt, className,height}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => setLoading(false);
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <>
      {loading && !error && (
        <div className={`${height} h-full flex justify-center items-center`}>
          <ClipLoader  color="#999" loading={loading} />
        </div>
      )}
      {!loading && !error && (
        <img
          src={src}
          alt={alt}
          className={className}
        />
      )}
      {error && (
        <img
          src="../image/noimg.jpg"
          alt="Image not found"
          className={className}
        />
      )}
    </>
  );
};

export default ImageWithLoader;
