# Services Folder Structure

This document outlines the complete folder structure for all services.

## Folder Structure Created

```
pages/
  └── services/
      ├── business-registration/
      │   ├── index.jsx (Category index - lists all Business Registration services)
      │   ├── PrivateLimitedCompany.jsx
      │   ├── LimitedLiabilityPartnership.jsx
      │   ├── OnePersonCompany.jsx
      │   ├── SoleProprietorship.jsx
      │   ├── NidhiCompany.jsx
      │   ├── ProducerCompany.jsx
      │   ├── PartnershipFirm.jsx
      │   ├── StartupIndiaRegistration.jsx
      │   ├── USIncorporation.jsx
      │   ├── SingaporeIncorporation.jsx
      │   ├── UKIncorporation.jsx
      │   ├── NetherlandsIncorporation.jsx
      │   ├── HongKongIncorporation.jsx
      │   ├── DubaiIncorporation.jsx
      │   ├── InternationalTrademarkRegistration.jsx
      │   ├── CompanyNameSearch.jsx
      │   ├── ChangeCompanyName.jsx
      │   ├── BusinessNameGenerator.jsx
      │   ├── DigitalSignatureCertificate.jsx
      │   ├── UdyamRegistration.jsx
      │   └── [All other services...]
      │
      ├── tax-compliance/
      │   ├── index.jsx (Category index)
      │   ├── GSTRegistration.jsx ✓ (Created)
      │   ├── GSTFiling.jsx
      │   ├── HSNCodeFinder.jsx
      │   ├── AddDirector.jsx
      │   ├── RemoveDirector.jsx
      │   ├── IncreaseAuthorizedCapital.jsx
      │   ├── ClosePvtLtdCompany.jsx
      │   └── [All other tax services...]
      │
      ├── trademark-ip/
      │   ├── index.jsx (Category index)
      │   ├── TrademarkRegistration.jsx
      │   ├── TrademarkSearch.jsx
      │   ├── CopyrightRegistration.jsx
      │   ├── PatentSearch.jsx
      │   ├── LogoDesign.jsx
      │   └── [All other IP services...]
      │
      ├── lawyer-services/
      │   ├── index.jsx (Category index)
      │   ├── CorporateLawyers.jsx
      │   ├── LegalNoticeMoney.jsx
      │   ├── EmploymentDispute.jsx
      │   ├── PropertyLitigation.jsx
      │   └── [All other legal services...]
      │
      ├── documentation/
      │   ├── index.jsx (Category index)
      │   ├── RentalAgreement.jsx
      │   ├── EmploymentAgreement.jsx
      │   ├── NDA.jsx
      │   ├── PowerOfAttorney.jsx
      │   ├── SaleDeed.jsx
      │   └── [All other documents...]
      │
      └── others/
          ├── index.jsx (Category index)
          ├── IncomeTaxCalculator.jsx
          ├── GSTCalculator.jsx
          ├── EMICalculator.jsx
          ├── NGORegistration.jsx
          ├── NameChange.jsx
          └── [All other services...]
```

## Files Created So Far

✓ business-registration/index.jsx - Lists all business registration services
✓ business-registration/PrivateLimitedCompany.jsx - Service detail page
✓ business-registration/LimitedLiabilityPartnership.jsx - Service detail page
✓ tax-compliance/index.jsx - Lists all tax & compliance services
✓ tax-compliance/GSTRegistration.jsx - Service detail page
✓ trademark-ip/index.jsx - Lists all IP services
✓ lawyer-services/index.jsx - Lists all legal services
✓ documentation/index.jsx - Lists all documentation services
✓ others/index.jsx - Lists all miscellaneous services

## Template for Creating Individual Service Pages

Each service detail page follows this pattern:

```jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ServiceName = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/category-name" className="flex items-center text-blue-600 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Title</h1>
          <p className="text-lg text-slate-600 mb-8">Service description...</p>

          {/* Key Features Section */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <h3 className="font-bold text-slate-900 mb-3">Key Features</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Feature 1</li>
              <li>• Feature 2</li>
            </ul>
          </div>

          {/* Services Section */}
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((service, idx) => (
              <div key={idx} className="...">✓ {service}</div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
            <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-lg">
              Consult an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceName;
```

## Routing Configuration Needed

Add these routes to your App.jsx or routing file:

```jsx
// Business Registration Routes
<Route path="/services/business-registration" element={<BusinessRegistrationIndex />} />
<Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
<Route path="/services/limited-liability-partnership" element={<LimitedLiabilityPartnership />} />
// ... add all other business registration routes

// Tax & Compliance Routes
<Route path="/services/tax-compliance" element={<TaxComplianceIndex />} />
<Route path="/services/gst-registration" element={<GSTRegistration />} />
// ... add all other tax routes

// Trademark & IP Routes
<Route path="/services/trademark-ip" element={<TrademarkIPIndex />} />
// ... add all other IP routes

// Lawyer Services Routes
<Route path="/services/lawyer-services" element={<LawyerServicesIndex />} />
// ... add all other lawyer routes

// Documentation Routes
<Route path="/services/documentation" element={<DocumentationIndex />} />
// ... add all other documentation routes

// Others Routes
<Route path="/services/others" element={<OthersIndex />} />
// ... add all other service routes
```

## Next Steps

1. Create remaining service detail pages for each category
2. Configure all routes in your router
3. Each service page should follow the template structure
4. Test navigation between index and detail pages
5. Add dynamic content based on service requirements
