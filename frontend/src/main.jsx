import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Layout from './Layout.jsx'

// ============================================================
// CORE PAGES
// ============================================================
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Careers from './pages/Careers.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import Users from './pages/Users.jsx'
import NotFound from './pages/NotFound.jsx'

// ============================================================
// KNOWLEDGE BANK PAGES
// ============================================================
import Rules from './pages/knowledgeBank/Rules.jsx'
import Acts from './pages/knowledgeBank/Acts.jsx'
import Links from './pages/knowledgeBank/Links.jsx'
import Utilities from './pages/knowledgeBank/Utilities.jsx'
import Bulletins from './pages/knowledgeBank/Bulletins.jsx'
import Forms from './pages/knowledgeBank/Forms.jsx'
import Blogs from './pages/knowledgeBank/Blogs.jsx'

// ============================================================
// CALCULATOR PAGES
// ============================================================
import GSTCalculator from './pages/calculators/GSTCalculator.jsx'
import EMICalculator from './pages/calculators/EMICalculator.jsx'
import IncomeTaxCalculator from './pages/calculators/IncomeTaxCalculator.jsx'
import SIPCalculator from './pages/calculators/SIPCalculator.jsx'
import TDSCalculator from './pages/calculators/TDSCalculator.jsx'
import HRACalculator from './pages/calculators/HRACalculator.jsx'
import EPFCalculator from './pages/calculators/EPFCalculator.jsx'
import FDCalculator from './pages/calculators/FDCalculator.jsx'
import RDCalculator from './pages/calculators/RDCalculator.jsx'
import LumpsumCalculator from './pages/calculators/LumpsumCalculator.jsx'
import CompoundInterestCalculator from './pages/calculators/CompoundInterestCalculator.jsx'
import SimpleInterestCalculator from './pages/calculators/SimpleInterestCalculator.jsx'
import NPSCalculator from './pages/calculators/NPSCalculator.jsx'
import PPFCalculator from './pages/calculators/PPFCalculator.jsx'
import GratuityCalculator from './pages/calculators/GratuityCalculator.jsx'
import InterestCalculator from './pages/calculators/InterestCalculator.jsx'
import HomeLoanEMICalculator from './pages/calculators/HomeLoanEMICalculator.jsx'
import SalaryCalculator from './pages/calculators/SalaryCalculator.jsx'
import MutualFundCalculator from './pages/calculators/MutualFundCalculator.jsx'
import RetirementCalculator from './pages/calculators/RetirementCalculator.jsx'
import BusinessSetupCalculator from './pages/calculators/BusinessSetupCalculator.jsx'

// ============================================================
// MEGA MENU CATEGORY INDEX PAGES
// ============================================================
import BusinessRegistrationIndex from './pages/services/business-registration/index'
import TaxComplianceIndex from './pages/services/tax-compliance/index'
import TrademarkIPIndex from './pages/services/trademark-ip/index'
import LawyerServicesIndex from './pages/services/lawyer-services/index'
import DocumentationIndex from './pages/services/documentation/index'
import OthersIndex from './pages/services/others/index'

// ============================================================
// BUSINESS REGISTRATION SERVICES (37 pages)
// ============================================================
import PrivateLimitedCompany from './pages/services/business-registration/PrivateLimitedCompany'
import LimitedLiabilityPartnership from './pages/services/business-registration/LimitedLiabilityPartnership'
import OnePersonCompany from './pages/services/business-registration/OnePersonCompany'
import SoleProprietorship from './pages/services/business-registration/SoleProprietorship'
import NidhiCompany from './pages/services/business-registration/NidhiCompany'
import ProducerCompany from './pages/services/business-registration/ProducerCompany'
import PartnershipFirm from './pages/services/business-registration/PartnershipFirm'
import StartupIndiaRegistration from './pages/services/business-registration/StartupIndiaRegistration'
import USIncorporation from './pages/services/business-registration/USIncorporation'
import SingaporeIncorporation from './pages/services/business-registration/SingaporeIncorporation'
import UKIncorporation from './pages/services/business-registration/UKIncorporation'
import NetherlandsIncorporation from './pages/services/business-registration/NetherlandsIncorporation'
import HongKongIncorporation from './pages/services/business-registration/HongKongIncorporation'
import DubaiIncorporation from './pages/services/business-registration/DubaiIncorporation'
import InternationalTrademarkRegistration from './pages/services/business-registration/InternationalTrademarkRegistration'
import CompanyNameSearch from './pages/services/business-registration/CompanyNameSearch'
import ChangeCompanyName from './pages/services/business-registration/ChangeCompanyName'
import BusinessNameGenerator from './pages/services/business-registration/BusinessNameGenerator'
import DigitalSignatureCertificate from './pages/services/business-registration/DigitalSignatureCertificate'
import UdyamRegistration from './pages/services/business-registration/UdyamRegistration'
import MSMERegistration from './pages/services/business-registration/MSMERegistration'
import ISOCertification from './pages/services/business-registration/ISOCertification'
import FSSAIFoodLicense from './pages/services/business-registration/FSSAIFoodLicense'
import IECImportExportCode from './pages/services/business-registration/IECImportExportCode'
import ApadaRCMC from './pages/services/business-registration/ApadaRCMC'
import SpiceBoardRegistration from './pages/services/business-registration/SpiceBoardRegistration'
import FIEORegistration from './pages/services/business-registration/FIEORegistration'
import LegalMetrology from './pages/services/business-registration/LegalMetrology'
import HallmarkRegistration from './pages/services/business-registration/HallmarkRegistration'
import BISRegistration from './pages/services/business-registration/BISRegistration'
import LiquorLicense from './pages/services/business-registration/LiquorLicense'
import CLRARegistration from './pages/services/business-registration/CLRARegistration'
import ADCodeRegistration from './pages/services/business-registration/ADCodeRegistration'
import IRDAIRegistration from './pages/services/business-registration/IRDAIRegistration'
import DrugCosmeticLicense from './pages/services/business-registration/DrugCosmeticLicense'
import CustomsClearance from './pages/services/business-registration/CustomsClearance'
import WebEcommerceDevelopment from './pages/services/business-registration/WebEcommerceDevelopment'

