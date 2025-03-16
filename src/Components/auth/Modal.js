"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
      <div className="bg-white w-full h-full flex flex-col shadow-2xl transform transition-all duration-300 scale-100">
        <div className="p-6 flex-shrink-0 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl font-light transition-colors"
            >
              ×
            </button>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}