import { useState } from "react";
import { Link } from "react-router-dom";

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [isInclusive, setIsInclusive] = useState(false);

  const calculateGST = () => {
    const baseAmount = Number(amount);
    const rate = Number(gstRate) / 100;

    if (!baseAmount) return { gstAmount: 0, totalAmount: 0, baseAmount: 0 };

    if (isInclusive) {
      // If GST is inclusive, calculate the base amount
      const totalAmount = baseAmount;
      const gstAmount = totalAmount - totalAmount / (1 + rate);
      const actualBaseAmount = totalAmount - gstAmount;
      return { gstAmount, totalAmount, baseAmount: actualBaseAmount };
    } else {
      // If GST is exclusive, add GST to base amount
      const gstAmount = baseAmount * rate;
      const totalAmount = baseAmount + gstAmount;
      return { gstAmount, totalAmount, baseAmount };
    }
  };

  const { gstAmount, totalAmount, baseAmount } = calculateGST();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <Link
          to="/services/others"
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          ← Back to Services
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center">GST Calculator</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              GST Rate (%)
            </label>
            <input
              type="number"
              placeholder="Enter GST rate"
              value={gstRate}
              onChange={(e) => setGstRate(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isInclusive}
                onChange={(e) => setIsInclusive(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm font-medium">GST Inclusive</span>
            </label>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-3 mt-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Base Amount:</span>
              <span className="font-bold">
                ₹
                {baseAmount.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GST Amount:</span>
              <span className="font-bold text-green-600">
                ₹
                {gstAmount.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-gray-800 font-semibold">Total Amount:</span>
              <span className="font-bold text-lg text-blue-600">
                ₹
                {totalAmount.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculator;
