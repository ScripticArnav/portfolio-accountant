import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CopyrightRegistration = () => {
  const subServices = [
    "Copyright Application",
    "Literary & Artistic Works",
    "Musical Compositions",
    "Software Copyright",
    "Certification & Protection",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/trademark-ip" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Trademark & IP
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Copyright Registration</h1>
          <p className="text-lg text-slate-600 mb-8">
            Professional copyright registration services for literary, artistic, and creative works.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">Why Choose Copyright Registration?</h3>
            <p className="text-slate-700">
              Expert guidance for protecting your creative works with official copyright registration.
            </p>
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
              <li>✓ Official Legal Protection</li>
              <li>✓ Ownership Documentation</li>
              <li>✓ Enforcement Rights</li>
              <li>✓ Lifetime Protection</li>
              <li>✓ Asset Monetization</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-700 mb-4">
              Our experts are ready to assist you with copyright registration.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Consult an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightRegistration;

