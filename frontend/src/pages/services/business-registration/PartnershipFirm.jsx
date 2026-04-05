import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PartnershipFirm = () => {
  const subServices = [
    "Partnership Registration",
    "Partnership Deed Drafting",
    "GST Registration",
    "Tax Compliance & Filing",
    "Partnership Management & Changes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/business-registration" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Business Registration
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Partnership Firm</h1>
          <p className="text-lg text-slate-600 mb-8">
            Complete partnership firm registration and compliance services for your business partnership.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">Why Choose Partnership Firm Services?</h3>
            <p className="text-slate-700">
              Expert guidance for partnership firm setup with comprehensive support including registration, documentation, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is it?</h3>
              <p className="text-slate-700 leading-relaxed">
                A Partnership Firm is a business structure formed by two or more individuals to carry on business with an intent to share profits. Partners have unlimited personal liability and are jointly responsible for all business obligations. Governed by the Indian Partnership Act, 1932.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How it Works?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Registration Process:</strong> Prepare Partnership Deed, register at Sub-Registrar's office, register with GST (if turnover exceeds limit), open business bank account. Each partner must have PAN. File annual income tax returns and maintain compliance records. Timeline: 10-12 working days.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why Register?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Legal Protection & Growth:</strong> Creates a legal framework defining rights and obligations of partners. Required for bank loans and institutional credit. Reduces disputes between partners with documented terms. Enables seamless business growth and partner additions/exits.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Shared Responsibility & Liability</li>
                <li>✓ Combined Capital & Resources</li>
                <li>✓ Easy to Form & Manage</li>
                <li>✓ Tax Efficiency</li>
                <li>✓ Flexibility in Operations</li>
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
              <li>✓ Shared Responsibility & Liability</li>
              <li>✓ Combined Capital & Resources</li>
              <li>✓ Easy to Form & Manage</li>
              <li>✓ Tax Efficiency</li>
              <li>✓ Flexibility in Operations</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-700 mb-4">
              Our experts are ready to assist you with partnership firm registration and compliance.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Consult an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipFirm;

