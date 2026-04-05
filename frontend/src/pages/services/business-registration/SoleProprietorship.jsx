import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SoleProprietorship = () => {
  const subServices = [
    "Registration & Compliance",
    "GST Registration Assistance",
    "Tax Planning & Filing",
    "Business Documentation",
    "License & Permits Setup",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/business-registration" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Business Registration
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Sole Proprietorship</h1>
          <p className="text-lg text-slate-600 mb-8">
            Complete sole proprietorship registration and compliance services for your individual business venture.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">Why Choose Sole Proprietorship Services?</h3>
            <p className="text-slate-700">
              Expert guidance for sole proprietorship setup with comprehensive support including registration, GST, and tax compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is it?</h3>
              <p className="text-slate-700 leading-relaxed">
                A Sole Proprietorship is the simplest business structure owned and operated by one individual. The owner has complete control and responsibility for the business. Personal and business identities are the same legally, though you can operate under a different business name.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How it Works?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Simple Setup:</strong> Register under GST (if applicable), obtain business license/permits, open a business bank account. File annual income tax returns and maintain basic compliance records. Minimal documentation required compared to other structures. Timeline: 5-7 working days.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why Register?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Legal Recognition:</strong> Establish legitimacy with clients and vendors. Required for obtaining business licenses and permits. Can help secure business loans and contracts. Simplifies tax filing and financial management.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Easiest & Most Flexible Business Structure</li>
                <li>✓ Minimal Compliance Requirements</li>
                <li>✓ Low Registration Costs</li>
                <li>✓ Easy Decision Making</li>
                <li>✓ Direct Control Over Business</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Services</h3>
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

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-slate-900 mb-2">Benefits</h3>
            <ul className="text-slate-700 space-y-2">
              <li>✓ Easiest & Most Flexible Business Structure</li>
              <li>✓ Minimal Compliance Requirements</li>
              <li>✓ Low Registration Costs</li>
              <li>✓ Easy Decision Making</li>
              <li>✓ Direct Control Over Business</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-700 mb-4">
              Our experts are ready to assist you with sole proprietorship registration and compliance.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Consult an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoleProprietorship;

