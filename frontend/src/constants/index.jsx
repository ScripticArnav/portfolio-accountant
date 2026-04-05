import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

// Helper function to convert text to URL slug
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};



export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Testimonials", href: "/contact" },
  { label: "Users", href: "/users" },
];

export const megaMenu = {
  "Business Registration": {
    left: [
      { title: "Company Registration", icon: "📋" },
      { title: "International Business Setup", icon: "🌍" },
      { title: "Company Name Search", icon: "🔍" },
      { title: "Licenses & Registrations", icon: "📄" },
      { title: "Web Development", icon: "💻" },
    ],
    right: {
      "Company Registration": [
        { label: "Private Limited Company", href: "/services/private-limited-company" },
        { label: "Limited Liability Partnership", href: "/services/limited-liability-partnership" },
        { label: "One Person Company", href: "/services/one-person-company" },
        { label: "Sole Proprietorship", href: "/services/sole-proprietorship" },
        { label: "Nidhi Company", href: "/services/nidhi-company" },
        { label: "Producer Company", href: "/services/producer-company" },
        { label: "Partnership Firm", href: "/services/partnership-firm" },
        { label: "Startup India Registration", href: "/services/startup-india-registration" },
      ],
      "International Business Setup": [
        { label: "US Incorporation", href: "/services/us-incorporation" },
        { label: "Singapore Incorporation", href: "/services/singapore-incorporation" },
        { label: "UK Incorporation", href: "/services/uk-incorporation" },
        { label: "Netherlands Incorporation", href: "/services/netherlands-incorporation" },
        { label: "Hong Kong Company Incorporation", href: "/services/hong-kong-incorporation" },
        { label: "Dubai Company Incorporation", href: "/services/dubai-incorporation" },
        { label: "International Trademark Registration", href: "/services/international-trademark-registration" },
      ],
      "Company Name Search": [
        { label: "Company Name Search", href: "/services/company-name-search" },
        { label: "Change Company Name", href: "/services/change-company-name" },
        { label: "Business Name Generator", href: "/services/business-name-generator" },
      ],
      "Licenses & Registrations": [
        { label: "Digital Signature Certificate", href: "/services/digital-signature-certificate" },
        { label: "Udyam Registration", href: "/services/udyam-registration" },
        { label: "MSME Registration", href: "/services/msme-registration" },
        { label: "ISO Certification", href: "/services/iso-certification" },
        { label: "FSSAI [Food License]", href: "/services/fssai-food-license" },
        { label: "IEC [Import/Export Code]", href: "/services/iec-import-export-code" },
        { label: "Apeda RCMC", href: "/services/apeda-rcmc" },
        { label: "Spice Board Registration", href: "/services/spice-board-registration" },
        { label: "FIEO Registration", href: "/services/fieo-registration" },
        { label: "Legal Metrology", href: "/services/legal-metrology" },
        { label: "Hallmark Registration", href: "/services/hallmark-registration" },
        { label: "BIS Registration", href: "/services/bis-registration" },
        { label: "Liquor License", href: "/services/liquor-license" },
        { label: "CLRA Registration & Licensing", href: "/services/clra-registration" },
        { label: "AD Code Registration", href: "/services/ad-code-registration" },
        { label: "IRDAI Registration", href: "/services/irdai-registration" },
        { label: "Drug & Cosmetic License", href: "/services/drug-cosmetic-license" },
        { label: "Customs Clearance", href: "/services/customs-clearance" },
      ],
      "Web Development": [
        { label: "Web/E-Commerce Website Development", href: "/services/web-ecommerce-development" },
      ],
    },
  },
  "Tax & Compliance": {
    left: [
      { title: "GST and Other Indirect Tax", icon: "📊" },
      { title: "Changes in Pvt Ltd Company", icon: "🏢" },
      { title: "Changes In Limited Liability Partnership", icon: "📋" },
      { title: "Mandatory Annual Filings", icon: "📅" },
      { title: "Labour Compliance", icon: "👥" },
      { title: "Accounting & Tax", icon: "💼" },
      { title: "Convert Your Business", icon: "🔄" },
    ],
    right: {
      "GST and Other Indirect Tax": [
        { label: "GST Registration", href: "/services/gst-registration" },
        { label: "GST Filing", href: "/services/gst-filing" },
        { label: "HSN Code Finder", href: "/services/hsn-code-finder" },
        { label: "GST Cancellation and Revocation", href: "/services/gst-cancellation-revocation" },
        { label: "GST Cancellation", href: "/services/gst-cancellation" },
      ],
      "Changes in Pvt Ltd Company": [
        { label: "Add a Director", href: "/services/add-director" },
        { label: "Remove a Director", href: "/services/remove-director" },
        { label: "Increase Authorized Capital", href: "/services/increase-authorized-capital" },
        { label: "Close the Pvt Ltd Company", href: "/services/close-pvt-ltd-company" },
        { label: "Strike off Company", href: "/services/strike-off-company" },
        { label: "Change Objective/Activity", href: "/services/change-objective-activity" },
        { label: "Change Address", href: "/services/change-address" },
      ],
      "Changes In Limited Liability Partnership": [
        { label: "Add Designated Partner", href: "/services/add-designated-partner" },
        { label: "Changes to LLP Agreement", href: "/services/changes-llp-agreement" },
        { label: "Close the LLP", href: "/services/close-llp" },
      ],
      "Mandatory Annual Filings": [
        { label: "Annual Compliance Services", href: "/services/annual-compliance-services" },
        { label: "LLP Annual Filings", href: "/services/llp-annual-filings" },
        { label: "Secretarial Audit", href: "/services/secretarial-audit" },
      ],
      "Labour Compliance": [
        { label: "Provident Fund (PF) Registration", href: "/services/pf-registration" },
        { label: "ESI Registration", href: "/services/esi-registration" },
        { label: "Professional Tax Registration", href: "/services/professional-tax-registration" },
        { label: "Shops and Establishments License", href: "/services/shops-establishments-license" },
        { label: "Employee Stock Option Plan [ESOP]", href: "/services/esop" },
        { label: "POSH Compliance", href: "/services/posh-compliance" },
        { label: "Labor Law Advisor", href: "/services/labor-law-advisor" },
      ],
      "Accounting & Tax": [
        { label: "Accounting and Book-keeping", href: "/services/accounting-bookkeeping" },
        { label: "TDS Return Filing", href: "/services/tds-return-filing" },
        { label: "Individual Income Tax Filing", href: "/services/individual-income-tax-filing" },
        { label: "Proprietorship Tax Return Filing", href: "/services/proprietorship-tax-return-filing" },
        { label: "ITR for LLP", href: "/services/itr-llp" },
        { label: "Corporate Tax", href: "/services/corporate-tax" },
        { label: "Income Tax Assessment", href: "/services/income-tax-assessment" },
        { label: "Income Tax Notice", href: "/services/income-tax-notice" },
        { label: "Virtual CFO", href: "/services/virtual-cfo" },
      ],
      "Convert Your Business": [
        { label: "Proprietorship to Pvt Ltd Company", href: "/services/proprietorship-to-pvt-ltd" },
        { label: "Compliance Check - Secretarial Audit", href: "/services/compliance-check-secretarial-audit" },
        { label: "Due Diligence", href: "/services/due-diligence" },
        { label: "RBI Compliance", href: "/services/rbi-compliance" },
        { label: "Convert Partnership into LLP Company", href: "/services/convert-partnership-to-llp" },
        { label: "Convert Private into Public Limited Company", href: "/services/convert-private-to-public" },
        { label: "Convert Private into OPC Company", href: "/services/convert-private-to-opc" },
      ],
    },
  },
  "Trademark & IP": {
    left: [
      { title: "Trademark", icon: "™️" },
      { title: "Copyright", icon: "©️" },
      { title: "Patent", icon: "🔒" },
      { title: "Infringement", icon: "⚠️" },
      { title: "Design Registration", icon: "🎨" },
    ],
    right: {
      "Trademark": [
        { label: "Trademark Registration", href: "/services/trademark-registration" },
        { label: "Trademark Search", href: "/services/trademark-search" },
        { label: "Respond to TM Objection", href: "/services/respond-tm-objection" },
        { label: "Well Known Trademark", href: "/services/well-known-trademark" },
        { label: "Trademark Watch", href: "/services/trademark-watch" },
        { label: "Trademark Renewal", href: "/services/trademark-renewal" },
        { label: "Trademark Assignment", href: "/services/trademark-assignment" },
        { label: "USA Trademark", href: "/services/usa-trademark" },
        { label: "Trademark Class Finder", href: "/services/trademark-class-finder" },
      ],
      "Copyright": [
        { label: "Copyright Registration", href: "/services/copyright-registration" },
        { label: "Copyright Assignment", href: "/services/copyright-assignment" },
        { label: "Literary Work Registration", href: "/services/literary-work-registration" },
        { label: "Software Registration", href: "/services/software-registration" },
      ],
      "Patent": [
        { label: "Indian Patent Search", href: "/services/indian-patent-search" },
        { label: "Provisional Patent Application", href: "/services/provisional-patent-application" },
        { label: "Patent Registration", href: "/services/patent-registration" },
      ],
      "Infringement": [
        { label: "Copyright Infringement", href: "/services/copyright-infringement" },
        { label: "Patent Infringement", href: "/services/patent-infringement" },
        { label: "Trademark Infringement", href: "/services/trademark-infringement" },
      ],
      "Design Registration": [
        { label: "Logo Design", href: "/services/logo-design" },
        { label: "Design Registration", href: "/services/design-registration" },
      ],
    },
  },
  "Lawyer Services": {
    left: [
      { title: "Lawyers Specialization", icon: "⚖️" },
      { title: "Legal Notice", icon: "📋" },
      { title: "Litigation", icon: "🤝" },
      { title: "Consumer Complaint", icon: "📄" },
    ],
    right: {
      "Lawyers Specialization": [
        { label: "Finance Lawyers", href: "/services/finance-lawyers" },
        { label: "Cheque Bounce Lawyers", href: "/services/cheque-bounce-lawyers" },
        { label: "Child Custody Lawyers", href: "/services/child-custody-lawyers" },
        { label: "Civil Lawyers", href: "/services/civil-lawyers" },
        { label: "Consumer Protection Lawyers", href: "/services/consumer-protection-lawyers" },
        { label: "Contract Lawyers", href: "/services/contract-lawyers" },
        { label: "Corporate Lawyers", href: "/services/corporate-lawyers" },
        { label: "Criminal Lawyers", href: "/services/criminal-lawyers" },
        { label: "Cyber Crime Lawyers", href: "/services/cyber-crime-lawyers" },
        { label: "Property Lawyers", href: "/services/property-lawyers" },
        { label: "Divorce Lawyers", href: "/services/divorce-lawyers" },
        { label: "Family Lawyers", href: "/services/family-lawyers" },
        { label: "GST Lawyers", href: "/services/gst-lawyers" },
        { label: "Intellectual Property Lawyers", href: "/services/ip-lawyers" },
        { label: "Labour Lawyers", href: "/services/labour-lawyers" },
        { label: "Money Recovery Lawyers", href: "/services/money-recovery-lawyers" },
        { label: "Motor Accident Lawyers", href: "/services/motor-accident-lawyers" },
        { label: "Muslim Law Lawyers", href: "/services/muslim-law-lawyers" },
        { label: "More", href: "/services/more-lawyers" },
        { label: "Expert Services", href: "/services/expert-services" },
        { label: "Technology, Media and Telecom (TMT)", href: "/services/tmt" },
        { label: "Risk Management and Regulatory Risk", href: "/services/risk-management" },
      ],
      "Legal Notice": [
        { label: "Legal Notice for Money Recovery", href: "/services/legal-notice-money-recovery" },
        { label: "Legal Notice Recovery of Dues", href: "/services/legal-notice-recovery-dues" },
        { label: "Legal Notice Under Consumer Protection Act", href: "/services/legal-notice-consumer-protection" },
        { label: "Cheque Bounce Notice", href: "/services/cheque-bounce-notice" },
        { label: "Reply to ITR Notice", href: "/services/reply-itr-notice" },
        { label: "Caveat Petition", href: "/services/caveat-petition" },
        { label: "Tenant Rental Notice", href: "/services/tenant-rental-notice" },
      ],
      "Litigation": [
        { label: "Defamation Complaint", href: "/services/defamation-complaint" },
        { label: "Intellectual Property Infringement", href: "/services/ip-infringement" },
        { label: "Employment Dispute Litigation", href: "/services/employment-dispute" },
        { label: "Contract Dispute Litigation", href: "/services/contract-dispute" },
        { label: "Cheque Bounce Complaint", href: "/services/cheque-bounce-complaint" },
        { label: "Property Litigation", href: "/services/property-litigation" },
        { label: "Cyber Crime Litigation", href: "/services/cyber-crime-litigation" },
        { label: "Mutual Divorce", href: "/services/mutual-divorce" },
        { label: "Contested Divorce", href: "/services/contested-divorce" },
        { label: "Restitution of Conjugal Rights", href: "/services/restitution-conjugal-rights" },
        { label: "POSH Compliance", href: "/services/posh-compliance" },
        { label: "RERA Complaint", href: "/services/rera-complaint" },
        { label: "US Litigation Service", href: "/services/us-litigation" },
      ],
      "Consumer Complaint": [
        { label: "Automobile", href: "/services/consumer-automobile" },
        { label: "Bank", href: "/services/consumer-bank" },
        { label: "Courier Logistics", href: "/services/consumer-courier-logistics" },
        { label: "E-commerce", href: "/services/consumer-ecommerce" },
        { label: "Education", href: "/services/consumer-education" },
        { label: "Grievances", href: "/services/consumer-grievances" },
        { label: "Home Appliances", href: "/services/consumer-home-appliances" },
        { label: "Hotels", href: "/services/consumer-hotels" },
        { label: "IT Companies", href: "/services/consumer-it-companies" },
        { label: "Insurance", href: "/services/consumer-insurance" },
        { label: "Investments", href: "/services/consumer-investments" },
        { label: "Medical", href: "/services/consumer-medical" },
        { label: "Real Estate", href: "/services/consumer-real-estate" },
        { label: "Retail Business", href: "/services/consumer-retail" },
        { label: "Streaming Platforms", href: "/services/consumer-streaming" },
        { label: "Travel", href: "/services/consumer-travel" },
      ],
    },
  },
  "Documentation": {
    left: [
      { title: "Free Legal Documents", icon: "📄" },
      { title: "Business Contracts", icon: "📋" },
      { title: "Personal & Family", icon: "👨‍👩‍👧‍👦" },
      { title: "Real Estate", icon: "🏠" },
      { title: "HR Policies", icon: "👔" },
    ],
    right: {
      "Free Legal Documents": [
        { label: "All Legal Documents", href: "/services/all-legal-documents" },
        { label: "Rental Agreement", href: "/services/rental-agreement" },
        { label: "Commercial Rental Agreement", href: "/services/commercial-rental-agreement" },
        { label: "Experience Letter", href: "/services/experience-letter" },
        { label: "Appointment Letter", href: "/services/appointment-letter" },
        { label: "Affidavit Format", href: "/services/affidavit-format" },
        { label: "Power Of Attorney", href: "/services/power-of-attorney" },
        { label: "Income Certificate", href: "/services/income-certificate" },
        { label: "No Objection Certificate", href: "/services/no-objection-certificate" },
        { label: "Salary Slip", href: "/services/salary-slip" },
        { label: "Resignation Letter", href: "/services/resignation-letter" },
        { label: "Legal Heir Certificate", href: "/services/legal-heir-certificate" },
        { label: "Relieving Letter", href: "/services/relieving-letter" },
        { label: "Bonafide Certificate", href: "/services/bonafide-certificate" },
        { label: "Partnership Deed", href: "/services/partnership-deed" },
        { label: "GST Invoice", href: "/services/gst-invoice" },
        { label: "Authorised Signatory In GST", href: "/services/authorised-signatory-gst" },
        { label: "Delivery Challan", href: "/services/delivery-challan" },
        { label: "Offer Letter", href: "/services/offer-letter" },
        { label: "Consent Letter For GST Registration", href: "/services/consent-letter-gst" },
        { label: "Rent Receipt", href: "/services/rent-receipt" },
      ],
      "Business Contracts": [
        { label: "Non Disclosure Agreement NDA", href: "/services/nda" },
        { label: "Service Level Agreement", href: "/services/sla" },
        { label: "Franchise Agreement", href: "/services/franchise-agreement" },
        { label: "Master Service Agreement", href: "/services/master-service-agreement" },
        { label: "Shareholders Agreement", href: "/services/shareholders-agreement" },
        { label: "Joint Venture Agreement", href: "/services/joint-venture-agreement" },
        { label: "Founders Agreement", href: "/services/founders-agreement" },
        { label: "Vendor Agreement", href: "/services/vendor-agreement" },
        { label: "Consultancy Agreement", href: "/services/consultancy-agreement" },
        { label: "Memorandum of Understanding", href: "/services/memorandum-understanding" },
        { label: "Succession Certificate", href: "/services/succession-certificate" },
        { label: "Scope of Work Agreement", href: "/services/scope-of-work" },
        { label: "Share Purchase Agreement", href: "/services/share-purchase-agreement" },
        { label: "Relinquishment Deed", href: "/services/relinquishment-deed" },
        { label: "Legal Heir Certificate", href: "/services/legal-heir-certificate-2" },
        { label: "Trade License", href: "/services/trade-license" },
        { label: "Noncompete Agreement", href: "/services/noncompete-agreement" },
        { label: "Finance Agreement", href: "/services/finance-agreement" },
        { label: "GDPR", href: "/services/gdpr" },
      ],
      "Personal & Family": [
        { label: "Will Registration", href: "/services/will-registration" },
        { label: "Probate of Will", href: "/services/probate-of-will" },
        { label: "Power of Attorney", href: "/services/poa" },
      ],
      "Real Estate": [
        { label: "Rental Agreement", href: "/services/rental-agreement-2" },
        { label: "Sale Deed", href: "/services/sale-deed" },
        { label: "Gift Deed", href: "/services/gift-deed" },
        { label: "Rental Tenant Notice", href: "/services/rental-tenant-notice" },
      ],
      "HR Policies": [
        { label: "Employment Agreement", href: "/services/employment-agreement" },
        { label: "ESOP", href: "/services/esop-2" },
        { label: "Payroll Maintenance", href: "/services/payroll-maintenance" },
      ],
    },
  },
  "Others": {
    left: [
      { title: "Calculator", icon: "🧮" },
      { title: "Knowledge Bank", icon: "📚" },
      { title: "Fundraising", icon: "💰" },
      { title: "NGO", icon: "🤝" },
      { title: "Property & Personal", icon: "🏠" },
    ],
    right: {
      "Calculator": [
        { label: "GST Calculator", href: "/calculators/gst" },
        { label: "EMI Calculator", href: "/calculators/emi" },
        { label: "Income Tax Calculator", href: "/calculators/income-tax" },
        { label: "SIP Calculator", href: "/calculators/sip" },
        { label: "TDS Calculator", href: "/calculators/tds" },
        { label: "HRA Calculator", href: "/calculators/hra" },
        { label: "Home Loan EMI Calculator", href: "/calculators/home-loan-emi" },
        { label: "Salary Calculator", href: "/calculators/salary" },
        { label: "Mutual Fund Returns Calculator", href: "/calculators/mutual-fund" },
        { label: "Retirement Planning Calculator", href: "/calculators/retirement" },
        { label: "EPF Calculator", href: "/calculators/epf" },
        { label: "PPF Calculator", href: "/calculators/ppf" },
        { label: "NPS Calculator", href: "/calculators/nps" },
        { label: "Gratuity Calculator", href: "/calculators/gratuity" },
        { label: "Simple Compound Interest Calculator", href: "/calculators/interest" },
        { label: "FD Calculator", href: "/calculators/fd" },
        { label: "Lumpsum Calculator", href: "/calculators/lumpsum" },
        { label: "RD Calculator", href: "/calculators/rd" },
        { label: "Business Setup Calculator", href: "/calculators/business-setup" },
      ],
      "Knowledge Bank": [
        { label: "Forms", href: "/knowledge-bank/forms" },
        { label: "Rules", href: "/knowledge-bank/rules" },
        { label: "Acts", href: "/knowledge-bank/acts" },
        { label: "Links", href: "/knowledge-bank/links" },
        { label: "Utilities", href: "/knowledge-bank/utilities" },
        { label: "Bulletins", href: "/knowledge-bank/bulletins" },
        { label: "Blogs", href: "/knowledge-bank/blogs" },
      ],
      "Calculator": [
        { label: "GST Calculator", href: "/calculators/gst" },
        { label: "EMI Calculator", href: "/calculators/emi" },
        { label: "Income Tax Calculator", href: "/calculators/income-tax" },
        { label: "SIP Calculator", href: "/calculators/sip" },
        { label: "TDS Calculator", href: "/calculators/tds" },
        { label: "HRA Calculator", href: "/calculators/hra" },
        { label: "Home Loan EMI Calculator", href: "/calculators/home-loan-emi" },
        { label: "Salary Calculator", href: "/calculators/salary" },
        { label: "Mutual Fund Returns Calculator", href: "/calculators/mutual-fund" },
        { label: "Retirement Planning Calculator", href: "/calculators/retirement" },
        { label: "EPF Calculator", href: "/calculators/epf" },
        { label: "PPF Calculator", href: "/calculators/ppf" },
        { label: "NPS Calculator", href: "/calculators/nps" },
        { label: "Gratuity Calculator", href: "/calculators/gratuity" },
        { label: "Simple Compound Interest Calculator", href: "/calculators/interest" },
        { label: "FD Calculator", href: "/calculators/fd" },
        { label: "Lumpsum Calculator", href: "/calculators/lumpsum" },
        { label: "RD Calculator", href: "/calculators/rd" },
        { label: "Business Setup Calculator", href: "/calculators/business-setup" },
      ],
      "Fundraising": [
        { label: "Fundraising", href: "/services/fundraising" },
        { label: "Pitch Deck", href: "/services/pitch-deck" },
        { label: "Business Loan", href: "/services/business-loan" },
        { label: "DPR Service", href: "/services/dpr-service" },
      ],
      "NGO": [
        { label: "NGO", href: "/services/ngo" },
        { label: "Section 8 Company", href: "/services/section-8-company" },
        { label: "Trust Registration", href: "/services/trust-registration" },
        { label: "Society Registration", href: "/services/society-registration" },
        { label: "NGO Compliance", href: "/services/ngo-compliance" },
        { label: "Section 8 Compliance", href: "/services/section-8-compliance" },
        { label: "CSR-1 Filing", href: "/services/csr-1-filing" },
        { label: "Sec.80G & Sec.12A", href: "/services/section-80g-12a" },
        { label: "Darpan Registration", href: "/services/darpan-registration" },
        { label: "FCRA Registration", href: "/services/fcra-registration" },
      ],
      "Property & Personal": [
        { label: "Property Title Verification", href: "/services/property-title-verification" },
        { label: "Property Registration", href: "/services/property-registration" },
        { label: "Rera Complaint", href: "/services/rera-complaint-2" },
        { label: "Licenses & Registrations", href: "/services/licenses-registrations" },
        { label: "Gun License", href: "/services/gun-license" },
        { label: "Name Change & Other Conditions", href: "/services/name-change" },
        { label: "Name Change", href: "/services/name-change-2" },
        { label: "Religion Change", href: "/services/religion-change" },
        { label: "Gender Change", href: "/services/gender-change" },
        { label: "Marriage", href: "/services/marriage" },
        { label: "Marriage Registration", href: "/services/marriage-registration" },
        { label: "Court Marriage", href: "/services/court-marriage" },
        { label: "Mutual Divorce", href: "/services/mutual-divorce-2" },
        { label: "Divorce Alimony", href: "/services/divorce-alimony" },
        { label: "Restitution of Conjugal Rights", href: "/services/restitution-conjugal-2" },
        { label: "Immigration", href: "/services/immigration" },
        { label: "Corporate Immigration", href: "/services/corporate-immigration" },
        { label: "Family Immigration", href: "/services/family-immigration" },
        { label: "College Immigration", href: "/services/college-immigration" },
        { label: "File a Consumer Complaint", href: "/services/file-consumer-complaint" },
        { label: "Online Consumer Complaint", href: "/services/online-consumer-complaint" },
      ],
    },
  },
};

