import { useState } from 'react';
import { Link } from 'react-router-dom';

const RetirementCalculator = () => {
  const [retirementCurrentAge, setRetirementCurrentAge] = useState('');
  const [retirementRetireAge, setRetirementRetireAge] = useState('');
  const [retirementMonthlyExpense, setRetirementMonthlyExpense] = useState('');
  const [retirementCurrentSavings, setRetirementCurrentSavings] = useState('');
  const [retirementExpectedReturn, setRetirementExpectedReturn] = useState('7');

  const calculateRetirement = () => {
    const currentAge = Number(retirementCurrentAge);
    const retireAge = Number(retirementRetireAge);
    const monthlyExpense = Number(retirementMonthlyExpense);
    const currentSavings = Number(retirementCurrentSavings);
    const expectedReturn = Number(retirementExpectedReturn) / 100 / 12;

    if (!currentAge || !retireAge || !monthlyExpense) return { requiredCorpus: 0, shortfall: 0 };

    const years = retireAge - currentAge;
    const months = years * 12;
    const requiredCorpus = monthlyExpense * ((1 - Math.pow(1 + expectedReturn, -months)) / expectedReturn);
    const shortfall = requiredCorpus - currentSavings;

    return { requiredCorpus, shortfall };
  };

  const retirement = calculateRetirement();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Retirement Calculator</h1>
            <p className="text-gray-600">Plan your retirement corpus</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Current Age</label>
              <input
                type="number"
                placeholder="Enter current age"
                value={retirementCurrentAge}
                onChange={(e) => setRetirementCurrentAge(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Retirement Age</label>
              <input
                type="number"
                placeholder="Enter retirement age"
                value={retirementRetireAge}
                onChange={(e) => setRetirementRetireAge(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Monthly Expenses (₹)</label>
              <input
                type="number"
                placeholder="Enter monthly expenses"
                value={retirementMonthlyExpense}
                onChange={(e) => setRetirementMonthlyExpense(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Savings (₹)</label>
              <input
                type="number"
                placeholder="Enter current savings"
                value={retirementCurrentSavings}
                onChange={(e) => setRetirementCurrentSavings(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expected Return (%)</label>
              <input
                type="number"
                value={retirementExpectedReturn}
                onChange={(e) => setRetirementExpectedReturn(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg space-y-4 mt-8">
              <div className="flex justify-between">
                <span className="font-medium">Required Corpus:</span>
                <span className="font-bold">₹{retirement.requiredCorpus.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="font-medium">Shortfall:</span>
                <span className="font-bold text-red-600">₹{retirement.shortfall.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementCalculator;