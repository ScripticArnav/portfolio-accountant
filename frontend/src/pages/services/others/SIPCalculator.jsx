import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SIPCalculator = () => {
  const features = [
    "Monthly investment amount",
    "Investment period",
    "Expected returns",
    "Final amount calculation",
    "Growth analysis",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">SIP Calculator</h1>
          <p className="text-lg text-slate-600 mb-8">
            Calculate Systematic Investment Plan (SIP) returns and wealth accumulation over time.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">Why Use This Tool?</h3>
            <p className="text-slate-700">
              Understand your investment growth and plan long-term wealth accumulation.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-slate-900 mb-2">Benefits</h3>
            <ul className="text-slate-700 space-y-2">
              <li>✓ Investment planning</li>
              <li>✓ Returns projection</li>
              <li>✓ Wealth visualization</li>
              <li>✓ Financial goal setting</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready?</h3>
            <p className="text-slate-700 mb-4">Calculate your SIP returns today.</p>
            <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
              Launch Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
