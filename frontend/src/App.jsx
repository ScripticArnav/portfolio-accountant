import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact/Contact";
import ClientLogin from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SignUp from "./pages/SignUp";
import ClientPortal from "./pages/ClientPortal";

// ✅ Calculator Pages
import GSTCalculator from "./pages/calculators/GSTCalculator";
import EMICalculator from "./pages/calculators/EMICalculator";
import IncomeTaxCalculator from "./pages/calculators/IncomeTaxCalculator";
import SIPCalculator from "./pages/calculators/SIPCalculator";
import TDSCalculator from "./pages/calculators/TDSCalculator";
import HRACalculator from "./pages/calculators/HRACalculator";
import HomeLoanEMICalculator from "./pages/calculators/HomeLoanEMICalculator";
import SalaryCalculator from "./pages/calculators/SalaryCalculator";
import MutualFundCalculator from "./pages/calculators/MutualFundCalculator";
import RetirementCalculator from "./pages/calculators/RetirementCalculator";
import EPFCalculator from "./pages/calculators/EPFCalculator";
import PPFCalculator from "./pages/calculators/PPFCalculator";
import NPSCalculator from "./pages/calculators/NPSCalculator";
import GratuityCalculator from "./pages/calculators/GratuityCalculator";
import InterestCalculator from "./pages/calculators/InterestCalculator";
import FDCalculator from "./pages/calculators/FDCalculator";
import LumpsumCalculator from "./pages/calculators/LumpsumCalculator";
import RDCalculator from "./pages/calculators/RDCalculator";
import BusinessSetupCalculator from "./pages/calculators/BusinessSetupCalculator";

// ✅ services Pages
import Account from "./pages/services/Account";
import Finance from "./pages/services/Finance";
import Taxation from "./pages/services/Taxation";
import Payroll from "./pages/services/Payroll";
import CorporateCompliance from "./pages/services/CorporateCompliance";
import BusinessSetup from "./pages/services/BusinessSetup";
import Loans from "./pages/services/Loans";
import RiskAssessment from "./pages/services/RiskAssessment";
import Advisory from "./pages/services/Advisory";
import BusinessAuxiliary from "./pages/services/BusinessAuxiliary";

//✅ knowledge-bank Pages
import Rules from "./pages/knowledgeBank/Rules";
import Acts from "./pages/knowledgeBank/Acts";
import Links from "./pages/knowledgeBank/Links";
import Bulletins from "./pages/knowledgeBank/Bulletins";
import Blogs from "./pages/knowledgeBank/Blogs";

// ✅ Mega Menu Services Category Pages
import BusinessRegistrationIndex from "./pages/services/business-registration/index";
import TaxComplianceIndex from "./pages/services/tax-compliance/index";
import TrademarkIPIndex from "./pages/services/trademark-ip/index";
import LawyerServicesIndex from "./pages/services/lawyer-services/index";
import DocumentationIndex from "./pages/services/documentation/index";
import OthersIndex from "./pages/services/others/index";

