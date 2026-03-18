import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalculatorIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  HomeIcon,
  CreditCardIcon,
  ChartBarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Calculators = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);
  const [calculatorData, setCalculatorData] = useState({});

  // Calculator configurations
  const calculators = [
    {
      id: 'gst',
      title: 'GST Calculator',
      icon: '🧮',
      description: 'Calculate GST amount, net amount, and total inclusive price',
      inputs: [
        { name: 'amount', label: 'Amount (₹)', type: 'number', placeholder: '1000' },
        { name: 'gstRate', label: 'GST Rate (%)', type: 'number', placeholder: '18' }
      ],
      category: 'tax'
    },
    {
      id: 'emi',
      title: 'EMI Calculator',
      icon: '🏦',
      description: 'Calculate monthly EMI for home, car, or personal loans',
      inputs: [
        { name: 'principal', label: 'Loan Amount (₹)', type: 'number', placeholder: '5000000' },
        { name: 'interestRate', label: 'Annual Interest (%)', type: 'number', placeholder: '8.5' },
        { name: 'tenure', label: 'Tenure (Years)', type: 'number', placeholder: '20' }
      ],
      category: 'loans'
    },
    {
      id: 'income-tax',
      title: 'Income Tax Calculator',
      icon: '💰',
      description: 'Calculate tax liability under new vs old regime (AY 2025-26)',
      inputs: [
        { name: 'annualIncome', label: 'Annual Income (₹)', type: 'number', placeholder: '1200000' },
        { name: 'ageGroup', label: 'Age Group', type: 'select', options: [
          { value: 'below60', label: '< 60 years' },
          { value: '60-80', label: '60-80 years' },
          { value: 'above80', label: '> 80 years' }
        ]},
        { name: 'regime', label: 'Tax Regime', type: 'select', options: [
          { value: 'new', label: 'New Regime' },
          { value: 'old', label: 'Old Regime' }
        ]}
      ],
      category: 'tax'
    },
    {
      id: 'sip',
      title: 'SIP Calculator',
      icon: '📈',
      description: 'Calculate future value of systematic investment plans',
      inputs: [
        { name: 'monthlyInvestment', label: 'Monthly SIP (₹)', type: 'number', placeholder: '5000' },
        { name: 'expectedReturn', label: 'Expected Return (%)', type: 'number', placeholder: '12' },
        { name: 'investmentPeriod', label: 'Period (Years)', type: 'number', placeholder: '15' }
      ],
      category: 'investment'
    },
    {
      id: 'tds',
      title: 'TDS Calculator',
      icon: '🧾',
      description: 'Calculate TDS amount on payments and professional fees',
      inputs: [
        { name: 'amount', label: 'Payment Amount (₹)', type: 'number', placeholder: '50000' },
        { name: 'tdsRate', label: 'TDS Rate (%)', type: 'number', placeholder: '10' },
        { name: 'tdsSection', label: 'TDS Section', type: 'select', options: [
          { value: '194j', label: '194J - Professional Fees' },
          { value: '194c', label: '194C - Contractor' },
          { value: '194a', label: '194A - Interest' }
        ]}
      ],
      category: 'tax'
    },
    {
      id: 'hra',
      title: 'HRA Exemption Calculator',
      icon: '🏠',
      description: 'Calculate House Rent Allowance tax exemption',
      inputs: [
        { name: 'basicSalary', label: 'Basic Salary (₹)', type: 'number', placeholder: '50000' },
        { name: 'hraReceived', label: 'HRA Received (₹)', type: 'number', placeholder: '25000' },
        { name: 'rentPaid', label: 'Monthly Rent (₹)', type: 'number', placeholder: '30000' },
        { name: 'cityType', label: 'City Type', type: 'select', options: [
          { value: 'metro', label: 'Metro (50%)' },
          { value: 'non-metro', label: 'Non-Metro (40%)' }
        ]}
      ],
      category: 'tax'
    }
  ];

  const calculateResult = (calculatorId, inputs) => {
    switch (calculatorId) {
      case 'gst':
        const gstAmount = (inputs.amount * inputs.gstRate) / 100;
        const totalAmount = parseFloat(inputs.amount) + gstAmount;
        return {
          gstAmount: gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          totalAmount: totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          netAmount: inputs.amount
        };

      case 'emi':
        const monthlyRate = (inputs.interestRate / 12 / 100);
        const numPayments = inputs.tenure * 12;
        const emi = (inputs.principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                   (Math.pow(1 + monthlyRate, numPayments) - 1);
        const totalPayment = emi * numPayments;
        const totalInterest = totalPayment - inputs.principal;
        return {
          monthlyEMI: emi.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          totalPayment: totalPayment.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          totalInterest: totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 2 })
        };

      case 'sip':
        const monthlyRateSIP = inputs.expectedReturn / 12 / 100;
        const numMonths = inputs.investmentPeriod * 12;
        const futureValue = inputs.monthlyInvestment * ((Math.pow(1 + monthlyRateSIP, numMonths) - 1) / monthlyRateSIP) * (1 + monthlyRateSIP);
        const totalInvestment = inputs.monthlyInvestment * numMonths;
        return {
          futureValue: futureValue.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          totalInvestment: totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          estimatedReturns: (futureValue - totalInvestment).toLocaleString('en-IN', { maximumFractionDigits: 2 })
        };

      case 'tds':
        const tdsAmount = (inputs.amount * inputs.tdsRate) / 100;
        return {
          tdsAmount: tdsAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          netAmount: (inputs.amount - tdsAmount).toLocaleString('en-IN', { maximumFractionDigits: 2 })
        };

      case 'hra':
        const annualBasic = parseFloat(inputs.basicSalary) * 12;
        const annualHRA = parseFloat(inputs.hraReceived) * 12;
        const annualRent = parseFloat(inputs.rentPaid) * 12;
        const hraExemptionRate = inputs.cityType === 'metro' ? 0.5 : 0.4;
        const hraExemption1 = annualHRA;
        const hraExemption2 = annualBasic * hraExemptionRate;
        const hraExemption3 = annualRent - (annualBasic * 0.1);
        const hraExemption = Math.min(hraExemption1, hraExemption2, hraExemption3);
        return {
          hraExemption: hraExemption.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
          leastOf: [
            `HRA: ₹${hraExemption1.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
            `50/40% Basic: ₹${hraExemption2.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
            `Rent - 10% Basic: ₹${hraExemption3.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
          ]
        };

      default:
        return {};
    }
  };

  const categories = {
    tax: { name: 'Tax Calculators', icon: CurrencyDollarIcon, count: 3 },
    loans: { name: 'Loan Calculators', icon: HomeIcon, count: 1 },
    investment: { name: 'Investment Calculators', icon: ChartBarIcon, count: 1 }
  };

  const handleInputChange = (calculatorId, inputName, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [calculatorId]: {
        ...prev[calculatorId],
        [inputName]: value
      }
    }));
  };

  const resetCalculator = () => {
    setActiveCalculator(null);
    setCalculatorData({});
  };

  if (!activeCalculator) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-2xl font-bold rounded-3xl mb-12 shadow-2xl">
              <CalculatorIcon className="w-12 h-12 mr-4" />
              <span>Financial Calculators</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Instant <span className="text-emerald-600">Calculations</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-20">
              GST, EMI, Income Tax, SIP, HRA and 15+ more calculators used by 100K+ businesses monthly
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="group">
                <div className="p-10 rounded-3xl bg-white shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-emerald-300 cursor-pointer h-full">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <category.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-12 text-center">{category.count} Calculators</p>
                  <div className="flex items-center justify-center text-emerald-600 font-bold text-xl hover:text-emerald-700 transition-colors">
                    Explore Calculators
                    <ArrowRightIcon className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Calculators */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Most Popular <span className="text-emerald-600">Calculators</span>
            </h2>
            <p className="text-2xl text-gray-600">Used by 100K+ businesses monthly</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calculators.slice(0, 6).map((calc) => (
              <div
                key={calc.id}
                onClick={() => setActiveCalculator(calc)}
                className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 cursor-pointer transition-all duration-500 hover:scale-[1.02] border border-gray-100 hover:border-emerald-300 h-full"
              >
                <div className="w-28 h-28 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <span className="text-4xl">{calc.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center group-hover:text-emerald-600 transition-colors">
                  {calc.title}
                </h3>
                <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">{calc.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/knowledge-bank"
              className="inline-flex items-center px-12 py-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-2xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              View All 15+ Calculators
              <ArrowRightIcon className="ml-6 w-10 h-10 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Active Calculator Interface
  const activeCalc = calculators.find(c => c.id === activeCalculator.id);

  const inputsData = calculatorData[activeCalculator.id] || {};
  const result = calculateResult(activeCalculator.id, inputsData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 py-24">
      {/* Calculator Header */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <button
            onClick={resetCalculator}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-3xl hover:shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 mb-12 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Calculators</span>
          </button>
          
          <div className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-2xl font-bold rounded-3xl mb-8 shadow-2xl">
            <span className="text-4xl mr-6">{activeCalc.icon}</span>
            <span>{activeCalc.title}</span>
          </div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">{activeCalc.description}</p>
        </div>

        {/* Calculator Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Enter Details</h3>
            
            <div className="space-y-8">
              {activeCalc.inputs.map((input, index) => (
                <div key={input.name} className="space-y-3">
                  <label className="block text-xl font-bold text-gray-900">
                    {input.label}
                  </label>
                  {input.type === 'select' ? (
                    <select
                      value={inputsData[input.name] || ''}
                      onChange={(e) => handleInputChange(activeCalculator.id, input.name, e.target.value)}
                      className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
                    >
                      <option value="">Select...</option>
                      {input.options.map((option, i) => (
                        <option key={i} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={input.type}
                      value={inputsData[input.name] || ''}
                      onChange={(e) => handleInputChange(activeCalculator.id, input.name, e.target.value)}
                      placeholder={input.placeholder}
                      className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 border border-emerald-200 min-h-[500px] flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-emerald-900 mb-12 text-center">Results</h3>
            
            {Object.keys(result).length > 0 ? (
              <div className="space-y-8">
                {Object.entries(result).map(([key, value]) => (
                  <div key={key} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-emerald-200">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                      <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <span className="text-2xl font-bold text-white">₹</span>
                      </div>
                    </div>
                    {Array.isArray(value) ? (
                      <div className="space-y-3">
                        {value.map((item, i) => (
                          <div key={i} className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-2xl">
                            <CheckCircleIcon className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                            <span className="text-xl font-semibold text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-5xl font-bold text-emerald-600 mb-4">
                          {value}
                        </div>
                        <div className="text-2xl text-gray-700 font-semibold">per month/year</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <CalculatorIcon className="w-32 h-32 text-gray-400 mx-auto mb-12 opacity-50 animate-pulse" />
                <h4 className="text-3xl font-bold text-gray-500 mb-4">Enter values above</h4>
                <p className="text-xl text-gray-400">Results will appear here instantly</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Calculator Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-200 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Need Expert Review?</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our calculations are based on latest regulations. Get personalized consultation from CA experts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-2xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
          >
            Get Free Consultation
            <ArrowRightIcon className="ml-6 w-10 h-10 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calculators;