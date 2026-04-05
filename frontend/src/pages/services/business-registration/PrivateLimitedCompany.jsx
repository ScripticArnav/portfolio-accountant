import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivateLimitedCompany = () => {
  const subServices = [
    "Company Registration Process",
    "Documentation Requirements",
    "Post-Registration Compliance",
    "Tax Planning",
    "Annual Filings",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/business-registration" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Business Registration
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Private Limited Company Registration</h1>
          <p className="text-lg text-slate-600 mb-8">
            Register your Private Limited Company with expert guidance and support.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">What We Offer</h3>
            <p className="text-slate-700">
              Complete Private Limited Company registration including name approval, document filing, and post-registration compliance support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is it?</h3>
              <p className="text-slate-700 leading-relaxed">
                A Private Limited Company is a business structure where liability is limited to the shareholders' investment. It's incorporated under the Companies Act with a minimum of 2 directors and minimum paid-up capital. The company has a separate legal identity distinct from its owners.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How it Works?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Process:</strong> Company name approval → Document preparation → Filing with ROC → Issue of CIN → Opening bank account → Applying for GST/TAN. Our experts handle all paperwork and ensure compliance at each stage. Timeline typically: 10-15 working days.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why Register?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Credibility & Growth:</strong> Separates personal and business liability. Essential for institutional credibility with banks and investors. Required to raise capital, take loans, or expand business. Enables business deals with government and multinational companies.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Limited liability protection</li>
                <li>✓ Easy fund raising & investment</li>
                <li>✓ Perpetual succession</li>
                <li>✓ Tax benefits & deductions</li>
                <li>✓ Enhanced business credibility</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Sub-Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {subServices.map((service, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-700 mb-4">
              Our experts are ready to guide you through the company registration process.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Consult an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateLimitedCompany;