// ============================================================
// TAX & COMPLIANCE SERVICES (40+ pages)
// ============================================================
import GSTRegistration from './pages/services/tax-compliance/GSTRegistration'
import GSTFiling from './pages/services/tax-compliance/GSTFiling'
import HSNCodeFinder from './pages/services/tax-compliance/HSNCodeFinder'
import GSTCancellationRevocation from './pages/services/tax-compliance/GSTCancellationRevocation'
import AddDirector from './pages/services/tax-compliance/AddDirector'
import RemoveDirector from './pages/services/tax-compliance/RemoveDirector'
import IncreaseAuthorizedCapital from './pages/services/tax-compliance/IncreaseAuthorizedCapital'
import ClosePvtLtdCompany from './pages/services/tax-compliance/ClosePvtLtdCompany'
import StrikeOffCompany from './pages/services/tax-compliance/StrikeOffCompany'
import ChangeObjectiveActivity from './pages/services/tax-compliance/ChangeObjectiveActivity'
import ChangeAddress from './pages/services/tax-compliance/ChangeAddress'
import AddDesignatedPartner from './pages/services/tax-compliance/AddDesignatedPartner'
import ChangesToLLPAgreement from './pages/services/tax-compliance/ChangesToLLPAgreement'
import CloseLLP from './pages/services/tax-compliance/CloseLLP'
import AnnualComplianceServices from './pages/services/tax-compliance/AnnualComplianceServices'
import LLPAnnualFilings from './pages/services/tax-compliance/LLPAnnualFilings'
import SecretarialAudit from './pages/services/tax-compliance/SecretarialAudit'
import ProvidentFundRegistration from './pages/services/tax-compliance/ProvidentFundRegistration'
import ESIRegistration from './pages/services/tax-compliance/ESIRegistration'
import ProfessionalTaxRegistration from './pages/services/tax-compliance/ProfessionalTaxRegistration'
import ShopsAndEstablishmentsLicense from './pages/services/tax-compliance/ShopsAndEstablishmentsLicense'
import EmployeeStockOptionPlan from './pages/services/tax-compliance/EmployeeStockOptionPlan'
import POSHCompliance from './pages/services/tax-compliance/POSHCompliance'
import LaborLawAdvisor from './pages/services/tax-compliance/LaborLawAdvisor'
import AccountingAndBookkeeping from './pages/services/tax-compliance/AccountingAndBookkeeping'
import TDSReturnFiling from './pages/services/tax-compliance/TDSReturnFiling'
import IndividualIncomeTaxFiling from './pages/services/tax-compliance/IndividualIncomeTaxFiling'
import ProprietorshipTaxReturnFiling from './pages/services/tax-compliance/ProprietorshipTaxReturnFiling'
import ITRForLLP from './pages/services/tax-compliance/ITRForLLP'
import CorporateTax from './pages/services/tax-compliance/CorporateTax'
import IncomeTaxAssessment from './pages/services/tax-compliance/IncomeTaxAssessment'
import IncomeTaxNotice from './pages/services/tax-compliance/IncomeTaxNotice'
import VirtualCFO from './pages/services/tax-compliance/VirtualCFO'
import ProprietorshipToPvtLtdCompany from './pages/services/tax-compliance/ProprietorshipToPvtLtdCompany'
import ComplianceCheckSecretarialAudit from './pages/services/tax-compliance/ComplianceCheckSecretarialAudit'
import DueDiligence from './pages/services/tax-compliance/DueDiligence'
import RBICompliance from './pages/services/tax-compliance/RBICompliance'
import ConvertPartnershipIntoLLPCompany from './pages/services/tax-compliance/ConvertPartnershipIntoLLPCompany'
import ConvertPrivateIntoPublicLimitedCompany from './pages/services/tax-compliance/ConvertPrivateIntoPublicLimitedCompany'
import ConvertPrivateIntoOPCCompany from './pages/services/tax-compliance/ConvertPrivateIntoOPCCompany'

// ============================================================
// TRADEMARK & IP SERVICES (20+ pages)
// ============================================================
import TrademarkRegistration from './pages/services/trademark-ip/TrademarkRegistration'
import TrademarkSearch from './pages/services/trademark-ip/TrademarkSearch'
import RespondToTMObjection from './pages/services/trademark-ip/RespondToTMObjection'
import WellKnownTrademark from './pages/services/trademark-ip/WellKnownTrademark'
import TrademarkWatch from './pages/services/trademark-ip/TrademarkWatch'
import TrademarkRenewal from './pages/services/trademark-ip/TrademarkRenewal'
import TrademarkAssignment from './pages/services/trademark-ip/TrademarkAssignment'
import USATrademark from './pages/services/trademark-ip/USATrademark'
import TrademarkClassFinder from './pages/services/trademark-ip/TrademarkClassFinder'
import CopyrightRegistration from './pages/services/trademark-ip/CopyrightRegistration'
import CopyrightAssignment from './pages/services/trademark-ip/CopyrightAssignment'
import LiteraryWorkRegistration from './pages/services/trademark-ip/LiteraryWorkRegistration'
import SoftwareRegistration from './pages/services/trademark-ip/SoftwareRegistration'
import IndianPatentSearch from './pages/services/trademark-ip/IndianPatentSearch'
import ProvisionalPatentApplication from './pages/services/trademark-ip/ProvisionalPatentApplication'
import PatentRegistration from './pages/services/trademark-ip/PatentRegistration'
import CopyrightInfringement from './pages/services/trademark-ip/CopyrightInfringement'
import PatentInfringement from './pages/services/trademark-ip/PatentInfringement'
import TrademarkInfringement from './pages/services/trademark-ip/TrademarkInfringement'
import LogoDesign from './pages/services/trademark-ip/LogoDesign'
import DesignRegistration from './pages/services/trademark-ip/DesignRegistration'

