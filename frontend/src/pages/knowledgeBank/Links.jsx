import { Link } from "react-router-dom";

const Links = () => {
  const linkCategories = [
    {
      id: "tax-compliance",
      title: "Tax & Compliance Portals",
      description:
        "Essential government portals for tax filing, compliance, and regulatory submissions.",
      icon: "📋",
      color: "from-blue-500 to-blue-600",
      links: [
        {
          name: "Income Tax e-Filing Portal",
          url: "https://www.incometax.gov.in/",
          description: "File ITR, check refund status, TDS statements",
        },
        {
          name: "GST Portal",
          url: "https://www.gst.gov.in/",
          description: "GST registration, returns, refunds, and compliance",
        },
        {
          name: "MCA Portal",
          url: "https://www.mca.gov.in/",
          description: "Company registration, filings, and compliance",
        },
        {
          name: "EPFO Portal",
          url: "https://www.epfindia.gov.in/",
          description: "PF account management and employer services",
        },
        {
          name: "ESIC Portal",
          url: "https://www.esic.gov.in/",
          description: "ESI registration and employee benefits",
        },
        {
          name: "TDS Reconciliation Portal",
          url: "https://www.tdscpc.gov.in/",
          description: "TDS statement processing and corrections",
        },
        {
          name: "Professional Tax Portal",
          url: "https://www.mahavat.gov.in/",
          description: "Professional tax payment and registration",
        },
        {
          name: "Form 16 Download",
          url: "https://www.tdscpc.gov.in/app/forms/",
          description: "Download TDS certificates and Form 16",
        },
      ],
    },
    {
      id: "banking-services",
      title: "Banking & Financial Services",
      description:
        "Banking portals, payment systems, and financial service providers.",
      icon: "🏦",
      color: "from-green-500 to-green-600",
      links: [
        {
          name: "RBI Official Website",
          url: "https://www.rbi.org.in/",
          description: "Monetary policy, regulations, and banking guidelines",
        },
        {
          name: "NPCI - UPI & BHIM",
          url: "https://www.npci.org.in/",
          description: "UPI transactions, BHIM app, and payment systems",
        },
        {
          name: "IFSC Code Finder",
          url: "https://www.ifsc.codes/",
          description: "Find IFSC codes for all Indian banks",
        },
        {
          name: "Bank Account Balance Check",
          url: "https://www.bajajfinserv.in/check-bank-balance",
          description: "Check balance without ATM card",
        },
        {
          name: "Credit Score Check",
          url: "https://www.cibil.com/",
          description: "Free credit score and report access",
        },
        {
          name: "Mutual Fund NAV",
          url: "https://www.amfiindia.com/",
          description: "MF schemes, NAV, and investor education",
        },
        {
          name: "Stock Market - BSE",
          url: "https://www.bseindia.com/",
          description: "Stock prices, indices, and market data",
        },
        {
          name: "Stock Market - NSE",
          url: "https://www.nseindia.com/",
          description: "NSE trading, derivatives, and market information",
        },
      ],
    },
    {
      id: "regulatory-authorities",
      title: "Regulatory Authorities",
      description:
        "Financial regulators, oversight bodies, and compliance authorities.",
      icon: "⚖️",
      color: "from-purple-500 to-purple-600",
      links: [
        {
          name: "SEBI Portal",
          url: "https://www.sebi.gov.in/",
          description: "Securities market regulations and investor protection",
        },
        {
          name: "IRDAI Portal",
          url: "https://www.irdai.gov.in/",
          description: "Insurance regulatory authority and guidelines",
        },
        {
          name: "PFRDA Portal",
          url: "https://www.pfrda.org.in/",
          description: "Pension fund regulatory authority",
        },
        {
          name: "FEMA Portal",
          url: "https://www.fema.gov.in/",
          description: "Foreign exchange management regulations",
        },
        {
          name: "Competition Commission",
          url: "https://www.cci.gov.in/",
          description: "Anti-trust and competition law enforcement",
        },
        {
          name: "Consumer Court",
          url: "https://consumerhelpline.gov.in/",
          description: "Consumer protection and dispute resolution",
        },
        {
          name: "RBI Ombudsman",
          url: "https://www.rbi.org.in/Consumers/",
          description: "Banking dispute resolution",
        },
        {
          name: "Financial Intelligence Unit",
          url: "https://fiu.gov.in/",
          description: "Anti-money laundering and financial intelligence",
        },
      ],
    },
    {
      id: "professional-services",
      title: "Professional Services",
      description:
        "Accounting bodies, professional certifications, and service providers.",
      icon: "👔",
      color: "from-orange-500 to-orange-600",
      links: [
        {
          name: "ICAI Portal",
          url: "https://www.icai.org/",
          description: "Chartered Accountants Institute and resources",
        },
        {
          name: "ICSI Portal",
          url: "https://www.icsi.edu/",
          description: "Company Secretaries Institute",
        },
        {
          name: "ICWAI Portal",
          url: "https://icmai.in/",
          description: "Cost and Management Accountants",
        },
        {
          name: "GSTN Helpdesk",
          url: "https://help.gst.gov.in/",
          description: "GST technical support and FAQs",
        },
        {
          name: "Tax Information Network",
          url: "https://www.tin-nsdl.com/",
          description: "PAN card, TAN, and tax services",
        },
        {
          name: "Digital Signature Certificate",
          url: "https://www.e-mudhra.com/",
          description: "DSC application and renewal",
        },
        {
          name: "Professional Tax Consultants",
          url: "https://www.ptaxconsultants.com/",
          description: "Professional tax advisory services",
        },
        {
          name: "Accounting Software",
          url: "https://www.tallysolutions.com/",
          description: "Tally ERP and accounting solutions",
        },
      ],
    },
    {
      id: "government-schemes",
      title: "Government Schemes & Initiatives",
      description:
        "Financial inclusion schemes, subsidies, and government financial programs.",
      icon: "🇮🇳",
      color: "from-cyan-500 to-cyan-600",
      links: [
        {
          name: "Pradhan Mantri Jan Dhan Yojana",
          url: "https://pmjdy.gov.in/",
          description: "Financial inclusion and zero balance accounts",
        },
        {
          name: "Atal Pension Yojana",
          url: "https://www.npscra.nsdl.co.in/APY.php",
          description: "Pension scheme for unorganized sector",
        },
        {
          name: "Pradhan Mantri Suraksha Bima Yojana",
          url: "https://financialservices.gov.in/insurance-schemes/pmsby",
          description: "Accidental insurance scheme",
        },
        {
          name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
          url: "https://financialservices.gov.in/insurance-schemes/pmjjby",
          description: "Life insurance scheme",
        },
        {
          name: "Startup India",
          url: "https://www.startupindia.gov.in/",
          description: "Startup registration and incentives",
        },
        {
          name: "Make in India",
          url: "https://www.makeinindia.com/",
          description: "Manufacturing and investment initiative",
        },
        {
          name: "Digital India",
          url: "https://www.digitalindia.gov.in/",
          description: "Digital transformation initiatives",
        },
        {
          name: "GST Sahayata Kendra",
          url: "https://gstsaayata.gov.in/",
          description: "GST help and support portal",
        },
      ],
    },
    {
      id: "international-finance",
      title: "International Finance & Trade",
      description:
        "Global financial portals, trade organizations, and international regulations.",
      icon: "🌍",
      color: "from-rose-500 to-rose-600",
      links: [
        {
          name: "World Bank",
          url: "https://www.worldbank.org/",
          description: "International development and finance",
        },
        {
          name: "IMF Portal",
          url: "https://www.imf.org/",
          description: "International Monetary Fund resources",
        },
        {
          name: "WTO Portal",
          url: "https://www.wto.org/",
          description: "World Trade Organization",
        },
        {
          name: "FATF Portal",
          url: "https://www.fatf-gafi.org/",
          description: "Financial Action Task Force",
        },
        {
          name: "OECD Portal",
          url: "https://www.oecd.org/",
          description: "Economic cooperation and development",
        },
        {
          name: "Export Import Bank",
          url: "https://www.eximbankindia.in/",
          description: "Export credit and finance",
        },
        {
          name: "DGFT Portal",
          url: "https://www.dgft.gov.in/",
          description: "Directorate General of Foreign Trade",
        },
        {
          name: "Customs Portal",
          url: "https://www.cbic.gov.in/",
          description: "Central Board of Indirect Taxes and Customs",
        },
      ],
    },
    {
      id: "professional-development",
      title: "Professional Development",
      description:
        "Continuing education, certifications, and professional networking resources.",
      icon: "📚",
      color: "from-amber-500 to-amber-600",
      links: [
        {
          name: "ICAI CPE Portal",
          url: "https://www.icai.org/post/cpe-credit-hours",
          description: "Continuing Professional Education",
        },
        {
          name: "GST Certification",
          url: "https://www.gstcouncil.gov.in/",
          description: "GST practitioner certification",
        },
        {
          name: "Financial Planning Certification",
          url: "https://www.fpsb.in/",
          description: "Certified Financial Planner",
        },
        {
          name: "Accounting Standards",
          url: "https://www.ifrs.org/",
          description: "International Financial Reporting Standards",
        },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning/",
          description: "Professional skill development",
        },
        {
          name: "Coursera Finance",
          url: "https://www.coursera.org/browse/business/finance",
          description: "Online finance courses",
        },
        {
          name: "Khan Academy Finance",
          url: "https://www.khanacademy.org/economics-finance-domain",
          description: "Free finance education",
        },
        {
          name: "Financial Times",
          url: "https://www.ft.com/",
          description: "Financial news and analysis",
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            🔗 Important Links
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive collection of essential portals, tools, and resources
            for finance, accounting, and banking professionals.
          </p>
        </div>

        {/* Links Sections */}
        <div className="space-y-16">
          {linkCategories.map((category, index) => (
            <div key={category.id} className="relative">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {category.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-300"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5`}
                      >
                        {linkIndex + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {link.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {link.description}
                        </p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm font-medium hover:shadow-lg transition-all duration-300`}
                        >
                          Visit Link
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Divider */}
              {index < linkCategories.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Security Notice
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Always verify the authenticity of websites before entering
              sensitive information. Use official government portals (.gov.in)
              and reputable financial institutions. Report any suspicious
              activities to the appropriate authorities.
            </p>
            <h3 className="font-bold text-slate-900 mb-2"></h3>
            <p className="text-slate-700 mb-4">
              <b>
                Our experts are ready to assist you regarding any Links-related
                queries.
              </b>
            </p>
            <Link
              to="/Contact"
              className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors inline-block"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
