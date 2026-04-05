import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NPSCalculator = () => {
  const [npsMonthly, setNpsMonthly] = useState('');
  const [npsAge, setNpsAge] = useState('');
  const [npsReturn, setNpsReturn] = useState('8');

  const calculateNPS = () => {
    const monthly = Number(npsMonthly);
    const currentAge = Number(npsAge);
    const retirementAge = 60;
    const years = retirementAge - currentAge;
    const rate = Number(npsReturn) / 100 / 12;
    const months = years * 12;

    if (!monthly || !currentAge || currentAge >= retirementAge) return { maturityAmount: 0, totalInvestment: 0, returns: 0 };

    const maturityAmount = monthly * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    const totalInvestment = monthly * months;
    const returns = maturityAmount - totalInvestment;

    return { maturityAmount, totalInvestment, returns };
  };

  const result = calculateNPS();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">NPS Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment (₹)</label>
                <input
                  type="number"
                  placeholder="Enter monthly investment"
                  value={npsMonthly}
                  onChange={(e) => setNpsMonthly(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
                <input
                  type="number"
                  placeholder="Enter your current age"
                  value={npsAge}
                  onChange={(e) => setNpsAge(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (%)</label>
                <input
                  type="number"
                  placeholder="Enter expected return rate"
                  value={npsReturn}
                  onChange={(e) => setNpsReturn(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">NPS Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Investment:</span>
                  <span>₹{result.totalInvestment.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Returns:</span>
                  <span>₹{result.returns.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-semibold">
                  <span>Maturity Amount:</span>
                  <span>₹{result.maturityAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSCalculator;