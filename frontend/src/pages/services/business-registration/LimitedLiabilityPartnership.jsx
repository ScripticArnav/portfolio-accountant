import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LimitedLiabilityPartnership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/business-registration" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Business Registration
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Limited Liability Partnership (LLP)</h1>
          <p className="text-lg text-slate-600 mb-8">
            Register your Limited Liability Partnership with complete compliance and support.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">Why Choose LLP?</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Limited liability for all partners</li>
              <li>• Flexibility in management structure</li>
              <li>• Lower compliance burden than companies</li>
              <li>• Tax-efficient structure</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is it?</h3>
              <p className="text-slate-700 leading-relaxed">
                A Limited Liability Partnership (LLP) is a hybrid business structure combining the benefits of partnership and company. Partners have limited liability (liability limited to their investment), while maintaining flexibility in management. Each partner is not responsible for acts of other partners. Minimum 2 partners required.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How it Works?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Registration:</strong> Prepare LLP Agreement, obtain Digital Signature for partners, register with MCA portal, register with GST (if applicable). Partners can contribute capital and manage business operations. File annual return and accounts with Registrar. Timeline: 12-15 working days.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why Register?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Protection & Flexibility:</strong> Protects personal assets with limited liability. Ideal for professional firms, consulting companies, and tech startups. Easier compliance than companies with greater flexibility. Enjoy partnership model with corporate-like protection.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Limited liability for all members</li>
                <li>✓ Flexible management structure</li>
                <li>✓ Lower compliance than companies</li>
                <li>✓ Perpetual succession</li>
                <li>✓ Easy fund raising & credibility</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Services Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Name Availability Check",
              "LLP Agreement Drafting",
              "Registration Documentation",
              "Digital Signature Setup",
              "Post-Registration Compliance",
              "Annual Filing Support",
            ].map((service, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Get Expert Guidance</h3>
            <p className="text-slate-700 mb-4">
              Choose LLP for your partnership - the modern, flexible business structure.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Consult an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedLiabilityPartnership;

