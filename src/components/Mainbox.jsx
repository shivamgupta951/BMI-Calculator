import React, { useState } from "react";

const Mainbox = () => {
  const [BMIvalue, setBMIvalue] = useState(null);
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [error, setError] = useState(""); // for error UI
  const [tag, setTag] = useState(""); // for BMI category tag
  const [tagColor, setTagColor] = useState("text-white"); // for tag color

  const bmiCalculation = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!w || !h || w <= 0 || h <= 0) {
      setError("Please enter valid weight and height greater than 0.");
      setBMIvalue(null);

      // Auto-clear error after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    const bmi = w / (h * h);
    setBMIvalue(bmi.toFixed(2));

    if (bmi < 18.5) {
      setTag("Underweight 😟");
      setTagColor("text-blue-400");
    } else if (bmi >= 18.5 && bmi < 25) {
      setTag("Normalweight ✅");
      setTagColor("text-green-500");
    } else if (bmi >= 25 && bmi < 30) {
      setTag("Overweight ⚠️");
      setTagColor("text-yellow-400");
    } else {
      setTag("Obese 🚨");
      setTagColor("text-red-500");
    }

    setError(""); // Clear any previous error
  };

  return (
    <div className="h-96 w-80 border-2 border-white bg-black shadow-xl shadow-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-2xl p-6 flex flex-col justify-center gap-4 text-white">
      
      {/* Weight Input */}
      <div>
        <label className="block text-sm mb-1">Weight (kg)</label>
        <input
          type="number"
          placeholder="Enter Weight value"
          value={weight}
          onChange={(e) => setweight(e.target.value)}
          className="bg-purple-200 w-full px-3 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Height Input */}
      <div>
        <label className="block text-sm mb-1">Height (m)</label>
        <input
          type="number"
          placeholder="Enter height value"
          value={height}
          onChange={(e) => setheight(e.target.value)}
          className="bg-purple-200 w-full px-3 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={bmiCalculation}
      >
        Submit
      </button>

      {/* Reset Button */}
      <button
        className="bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition"
        onClick={() => {
          setweight("");
          setheight("");
          setBMIvalue(null);
          setTag("");
          setTagColor("text-white");
          setError("");
        }}
      >
        Reset
      </button>

      {/* Error Message */}
      <div className="h-10">
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
      </div>

      {/* BMI Result */}
      <div className="h-10">
        {BMIvalue && (
          <div className="font-normal text-center animate-fade-in">
            Your BMI is {BMIvalue}{" "}
            <span className={`font-semibold ${tagColor}`}>({tag})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mainbox;
