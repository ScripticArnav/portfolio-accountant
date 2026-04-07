import { Link } from "react-router-dom";

const Rules = () => {
  const ruleCategories = [
    {
      id: "gst",
      title: "GST Rules & Procedures",
      description: "Complete GST compliance framework including registration, invoicing, and filing procedures.",
      icon: "📋",
      color: "from-blue-500 to-blue-600",
      rules: [
        "Registration under section 22 (threshold limit ₹40 lakhs)",
        "E-invoicing (IRP) requirements and QR code generation",
        "Reverse charge mechanism for B2B services",
        "Composition scheme eligibility and renewal",
        "Due date for GSTR-1 (11th of next month), GSTR-3B (20th), GSTR-9 (31st Dec)",
        "Input tax credit eligibility and ITC reversal rules",
        "Debit/credit note issued within 30 days",
        "E-way bill requirements for movement >₹50,000",
        "HSN/SAC code mandatory above threshold",
        "Blocked credit for specific categories (motor cars, food, etc.)",
        "Place of supply rules for goods and services",
        "Filing of GSTR-7 (TDS), GSTR-8 (TCS), GSTR-5 (non-resident)"
      ]
    },
    {
      id: "income-tax",
      title: "Income Tax Rules & Sections",
      description: "Statutory provisions and compliance requirements for individual and business taxation.",
      icon: "💰",
      color: "from-green-500 to-green-600",
      rules: [
        "Section 44AB - Audit eligibility for turnover >₹1 cr",
        "Section 92 - Transfer pricing documentation and adjustments",
        "Section 139 - Return filing deadline (31st July for FY)",
        "TDS deduction under sections 193-196 (interest, dividends, commission)",
        "Section 194-O - TDS on e-commerce transactions (1% on gross)",
        "Advance tax installments (15%, 30%, 45%, 100%)",
        "Section 285 - Tax audit report requirements",
        "Penalties under section 270A (concealment) and 271(1)(c)",
        "Relief at source (RAS) for foreign remittance",
        "Presumptive income under section 44AD (8% of turnover)",
        "Chapter VI-A deductions (80C, 80D, 80E, 80G, etc.)",
        "Loss set-off and carry-forward rules (8 years)",
        "Penalties for late filing (₹1000-5000)",
        "Interest under section 234A, 234B, 234C"
      ]
    },
    {
      id: "tds-tcs",
      title: "TDS/TCS Withholding Rules",
      description: "Tax deduction and collection at source obligations and compliance timelines.",
      icon: "📊",
      color: "from-purple-500 to-purple-600",
      rules: [
        "TDS on salary section 192 (monthly deduction)",
        "TDS on interest section 193 (10% on bank interest >₹40,000)",
        "TDS on dividends section 194 (10% rate)",
        "TDS on commission section 194H (10% on agent commission)",
        "TDS on rent section 194-I (5% on rent >₹50,000 p.m. residential, 10% non-residential)",
        "TDS on contractor payments section 194C (1-2% depending on category)",
        "TDS on professional fees section 194J (10% on fees >₹30,000 p.a.)",
        "Form 26Q filing (quarterly TDS deduction statement)",
        "Form 27Q filing (quarterly TCS collection statement)",
        "Form 16 (TDS certificate generation and furnishing)",
        "Monthly TDS deposit by 7th of following month",
        "TCS on sale of goods section 206C (1% on goods sale >₹30 lakh)",
        "TCS on e-commerce section 206C-1H (1% on e-commerce turnover)",
        "Form 27EQ (quarterly TCS reconciliation statement)",
        "Interest under section 234B on TDS shortfall",
        "Penalties for non-deduction or late deposit"
      ]
    },
    {
      id: "banking",
      title: "Banking & KYC Regulations",
      description: "RBI guidelines and compliance requirements for banking relationships and customer identification.",
      icon: "🏦",
      color: "from-orange-500 to-orange-600",
      rules: [
        "Know Your Customer (KYC) norms - identity, address, occupation verification",
        "Single KYC approach - valid across all banks",
        "Anti-Money Laundering (AML) procedures and risk assessment",
        "Customer Due Diligence (CDD) requirements for account opening",
        "Enhanced Due Diligence (EDD) for high-value transactions",
        "Beneficial Owner identification for partnerships and companies",
        "Account opening requirements - min 2 documents (identity + address)",
        "Suspicious transaction reporting (STR) to FIU-IND",
        "Currency transaction reporting for deposits >₹10 lakhs",
        "Risk categorization (low, medium, high risk customers)",
        "Periodic re-KYC every 10 years (individuals), 2 years (high-risk)",
        "Freeze/unfreeze account procedures",
        "Sanctions list compliance and UN resolution monitoring",
        "Personal Ledger Account (PLA) for unbanked individuals",
        "Correspondent banking requirements",
        "Cross-border transaction reporting for >$10,000 USD equivalent"
      ]
    },
    {
      id: "corporate",
      title: "Corporate Compliance & ROC Rules",
      description: "Annual secretarial compliance and filings required under Companies Act.",
      icon: "🏢",
      color: "from-indigo-500 to-indigo-600",
      rules: [
        "Annual General Meeting (AGM) within 6 months of FY end",
        "Board meeting minimum 4 per year (quarterly)",
        "MGT-7 (annual return) filing within 60 days of AGM",
        "ADT-1 (audit report) submission to Registrar",
        "AOC-4 (limited balance sheet) filing within 30 days of AGM",
        "XBRL filing of financial statements (from FY 2018-19)",
        "Disclosure norms for directors - interests, remuneration, shareholding",
        "Director identification number (DIN) mandatory",
        "MBP-1 filing for changes in company information",
        "Active compliance monitoring and update of information",
        "Statutory audit under section 138",
        "Internal audit requirements for large companies",
        "Audit committee constitution and independent director requirements",
        "Related party transaction disclosure and approval",
        "CSR spending of 2% of net profit for 3 FYs",
        "Delisting/striking off procedures and compliance",
        "Secretarial audit report certification",
        "Significant beneficial owner (SBO) disclosure"
      ]
    },
    {
      id: "securities",
      title: "Securities & Share Market Rules",
      description: "Regulations governing securities trading, disclosure, and corporate actions.",
      icon: "📈",
      color: "from-teal-500 to-teal-600",
      rules: [
        "SEBI insider trading regulations - restricted period and black-out",
        "Stock exchange listing requirements and continuous compliances",
        "Trading halt procedures - trading suspension for regulatory action",
        "Dividend policy disclosure and approval",
        "Dividend payment within 30 days of announcement",
        "Rights issue - minimum subscription, allotment procedures",
        "Bonus share issuance with shareholder approval",
        "Stock split/consolidation procedures",
        "Corporate restructuring - merger, demerger, scheme of arrangement",
        "Delisting procedures - regulatory approval and shareholder vote",
        "Buyback of shares - authority, pricing, disclosure requirements",
        "Employee stock options plans (ESOP) disclosure",
        "Pledge of shares - promoter pledging limits and monitoring",
        "Continuous disclosure obligations - MAT, results announcement",
        "Quarterly results filing within 45 days of quarter end",
        "Corporate governance report with shareholding pattern"
      ]
    },
    {
      id: "import-export",
      title: "Import-Export & Customs Rules",
      description: "Regulations governing cross-border trade, tariffs, and customs clearance.",
      icon: "🚢",
      color: "from-cyan-500 to-cyan-600",
      rules: [
        "IEC (Importer-Exporter Code) registration with DGFT",
        "HS code classification for all products (8-digit code)",
        "Customs duty classification at different rate chapters",
        "Import license requirements (automatic vs restricted items)",
        "Export incentive schemes - Remission of Duties/Taxes on Export Production (RoDTEP)",
        "Duty drawback schemes - refund of paid duties on export",
        "Advance Authorization - customs duty exemption for export-oriented units",
        "E-commerce operator obligations and 1% customs duty",
        "Shipping bill filing - 10 days before vessel departure",
        "Bill of Lading and Air Way Bill requirements",
        "Invoice and packing list documentation standards",
        "Certificate of origin for preferential trade agreements",
        "Customs valuation methods - transaction value vs comparable prices",
        "Anti-dumping duty and safeguard measures",
        "Prohibited/restricted item compliance",
        "Warehousing bonds and bonded warehouse operations",
        "Special economic zone (SEZ) compliance and procedures"
      ]
    },
    {
      id: "labor",
      title: "Labor & Employment Rules",
      description: "Statutory provisions for employee relations, wages, and workplace compliance.",
      icon: "👷",
      color: "from-rose-500 to-rose-600",
      rules: [
        "Minimum wage regulations - central and state rates (revised annually)",
        "Provident Fund (PF) contribution - 12% employee, 12% employer",
        "PF withdrawal rules - partial withdrawal for education, housing, medical",
        "Employee State Insurance (ESI) - 4.75% employee, 3.25-4.75% employer",
        "Professional Tax compliance - varies by state (₹0-2500 p.m.)",
        "Gratuity eligibility - 5 years continuous service",
        "Gratuity calculation - 15 days salary for each year of service",
        "Leave encashment rules - earned leave carryover, unused leave payout",
        "Overtime payment norms - 1.5x or 2x basic wage",
        "Bonus calculation under Bonus Act - 8.33% of wages",
        "Maternity benefits - 6 weeks before and 6 weeks after delivery",
        "Workplace safety and health standards (OSHA compliance)",
        "Sexual harassment at workplace (POSH) - IC constitution",
        "Termination and severance procedures - notice period, gratuity, compensation",
        "Statutory provident fund passbook and statement requirements",
        "Labour compliance audit and inspection procedures",
        "Apprenticeship deductions under income tax section 80P"
      ]
    },
    {
      id: "contract",
      title: "Contract & Legal Provisions",
      description: "Fundamental legal framework governing agreements, disputes, and remedies.",
      icon: "⚖️",
      color: "from-amber-500 to-amber-600",
      rules: [
        "Contract validity requirements - offer, acceptance, consideration, consensus",
        "Consideration definition - something of value exchanged between parties",
        "Offer and acceptance - terms, termination, revocation conditions",
        "Specific performance - court order to perform contractual obligation",
        "Breach of contract remedies - damages, injunction, specific performance",
        "Damages types - general, special, liquidated, exemplary",
        "Limitation period under Limitation Act - 3 years for contract, 12 for tort",
        "Arbitration procedures - mutually agreed dispute resolution",
        "Mediation and conciliation - alternative dispute resolution (ADR) methods",
        "Force majeure clauses - performance excuse due to unforeseen events",
        "Indemnity and guarantee provisions - third-party obligation",
        "Waiver and estoppel - abandonment and prevention of rights assertion",
        "Contract assignment and novation - transfer of rights and obligations",
        "Breach notice requirements - formal intimation before legal action",
        "Arbitration awards - finality and limited grounds for challenge",
        "Interim relief and injunctions - temporary court orders",
        "Applicable law and jurisdiction - choice of law clauses"
      ]
    },
    {
      id: "property",
      title: "Property & Real Estate Regulations",
      description: "Laws governing property registration, ownership transfer, and transactions.",
      icon: "🏠",
      color: "from-emerald-500 to-emerald-600",
      rules: [
        "Registration Act provisions - mandatory property registration",
        "Property title verification - search report, encumbrance certificate",
        "Sale deed execution - parties, consideration, description of property",
        "Stamp duty calculations - varies by state (4-7% of property value)",
        "Registration fee - usually 1% of property value",
        "Lease agreement terms - lessee, lessor, rent, duration, conditions",
        "Lease registration - 12 years+ lease must be registered",
        "Property transfer taxation under income tax section 45",
        "Capital gains calculation - holding period (short/long term)",
        "Dispute resolution procedures - specific performance under Transfer of Property Act",
        "Ownership types - self-owned, joint, tenancy in common, tenants by entirety",
        "Partition deed requirements - division of co-owned property",
        "Mortgage documentation - hypothecation and lien registration",
        "Adverse possession - continuous possession for 12 years",
        "Encroachment - unlawful occupation or intrusion on property",
        "Easement rights - right to use another's property for specific purpose",
        "Rental compliance - agreement, deposit, maintenance responsibilities"
      ]
    },
    {
      id: "ip",
      title: "Intellectual Property Rights",
      description: "Protection and enforcement of patents, trademarks, and copyrights.",
      icon: "💡",
      color: "from-violet-500 to-violet-600",
      rules: [
        "Trademark registration process - application, examination, publication, registration",
        "Trademark classes - Nice Classification system (45 classes of goods/services)",
        "Trademark validity period - 10 years, renewable indefinitely",
        "Patent filing procedures - provisional, complete specification, examination",
        "Patent protection period - 20 years from filing date",
        "Utility models - 10 years protection for minor inventions",
        "Copyright protection - automatic protection, 60 years after death of author",
        "Design registration - 10 years, renewable for 5 more years",
        "Copyright infringement - reproduction, adaptation, performance, distribution",
        "Geographic indication rights - GI registration and use restrictions",
        "Trade secret protection - confidential business information",
        "Licensing agreements - express permission for IP use",
        "Infringement remedies - injunction, damages, rendition of account",
        "Cancellation of trademark - non-use for 5 years, misleading nature",
        "Patent invalidation - objections based on prior art",
        "Dispute resolution - settlement, opposition, cancellation proceedings",
        "International protection - WIPO processes and PCT filing"
      ]
    },
    {
      id: "accounting",
      title: "Accounting Standards & Audit Rules",
      description: "Financial reporting norms and audit requirements for companies.",
      icon: "📑",
      color: "from-slate-500 to-slate-600",
      rules: [
        "Indian Accounting Standards (Ind AS) - converged with IFRS",
        "Standalone vs consolidated financial statements",
        "Balance sheet date - 31st March for companies",
        "Financial statement disclosure requirements - schedule-wise",
        "Audit committee responsibilities - audit plan, financial control, risk",
        "Audit committee independence - majority independent directors",
        "Internal audit requirements - planned approach, documentation, findings",
        "Statutory audit framework - mandatory for companies above threshold",
        "Auditor appointment rules - shareholder approval required",
        "Auditor rotation - listed companies change every 5 years",
        "Audit fee determination - independent, reasonable, justifiable",
        "Audit report requirements - unqualified, qualified, adverse opinions",
        "Management representation letter - management confirms financial statement",
        "Related party transaction audit - special procedures and disclosure",
        "Consolidated audit - parent and subsidiary entities",
        "Fiscal year audit - transitional to calendar year (if applicable)",
        "Peer review process - quality assurance of audit work"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            📋 Rules & Regulations
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive regulatory guidelines and compliance requirements across finance, banking, taxation, and legal domains.
          </p>
        </div>

        {/* Rules Sections */}
        <div className="space-y-16">
          {ruleCategories.map((category, index) => (
            <div key={category.id} className="relative">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl shadow-lg`}>
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

              {/* Rules Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.rules.map((rule, ruleIndex) => (
                  <div
                    key={ruleIndex}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5`}>
                        {ruleIndex + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {rule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Divider */}
              {index < ruleCategories.length - 1 && (
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
              Important Disclaimer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These rules and regulations are subject to change. Always consult with qualified professionals and refer to the latest official guidelines from respective authorities (CBDT, RBI, MCA, etc.) for current compliance requirements.
            </p>
            <h3 className="font-bold text-slate-900 mb-2"></h3>
                    <p className="text-slate-700 mb-4">
                      <b>Our experts are ready to assist you regarding any rule-related queries.</b>
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

export default Rules;
