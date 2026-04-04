import { Link } from "react-router-dom";

const TaxComplianceIndex = () => {
  const categories = {
    "GST and Other Indirect Tax": [
      "GST Registration",
      "GST Filing",
      "HSN Code Finder",
      "GST Cancellation and Revocation",
      "GST Cancellation",
    ],
    "Changes in Pvt Ltd Company": [
      "Add a Director",
      "Remove a Director",
      "Increase Authorized Capital",
      "Close the Pvt Ltd Company",
      "Strike off Company",
    ],
    "Labour Compliance": [
      "Provident Fund (PF) Registration",
      "ESI Registration",
      "Professional Tax Registration",
      "POSH Compliance",
      "Labor Law Advisor",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tax & Compliance Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          Complete tax and compliance solutions for your business.
        </p>

        {Object.entries(categories).map(([category, services]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-200 border-l-4 border-blue-400"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service}</h3>
                  <p className="text-slate-600 text-sm">Explore this service →</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxComplianceIndex;
