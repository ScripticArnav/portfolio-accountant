import { useState } from "react";

const SIPCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const r = rate / 12 / 100;
  const n = time * 12;

  const futureValue =
    amount && rate && time
      ? amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">SIP Calculator</h2>

        <input type="number" placeholder="Monthly Investment" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={(e)=>setRate(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="Time (years)" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>

        <div>
          <p>Future Value: ₹ {futureValue ? futureValue.toFixed(2) : "0.00"}</p>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
