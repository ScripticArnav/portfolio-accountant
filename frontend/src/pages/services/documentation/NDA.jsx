import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NDA = () => {
  const subServices = [
    "NDA Drafting",
    "Mutual & Unilateral NDA",
    "Confidentiality Clauses",
    "Legal Review & Customization",
    "Execution & Documentation",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/documentation" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Non-Disclosure Agreement (NDA)</h1>
          <p className="text-lg text-slate-600 mb-8">
            Professional NDA drafting and customization services for protecting confidential information.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-2">Why Choose NDA Services?</h3>
            <p className="text-slate-700">
              Expert guidance for creating legally binding NDAs to safeguard your confidential business information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is NDA?</h3>
              <p className="text-slate-700 leading-relaxed">
                An NDA (Non-Disclosure Agreement) is a legal contract binding parties to confidentiality. Protects sensitive business information, trade secrets, and proprietary data. Can be unilateral (one-way) or mutual (two-way). Legally enforceable with penalties for breach. Essential for business partnerships, funding, M&A deals.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How to Create?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>NDA Creation:</strong> Define what information is confidential, specify duration, identify authorized recipients, include non-compete clauses if needed. Draft with legal precision to ensure enforceability. Have both parties sign and maintain copies. Can be created before disclosure or negotiations. Timeline: Same day drafting possible.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why is it Important?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Information Protection:</strong> Legally protects sensitive business information. Prevents unauthorized disclosure and competitive disadvantage. Required before sharing with investors, partners, or during negotiations. Creates accountability and deters information theft.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Information protection</li>
                <li>✓ Legal enforceability</li>
                <li>✓ Customized terms</li>
                <li>✓ Clear boundaries</li>
                <li>✓ Business security</li>
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
              <li>✓ Information Protection</li>
              <li>✓ Legal Enforceability</li>
              <li>✓ Customized Terms</li>
              <li>✓ Clear Boundaries</li>
              <li>✓ Business Security</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-700 mb-4">
              Our experts are ready to help with NDA preparation.
            </p>
            <Link to="/Contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block">Consult an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDA;

