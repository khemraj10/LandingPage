"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Features() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center bg-[#043873]">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Try Whitepace today</h1>
        <p className="mt-4 text-base mb-2">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <button
          className="bg-[#588ff5] text-white py-3 px-5 rounded mt-4 mb-2 text-sm"
          onClick={handleButtonClick}
        >
          Try Taskey free →
        </button>
        <p className="mt-4 text-base mb-2">On a big team? Contact sales</p>
        <div className="mt-4 flex justify-center">
          <Image
            src=""
            alt="Apple logo"
            className="w-10 h-10 mr-4"
          />
          <Image
            src=""
            alt="Windows logo"
            className="w-10 h-10 mr-4"
          />
          <Image src="" alt="Android logo" className="w-10 h-10" />
        </div>
        {showForm && (
          <div className="mt-4">
            {/* Your form goes here */}
          </div>
        )}
      </div>
    </div>
  );
}