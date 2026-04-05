import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EPFCalculator = () => {
  const [epfSalary, setEpfSalary] = useState('');
  const [epfEmployeeRate, setEpfEmployeeRate] = useState('12');
  const [epfEmployerRate, setEpfEmployerRate] = useState('3.67');
  const [epfYears, setEpfYears] = useState('');
  const [epfInterest, setEpfInterest] = useState('8.5');

  const calculateEPF = () => {
    const salary = Number(epfSalary);
    const empRate = Number(epfEmployeeRate) / 100;
    const employerRate = Number(epfEmployerRate) / 100;
    const years = Number(epfYears);
    const interest = Number(epfInterest) / 100 / 12;

    if (!salary || !years) return { employeeContribution: 0, employerContribution: 0, total: 0 };

    const monthlyEmpContribution = salary * empRate;
    const monthlyEmpRContribution = salary * employerRate;
    const totalMonths = years * 12;

    let totalEPF = 0;
    for (let i = 0; i < totalMonths; i++) {
      totalEPF = (totalEPF + monthlyEmpContribution + monthlyEmpRContribution) * (1 + interest);
    }

    const employeeContribution = monthlyEmpContribution * totalMonths;
    const employerContribution = monthlyEmpRContribution * totalMonths;

    return { employeeContribution, employerContribution, total: totalEPF };
  };

  const result = calculateEPF();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">EPF Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Salary (₹)</label>
                <input
                  type="number"
                  placeholder="Enter monthly salary"
                  value={epfSalary}
                  onChange={(e) => setEpfSalary(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employee Contribution Rate (%)</label>
                <input
                  type="number"
                  placeholder="12"
                  value={epfEmployeeRate}
                  onChange={(e) => setEpfEmployeeRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employer Contribution Rate (%)</label>
                <input
                  type="number"
                  placeholder="3.67"
                  value={epfEmployerRate}
                  onChange={(e) => setEpfEmployerRate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period (years)</label>
                <input
                  type="number"
                  placeholder="Enter investment period"
                  value={epfYears}
                  onChange={(e) => setEpfYears(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% per annum)</label>
                <input
                  type="number"
                  placeholder="8.5"
                  value={epfInterest}
                  onChange={(e) => setEpfInterest(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">EPF Maturity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Employee Contribution:</span>
                  <span className="font-semibold">₹{result.employeeContribution.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employer Contribution:</span>
                  <span className="font-semibold">₹{result.employerContribution.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-900 font-medium">Total Maturity Value:</span>
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

export default EPFCalculator;