import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TDSCalculator = () => {
  const [tdsAmount, setTdsAmount] = useState('');
  const [tdsRate, setTdsRate] = useState('10');

  const calculateTDS = () => {
    const amount = Number(tdsAmount);
    const rate = Number(tdsRate);

    if (!amount || !rate) return { tds: 0, netAmount: 0 };

    const tds = amount * (rate / 100);
    const netAmount = amount - tds;

    return { tds, netAmount };
  };

  const result = calculateTDS();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">TDS Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter payment amount"
                  value={tdsAmount}
                  onChange={(e) => setTdsAmount(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">TDS Rate (%)</label>
                <select
                  value={tdsRate}
                  onChange={(e) => setTdsRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">1%</option>
                  <option value="2">2%</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">TDS Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Amount:</span>
                  <span className="font-semibold">₹{Number(tdsAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TDS Amount:</span>
                  <span className="font-semibold">₹{result.tds.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-900 font-medium">Net Amount:</span>
                  <span className="font-bold text-lg">₹{result.netAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDSCalculator;