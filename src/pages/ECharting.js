import React from 'react';
export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black text-center p-6">
      <div className="p-8 max-w-lg shadow-xl rounded-2xl bg-white/20 backdrop-blur-md w-full">
        <h1 className="text-4xl font-bold mb-4">E-Charting is Coming Soon!</h1>
        <p className="text-lg mb-6">
          We are building an advanced electronic charting system to streamline
          hospital workflows and improve patient care.
        </p>
        <div className="flex flex-col items-center gap-4 text-lg mb-6">
          <p className="">✔ Secure & Efficient Patient Data Management</p>
          <p className="">
            ✔ Easy-to-Use Interface for Healthcare Professionals
          </p>
          <p className="">
            ✔ Enhancing Healthcare Through Digital Transformation
          </p>
        </div>
      </div>
    </div>
  );
}
