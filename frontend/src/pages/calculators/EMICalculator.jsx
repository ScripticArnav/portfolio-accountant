import { useState } from "react";

const EMICalculator = () => {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const monthlyRate = rate / 12 / 100;
  const emi =
    loan && rate && time
      ? (loan * monthlyRate * Math.pow(1 + monthlyRate, time)) /
        (Math.pow(1 + monthlyRate, time) - 1)
      : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">EMI Calculator</h2>

        <input type="number" placeholder="Loan Amount" value={loan} onChange={(e)=>setLoan(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={(e)=>setRate(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="Time (months)" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>

        <div>
          <p>EMI: ₹ {emi ? emi.toFixed(2) : "0.00"}</p>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
