import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NGORegistration = () => {
  const subServices = [
    "Registration Support",
    "Documentation",
    "Legal Compliance",
    "Expert Guidance",
    "Fast Processing",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">NGO Registration</h1>
          <p className="text-lg text-slate-600 mb-8">
            Professional NGO registration and compliance services.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">Why Choose Us?</h3>
            <p className="text-slate-700">
              Expert NGO registration with complete legal support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is NGO?</h3>
              <p className="text-slate-700 leading-relaxed">
                An NGO (Non-Governmental Organization) is a non-profit entity working for social welfare, charity, or community services. Operates independently from government with focus on humanitarian, environmental, educational, or social causes. Can be registered as Society, Trust, or Section 8 Company. Eligible for tax benefits and donations.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How to Register?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Registration Steps:</strong> Register as Society/Trust with local authority or as Section-8 Company with MCA. Create bylaws/constitution, appoint governing body/board, open bank account, obtain 80G (tax exemption) and 12A certificates. File required documents and compliance forms. Timeline: 20-30 days.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why Register?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Legal Recognition:</strong> Provides legal status and credibility for fundraising. Enables tax-exempt donations from individuals and corporations. Access to government grants and schemes. Creates accountability and transparency with beneficiaries and donors.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Government compliance</li>
                <li>✓ Tax exemption benefits</li>
                <li>✓ Fundraising credibility</li>
                <li>✓ Donor tax deduction</li>
                <li>✓ Legal protection</li>
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
              <li>✓ Government compliance</li>
              <li>✓ Professional support</li>
              <li>✓ Fast processing</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Get Started</h3>
            <p className="text-slate-700 mb-4">Register your NGO today!</p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGORegistration;
