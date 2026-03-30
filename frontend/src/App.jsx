import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login";
import ClientPortal from "./pages/ClientPortal";

// ✅ Calculator Pages
import GSTCalculator from "./pages/calculators/GSTCalculator";
import EMICalculator from "./pages/calculators/EMICalculator";
import IncomeTaxCalculator from "./pages/calculators/IncomeTaxCalculator";
import SIPCalculator from "./pages/calculators/SIPCalculator";
import TDSCalculator from "./pages/calculators/TDSCalculator";
import HRACalculator from "./pages/calculators/HRACalculator";

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
import Utilities from "./pages/knowledgeBank/Utilities";
import Forms from "./pages/knowledgeBank/Forms";
import Bulletins from "./pages/knowledgeBank/Bulletins";
import Blogs from "./pages/knowledgeBank/Blogs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

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
            <Route path="/knowledge-bank/utilities" element={<Utilities />} />
            <Route path="/knowledge-bank/forms" element={<Forms />} />
            <Route path="/knowledge-bank/bulletins" element={<Bulletins />} />
            <Route path="/knowledge-bank/blogs" element={<Blogs />} />

            {/* ✅ Other Pages */}
            <Route path="/Contact" element={<Contact />} />

            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />

            <Route path="/client-portal" element={<ClientPortal />} />

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
