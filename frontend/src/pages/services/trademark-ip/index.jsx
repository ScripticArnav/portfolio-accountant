import { Link } from "react-router-dom";

const TrademarkIPIndex = () => {
  const services = [
    { name: "Trademark", services: ["Trademark Registration", "Trademark Search", "Trademark Renewal", "USA Trademark"] },
    { name: "Copyright", services: ["Copyright Registration", "Copyright Assignment", "Literary Work Registration"] },
    { name: "Patent", services: ["Indian Patent Search", "Provisional Patent Application", "Patent Registration"] },
    { name: "Infringement", services: ["Copyright Infringement", "Patent Infringement", "Trademark Infringement"] },
    { name: "Design Registration", services: ["Logo Design", "Design Registration"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Trademark & IP Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          Protect your intellectual property with our comprehensive IP solutions.
        </p>

        {services.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">{category.name === "Trademark" ? "™️" : category.name === "Copyright" ? "©️" : category.name === "Patent" ? "🔒" : category.name === "Design Registration" ? "🎨" : "⚠️"}</span>
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.services.map((service, sidx) => (
                <Link
                  key={sidx}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-200 border-l-4 border-purple-400"
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

export default TrademarkIPIndex;
