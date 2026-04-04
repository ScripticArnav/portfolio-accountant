import { Link } from "react-router-dom";

const BusinessRegistrationIndex = () => {
  const services = [
    { name: "Company Registration", slug: "company-registration" },
    { name: "International Business Setup", slug: "international-business-setup" },
    { name: "Company Name Search", slug: "company-name-search" },
    { name: "Licenses & Registrations", slug: "licenses-registrations" },
    { name: "Web Development", slug: "web-development" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Business Registration Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          Complete solutions for your business registration and setup needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-200 border-l-4 border-yellow-400"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-600 text-sm">Click to explore this service →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistrationIndex;
