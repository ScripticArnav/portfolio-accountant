import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RentalAgreement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/documentation" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Rental Agreement</h1>
          <p className="text-lg text-slate-600 mb-8">
            Professional rental agreement drafting for landlords and tenants.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">What is Included?</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Rent payment terms and conditions</li>
              <li>• Security deposit clauses</li>
              <li>• Maintenance and repairs responsibilities</li>
              <li>• Termination and exit clauses</li>
              <li>• Dispute resolution mechanism</li>
              <li>• Compliant with local laws</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Document Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Legally Valid",
              "Customizable Terms",
              "Stamp Duty Compliant",
              "Easy to Understand",
              "Landlord Protection",
              "Tenant Protection",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Use Our Template?</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-slate-900 mb-2">Legal Compliance</h4>
              <p className="text-slate-700 text-sm">Our agreements comply with all applicable state laws and regulations.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-slate-900 mb-2">Complete Protection</h4>
              <p className="text-slate-700 text-sm">Covers all important clauses to protect both parties' interests.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-slate-900 mb-2">Easy to Customize</h4>
              <p className="text-slate-700 text-sm">Modify terms to match your specific rental requirements.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Get Your Rental Agreement Today</h3>
            <p className="text-slate-700 mb-4">
              Protect your rental investment with a professional, legally sound agreement.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Get Rental Agreement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalAgreement;

