import React from "react";
import { useState } from "react";
const Mainbox = () => {
  const [BMIvalue, setBMIvalue] = useState('---');
  return (
    <div className="h-96 w-80 border-2 border-white bg-black shadow-xl shadow-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-2xl p-6 flex flex-col justify-center gap-4 text-white">
      {/* Weight Input */}
      <div>
        <label className="block text-sm mb-1">Weight (lbs)</label>
        <input
          type="number"
          placeholder="Enter Weight value"
          className="bg-purple-200 w-full px-3 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Height Input */}
      <div>
        <label className="block text-sm mb-1">Height (in)</label>
        <input
          type="number"
          placeholder="Enter height value"
          className="bg-purple-200 w-full px-3 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Submit
      </button>
      <button className="bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition">
        Reload
      </button>
      <div className="h-10">
        {BMIvalue && <div className="pl-16">Your BMI is {BMIvalue}</div>}
      </div>
    </div>
  );
};

export default Mainbox;
