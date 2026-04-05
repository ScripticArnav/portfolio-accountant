import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SIPCalculator = () => {
  const [sipMonthly, setSipMonthly] = useState('');
  const [sipRate, setSipRate] = useState('');
  const [sipTime, setSipTime] = useState('');

  const calculateSIP = () => {
    const P = Number(sipMonthly);
    const r = Number(sipRate) / 100 / 12;
    const n = Number(sipTime) * 12;

    if (!P || !r || !n) return { invested: 0, returns: 0, total: 0 };

    const invested = P * n;
    const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const returns = total - invested;

    return { invested, returns, total };
  };

  const result = calculateSIP();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">SIP Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment (₹)</label>
                <input
                  type="number"
                  placeholder="Enter monthly investment"
                  value={sipMonthly}
                  onChange={(e) => setSipMonthly(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return Rate (% per annum)</label>
                <input
                  type="number"
                  placeholder="Enter expected return rate"
                  value={sipRate}
                  onChange={(e) => setSipRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period (years)</label>
                <input
                  type="number"
                  placeholder="Enter investment period"
                  value={sipTime}
                  onChange={(e) => setSipTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SIP Returns</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Invested:</span>
                  <span className="font-semibold">₹{result.invested.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wealth Gained:</span>
                  <span className="font-semibold">₹{result.returns.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-900 font-medium">Total Value:</span>
                  <span className="font-bold text-lg">₹{result.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;