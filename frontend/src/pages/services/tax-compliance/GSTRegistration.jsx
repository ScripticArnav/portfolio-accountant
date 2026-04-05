import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GSTRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/tax-compliance" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tax & Compliance
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">GST Registration</h1>
          <p className="text-lg text-slate-600 mb-8">
            Complete GST registration process with expert guidance and support.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">What is GST Registration?</h3>
            <p className="text-slate-700">
              GST registration is mandatory for any business with an annual turnover exceeding ₹40 lakhs (₹10 lakhs for special category states). We help businesses complete the registration process smoothly and ensure compliance.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Services Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Eligibility Assessment",
              "Documentation Preparation",
              "Online Registration Filing",
              "Email Verification Support",
              "Certificate Retrieval",
              "Post-Registration Compliance",
            ].map((service, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">Benefits of Early Registration</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Input tax credit benefit</li>
              <li>• Legal compliance</li>
              <li>• Simplified return filing</li>
              <li>• Better business credibility</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Register for GST?</h3>
            <p className="text-slate-700 mb-4">
              Our GST experts will guide you through every step of the registration process.
            </p>
            
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">
              Get Started with GST Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTRegistration;
