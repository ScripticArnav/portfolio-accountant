import { useState } from "react";

const TDSCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");

  const tds = amount && rate ? (amount * rate) / 100 : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">TDS Calculator</h2>

        <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="TDS Rate (%)" value={rate} onChange={(e)=>setRate(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>

        <div>
          <p>TDS: ₹ {tds.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default TDSCalculator;
