import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PPFCalculator = () => {
  const [ppfYearly, setPpfYearly] = useState('');
  const [ppfYears, setPpfYears] = useState('');
  const [ppfRate, setPpfRate] = useState('7.1');

  const calculatePPF = () => {
    const yearly = Number(ppfYearly);
    const years = Number(ppfYears);
    const rate = Number(ppfRate) / 100;

    if (!yearly || !years) return { maturityAmount: 0, interest: 0 };

    let maturityAmount = 0;
    for (let i = 0; i < years; i++) {
      maturityAmount = (maturityAmount + yearly) * (1 + rate);
    }
    const interest = maturityAmount - (yearly * years);

    return { maturityAmount, interest };
  };

  const result = calculatePPF();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">PPF Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Yearly Investment (₹)</label>
                <input
                  type="number"
                  placeholder="Enter yearly investment"
                  value={ppfYearly}
                  onChange={(e) => setPpfYearly(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period (Years)</label>
                <input
                  type="number"
                  placeholder="Enter investment period"
                  value={ppfYears}
                  onChange={(e) => setPpfYears(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  value={ppfRate}
                  onChange={(e) => setPpfRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">PPF Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Investment:</span>
                  <span>₹{(Number(ppfYearly) * Number(ppfYears)).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest Earned:</span>
                  <span>₹{result.interest.toLocaleString('en-IN')}</span>
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

export default PPFCalculator;