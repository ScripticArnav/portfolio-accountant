const ServiceTemplate = ({ title, description, points }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-widest text-primary-600 font-semibold mb-2">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative rounded-3xl p-8 bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-500 to-primary-700 opacity-20 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-primary-700 mb-3">What we offer</h2>
              <ul className="space-y-3 text-gray-700">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-white border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why choose us?</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Trusted by hundreds of businesses for accurate compliance and growth-focused finance support. Our tailored service approach takes your company to the next level with smart, automated and audit-ready processes.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Expert team with 10+ years in corporate finance
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Transparent pricing and compliance-first delivery
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Rapid onboarding and 24/7 support
              </li>
            </ul>
            <div className="mt-8 text-center">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors"
                href="/contact"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;