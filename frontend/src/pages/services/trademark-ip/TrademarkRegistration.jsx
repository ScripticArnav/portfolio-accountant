import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TrademarkRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/trademark-ip" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Trademark & IP
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Trademark Registration</h1>
          <p className="text-lg text-slate-600 mb-8">
            Protect your brand with comprehensive trademark registration and protection services.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">Why Register Your Trademark?</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Exclusive rights to your brand name/logo</li>
              <li>• Legal protection against infringement</li>
              <li>• Enhanced business value and credibility</li>
              <li>• Right to take legal action against counterfeiters</li>
              <li>• Invaluable asset for your business</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Registration Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Trademark Availability Search",
              "Application Preparation",
              "Online Filing",
              "Office Action Response",
              "Certificate of Registration",
              "Maintenance Support",
            ].map((service, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Registration Process</h3>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: "Search & Clearance", desc: "We conduct comprehensive searches to ensure your mark is available" },
              { step: 2, title: "Application Preparation", desc: "Documentation and filing preparation by our experts" },
              { step: 3, title: "Filing", desc: "Official submission with the Trademark Registry" },
              { step: 4, title: "Examination", desc: "Government examination of your application" },
              { step: 5, title: "Publication & Opposition", desc: "Publication in the Trademark Journal" },
              { step: 6, title: "Registration Certificate", desc: "Receipt of official Registration Certificate" },
            ].map((item) => (
              <div key={item.step} className="flex space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Protect Your Brand Today</h3>
            <p className="text-slate-700 mb-4">
              Don't wait - register your trademark and secure your brand identity.
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
              Start Trademark Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrademarkRegistration;
