import { Link } from "react-router-dom";

const LawyerServicesIndex = () => {
  const categories = {
    "Lawyers Specialization": [
      "Corporate Lawyers",
      "Tax Lawyers",
      "Criminal Lawyers",
      "Family Lawyers",
      "Labour Lawyers",
      "Property Lawyers",
    ],
    "Legal Notice": [
      "Legal Notice for Money Recovery",
      "Cheque Bounce Notice",
      "Tenant Rental Notice",
      "Legal Notice Consumer Protection",
    ],
    "Litigation": [
      "Contract Dispute Litigation",
      "Employment Dispute",
      "Property Litigation",
      "Divorce Litigation",
      "Cyber Crime Litigation",
    ],
    "Consumer Complaint": [
      "E-commerce Complaint",
      "Bank Complaint",
      "Insurance Complaint",
      "Real Estate Complaint",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Legal Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          Expert legal consultation and services for all your business and personal needs.
        </p>

        {Object.entries(categories).map(([category, services]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-200 border-l-4 border-green-400"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service}</h3>
                  <p className="text-slate-600 text-sm">Consult now →</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerServicesIndex;