// ============================================================
// LAWYER SERVICES (40+ pages)
// ============================================================
import FinanceLawyers from './pages/services/lawyer-services/FinanceLawyers'
import ChequebounceLawyers from './pages/services/lawyer-services/ChequebounceLawyers'
import ChildCustodyLawyers from './pages/services/lawyer-services/ChildCustodyLawyers'
import CivilLawyers from './pages/services/lawyer-services/CivilLawyers'
import ConsumerProtectionLawyers from './pages/services/lawyer-services/ConsumerProtectionLawyers'
import ContractLawyers from './pages/services/lawyer-services/ContractLawyers'
import CorporateLawyers from './pages/services/lawyer-services/CorporateLawyers'
import CriminalLawyers from './pages/services/lawyer-services/CriminalLawyers'
import CyberCrimeLawyers from './pages/services/lawyer-services/CyberCrimeLawyers'
import PropertyLawyers from './pages/services/lawyer-services/PropertyLawyers'
import DivorceLawyers from './pages/services/lawyer-services/DivorceLawyers'
import FamilyLawyers from './pages/services/lawyer-services/FamilyLawyers'
import GSTLawyers from './pages/services/lawyer-services/GSTLawyers'
import IntellectualPropertyLawyers from './pages/services/lawyer-services/IntellectualPropertyLawyers'
import LaborLawyers from './pages/services/lawyer-services/LaborLawyers'
import MoneyRecoveryLawyers from './pages/services/lawyer-services/MoneyRecoveryLawyers'
import MotorAccidentLawyers from './pages/services/lawyer-services/MotorAccidentLawyers'
import MuslimLawLawyers from './pages/services/lawyer-services/MuslimLawLawyers'
import MoreLawyers from './pages/services/lawyer-services/MoreLawyers'
import ExpertServices from './pages/services/lawyer-services/ExpertServices'
import TMMTLawyers from './pages/services/lawyer-services/TMMTLawyers'
import RiskManagement from './pages/services/lawyer-services/RiskManagement'
import LegalNoticeMoneyRecovery from './pages/services/lawyer-services/LegalNoticeMoneyRecovery'
import LegalNoticeRecoveryOfDues from './pages/services/lawyer-services/LegalNoticeRecoveryOfDues'
import LegalNoticeConsumerProtection from './pages/services/lawyer-services/LegalNoticeConsumerProtection'
import ChequeBounceNotice from './pages/services/lawyer-services/ChequeBounceNotice'
import ReplyToITRNotice from './pages/services/lawyer-services/ReplyToITRNotice'
import CaveatPetition from './pages/services/lawyer-services/CaveatPetition'
import TenantRentalNotice from './pages/services/lawyer-services/TenantRentalNotice'
import DefamationComplaint from './pages/services/lawyer-services/DefamationComplaint'
import IPInfringementLitigation from './pages/services/lawyer-services/IPInfringementLitigation'
import EmploymentDisputeLitigation from './pages/services/lawyer-services/EmploymentDisputeLitigation'
import ContractDisputeLitigation from './pages/services/lawyer-services/ContractDisputeLitigation'
import ChequeBounceComplaint from './pages/services/lawyer-services/ChequeBounceComplaint'
import PropertyLitigation from './pages/services/lawyer-services/PropertyLitigation'
import CyberCrimeLitigation from './pages/services/lawyer-services/CyberCrimeLitigation'
import MutualDivorce from './pages/services/lawyer-services/MutualDivorce'
import ContestedDivorce from './pages/services/lawyer-services/ContestedDivorce'
import RestituationOfConjugalRights from './pages/services/lawyer-services/RestituationOfConjugalRights'
import RERAComplaint from './pages/services/lawyer-services/RERAComplaint'
import USLitigation from './pages/services/lawyer-services/USLitigation'
import ConsumerAutomobile from './pages/services/lawyer-services/ConsumerAutomobile'
import ConsumerBank from './pages/services/lawyer-services/ConsumerBank'
import ConsumerCourierLogistics from './pages/services/lawyer-services/ConsumerCourierLogistics'
import ConsumerEcommerce from './pages/services/lawyer-services/ConsumerEcommerce'
import ConsumerEducation from './pages/services/lawyer-services/ConsumerEducation'
import ConsumerGrievances from './pages/services/lawyer-services/ConsumerGrievances'
import ConsumerHomeAppliances from './pages/services/lawyer-services/ConsumerHomeAppliances'
import ConsumerHotels from './pages/services/lawyer-services/ConsumerHotels'
import ConsumerITCompanies from './pages/services/lawyer-services/ConsumerITCompanies'
import ConsumerInsurance from './pages/services/lawyer-services/ConsumerInsurance'
import ConsumerInvestments from './pages/services/lawyer-services/ConsumerInvestments'
import ConsumerMedical from './pages/services/lawyer-services/ConsumerMedical'
import ConsumerRealEstate from './pages/services/lawyer-services/ConsumerRealEstate'
import ConsumerRetail from './pages/services/lawyer-services/ConsumerRetail'
import ConsumerStreaming from './pages/services/lawyer-services/ConsumerStreaming'
import ConsumerTravel from './pages/services/lawyer-services/ConsumerTravel'
import PartnershipLawyers from './pages/services/lawyer-services/PartnershipLawyers'
import DataPrivacyLawyers from './pages/services/lawyer-services/DataPrivacyLawyers'
import EnvironmentalLawyers from './pages/services/lawyer-services/EnvironmentalLawyers'
import InvestmentLawyers from './pages/services/lawyer-services/InvestmentLawyers'

