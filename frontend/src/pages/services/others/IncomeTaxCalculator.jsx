import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const IncomeTaxCalculator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Other Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Income Tax Calculator</h1>
          <p className="text-lg text-slate-600 mb-8">
            Calculate your income tax liability accurately with our advanced calculator.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">How It Works</h3>
            <p className="text-slate-700 mb-3">
              Our calculator helps you determine your estimated income tax based on:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Your annual income</li>
              <li>• Income source (salary, business, investments)</li>
              <li>• Applicable deductions (80C, 80D, etc.)</li>
              <li>• Special exemptions</li>
              <li>• Current tax rates and slabs</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Calculator Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Real-time Tax Calculation",
              "Multiple Income Sources",
              "Deduction Tracker",
              "Tax Savings Tips",
              "Year-on-Year Comparison",
              "Detailed Tax Report",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">Benefits of Using Our Calculator</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Accurate estimates based on current tax laws</li>
              <li>• Identify tax-saving opportunities</li>
              <li>• Plan your finances effectively</li>
              <li>• No hidden fees or charges</li>
              <li>• Completely confidential</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Tax Planning Tips</h3>
          <div className="space-y-4 mb-8">
            {[
              "Maximize deductions under Section 80C",
              "Plan investments for tax efficiency",
              "Consider tax-saving instruments",
              "Keep accurate records and documentation",
              "Review your tax status regularly",
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <span className="text-yellow-600 font-bold">{idx + 1}.</span>
                <span className="text-slate-700">{tip}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Calculate Your Tax Now</h3>
            <p className="text-slate-700 mb-4">
              Get an accurate estimate of your income tax liability and tax savings opportunities.
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
              Open Tax Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
