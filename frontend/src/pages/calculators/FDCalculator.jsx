import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FDCalculator = () => {
  const [fdPrincipal, setFdPrincipal] = useState('');
  const [fdRate, setFdRate] = useState('');
  const [fdTime, setFdTime] = useState('');

  const calculateFD = () => {
    const P = Number(fdPrincipal);
    const r = Number(fdRate) / 100;
    const t = Number(fdTime);

    if (!P || !r || !t) return { interest: 0, maturity: 0 };

    const interest = P * r * t;
    const maturity = P + interest;

    return { interest, maturity };
  };

  const result = calculateFD();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fixed Deposit Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Principal Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter principal amount"
                  value={fdPrincipal}
                  onChange={(e) => setFdPrincipal(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% per annum)</label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  value={fdRate}
                  onChange={(e) => setFdRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (years)</label>
                <input
                  type="number"
                  placeholder="Enter time period"
                  value={fdTime}
                  onChange={(e) => setFdTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FD Returns</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal Amount:</span>
                  <span className="font-semibold">₹{Number(fdPrincipal).toLocaleString('en-IN')}</span>
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

export default FDCalculator;