// ============================================================
// DOCUMENTATION SERVICES (35+ pages)
// ============================================================
import AllLegalDocuments from './pages/services/documentation/AllLegalDocuments'
import AffidavitDocument from './pages/services/documentation/AffidavitDocument'
import AppointmentLetter from './pages/services/documentation/AppointmentLetter'
import AuthorisedSignatoryGST from './pages/services/documentation/AuthorisedSignatoryGST'
import BonafideCertificate from './pages/services/documentation/BonafideCertificate'
import CommercialRentalAgreement from './pages/services/documentation/CommercialRentalAgreement'
import ConsentLetterGST from './pages/services/documentation/ConsentLetterGST'
import ConsultancyAgreement from './pages/services/documentation/ConsultancyAgreement'
import DeliveryChallan from './pages/services/documentation/DeliveryChallan'
import EmploymentAgreement from './pages/services/documentation/EmploymentAgreement'
import ESOP from './pages/services/documentation/ESOP'
import ExperienceLetter from './pages/services/documentation/ExperienceLetter'
import FinanceAgreement from './pages/services/documentation/FinanceAgreement'
import FoundersAgreement from './pages/services/documentation/FoundersAgreement'
import FranchiseAgreement from './pages/services/documentation/FranchiseAgreement'
import GDPR from './pages/services/documentation/GDPR'
import GiftDeed from './pages/services/documentation/GiftDeed'
import GSTInvoice from './pages/services/documentation/GSTInvoice'
import IncomeCertificate from './pages/services/documentation/IncomeCertificate'
import JointVentureAgreement from './pages/services/documentation/JointVentureAgreement'
import LegalHeirCertificate from './pages/services/documentation/LegalHeirCertificate'
import MasterServiceAgreement from './pages/services/documentation/MasterServiceAgreement'
import MemorandumOfUnderstanding from './pages/services/documentation/MemorandumOfUnderstanding'
import MortgageDeed from './pages/services/documentation/MortgageDeed'
import NDA from './pages/services/documentation/NDA'
import NOCDocument from './pages/services/documentation/NOCDocument'
import NoncompeteAgreement from './pages/services/documentation/NoncompeteAgreement'
import OfferLetter from './pages/services/documentation/OfferLetter'
import PartnershipDeed from './pages/services/documentation/PartnershipDeed'
import PayrollManagement from './pages/services/documentation/PayrollManagement'
import PowerOfAttorney from './pages/services/documentation/PowerOfAttorney'
import PowerOfAttorneyDeed from './pages/services/documentation/PowerOfAttorneyDeed'
import ProbateOfWill from './pages/services/documentation/ProbateOfWill'
import ReceivedDeed from './pages/services/documentation/ReceivedDeed'
import RelievingLetter from './pages/services/documentation/RelievingLetter'
import RelinquishmentDeed from './pages/services/documentation/RelinquishmentDeed'
import RentalAgreement from './pages/services/documentation/RentalAgreement'
import RentalTenantNotice from './pages/services/documentation/RentalTenantNotice'
import RentReceipt from './pages/services/documentation/RentReceipt'
import ResignationLetter from './pages/services/documentation/ResignationLetter'
import SalarySlip from './pages/services/documentation/SalarySlip'
import SaleDeed from './pages/services/documentation/SaleDeed'
import ScopeOfWorkAgreement from './pages/services/documentation/ScopeOfWorkAgreement'
import ServiceLevelAgreement from './pages/services/documentation/ServiceLevelAgreement'
import ShareholdersAgreement from './pages/services/documentation/ShareholdersAgreement'
import SuccessionCertificate from './pages/services/documentation/SuccessionCertificate'
import TradeAgreement from './pages/services/documentation/TradeAgreement'
import VendorAgreement from './pages/services/documentation/VendorAgreement'
import WillDocument from './pages/services/documentation/WillDocument'

