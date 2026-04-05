import { useState } from 'react';
import { Link } from 'react-router-dom';

const LumpsumCalculator = () => {
  const [lumpsumAmount, setLumpsumAmount] = useState('');
  const [lumpsumRate, setLumpsumRate] = useState('');
  const [lumpsumTime, setLumpsumTime] = useState('');

  const calculateLumpsum = () => {
    const P = Number(lumpsumAmount);
    const r = Number(lumpsumRate) / 100;
    const t = Number(lumpsumTime);

    if (!P || !r || !t) return { maturityAmount: 0, gains: 0 };

    const maturityAmount = P * Math.pow(1 + r, t);
    const gains = maturityAmount - P;

    return { maturityAmount, gains };
  };

  const lumpsum = calculateLumpsum();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Lumpsum Calculator</h1>
            <p className="text-gray-600">Calculate returns on your lumpsum investment</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Investment Amount (₹)</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={lumpsumAmount}
                onChange={(e) => setLumpsumAmount(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Annual Return (%)</label>
              <input
                type="number"
                placeholder="Enter return rate"
                value={lumpsumRate}
                onChange={(e) => setLumpsumRate(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Investment Period (years)</label>
              <input
                type="number"
                placeholder="Enter period"
                value={lumpsumTime}
                onChange={(e) => setLumpsumTime(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg space-y-4 mt-8">
              <div className="flex justify-between">
                <span className="font-medium">Investment:</span>
                <span className="font-bold">₹{Number(lumpsumAmount).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Gains:</span>
                <span className="font-bold text-green-600">₹{lumpsum.gains.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="font-medium">Maturity Amount:</span>
                <span className="font-bold text-blue-600">₹{lumpsum.maturityAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumpsumCalculator;
