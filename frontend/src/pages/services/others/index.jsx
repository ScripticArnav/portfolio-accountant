import { Link } from "react-router-dom";

const OthersIndex = () => {
  const categories = {
    "Calculators": [
      "Income Tax Calculator",
      "GST Calculator",
      "EMI Calculator",
      "Salary Calculator",
      "Retirement Calculator",
    ],
    "Fundraising": [
      "Business Loan",
      "Pitch Deck",
      "DPR Service",
      "Investment Planning",
    ],
    "NGO & Non-Profit": [
      "NGO Registration",
      "Trust Registration",
      "Section 8 Company",
      "FCRA Registration",
    ],
    "Personal Services": [
      "Name Change",
      "Marriage Registration",
      "Divorce Services",
      "Immigration",
      "Property Services",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Other Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          Comprehensive solutions for all your business and personal needs.
        </p>

        {Object.entries(categories).map(([category, services]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-200 border-l-4 border-indigo-400"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service}</h3>
                  <p className="text-slate-600 text-sm">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OthersIndex;
