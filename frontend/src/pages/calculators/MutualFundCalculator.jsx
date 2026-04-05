import { useState } from 'react';
import { Link } from 'react-router-dom';

const MutualFundCalculator = () => {
  const [mfMonthly, setMfMonthly] = useState('');
  const [mfLumpsum, setMfLumpsum] = useState('');
  const [mfRate, setMfRate] = useState('');
  const [mfTime, setMfTime] = useState('');

  const calculateMF = () => {
    const monthly = Number(mfMonthly);
    const lumpsum = Number(mfLumpsum);
    const rate = Number(mfRate) / 100 / 12;
    const time = Number(mfTime) * 12;

    if (!rate || !time) return { maturityAmount: 0, totalInvestment: 0, returns: 0 };

    let maturityAmount = 0;
    const totalInvestment = (monthly * time) + lumpsum;

    if (monthly > 0) {
      maturityAmount += monthly * ((Math.pow(1 + rate, time) - 1) / rate) * (1 + rate);
    }
    if (lumpsum > 0) {
      maturityAmount += lumpsum * Math.pow(1 + rate, time);
    }

    const returns = maturityAmount - totalInvestment;

    return { maturityAmount, totalInvestment, returns };
  };

  const mf = calculateMF();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Mutual Fund Calculator</h1>
            <p className="text-gray-600">Calculate your mutual fund investment returns</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Monthly Investment (₹)</label>
              <input
                type="number"
                placeholder="Enter monthly investment"
                value={mfMonthly}
                onChange={(e) => setMfMonthly(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Lumpsum Investment (₹)</label>
              <input
                type="number"
                placeholder="Enter lumpsum investment"
                value={mfLumpsum}
                onChange={(e) => setMfLumpsum(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expected Return (%)</label>
              <input
                type="number"
                placeholder="Enter expected return"
                value={mfRate}
                onChange={(e) => setMfRate(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Investment Period (years)</label>
              <input
                type="number"
                placeholder="Enter period"
                value={mfTime}
                onChange={(e) => setMfTime(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg space-y-4 mt-8">
              <div className="flex justify-between">
                <span className="font-medium">Total Investment:</span>
                <span className="font-bold">₹{mf.totalInvestment.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Returns:</span>
                <span className="font-bold text-green-600">₹{mf.returns.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="font-medium">Maturity Amount:</span>
                <span className="font-bold text-blue-600">₹{mf.maturityAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundCalculator;