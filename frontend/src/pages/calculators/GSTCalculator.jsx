import { useState } from "react";

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");

  const gstAmount = amount && gstRate ? (amount * gstRate) / 100 : 0;
  const totalAmount = Number(amount) + gstAmount;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">GST Calculator</h2>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="number"
          placeholder="GST %"
          value={gstRate}
          onChange={(e) => setGstRate(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <div className="mt-4">
          <p>GST: ₹ {gstAmount.toFixed(2)}</p>
          <p>Total: ₹ {totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculator;
