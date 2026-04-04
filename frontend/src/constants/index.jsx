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
      { title: "Income Tax", icon: "💰" },
      { title: "GST", icon: "📊" },
      { title: "ITR Filing", icon: "📝" },
      { title: "Audit & Accounts", icon: "✓" },
    ],
    right: {
      "Income Tax": [
        "Income Tax Return",
        "Tax Planning",
        "Tax Notice Response",
        "Tax Optimization",
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
      { title: "Legal Consultation", icon: "⚖️" },
      { title: "Contract Drafting", icon: "📋" },
      { title: "Dispute Resolution", icon: "🤝" },
      { title: "Legal Documentation", icon: "📄" },
    ],
    right: {
      "Legal Consultation": [
        "Corporate Law",
        "Labour Law",
        "Business Law",
        "Contract Review",
      ],
    },
  },
  "Documentation": {
    left: [
      { title: "Business Documents", icon: "📑" },
      { title: "Legal Documents", icon: "⚖️" },
      { title: "Tax Documents", icon: "💼" },
      { title: "Compliance Documents", icon: "✓" },
    ],
    right: {
      "Business Documents": [
        "MOA & AOA",
        "Board Resolutions",
        "Employment Contracts",
        "NDA & Agreements",
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
