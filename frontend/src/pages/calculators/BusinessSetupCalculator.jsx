import { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessSetupCalculator = () => {
  const [businessType, setBusinessType] = useState('private-limited');
  const [companyName, setCompanyName] = useState('');
  const [authorizedCapital, setAuthorizedCapital] = useState('100000');
  const [paidUpCapital, setPaidUpCapital] = useState('100000');
  const [location, setLocation] = useState('delhi');
  const [includeProfessionalFees, setIncludeProfessionalFees] = useState(true);
  const [includeOfficeSetup, setIncludeOfficeSetup] = useState(false);
  const [includeInitialWorkingCapital, setIncludeInitialWorkingCapital] = useState(false);
  const [workingCapitalAmount, setWorkingCapitalAmount] = useState('500000');

  const businessTypes = {
    'private-limited': {
      name: 'Private Limited Company',
      baseRegistrationFee: 25000,
      governmentFees: 2000,
      stampDuty: 500,
      professionalFees: 15000
    },
    'llp': {
      name: 'Limited Liability Partnership',
      baseRegistrationFee: 15000,
      governmentFees: 1500,
      stampDuty: 300,
      professionalFees: 12000
    },
    'opc': {
      name: 'One Person Company',
      baseRegistrationFee: 20000,
      governmentFees: 1500,
      stampDuty: 400,
      professionalFees: 13000
    },
    'sole-proprietorship': {
      name: 'Sole Proprietorship',
      baseRegistrationFee: 5000,
      governmentFees: 500,
      stampDuty: 100,
      professionalFees: 8000
    },
    'partnership': {
      name: 'Partnership Firm',
      baseRegistrationFee: 8000,
      governmentFees: 800,
      stampDuty: 200,
      professionalFees: 10000
    }
  };

  const locationMultipliers = {
    'delhi': 1.0,
    'mumbai': 1.1,
    'bangalore': 1.05,
    'chennai': 0.95,
    'pune': 0.9,
    'hyderabad': 0.85,
    'kolkata': 0.8,
    'other': 1.0
  };

  const calculateBusinessSetup = () => {
    const type = businessTypes[businessType];
    const locationMultiplier = locationMultipliers[location];

    // Base registration costs
    let totalCost = type.baseRegistrationFee * locationMultiplier;
    totalCost += type.governmentFees * locationMultiplier;
    totalCost += type.stampDuty * locationMultiplier;

    // Professional fees
    if (includeProfessionalFees) {
      totalCost += type.professionalFees * locationMultiplier;
    }

    // Office setup costs (estimated)
    if (includeOfficeSetup) {
      const officeSetupCost = businessType === 'private-limited' ? 50000 :
                             businessType === 'llp' ? 30000 :
                             businessType === 'opc' ? 25000 :
                             businessType === 'sole-proprietorship' ? 15000 : 20000;
      totalCost += officeSetupCost * locationMultiplier;
    }

    // Initial working capital
    let workingCapital = 0;
    if (includeInitialWorkingCapital) {
      workingCapital = Number(workingCapitalAmount);
      totalCost += workingCapital;
    }

    // Additional costs based on capital
    const paidCapital = Number(paidUpCapital);
    if (paidCapital > 100000) {
      const excessCapital = paidCapital - 100000;
      totalCost += excessCapital * 0.001; // Stamp duty on excess capital
    }

    return {
      registrationFees: type.baseRegistrationFee * locationMultiplier,
      governmentFees: type.governmentFees * locationMultiplier,
      stampDuty: type.stampDuty * locationMultiplier,
      professionalFees: includeProfessionalFees ? type.professionalFees * locationMultiplier : 0,
      officeSetup: includeOfficeSetup ? (businessType === 'private-limited' ? 50000 :
                   businessType === 'llp' ? 30000 :
                   businessType === 'opc' ? 25000 :
                   businessType === 'sole-proprietorship' ? 15000 : 20000) * locationMultiplier : 0,
      workingCapital: workingCapital,
      totalCost: totalCost
    };
  };

  const costs = calculateBusinessSetup();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services/others" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          ← Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Business Setup Calculator</h1>
            <p className="text-gray-600">Calculate costs for setting up your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Business Type</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(businessTypes).map(([key, type]) => (
                    <option key={key} value={key}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {(businessType === 'private-limited' || businessType === 'opc') && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Authorized Capital (₹)</label>
                    <input
                      type="number"
                      placeholder="Enter authorized capital"
                      value={authorizedCapital}
                      onChange={(e) => setAuthorizedCapital(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Paid-up Capital (₹)</label>
                    <input
                      type="number"
                      placeholder="Enter paid-up capital"
                      value={paidUpCapital}
                      onChange={(e) => setPaidUpCapital(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="pune">Pune</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="other">Other Cities</option>
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="professionalFees"
                    checked={includeProfessionalFees}
                    onChange={(e) => setIncludeProfessionalFees(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="professionalFees" className="text-sm">Include Professional Fees (CA, Lawyer)</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="officeSetup"
                    checked={includeOfficeSetup}
                    onChange={(e) => setIncludeOfficeSetup(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="officeSetup" className="text-sm">Include Office Setup Costs</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="workingCapital"
                    checked={includeInitialWorkingCapital}
                    onChange={(e) => setIncludeInitialWorkingCapital(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="workingCapital" className="text-sm">Include Initial Working Capital</label>
                </div>

                {includeInitialWorkingCapital && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Working Capital Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="Enter working capital"
                      value={workingCapitalAmount}
                      onChange={(e) => setWorkingCapitalAmount(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Cost Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Registration Fees:</span>
                    <span>₹{costs.registrationFees.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Government Fees:</span>
                    <span>₹{costs.governmentFees.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stamp Duty:</span>
                    <span>₹{costs.stampDuty.toLocaleString('en-IN')}</span>
                  </div>
                  {costs.professionalFees > 0 && (
                    <div className="flex justify-between">
                      <span>Professional Fees:</span>
                      <span>₹{costs.professionalFees.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {costs.officeSetup > 0 && (
                    <div className="flex justify-between">
                      <span>Office Setup:</span>
                      <span>₹{costs.officeSetup.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {costs.workingCapital > 0 && (
                    <div className="flex justify-between">
                      <span>Working Capital:</span>
                      <span>₹{costs.workingCapital.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t pt-3 font-bold">
                    <span>Total Setup Cost:</span>
                    <span className="text-blue-600">₹{costs.totalCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Business Setup Checklist</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Company Name Approval</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Digital Signature Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Director Identification Number</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Registered Office Address</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Memorandum & Articles of Association</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>PAN & TAN Application</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>GST Registration</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                <div className="space-y-2 text-sm">
                  <p>1. Verify company name availability</p>
                  <p>2. Prepare incorporation documents</p>
                  <p>3. File with Ministry of Corporate Affairs</p>
                  <p>4. Obtain Certificate of Incorporation</p>
                  <p>5. Apply for PAN and TAN</p>
                  <p>6. Open business bank account</p>
                  <p>7. Register for GST (if applicable)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSetupCalculator;