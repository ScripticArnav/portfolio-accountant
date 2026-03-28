import { useState } from "react";

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState("");

  let tax = 0;
  if (income <= 250000) tax = 0;
  else if (income <= 500000) tax = (income - 250000) * 0.05;
  else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.2;
  else tax = 112500 + (income - 1000000) * 0.3;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Income Tax Calculator</h2>

        <input
          type="number"
          placeholder="Annual Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <div>
          <p>Tax: ₹ {tax.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
