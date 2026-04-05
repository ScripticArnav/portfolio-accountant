import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RDCalculator = () => {
  const [rdMonthly, setRdMonthly] = useState('');
  const [rdRate, setRdRate] = useState('');
  const [rdTime, setRdTime] = useState('');

  const calculateRD = () => {
    const P = Number(rdMonthly);
    const r = Number(rdRate) / 100 / 12;
    const n = Number(rdTime) * 12;

    if (!P || !r || !n) return { invested: 0, interest: 0, maturity: 0 };

    const invested = P * n;
    const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const interest = maturity - invested;

    return { invested, interest, maturity };
  };

  const result = calculateRD();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recurring Deposit Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Deposit (₹)</label>
                <input
                  type="number"
                  placeholder="Enter monthly deposit"
                  value={rdMonthly}
                  onChange={(e) => setRdMonthly(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% per annum)</label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  value={rdRate}
                  onChange={(e) => setRdRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (years)</label>
                <input
                  type="number"
                  placeholder="Enter time period"
                  value={rdTime}
                  onChange={(e) => setRdTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">RD Returns</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Invested:</span>
                  <span className="font-semibold">₹{result.invested.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Earned:</span>
                  <span className="font-semibold">₹{result.interest.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-900 font-medium">Maturity Amount:</span>
                  <span className="font-bold text-lg">₹{result.maturity.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDCalculator;