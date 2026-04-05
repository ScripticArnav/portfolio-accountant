import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HomeLoanEMICalculator = () => {
  const [homeLoanAmount, setHomeLoanAmount] = useState('');
  const [homeInterestRate, setHomeInterestRate] = useState('');
  const [homeTenure, setHomeTenure] = useState('');

  const calculateHomeLoanEMI = () => {
    const P = Number(homeLoanAmount);
    const r = Number(homeInterestRate) / 100 / 12;
    const n = Number(homeTenure) * 12;

    if (!P || !r || !n) return { emi: 0, totalAmount: 0, totalInterest: 0 };

    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    return { emi, totalAmount, totalInterest };
  };

  const result = calculateHomeLoanEMI();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Home Loan EMI Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter loan amount"
                  value={homeLoanAmount}
                  onChange={(e) => setHomeLoanAmount(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  value={homeInterestRate}
                  onChange={(e) => setHomeInterestRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                <input
                  type="number"
                  placeholder="Enter loan tenure"
                  value={homeTenure}
                  onChange={(e) => setHomeTenure(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Home Loan EMI Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monthly EMI:</span>
                  <span>₹{result.emi.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest:</span>
                  <span>₹{result.totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-semibold">
                  <span>Total Amount:</span>
                  <span>₹{result.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanEMICalculator;