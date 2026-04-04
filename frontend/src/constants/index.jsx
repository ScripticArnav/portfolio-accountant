import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";



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
        "Private Limited Company",
        "Limited Liability Partnership",
        "One Person Company",
        "Sole Proprietorship",
        "Nidhi Company",
        "Producer Company",
        "Partnership Firm",
        "Startup India Registration",
      ],
      "International Business Setup": [
        "US Incorporation",
        "Singapore Incorporation",
        "UK Incorporation",
        "Netherlands Incorporation",
        "Hong Kong Company Incorporation",
        "Dubai Company Incorporation",
        "International Trademark Registration",
      ],
      "Company Name Search": [
        "Company Name Search",
        "Change Company Name",
        "Business Name Generator",
      ],
      "Licenses & Registrations": [
        "Digital Signature Certificate",
        "Udyam Registration",
        "MSME Registration",
        "ISO Certification",
        "FSSAI [Food License]",
        "IEC [Import/Export Code]",
        "Apeda RCMC",
        "Spice Board Registration",
        "FIEO Registration",
        "Legal Metrology",
        "Hallmark Registration",
        "BIS Registration",
        "Liquor License",
        "CLRA Registration & Licensing",
        "AD Code Registration",
        "IRDAI Registration",
        "Drug & Cosmetic License",
        "Customs Clearance",
      ],
      "Web Development": [
        "Web/E-Commerce Website Development",
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
        "Change Objective/Activity",
        "Change Address",
      ],
      "Changes In Limited Liability Partnership": [
        "Add Designated Partner",
        "Changes to LLP Agreement",
        "Close the LLP",
      ],
      "Mandatory Annual Filings": [
        "Annual Compliance Services",
        "LLP Annual Filings",
        "Secretarial Audit",
      ],
      "Labour Compliance": [
        "Provident Fund (PF) Registration",
        "ESI Registration",
        "Professional Tax Registration",
        "Shops and Establishments License",
        "Employee Stock Option Plan [ESOP]",
        "POSH Compliance",
        "Labor Law Advisor",
      ],
      "Accounting & Tax": [
        "Accounting and Book-keeping",
        "TDS Return Filing",
        "Individual Income Tax Filing",
        "Proprietorship Tax Return Filing",
        "ITR for LLP",
        "Corporate Tax",
        "Income Tax Assessment",
        "Income Tax Notice",
        "Virtual CFO",
      ],
      "Convert Your Business": [
        "Proprietorship to Pvt Ltd Company",
        "Compliance Check - Secretarial Audit",
        "Due Diligence",
        "RBI Compliance",
        "Convert Partnership into LLP Company",
        "Convert Private into Public Limited Company",
        "Convert Private into OPC Company",
      ],
    },
  },
  "Trademark & IP": {
    left: [
      { title: "Trademark", icon: "™️" },
      { title: "Copyright", icon: "©️" },
      { title: "Patent", icon: "🔒" },
      { title: "Design", icon: "🎨" },
    ],
    right: {
      "Trademark": [
        "Trademark Search",
        "Trademark Registration",
        "International Trademark",
        "Opposition",
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
        "Finance Lawyers",
        "Cheque Bounce Lawyers",
        "Child Custody Lawyers",
        "Civil Lawyers",
        "Consumer Protection Lawyers",
        "Contract Lawyers",
        "Corporate Lawyers",
        "Criminal Lawyers",
        "Cyber Crime Lawyers",
        "Property Lawyers",
        "Divorce Lawyers",
        "Family Lawyers",
        "GST Lawyers",
        "Intellectual Property Lawyers",
        "Labour Lawyers",
        "Money Recovery Lawyers",
        "Motor Accident Lawyers",
        "Muslim Law Lawyers",
        "More",
        "Expert Services",
        "Technology, Media and Telecom (TMT)",
        "Risk Management and Regulatory Risk",
      ],
      "Legal Notice": [
        "Legal Notice for Money Recovery",
        "Legal Notice Recovery of Dues",
        "Legal Notice Under Consumer Protection Act",
        "Cheque Bounce Notice",
        "Reply to ITR Notice",
        "Caveat Petition",
        "Tenant Rental Notice",
      ],
      "Litigation": [
        "Defamation Complaint",
        "Intellectual Property Infringement",
        "Employment Dispute Litigation",
        "Contract Dispute Litigation",
        "Cheque Bounce Complaint",
        "Property Litigation",
        "Cyber Crime Litigation",
        "Mutual Divorce",
        "Contested Divorce",
        "Restitution of Conjugal Rights",
        "POSH Compliance",
        "RERA Complaint",
        "US Litigation Service",
      ],
      "Consumer Complaint": [
        "Automobile",
        "Bank",
        "Courier Logistics",
        "E-commerce",
        "Education",
        "Grievances",
        "Home Appliances",
        "Hotels",
        "IT Companies",
        "Insurance",
        "Investments",
        "Medical",
        "Real Estate",
        "Retail Business",
        "Streaming Platforms",
        "Travel",
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
        "All Legal Documents",
        "Rental Agreement",
        "Commercial Rental Agreement",
        "Experience Letter",
        "Appointment Letter",
        "Affidavit Format",
        "Power Of Attorney",
        "Income Certificate",
        "No Objection Certificate",
        "Salary Slip",
        "Resignation Letter",
        "Legal Heir Certificate",
        "Relieving Letter",
        "Bonafide Certificate",
        "Partnership Deed",
        "GST Invoice",
        "Authorised Signatory In GST",
        "Delivery Challan",
        "Offer Letter",
        "Consent Letter For GST Registration",
        "Rent Receipt",
      ],
      "Business Contracts": [
        "Non Disclosure Agreement NDA",
        "Service Level Agreement",
        "Franchise Agreement",
        "Master Service Agreement",
        "Shareholders Agreement",
        "Joint Venture Agreement",
        "Founders Agreement",
        "Vendor Agreement",
        "Consultancy Agreement",
        "Memorandum of Understanding",
        "Succession Certificate",
        "Scope of Work Agreement",
        "Share Purchase Agreement",
        "Relinquishment Deed",
        "Legal Heir Certificate",
        "Trade License",
        "Noncompete Agreement",
        "Finance Agreement",
        "GDPR",
      ],
      "Personal & Family": [
        "Will Registration",
        "Probate of Will",
        "Power of Attorney",
      ],
      "Real Estate": [
        "Rental Agreement",
        "Sale Deed",
        "Gift Deed",
        "Rental Tenant Notice",
      ],
      "HR Policies": [
        "Employment Agreement",
        "ESOP",
        "Payroll Maintenance",
      ],
    },
  },
  "Others": {
    left: [
      { title: "Calculator", icon: "🧮" },
      { title: "Fundraising", icon: "💰" },
      { title: "NGO", icon: "🤝" },
      { title: "Property & Personal", icon: "🏠" },
    ],
    right: {
      "Calculator": [
        "All Calculators",
        "Income Tax Calculator",
        "HRA Calculator",
        "GST Calculator",
        "EMI Calculator",
        "Home Loan EMI Calculator",
        "Salary Calculator",
        "Mutual Fund Returns Calculator",
        "Retirement Planning Calculator",
        "EPF Calculator",
        "PPF Calculator",
        "NPS Calculator",
        "Gratuity Calculator",
        "Simple Compound Interest Calculator",
        "FD Calculator",
        "Lumpsum Calculator",
        "TDS Calculator",
        "RD Calculator",
        "SIP Calculator",
        "Business Setup Calculator",
      ],
      "Fundraising": [
        "Fundraising",
        "Pitch Deck",
        "Business Loan",
        "DPR Service",
      ],
      "NGO": [
        "NGO",
        "Section 8 Company",
        "Trust Registration",
        "Society Registration",
        "NGO Compliance",
        "Section 8 Compliance",
        "CSR-1 Filing",
        "Sec.80G & Sec.12A",
        "Darpan Registration",
        "FCRA Registration",
      ],
      "Property & Personal": [
        "Property Title Verification",
        "Property Registration",
        "Rera Complaint",
        "Licenses & Registrations",
        "Gun License",
        "Name Change & Other Conditions",
        "Name Change",
        "Religion Change",
        "Gender Change",
        "Marriage",
        "Marriage Registration",
        "Court Marriage",
        "Mutual Divorce",
        "Divorce Alimony",
        "Restitution of Conjugal Rights",
        "Immigration",
        "Corporate Immigration",
        "Family Immigration",
        "College Immigration",
        "File a Consumer Complaint",
        "Online Consumer Complaint",
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
