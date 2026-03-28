import { useState } from "react";

const HRACalculator = () => {
  const [salary, setSalary] = useState("");
  const [hra, setHra] = useState("");
  const [rent, setRent] = useState("");

  const exemption = Math.min(
    hra || 0,
    rent - salary * 0.1 || 0,
    salary * 0.5 || 0
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">HRA Calculator</h2>

        <input type="number" placeholder="Basic Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="HRA Received" value={hra} onChange={(e)=>setHra(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>
        <input type="number" placeholder="Rent Paid" value={rent} onChange={(e)=>setRent(e.target.value)} className="w-full mb-4 p-3 border rounded-lg"/>

        <div>
          <p>Exemption: ₹ {exemption > 0 ? exemption.toFixed(2) : "0.00"}</p>
        </div>
      </div>
    </div>
  );
};

export default HRACalculator;
