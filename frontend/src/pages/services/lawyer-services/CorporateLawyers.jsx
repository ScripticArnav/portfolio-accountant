import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CorporateLawyers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/lawyer-services" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Legal Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Corporate Lawyers</h1>
          <p className="text-lg text-slate-600 mb-8">
            Expert corporate legal counsel for all your business needs.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">Our Corporate Legal Expertise</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Company Formation and Incorporation</li>
              <li>• Mergers & Acquisitions</li>
              <li>• Contract Drafting and Negotiation</li>
              <li>• Corporate Governance</li>
              <li>• Regulatory Compliance</li>
              <li>• Dispute Resolution</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Services Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Company Incorporation",
              "Board Resolutions",
              "Contract Review",
              "M&A Advisory",
              "Compliance Audits",
              "Legal Documentation",
              "Shareholder Agreements",
              "Employee Contracts",
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
            <h3 className="font-bold text-slate-900 mb-3">Why Choose Our Corporate Lawyers?</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Years of experience in corporate law</li>
              <li>• Expert knowledge of Indian business laws</li>
              <li>• Personalized legal strategy</li>
              <li>• Proactive compliance management</li>
              <li>• Cost-effective solutions</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Get Expert Legal Counsel</h3>
            <p className="text-slate-700 mb-4">
              Connect with experienced corporate lawyers for your business matters.
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateLawyers;