export const servicesMenu = [
  {
    name: "Account",
    href: "/services/account",
    subServices: [
      "Bookkeeping & ledger management",
      "Financial statement preparation",
      "Cash flow tracking",
      "Accounting software support",
    ],
  },
  {
    name: "Loans",
    href: "/services/loans",
    subServices: [
      "Business loan assistance",
      "Personal loan guidance",
      "Loan documentation",
      "Loan optimization",
    ],
  },
  {
    name: "Taxation",
    href: "/services/taxation",
    subServices: [
      "Income tax return filing",
      "GST registration & filing",
      "Tax planning",
      "Handling tax notices",
    ],
  },
  {
    name: "Risk Assessment",
    href: "/services/risk-assessment",
    subServices: [
      "Financial risk analysis",
      "Compliance risk review",
      "Risk mitigation planning",
      "Risk reporting",
    ],
  },
  {
    name: "Advisory",
    href: "/services/advisory",
    subServices: [
      "Business advisory",
      "Strategic planning",
      "Growth consulting",
      "Market analysis",
    ],
  },
  {
    name: "Business Auxiliary",
    href: "/services/business-auxiliary",
    subServices: [
      "HR consulting",
      "Legal documentation",
      "Business process optimization",
      "Vendor management",
    ],
  },
  {
    name: "Finance",
    href: "/services/finance",
    subServices: [
      "Financial planning",
      "Investment advisory",
      "Budget management",
      "Business financial consulting",
    ],
  },
  {
    name: "Business Setup",
    href: "/services/business-setup",
    subServices: [
      "Company registration",
      "Startup advisory",
      "Trademark registration",
      "Business licensing",
    ],
  },
  {
    name: "Corporate Compliance",
    href: "/services/corporate-compliance",
    subServices: [
      "ROC filings",
      "Annual compliance",
      "Company law advisory",
      "Legal documentation",
    ],
  },
  {
    name: "Payroll",
    href: "/services/payroll",
    subServices: [
      "Salary processing",
      "PF & ESI compliance",
      "Payslip generation",
      "Payroll reporting",
    ],
  },
];
/*export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
*/
export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
