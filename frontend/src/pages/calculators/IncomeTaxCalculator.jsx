import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const IncomeTaxCalculator = () => {
  const [incomeTaxIncome, setIncomeTaxIncome] = useState('');
  const [incomeTaxRegime, setIncomeTaxRegime] = useState('old');

  const calculateIncomeTax = () => {
    const income = Number(incomeTaxIncome);
    if (!income) return { tax: 0, cess: 0, totalTax: 0 };

    let tax = 0;
    const cess = 0.04;

    if (incomeTaxRegime === 'old') {
      if (income <= 250000) tax = 0;
      else if (income <= 500000) tax = (income - 250000) * 0.05;
      else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.20;
      else tax = 12500 + 100000 + (income - 1000000) * 0.30;
    } else {
      if (income <= 300000) tax = 0;
      else if (income <= 700000) tax = (income - 300000) * 0.05;
      else if (income <= 1000000) tax = 20000 + (income - 700000) * 0.10;
      else if (income <= 1200000) tax = 50000 + (income - 1000000) * 0.15;
      else if (income <= 1500000) tax = 65000 + (income - 1200000) * 0.20;
      else tax = 125000 + (income - 1500000) * 0.30;
    }

    const totalTax = tax + (tax * cess);
    return { tax, cess: tax * cess, totalTax };
  };

  const result = calculateIncomeTax();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Income Tax Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income (₹)</label>
                <input
                  type="number"
                  placeholder="Enter annual income"
                  value={incomeTaxIncome}
                  onChange={(e) => setIncomeTaxIncome(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tax Regime</label>
                <select
                  value={incomeTaxRegime}
                  onChange={(e) => setIncomeTaxRegime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="old">Old Regime</option>
                  <option value="new">New Regime</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Income:</span>
                  <span className="font-semibold">₹{Number(incomeTaxIncome).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Income Tax:</span>
                  <span className="font-semibold">₹{result.tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Health & Education Cess (4%):</span>
                  <span className="font-semibold">₹{result.cess.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-900 font-medium">Total Tax:</span>
                  <span className="font-bold text-lg">₹{result.totalTax.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;