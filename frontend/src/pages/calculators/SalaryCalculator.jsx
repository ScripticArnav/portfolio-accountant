import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SalaryCalculator = () => {
  const [salaryBasic, setSalaryBasic] = useState('');
  const [salaryHra, setSalaryHra] = useState('');
  const [salaryConveyance, setSalaryConveyance] = useState('');
  const [salaryLta, setSalaryLta] = useState('');
  const [salaryMedical, setSalaryMedical] = useState('');

  const calculateSalary = () => {
    const basic = Number(salaryBasic);
    const hra = Number(salaryHra);
    const conveyance = Number(salaryConveyance);
    const lta = Number(salaryLta);
    const medical = Number(salaryMedical);

    const totalEarnings = basic + hra + conveyance + lta + medical;
    const providentFund = basic * 0.12;
    const professionalTax = basic > 21000 ? 2352 : 0;
    const totalDeductions = providentFund + professionalTax;
    const netSalary = totalEarnings - totalDeductions;

    return { totalEarnings, totalDeductions, netSalary, providentFund, professionalTax };
  };

  const result = calculateSalary();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Salary Calculator</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Basic Salary (₹)</label>
                <input
                  type="number"
                  placeholder="Enter basic salary"
                  value={salaryBasic}
                  onChange={(e) => setSalaryBasic(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">HRA (₹)</label>
                <input
                  type="number"
                  placeholder="Enter HRA"
                  value={salaryHra}
                  onChange={(e) => setSalaryHra(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Conveyance Allowance (₹)</label>
                <input
                  type="number"
                  placeholder="Enter conveyance allowance"
                  value={salaryConveyance}
                  onChange={(e) => setSalaryConveyance(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LTA (₹)</label>
                <input
                  type="number"
                  placeholder="Enter LTA"
                  value={salaryLta}
                  onChange={(e) => setSalaryLta(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical Allowance (₹)</label>
                <input
                  type="number"
                  placeholder="Enter medical allowance"
                  value={salaryMedical}
                  onChange={(e) => setSalaryMedical(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Salary Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Earnings:</span>
                  <span>₹{result.totalEarnings.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Provident Fund:</span>
                  <span>₹{result.providentFund.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional Tax:</span>
                  <span>₹{result.professionalTax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Deductions:</span>
                  <span>₹{result.totalDeductions.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-semibold">
                  <span>Net Salary:</span>
                  <span>₹{result.netSalary.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;