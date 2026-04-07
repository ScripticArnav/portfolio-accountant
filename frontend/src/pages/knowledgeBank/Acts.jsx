import { Link } from "react-router-dom";

const Acts = () => {
  const actCategories = [
    {
      id: "companies-act",
      title: "Companies Act, 2013",
      description:
        "Comprehensive corporate governance framework governing company formation, management, and compliance requirements.",
      icon: "🏢",
      color: "from-blue-500 to-blue-600",
      sections: [
        "Company incorporation and registration procedures",
        "Director appointment, qualification, and disqualification rules",
        "Board meetings - minimum 4 meetings per year, quorum requirements",
        "Annual General Meeting (AGM) within 6 months of financial year end",
        "Board committees - Audit, Nomination & Remuneration, Stakeholders Relationship",
        "Independent director requirements and responsibilities",
        "Related party transactions disclosure and approval",
        "Corporate Social Responsibility (CSR) spending requirements",
        "Secretarial audit and compliance certification",
        "Annual filing requirements - MGT-7, AOC-4, ADT-1",
        "XBRL filing of financial statements",
        "Strike-off and dissolution procedures",
        "Share capital management and alteration",
        "Dividend declaration and payment procedures",
        "Company secretary appointment and qualifications",
        "Internal financial controls and risk management",
        "Whistle-blowing mechanism and vigil mechanism",
      ],
    },
    {
      id: "gst-act",
      title: "GST Act, 2017",
      description:
        "Unified indirect tax regime covering goods and services with comprehensive compliance framework.",
      icon: "📋",
      color: "from-green-500 to-green-600",
      sections: [
        "GST registration threshold and voluntary registration",
        "Composition scheme eligibility and benefits",
        "Input Service Distributor (ISD) mechanism",
        "Place of supply rules for goods and services",
        "Time of supply determination for various transactions",
        "Value of supply including transaction value and special valuation",
        "Reverse charge mechanism applicability",
        "E-invoicing requirements and IRP portal",
        "E-way bill generation and validity periods",
        "GST returns - GSTR-1, GSTR-3B, GSTR-9, GSTR-9C",
        "Input tax credit rules and blocked credits",
        "GST audit procedures and requirements",
        "Anti-profiteering measures and compliance",
        "GST council recommendations and notifications",
        "Refunds - normal, inverted duty, excess payment",
        "Assessment procedures - self-assessment, provisional, scrutiny",
        "Recovery of tax - notice, demand, recovery proceedings",
      ],
    },
    {
      id: "income-tax-act",
      title: "Income Tax Act, 1961",
      description:
        "Comprehensive taxation framework for individuals, businesses, and entities with detailed provisions.",
      icon: "💰",
      color: "from-purple-500 to-purple-600",
      sections: [
        "Residential status determination - Resident, Non-resident, Resident but not ordinarily resident",
        "Income classification - Salary, House property, Business/Profession, Capital gains, Other sources",
        "Deductions under Chapter VI-A (80C to 80U)",
        "Tax rates for individuals, HUF, firms, companies",
        "Advance tax payment schedule and installments",
        "Self-assessment tax payment procedures",
        "TDS/TCS provisions and compliance requirements",
        "Tax audit under section 44AB for specified entities",
        "Transfer pricing regulations for international transactions",
        "GAAR (General Anti-Avoidance Rules) provisions",
        "MAT (Minimum Alternate Tax) for companies",
        "AMT (Alternate Minimum Tax) applicability",
        "Carry forward and set-off of losses",
        "Capital gains taxation - Short-term and Long-term",
        "Exemptions for charitable trusts and institutions",
        "Tax incentives for startups and specified businesses",
        "International taxation - DTAA, withholding tax rates",
      ],
    },
    {
      id: "sebi-act",
      title: "SEBI Act, 1992",
      description:
        "Securities market regulation and investor protection framework governing capital markets.",
      icon: "📈",
      color: "from-orange-500 to-orange-600",
      sections: [
        "SEBI registration requirements for intermediaries",
        "Disclosure and transparency norms for listed companies",
        "Insider trading regulations and restricted periods",
        "Takeover regulations and substantial acquisition of shares",
        "Delisting procedures and exit opportunities",
        "Mutual fund regulations and investor protection measures",
        "Portfolio manager registration and compliance",
        "Investment adviser regulations and licensing",
        "Depository participant registration and operations",
        "Credit rating agency registration and governance",
        "Stock exchange recognition and regulation",
        "Clearing corporation establishment and operations",
        "Collective Investment Schemes (CIS) regulation",
        "Alternative Investment Funds (AIF) categorization",
        "Real Estate Investment Trusts (REITs) framework",
        "Infrastructure Investment Trusts (InvITs) regulations",
        "Foreign Portfolio Investment (FPI) registration",
        "Systematic Investment Plans (SIP) guidelines",
      ],
    },
    {
      id: "rbi-act",
      title: "RBI Act, 1934",
      description:
        "Central banking framework governing monetary policy, banking regulation, and financial stability.",
      icon: "🏦",
      color: "from-teal-500 to-teal-600",
      sections: [
        "Bank licensing and establishment procedures",
        "Capital adequacy and prudential norms",
        "Know Your Customer (KYC) and Anti-Money Laundering (AML)",
        "Priority sector lending targets and classification",
        "Non-Performing Assets (NPA) classification and provisioning",
        "Financial inclusion initiatives and Jan Dhan Yojana",
        "Payment and settlement systems regulation",
        "Foreign exchange management and FEMA coordination",
        "Monetary policy framework and repo operations",
        "Banking Ombudsman scheme for dispute resolution",
        "Deposit insurance and DICGC coverage",
        "Financial stability and macro-prudential measures",
        "Regulatory sandbox for fintech innovations",
        "Digital lending platforms regulation",
        "Peer-to-peer lending guidelines",
        "Account aggregator framework",
        "Open banking architecture and data sharing",
        "Centralized KYC registry implementation",
      ],
    },
    {
      id: "fema",
      title: "FEMA, 1999",
      description:
        "Foreign Exchange Management Act governing cross-border transactions and foreign investment.",
      icon: "🌍",
      color: "from-cyan-500 to-cyan-600",
      sections: [
        "Foreign Direct Investment (FDI) policy and sectoral caps",
        "Foreign Portfolio Investment (FPI) regulations",
        "Overseas Direct Investment (ODI) guidelines",
        "Liberalized Remittance Scheme (LRS) limits",
        "Export proceeds realization and repatriation",
        "Import payment procedures and advance remittances",
        "Foreign currency accounts - EEFC, RFC, FCNR",
        "External Commercial Borrowings (ECB) framework",
        "American Depository Receipts (ADR)/Global Depository Receipts (GDR)",
        "Foreign Currency Convertible Bonds (FCCB) issuance",
        "Qualified Institutional Placement (QIP) regulations",
        "Preferential allotment to non-residents",
        "Transfer of shares from resident to non-resident",
        "Reporting requirements under FDI and ODI",
        "Foreign investment in LLP and partnership firms",
        "Downstream investment by Indian companies abroad",
        "Realization of export proceeds within stipulated time",
        "Hedging facilities for foreign exchange risk",
      ],
    },
    {
      id: "labour-laws",
      title: "Labour Laws Framework",
      description:
        "Comprehensive labor legislation covering employment, wages, safety, and social security.",
      icon: "👷",
      color: "from-rose-500 to-rose-600",
      sections: [
        "Minimum Wages Act, 1948 - wage fixation and revision",
        "Payment of Wages Act, 1936 - timely wage payment",
        "Payment of Bonus Act, 1965 - profit sharing requirements",
        "Employees' Provident Funds Act, 1952 - retirement benefits",
        "Employees' State Insurance Act, 1948 - medical benefits",
        "Factories Act, 1948 - workplace safety and working hours",
        "Industrial Disputes Act, 1947 - dispute resolution mechanisms",
        "Trade Unions Act, 1926 - union formation and registration",
        "Maternity Benefit Act, 1961 - maternity leave and benefits",
        "Equal Remuneration Act, 1976 - gender pay equity",
        "Payment of Gratuity Act, 1972 - gratuity calculation and payment",
        "Apprentices Act, 1961 - apprenticeship training programs",
        "Contract Labour Act, 1970 - contract worker regulations",
        "Sexual Harassment at Workplace Act, 2013 - POSH compliance",
        "Child Labour Act, 1986 - prohibition of child labor",
        "Building and Other Construction Workers Act, 1996",
        "Unorganized Workers' Social Security Act, 2008",
        "Code on Wages, 2019 - unified wage code implementation",
      ],
    },
    {
      id: "contract-act",
      title: "Indian Contract Act, 1872",
      description:
        "Fundamental principles governing formation, performance, and enforcement of contracts.",
      icon: "⚖️",
      color: "from-amber-500 to-amber-600",
      sections: [
        "Essential elements of a valid contract",
        "Offer and acceptance - communication and revocation",
        "Consideration - adequacy and past consideration",
        "Capacity to contract - minors, persons of unsound mind",
        "Free consent - coercion, undue influence, fraud, misrepresentation",
        "Lawful object and consideration",
        "Void, voidable, and unenforceable contracts",
        "Contingent contracts and wagering agreements",
        "Performance of contracts - actual and attempted performance",
        "Discharge of contracts - by performance, agreement, impossibility",
        "Breach of contract - anticipatory and actual breach",
        "Remedies for breach - damages, specific performance, injunction",
        "Quasi-contracts and restitution",
        "Indemnity and guarantee contracts",
        "Bailment and pledge agreements",
        "Agency relationships and authority",
        "Partnership Act, 1932 - partnership formation and dissolution",
        "Limitation Act, 1963 - limitation periods for legal actions",
      ],
    },
    {
      id: "ip-act",
      title: "Intellectual Property Laws",
      description:
        "Comprehensive framework for protection and enforcement of intellectual property rights.",
      icon: "💡",
      color: "from-violet-500 to-violet-600",
      sections: [
        "Trade Marks Act, 1999 - registration and protection",
        "Copyright Act, 1957 - literary, artistic, and musical works",
        "Patents Act, 1970 - invention protection and licensing",
        "Design Act, 2000 - industrial design registration",
        "Geographical Indications Act, 1999 - GI tag protection",
        "Trade Secrets protection under common law",
        "Semi-conductor Integrated Circuits Layout Design Act, 2000",
        "Plant Varieties and Farmers' Rights Protection Act, 2001",
        "Biological Diversity Act, 2002 - biodiversity protection",
        "Information Technology Act, 2000 - cyber law framework",
        "Transborder reputation and passing off actions",
        "Domain name disputes and cyber squatting",
        "Employee inventions and IP assignment agreements",
        "Licensing and technology transfer agreements",
        "Franchise agreements and IP protection",
        "Brand protection and anti-counterfeiting measures",
        "IP valuation and commercialization",
        "Madrid Protocol for international trademark registration",
      ],
    },
    {
      id: "competition-act",
      title: "Competition Act, 2002",
      description:
        "Anti-trust legislation promoting fair competition and preventing monopolistic practices.",
      icon: "⚡",
      color: "from-emerald-500 to-emerald-600",
      sections: [
        "Anti-competitive agreements - cartels, bid rigging",
        "Abuse of dominant position - predatory pricing, discrimination",
        "Combination regulations - mergers and acquisitions",
        "Competition Commission of India (CCI) powers and functions",
        "Director General (DG) investigation procedures",
        "Leniency program for cartel participants",
        "Market definition and relevant market analysis",
        "Turnover thresholds for combination notifications",
        "Green channel for exempt combinations",
        "Competition advocacy and awareness programs",
        "Settlement and commitment mechanisms",
        "Penalty calculation and compounding procedures",
        "Appeal procedures to COMPAT and Supreme Court",
        "Intellectual property rights and competition law interface",
        "State action immunity and government restrictions",
        "Regulation of digital markets and gatekeepers",
        "Cross-border competition law enforcement",
        "Whistle-blower protection and confidentiality",
      ],
    },
    {
      id: "consumer-act",
      title: "Consumer Protection Act, 2019",
      description:
        "Consumer rights protection framework with dispute resolution mechanisms.",
      icon: "🛡️",
      color: "from-slate-500 to-slate-600",
      sections: [
        "Consumer rights - right to safety, information, choice, redressal",
        "Product liability and defect liability provisions",
        "Unfair trade practices and misleading advertisements",
        "E-commerce consumer protection guidelines",
        "Direct selling and multi-level marketing regulations",
        "Consumer dispute redressal forums - District, State, National",
        "Central Consumer Protection Authority (CCPA) powers",
        "Product recall procedures and consumer compensation",
        "Telecom consumer complaints resolution",
        "Banking and financial services consumer protection",
        "Insurance consumer protection and grievance redressal",
        "Healthcare services consumer rights",
        "Education services consumer protection",
        "Real estate consumer protection and RERA coordination",
        "Motor vehicle consumer complaints",
        "Food safety and adulteration complaints",
        "Data protection and privacy rights",
        "Class action lawsuits and representative actions",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            📚 Acts & Legislation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive overview of key legislation governing business,
            taxation, and regulatory compliance in India.
          </p>
        </div>

        {/* Acts Sections */}
        <div className="space-y-16">
          {actCategories.map((act, index) => (
            <div key={act.id} className="relative">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${act.color} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {act.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {act.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Sections Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {act.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-300"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${act.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5`}
                      >
                        {sectionIndex + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {section}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Divider */}
              {index < actCategories.length - 1 && (
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
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Important Legal Notice
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This overview provides general information about key legislation.
              Always consult with qualified legal professionals and refer to the
              latest official versions of acts, rules, and notifications from
              respective authorities for current compliance requirements.
            </p>
            <h3 className="font-bold text-slate-900 mb-2"></h3>
            <p className="text-slate-700 mb-4">
              <b>
                Our experts are ready to assist you regarding any Acts-related
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

export default Acts;
