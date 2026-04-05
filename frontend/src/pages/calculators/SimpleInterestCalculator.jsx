import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SimpleInterestCalculator = () => {
  const [siPrincipal, setSiPrincipal] = useState('');
  const [siRate, setSiRate] = useState('');
  const [siTime, setSiTime] = useState('');

  const calculateSI = () => {
    const P = Number(siPrincipal);
    const r = Number(siRate) / 100;
    const t = Number(siTime);

    if (!P || !r || !t) return { amount: 0, interest: 0 };

    const interest = P * r * t;
    const amount = P + interest;

    return { amount, interest };
  };

  const result = calculateSI();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Simple Interest Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Principal Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter principal amount"
                  value={siPrincipal}
                  onChange={(e) => setSiPrincipal(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  value={siRate}
                  onChange={(e) => setSiRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
                <input
                  type="number"
                  placeholder="Enter time period"
                  value={siTime}
                  onChange={(e) => setSiTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Simple Interest Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Principal Amount:</span>
                  <span>₹{Number(siPrincipal).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest Earned:</span>
                  <span>₹{result.interest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-semibold">
                  <span>Total Amount:</span>
                  <span>₹{result.amount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;