// ============================================================
// OTHERS SERVICES (30+ pages including calculators, NGO, property, personal)
// ============================================================
import GSTPracticeConsulting from './pages/services/others/GSTPracticeConsulting'
import Fundraising from './pages/services/others/Fundraising'
import PitchDeck from './pages/services/others/PitchDeck'
import BusinessLoan from './pages/services/others/BusinessLoan'
import DPRService from './pages/services/others/DPRService'
import NGO from './pages/services/others/NGO'
import Section8Company from './pages/services/others/Section8Company'
import TrustRegistration from './pages/services/others/TrustRegistration'
import SocietyRegistration from './pages/services/others/SocietyRegistration'
import NGOCompliance from './pages/services/others/NGOCompliance'
import Section8Compliance from './pages/services/others/Section8Compliance'
import CSRFiling from './pages/services/others/CSRFiling'
import Sec80GComplianceSection12A from './pages/services/others/Sec80GComplianceSection12A'
import DarpanRegistration from './pages/services/others/DarpanRegistration'
import FCRARegistration from './pages/services/others/FCRARegistration'
import PropertyTitleVerification from './pages/services/others/PropertyTitleVerification'
import PropertyRegistration from './pages/services/others/PropertyRegistration'
import PropertyServices from './pages/services/others/PropertyServices'
import LicensesRegistrations from './pages/services/others/LicensesRegistrations'
import GunLicense from './pages/services/others/GunLicense'
import NameChange from './pages/services/others/NameChange'
import ReligionChange from './pages/services/others/ReligionChange'
import GenderChange from './pages/services/others/GenderChange'
import MarriageServices from './pages/services/others/MarriageServices'
import MarriageRegistration from './pages/services/others/MarriageRegistration'
import CourtMarriage from './pages/services/others/CourtMarriage'
import DivorceAlimony from './pages/services/others/DivorceAlimony'
import RestituationOfConjugalRightsOthers from './pages/services/others/ConsumerComplaint'
import Immigration from './pages/services/others/Immigration'
import CorporateImmigration from './pages/services/others/CorporateImmigration'
import FamilyImmigration from './pages/services/others/FamilyImmigration'
import CollegeImmigration from './pages/services/others/CollegeImmigration'
import ImmigrationServices from './pages/services/others/ImmigrationServices'
import FileConsumerComplaint from './pages/services/others/FileConsumerComplaint'
import OnlineConsumerComplaint from './pages/services/others/OnlineConsumerComplaint'
import ConsumerComplaint from './pages/services/others/ConsumerComplaint'
import AuditCompliance from './pages/services/others/AuditCompliance'
import FinanceCompliance from './pages/services/others/FinanceCompliance'
import NOCCompliance from './pages/services/others/NOCCompliance'
import DisputeResolution from './pages/services/others/DisputeResolution'
import TrademarkPractice from './pages/services/others/TrademarkPractice'
import StartupFunding from './pages/services/others/StartupFunding'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      
      {/* ============================================================ */}
      {/* CORE ROUTES */}
      {/* ============================================================ */}
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='careers' element={<Careers/>}/>
      <Route path='signin' element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='users' element={<Users/>}/>

      {/* ============================================================ */}
      {/* KNOWLEDGE BANK ROUTES */}
      {/* ============================================================ */}
      <Route path='knowledge-bank/forms' element={<Forms/>}/>
      <Route path='knowledge-bank/rules' element={<Rules/>}/>
      <Route path='knowledge-bank/acts' element={<Acts/>}/>
      <Route path='knowledge-bank/links' element={<Links/>}/>
      <Route path='knowledge-bank/utilities' element={<Utilities/>}/>
      <Route path='knowledge-bank/bulletins' element={<Bulletins/>}/>
      <Route path='knowledge-bank/blogs' element={<Blogs/>}/>

      {/* ============================================================ */}
      {/* CALCULATOR ROUTES */}
      {/* ============================================================ */}
      <Route path='calculators/gst' element={<GSTCalculator/>}/>
      <Route path='calculators/emi' element={<EMICalculator/>}/>
      <Route path='calculators/income-tax' element={<IncomeTaxCalculator/>}/>
      <Route path='calculators/sip' element={<SIPCalculator/>}/>
      <Route path='calculators/tds' element={<TDSCalculator/>}/>
      <Route path='calculators/hra' element={<HRACalculator/>}/>
      <Route path='calculators/epf' element={<EPFCalculator/>}/>
      <Route path='calculators/fd' element={<FDCalculator/>}/>
      <Route path='calculators/rd' element={<RDCalculator/>}/>
      <Route path='calculators/lumpsum' element={<LumpsumCalculator/>}/>
      <Route path='calculators/compound-interest' element={<CompoundInterestCalculator/>}/>
      <Route path='calculators/simple-interest' element={<SimpleInterestCalculator/>}/>
      <Route path='calculators/nps' element={<NPSCalculator/>}/>
      <Route path='calculators/ppf' element={<PPFCalculator/>}/>
      <Route path='calculators/gratuity' element={<GratuityCalculator/>}/>
      <Route path='calculators/interest' element={<InterestCalculator/>}/>
      <Route path='calculators/home-loan-emi' element={<HomeLoanEMICalculator/>}/>
      <Route path='calculators/salary' element={<SalaryCalculator/>}/>
      <Route path='calculators/mutual-fund' element={<MutualFundCalculator/>}/>
      <Route path='calculators/retirement' element={<RetirementCalculator/>}/>
      <Route path='calculators/business-setup' element={<BusinessSetupCalculator/>}/>

      {/* ============================================================ */}
      {/* MEGA MENU CATEGORY INDEX ROUTES */}
      {/* ============================================================ */}
      <Route path='services/business-registration' element={<BusinessRegistrationIndex/>}/>
      <Route path='services/tax-compliance' element={<TaxComplianceIndex/>}/>
      <Route path='services/trademark-ip' element={<TrademarkIPIndex/>}/>
      <Route path='services/lawyer-services' element={<LawyerServicesIndex/>}/>
      <Route path='services/documentation' element={<DocumentationIndex/>}/>
      <Route path='services/others' element={<OthersIndex/>}/>

      {/* ============================================================ */}
      {/* BUSINESS REGISTRATION SERVICE ROUTES (37 routes) */}
      {/* ============================================================ */}
      <Route path='services/private-limited-company' element={<PrivateLimitedCompany/>}/>
      <Route path='services/limited-liability-partnership' element={<LimitedLiabilityPartnership/>}/>
      <Route path='services/one-person-company' element={<OnePersonCompany/>}/>
      <Route path='services/sole-proprietorship' element={<SoleProprietorship/>}/>
      <Route path='services/nidhi-company' element={<NidhiCompany/>}/>
      <Route path='services/producer-company' element={<ProducerCompany/>}/>
      <Route path='services/partnership-firm' element={<PartnershipFirm/>}/>
      <Route path='services/startup-india-registration' element={<StartupIndiaRegistration/>}/>
      <Route path='services/us-incorporation' element={<USIncorporation/>}/>
      <Route path='services/singapore-incorporation' element={<SingaporeIncorporation/>}/>
      <Route path='services/uk-incorporation' element={<UKIncorporation/>}/>
      <Route path='services/netherlands-incorporation' element={<NetherlandsIncorporation/>}/>
      <Route path='services/hong-kong-incorporation' element={<HongKongIncorporation/>}/>
      <Route path='services/dubai-incorporation' element={<DubaiIncorporation/>}/>
      <Route path='services/international-trademark-registration' element={<InternationalTrademarkRegistration/>}/>
      <Route path='services/company-name-search' element={<CompanyNameSearch/>}/>
      <Route path='services/change-company-name' element={<ChangeCompanyName/>}/>
      <Route path='services/business-name-generator' element={<BusinessNameGenerator/>}/>
      <Route path='services/digital-signature-certificate' element={<DigitalSignatureCertificate/>}/>
      <Route path='services/udyam-registration' element={<UdyamRegistration/>}/>
      <Route path='services/msme-registration' element={<MSMERegistration/>}/>
      <Route path='services/iso-certification' element={<ISOCertification/>}/>
      <Route path='services/fssai-food-license' element={<FSSAIFoodLicense/>}/>
      <Route path='services/iec-import-export-code' element={<IECImportExportCode/>}/>
      <Route path='services/apeda-rcmc' element={<ApadaRCMC/>}/>
      <Route path='services/spice-board-registration' element={<SpiceBoardRegistration/>}/>
      <Route path='services/fieo-registration' element={<FIEORegistration/>}/>
      <Route path='services/legal-metrology' element={<LegalMetrology/>}/>
      <Route path='services/hallmark-registration' element={<HallmarkRegistration/>}/>
      <Route path='services/bis-registration' element={<BISRegistration/>}/>
      <Route path='services/liquor-license' element={<LiquorLicense/>}/>
      <Route path='services/clra-registration' element={<CLRARegistration/>}/>
      <Route path='services/ad-code-registration' element={<ADCodeRegistration/>}/>
      <Route path='services/irdai-registration' element={<IRDAIRegistration/>}/>
      <Route path='services/drug-cosmetic-license' element={<DrugCosmeticLicense/>}/>
      <Route path='services/customs-clearance' element={<CustomsClearance/>}/>
      <Route path='services/web-ecommerce-development' element={<WebEcommerceDevelopment/>}/>

      {/* ============================================================ */}
      {/* TAX & COMPLIANCE SERVICE ROUTES (40+ routes) */}
      {/* ============================================================ */}
      <Route path='services/gst-registration' element={<GSTRegistration/>}/>
      <Route path='services/gst-filing' element={<GSTFiling/>}/>
      <Route path='services/hsn-code-finder' element={<HSNCodeFinder/>}/>
      <Route path='services/gst-cancellation-revocation' element={<GSTCancellationRevocation/>}/>
      <Route path='services/add-director' element={<AddDirector/>}/>
      <Route path='services/remove-director' element={<RemoveDirector/>}/>
      <Route path='services/increase-authorized-capital' element={<IncreaseAuthorizedCapital/>}/>
      <Route path='services/close-pvt-ltd-company' element={<ClosePvtLtdCompany/>}/>
      <Route path='services/strike-off-company' element={<StrikeOffCompany/>}/>
      <Route path='services/change-objective-activity' element={<ChangeObjectiveActivity/>}/>
      <Route path='services/change-address' element={<ChangeAddress/>}/>
      <Route path='services/add-designated-partner' element={<AddDesignatedPartner/>}/>
      <Route path='services/changes-llp-agreement' element={<ChangesToLLPAgreement/>}/>
      <Route path='services/close-llp' element={<CloseLLP/>}/>
      <Route path='services/annual-compliance-services' element={<AnnualComplianceServices/>}/>
      <Route path='services/llp-annual-filings' element={<LLPAnnualFilings/>}/>
      <Route path='services/secretarial-audit' element={<SecretarialAudit/>}/>
      <Route path='services/pf-registration' element={<ProvidentFundRegistration/>}/>
      <Route path='services/esi-registration' element={<ESIRegistration/>}/>
      <Route path='services/professional-tax-registration' element={<ProfessionalTaxRegistration/>}/>
      <Route path='services/shops-establishments-license' element={<ShopsAndEstablishmentsLicense/>}/>
      <Route path='services/esop' element={<EmployeeStockOptionPlan/>}/>
      <Route path='services/posh-compliance' element={<POSHCompliance/>}/>
      <Route path='services/labor-law-advisor' element={<LaborLawAdvisor/>}/>
      <Route path='services/accounting-bookkeeping' element={<AccountingAndBookkeeping/>}/>
      <Route path='services/tds-return-filing' element={<TDSReturnFiling/>}/>
      <Route path='services/individual-income-tax-filing' element={<IndividualIncomeTaxFiling/>}/>
      <Route path='services/proprietorship-tax-return-filing' element={<ProprietorshipTaxReturnFiling/>}/>
      <Route path='services/itr-llp' element={<ITRForLLP/>}/>
      <Route path='services/corporate-tax' element={<CorporateTax/>}/>
      <Route path='services/income-tax-assessment' element={<IncomeTaxAssessment/>}/>
      <Route path='services/income-tax-notice' element={<IncomeTaxNotice/>}/>
      <Route path='services/virtual-cfo' element={<VirtualCFO/>}/>
      <Route path='services/proprietorship-to-pvt-ltd' element={<ProprietorshipToPvtLtdCompany/>}/>
      <Route path='services/compliance-check-secretarial-audit' element={<ComplianceCheckSecretarialAudit/>}/>
      <Route path='services/due-diligence' element={<DueDiligence/>}/>
      <Route path='services/rbi-compliance' element={<RBICompliance/>}/>
      <Route path='services/convert-partnership-to-llp' element={<ConvertPartnershipIntoLLPCompany/>}/>
      <Route path='services/convert-private-to-public' element={<ConvertPrivateIntoPublicLimitedCompany/>}/>
      <Route path='services/convert-private-to-opc' element={<ConvertPrivateIntoOPCCompany/>}/>

      {/* ============================================================ */}
      {/* TRADEMARK & IP SERVICE ROUTES (20+ routes) */}
      {/* ============================================================ */}
      <Route path='services/trademark-registration' element={<TrademarkRegistration/>}/>
      <Route path='services/trademark-search' element={<TrademarkSearch/>}/>
      <Route path='services/respond-tm-objection' element={<RespondToTMObjection/>}/>
      <Route path='services/well-known-trademark' element={<WellKnownTrademark/>}/>
      <Route path='services/trademark-watch' element={<TrademarkWatch/>}/>
      <Route path='services/trademark-renewal' element={<TrademarkRenewal/>}/>
      <Route path='services/trademark-assignment' element={<TrademarkAssignment/>}/>
      <Route path='services/usa-trademark' element={<USATrademark/>}/>
      <Route path='services/trademark-class-finder' element={<TrademarkClassFinder/>}/>
      <Route path='services/copyright-registration' element={<CopyrightRegistration/>}/>
      <Route path='services/copyright-assignment' element={<CopyrightAssignment/>}/>
      <Route path='services/literary-work-registration' element={<LiteraryWorkRegistration/>}/>
      <Route path='services/software-registration' element={<SoftwareRegistration/>}/>
      <Route path='services/indian-patent-search' element={<IndianPatentSearch/>}/>
      <Route path='services/provisional-patent-application' element={<ProvisionalPatentApplication/>}/>
      <Route path='services/patent-registration' element={<PatentRegistration/>}/>
      <Route path='services/copyright-infringement' element={<CopyrightInfringement/>}/>
      <Route path='services/patent-infringement' element={<PatentInfringement/>}/>
      <Route path='services/trademark-infringement' element={<TrademarkInfringement/>}/>
      <Route path='services/logo-design' element={<LogoDesign/>}/>
      <Route path='services/design-registration' element={<DesignRegistration/>}/>

      {/* ============================================================ */}
      {/* LAWYER SERVICES ROUTES (40+ routes) */}
      {/* ============================================================ */}
      <Route path='services/finance-lawyers' element={<FinanceLawyers/>}/>
      <Route path='services/cheque-bounce-lawyers' element={<ChequebounceLawyers/>}/>
      <Route path='services/child-custody-lawyers' element={<ChildCustodyLawyers/>}/>
      <Route path='services/civil-lawyers' element={<CivilLawyers/>}/>
      <Route path='services/consumer-protection-lawyers' element={<ConsumerProtectionLawyers/>}/>
      <Route path='services/contract-lawyers' element={<ContractLawyers/>}/>
      <Route path='services/corporate-lawyers' element={<CorporateLawyers/>}/>
      <Route path='services/criminal-lawyers' element={<CriminalLawyers/>}/>
      <Route path='services/cyber-crime-lawyers' element={<CyberCrimeLawyers/>}/>
      <Route path='services/property-lawyers' element={<PropertyLawyers/>}/>
      <Route path='services/divorce-lawyers' element={<DivorceLawyers/>}/>
      <Route path='services/family-lawyers' element={<FamilyLawyers/>}/>
      <Route path='services/gst-lawyers' element={<GSTLawyers/>}/>
      <Route path='services/ip-lawyers' element={<IntellectualPropertyLawyers/>}/>
      <Route path='services/labour-lawyers' element={<LaborLawyers/>}/>
      <Route path='services/money-recovery-lawyers' element={<MoneyRecoveryLawyers/>}/>
      <Route path='services/motor-accident-lawyers' element={<MotorAccidentLawyers/>}/>
      <Route path='services/muslim-law-lawyers' element={<MuslimLawLawyers/>}/>
      <Route path='services/more-lawyers' element={<MoreLawyers/>}/>
      <Route path='services/expert-services' element={<ExpertServices/>}/>
      <Route path='services/tmt' element={<TMMTLawyers/>}/>
      <Route path='services/risk-management' element={<RiskManagement/>}/>
      <Route path='services/legal-notice-money-recovery' element={<LegalNoticeMoneyRecovery/>}/>
      <Route path='services/legal-notice-recovery-dues' element={<LegalNoticeRecoveryOfDues/>}/>
      <Route path='services/legal-notice-consumer-protection' element={<LegalNoticeConsumerProtection/>}/>
      <Route path='services/cheque-bounce-notice' element={<ChequeBounceNotice/>}/>
      <Route path='services/reply-itr-notice' element={<ReplyToITRNotice/>}/>
      <Route path='services/caveat-petition' element={<CaveatPetition/>}/>
      <Route path='services/tenant-rental-notice' element={<TenantRentalNotice/>}/>
      <Route path='services/defamation-complaint' element={<DefamationComplaint/>}/>
      <Route path='services/ip-infringement' element={<IPInfringementLitigation/>}/>
      <Route path='services/employment-dispute' element={<EmploymentDisputeLitigation/>}/>
      <Route path='services/contract-dispute' element={<ContractDisputeLitigation/>}/>
      <Route path='services/cheque-bounce-complaint' element={<ChequeBounceComplaint/>}/>
      <Route path='services/property-litigation' element={<PropertyLitigation/>}/>
      <Route path='services/cyber-crime-litigation' element={<CyberCrimeLitigation/>}/>
      <Route path='services/mutual-divorce' element={<MutualDivorce/>}/>
      <Route path='services/contested-divorce' element={<ContestedDivorce/>}/>
      <Route path='services/restitution-conjugal-rights' element={<RestituationOfConjugalRights/>}/>
      <Route path='services/rera-complaint' element={<RERAComplaint/>}/>
      <Route path='services/us-litigation' element={<USLitigation/>}/>
      <Route path='services/consumer-automobile' element={<ConsumerAutomobile/>}/>
      <Route path='services/consumer-bank' element={<ConsumerBank/>}/>
      <Route path='services/consumer-courier-logistics' element={<ConsumerCourierLogistics/>}/>
      <Route path='services/consumer-ecommerce' element={<ConsumerEcommerce/>}/>
      <Route path='services/consumer-education' element={<ConsumerEducation/>}/>
      <Route path='services/consumer-grievances' element={<ConsumerGrievances/>}/>
      <Route path='services/consumer-home-appliances' element={<ConsumerHomeAppliances/>}/>
      <Route path='services/consumer-hotels' element={<ConsumerHotels/>}/>
      <Route path='services/consumer-it-companies' element={<ConsumerITCompanies/>}/>
      <Route path='services/consumer-insurance' element={<ConsumerInsurance/>}/>
      <Route path='services/consumer-investments' element={<ConsumerInvestments/>}/>
      <Route path='services/consumer-medical' element={<ConsumerMedical/>}/>
      <Route path='services/consumer-real-estate' element={<ConsumerRealEstate/>}/>
      <Route path='services/consumer-retail' element={<ConsumerRetail/>}/>
      <Route path='services/consumer-streaming' element={<ConsumerStreaming/>}/>
      <Route path='services/consumer-travel' element={<ConsumerTravel/>}/>
      <Route path='services/partnership-law-lawyers' element={<PartnershipLawyers/>}/>
      <Route path='services/data-privacy-lawyers' element={<DataPrivacyLawyers/>}/>
      <Route path='services/environmental-lawyers' element={<EnvironmentalLawyers/>}/>
      <Route path='services/investment-lawyers' element={<InvestmentLawyers/>}/>

      {/* ============================================================ */}
      {/* DOCUMENTATION SERVICE ROUTES (35+ routes) */}
      {/* ============================================================ */}
      <Route path='services/all-legal-documents' element={<AllLegalDocuments/>}/>
      <Route path='services/affidavit-format' element={<AffidavitDocument/>}/>
      <Route path='services/appointment-letter' element={<AppointmentLetter/>}/>
      <Route path='services/authorised-signatory-gst' element={<AuthorisedSignatoryGST/>}/>
      <Route path='services/bonafide-certificate' element={<BonafideCertificate/>}/>
      <Route path='services/commercial-rental-agreement' element={<CommercialRentalAgreement/>}/>
      <Route path='services/consent-letter-gst' element={<ConsentLetterGST/>}/>
      <Route path='services/consultancy-agreement' element={<ConsultancyAgreement/>}/>
      <Route path='services/delivery-challan' element={<DeliveryChallan/>}/>
      <Route path='services/employment-agreement' element={<EmploymentAgreement/>}/>
      <Route path='services/esop-2' element={<ESOP/>}/>
      <Route path='services/experience-letter' element={<ExperienceLetter/>}/>
      <Route path='services/finance-agreement' element={<FinanceAgreement/>}/>
      <Route path='services/founders-agreement' element={<FoundersAgreement/>}/>
      <Route path='services/franchise-agreement' element={<FranchiseAgreement/>}/>
      <Route path='services/gdpr' element={<GDPR/>}/>
      <Route path='services/gift-deed' element={<GiftDeed/>}/>
      <Route path='services/gst-invoice' element={<GSTInvoice/>}/>
      <Route path='services/income-certificate' element={<IncomeCertificate/>}/>
      <Route path='services/joint-venture-agreement' element={<JointVentureAgreement/>}/>
      <Route path='services/legal-heir-certificate' element={<LegalHeirCertificate/>}/>
      <Route path='services/master-service-agreement' element={<MasterServiceAgreement/>}/>
      <Route path='services/memorandum-understanding' element={<MemorandumOfUnderstanding/>}/>
      <Route path='services/mortgage-deed' element={<MortgageDeed/>}/>
      <Route path='services/nda' element={<NDA/>}/>
      <Route path='services/no-objection-certificate' element={<NOCDocument/>}/>
      <Route path='services/noncompete-agreement' element={<NoncompeteAgreement/>}/>
      <Route path='services/offer-letter' element={<OfferLetter/>}/>
      <Route path='services/partnership-deed' element={<PartnershipDeed/>}/>
      <Route path='services/payroll-maintenance' element={<PayrollManagement/>}/>
      <Route path='services/power-of-attorney' element={<PowerOfAttorney/>}/>
      <Route path='services/poa' element={<PowerOfAttorneyDeed/>}/>
      <Route path='services/probate-of-will' element={<ProbateOfWill/>}/>
      <Route path='services/marriage-certificate' element={<ReceivedDeed/>}/>
      <Route path='services/relieving-letter' element={<RelievingLetter/>}/>
      <Route path='services/relinquishment-deed' element={<RelinquishmentDeed/>}/>
      <Route path='services/rental-agreement' element={<RentalAgreement/>}/>
      <Route path='services/rental-tenant-notice' element={<RentalTenantNotice/>}/>
      <Route path='services/rent-receipt' element={<RentReceipt/>}/>
      <Route path='services/resignation-letter' element={<ResignationLetter/>}/>
      <Route path='services/salary-slip' element={<SalarySlip/>}/>
      <Route path='services/sale-deed' element={<SaleDeed/>}/>
      <Route path='services/scope-of-work' element={<ScopeOfWorkAgreement/>}/>
      <Route path='services/sla' element={<ServiceLevelAgreement/>}/>
      <Route path='services/shareholders-agreement' element={<ShareholdersAgreement/>}/>
      <Route path='services/succession-certificate' element={<SuccessionCertificate/>}/>
      <Route path='services/trade-license' element={<TradeAgreement/>}/>
      <Route path='services/vendor-agreement' element={<VendorAgreement/>}/>
      <Route path='services/will-registration' element={<WillDocument/>}/>

      {/* ============================================================ */}
      {/* OTHERS SERVICES ROUTES (30+ routes) */}
      {/* ============================================================ */}
      <Route path='services/all-calculators' element={<GSTCalculator/>}/>
      <Route path='services/income-tax-calculator' element={<IncomeTaxCalculator/>}/>
      <Route path='services/hra-calculator' element={<HRACalculator/>}/>
      <Route path='services/gst-calculator' element={<GSTCalculator/>}/>
      <Route path='services/emi-calculator' element={<EMICalculator/>}/>
      <Route path='services/home-loan-emi-calculator' element={<HomeLoanEMICalculator/>}/>
      <Route path='services/salary-calculator' element={<SalaryCalculator/>}/>
      <Route path='services/mutual-fund-calculator' element={<MutualFundCalculator/>}/>
      <Route path='services/retirement-calculator' element={<RetirementCalculator/>}/>
      <Route path='services/epf-calculator' element={<EPFCalculator/>}/>
      <Route path='services/ppf-calculator' element={<PPFCalculator/>}/>
      <Route path='services/nps-calculator' element={<NPSCalculator/>}/>
      <Route path='services/gratuity-calculator' element={<GratuityCalculator/>}/>
      <Route path='services/interest-calculator' element={<InterestCalculator/>}/>
      <Route path='services/fd-calculator' element={<FDCalculator/>}/>
      <Route path='services/lumpsum-calculator' element={<LumpsumCalculator/>}/>
      <Route path='services/tds-calculator' element={<TDSCalculator/>}/>
      <Route path='services/rd-calculator' element={<RDCalculator/>}/>
      <Route path='services/sip-calculator' element={<SIPCalculator/>}/>
      <Route path='services/business-setup-calculator' element={<BusinessSetupCalculator/>}/>
      <Route path='services/fundraising' element={<Fundraising/>}/>
      <Route path='services/pitch-deck' element={<PitchDeck/>}/>
      <Route path='services/business-loan' element={<BusinessLoan/>}/>
      <Route path='services/dpr-service' element={<DPRService/>}/>
      <Route path='services/ngo' element={<NGO/>}/>
      <Route path='services/section-8-company' element={<Section8Company/>}/>
      <Route path='services/trust-registration' element={<TrustRegistration/>}/>
      <Route path='services/society-registration' element={<SocietyRegistration/>}/>
      <Route path='services/ngo-compliance' element={<NGOCompliance/>}/>
      <Route path='services/section-8-compliance' element={<Section8Compliance/>}/>
      <Route path='services/csr-1-filing' element={<CSRFiling/>}/>
      <Route path='services/section-80g-12a' element={<Sec80GComplianceSection12A/>}/>
      <Route path='services/darpan-registration' element={<DarpanRegistration/>}/>
      <Route path='services/fcra-registration' element={<FCRARegistration/>}/>
      <Route path='services/property-title-verification' element={<PropertyTitleVerification/>}/>
      <Route path='services/property-registration' element={<PropertyRegistration/>}/>
      <Route path='services/rera-complaint-2' element={<PropertyServices/>}/>
      <Route path='services/licenses-registrations' element={<LicensesRegistrations/>}/>
      <Route path='services/gun-license' element={<GunLicense/>}/>
      <Route path='services/name-change' element={<NameChange/>}/>
      <Route path='services/name-change-2' element={<NameChange/>}/>
      <Route path='services/religion-change' element={<ReligionChange/>}/>
      <Route path='services/gender-change' element={<GenderChange/>}/>
      <Route path='services/marriage' element={<MarriageServices/>}/>
      <Route path='services/marriage-registration' element={<MarriageRegistration/>}/>
      <Route path='services/court-marriage' element={<CourtMarriage/>}/>
      <Route path='services/mutual-divorce-2' element={<DivorceAlimony/>}/>
      <Route path='services/divorce-alimony' element={<DivorceAlimony/>}/>
      <Route path='services/restitution-conjugal-2' element={<RestituationOfConjugalRightsOthers/>}/>
      <Route path='services/immigration' element={<Immigration/>}/>
      <Route path='services/corporate-immigration' element={<CorporateImmigration/>}/>
      <Route path='services/family-immigration' element={<FamilyImmigration/>}/>
      <Route path='services/college-immigration' element={<CollegeImmigration/>}/>
      <Route path='services/immigration-services' element={<ImmigrationServices/>}/>
      <Route path='services/file-consumer-complaint' element={<FileConsumerComplaint/>}/>
      <Route path='services/online-consumer-complaint' element={<OnlineConsumerComplaint/>}/>
      <Route path='services/consumer-complaint' element={<ConsumerComplaint/>}/>
      <Route path='services/audit-compliance' element={<AuditCompliance/>}/>
      <Route path='services/finance-compliance' element={<FinanceCompliance/>}/>
      <Route path='services/noc-compliance' element={<NOCCompliance/>}/>
      <Route path='services/dispute-resolution' element={<DisputeResolution/>}/>
      <Route path='services/trademark-practice' element={<TrademarkPractice/>}/>
      <Route path='services/simple-interest-calculator' element={<SimpleInterestCalculator/>}/>
      <Route path='services/startup-funding' element={<StartupFunding/>}/>

      {/* ============================================================ */}
      {/* 404 CATCH-ALL ROUTE (must be last) */}
      {/* ============================================================ */}
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