// ✅ Mega Menu Services Detail Pages
import PrivateLimitedCompany from "./pages/services/business-registration/PrivateLimitedCompany";
import LimitedLiabilityPartnership from "./pages/services/business-registration/LimitedLiabilityPartnership";
import GSTRegistration from "./pages/services/tax-compliance/GSTRegistration";
import TrademarkRegistration from "./pages/services/trademark-ip/TrademarkRegistration";
import CorporateLawyers from "./pages/services/lawyer-services/CorporateLawyers";
import RentalAgreement from "./pages/services/documentation/RentalAgreement";
import IncomeTaxCalc from "./pages/services/others/IncomeTaxCalculator";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        
        <Navbar />

        <main className="flex-grow">
          <Routes>

            {/* ✅ Basic Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* ✅ IMPORTANT: Calculator sub-routes FIRST */}
            <Route path="/calculators/gst" element={<GSTCalculator />} />
            <Route path="/calculators/emi" element={<EMICalculator />} />
            <Route path="/calculators/income-tax" element={<IncomeTaxCalculator />} />
            <Route path="/calculators/sip" element={<SIPCalculator />} />
            <Route path="/calculators/tds" element={<TDSCalculator />} />
            <Route path="/calculators/hra" element={<HRACalculator />} />
            <Route path="/calculators/home-loan-emi" element={<HomeLoanEMICalculator />} />
            <Route path="/calculators/salary" element={<SalaryCalculator />} />
            <Route path="/calculators/mutual-fund" element={<MutualFundCalculator />} />
            <Route path="/calculators/retirement" element={<RetirementCalculator />} />
            <Route path="/calculators/epf" element={<EPFCalculator />} />
            <Route path="/calculators/ppf" element={<PPFCalculator />} />
            <Route path="/calculators/nps" element={<NPSCalculator />} />
            <Route path="/calculators/gratuity" element={<GratuityCalculator />} />
            <Route path="/calculators/interest" element={<InterestCalculator />} />
            <Route path="/calculators/fd" element={<FDCalculator />} />
            <Route path="/calculators/lumpsum" element={<LumpsumCalculator />} />
            <Route path="/calculators/rd" element={<RDCalculator />} />
            <Route path="/calculators/business-setup" element={<BusinessSetupCalculator />} />

            {/* ✅ Services sub-routes */}
            <Route path="/services/account" element={<Account />} />
            <Route path="/services/finance" element={<Finance />} />
            <Route path="/services/taxation" element={<Taxation />} />
            <Route path="/services/payroll" element={<Payroll />} />
            <Route path="/services/corporate-compliance" element={<CorporateCompliance />} />
            <Route path="/services/business-setup" element={<BusinessSetup />} />
            <Route path="/services/loans" element={<Loans />} />
            <Route path="/services/risk-assessment" element={<RiskAssessment />} />
            <Route path="/services/advisory" element={<Advisory />} />
            <Route path="/services/business-auxiliary" element={<BusinessAuxiliary />} />

            {/* ✅ knowledge-bank sub-routes */}
            <Route path="/knowledge-bank/rules" element={<Rules />} />
            <Route path="/knowledge-bank/acts" element={<Acts />} />
            <Route path="/knowledge-bank/links" element={<Links />} />
            <Route path="/knowledge-bank/bulletins" element={<Bulletins />} />
            <Route path="/knowledge-bank/blogs" element={<Blogs />} />

            {/* ✅ Mega Menu Services Category Routes */}
            <Route path="/services/business-registration" element={<BusinessRegistrationIndex />} />
            <Route path="/services/tax-compliance" element={<TaxComplianceIndex />} />
            <Route path="/services/trademark-ip" element={<TrademarkIPIndex />} />
            <Route path="/services/lawyer-services" element={<LawyerServicesIndex />} />
            <Route path="/services/documentation" element={<DocumentationIndex />} />
            <Route path="/services/others" element={<OthersIndex />} />

            {/* ✅ Mega Menu Services Detail Routes */}
            <Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
            <Route path="/services/limited-liability-partnership" element={<LimitedLiabilityPartnership />} />
            <Route path="/services/gst-registration" element={<GSTRegistration />} />
            <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />
            <Route path="/services/corporate-lawyers" element={<CorporateLawyers />} />
            <Route path="/services/rental-agreement" element={<RentalAgreement />} />
            <Route path="/services/income-tax-calculator" element={<IncomeTaxCalc />} />

            {/* ✅ Other Pages */}
            <Route path="/Contact" element={<Contact />} />

            {/* ✅ Login Routes - Separate for Client and Admin */}
            <Route path="/login" element={<ClientLogin />} />
            <Route path="/login/client" element={<ClientLogin />} />
            <Route path="/login/admin" element={<AdminLogin />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* ✅ Optional: 404 fallback */}
            <Route path="*" element={<div className="p-10 text-center">Page Not Found</div>} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
