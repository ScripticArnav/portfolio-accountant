import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GlobeAsiaAustraliaIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const GlobalServices = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const globalServices = [
    {
      id: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
      icon: '📚',
      category: 'accounting',
      featured: true,
      description: 'Multi-currency bookkeeping for international operations',
      details: 'IFRS/US GAAP compliant accounting, multi-entity consolidation, intercompany reconciliations, automated bookkeeping.',
      benefits: ['Multi-currency support', 'Real-time consolidation', 'IFRS/US GAAP compliance', 'Cloud-based access'],
      countries: ['USA', 'UK', 'UAE', 'Singapore', 'Canada'],
      price: 'Starting $500/month'
    },
    {
      id: 'management-accounts',
      title: 'Management Accounts',
      icon: '📈',
      category: 'reporting',
      featured: true,
      description: 'Custom management reporting for global decision-making',
      details: 'Monthly P&L, Balance sheets, Cash flow statements, KPI dashboards, Variance analysis.',
      benefits: ['Custom dashboards', 'Real-time insights', 'Scenario modeling', 'Board-ready reports'],
      countries: ['USA', 'UK', 'Australia', 'Europe'],
      price: 'Starting $800/month'
    },
    {
      id: 'taxation',
      title: 'Taxation Services',
      icon: '💼',
      category: 'tax',
      featured: false,
      description: 'Cross-border tax compliance and optimization',
      details: 'Transfer pricing, VAT/GST compliance, Corporate tax returns, Tax audits, BEPS compliance.',
      benefits: ['25% tax optimization', 'Global compliance', 'Transfer pricing documentation', 'Tax controversy support'],
      countries: ['USA', 'UK', 'UAE', 'India', 'Singapore'],
      price: 'Starting $1,200/year'
    },
    {
      id: 'payroll',
      title: 'Payroll Services',
      icon: '👥',
      category: 'hr',
      featured: false,
      description: 'Global payroll processing with local compliance',
      details: 'Multi-country payroll, Statutory deductions, Payslip generation, Year-end reporting.',
      benefits: ['Local compliance', 'Multi-currency payroll', 'Employee self-service', 'Audit-ready records'],
      countries: ['USA', 'UK', 'UAE', 'Australia', 'Canada'],
      price: '$15/employee/month'
    },
    {
      id: 'control-accounts',
      title: 'Control Accounts',
      icon: '🎛️',
      category: 'accounting',
      featured: false,
      description: 'Advanced control account reconciliation',
      details: 'Intercompany reconciliations, Bank reconciliations, Vendor/customer reconciliations, Suspense account clearance.',
      benefits: ['99.9% reconciliation accuracy', 'Automated matching', 'Exception reporting', 'Historical cleanup'],
      countries: ['Global'],
      price: 'Starting $400/month'
    },
    {
      id: 'virtual-accounts',
      title: 'Virtual Accounts',
      icon: '💻',
      category: 'accounting',
      featured: false,
      description: 'Virtual CFO and accounting services',
      details: 'Fractional CFO services, Financial planning & analysis, Budgeting & forecasting, Strategic advisory.',
      benefits: ['CFO-level expertise', 'Scalable services', 'Strategic insights', 'Cost-effective'],
      countries: ['USA', 'UK', 'UAE'],
      price: 'Starting $2,000/month'
    },
    {
      id: 'cpa-outsourcing',
      title: 'CPA/EA Outsourcing',
      icon: '📜',
      category: 'outsourcing',
      featured: true,
      description: 'US CPA/EA services for international clients',
      details: 'US tax returns, IRS representation, Bookkeeping, Payroll, State tax compliance.',
      benefits: ['Licensed CPAs/EAs', 'IRS representation', 'State compliance', 'Cost savings 60%'],
      countries: ['USA', 'Global'],
      price: 'Starting $1,500/month'
    },
    {
      id: 'software-setup',
      title: 'Accounting Software Setup',
      icon: '⚙️',
      category: 'technology',
      featured: false,
      description: 'QuickBooks, Xero, Zoho Books implementation',
      details: 'Software selection, Implementation, Data migration, Training, Customization.',
      benefits: ['7-day implementation', 'Data migration', 'Staff training', '24/7 support'],
      countries: ['Global'],
      price: 'Starting $3,000'
    },
    {
      id: 'software-migration',
      title: 'Accounting Software Migration',
      icon: '🔄',
      category: 'technology',
      featured: false,
      description: 'Seamless migration to cloud accounting',
      details: 'Data extraction, Cleansing, Migration, Testing, Go-live support.',
      benefits: ['Zero downtime migration', 'Data integrity guarantee', 'Post-migration support', 'ROI analysis'],
      countries: ['Global'],
      price: 'Starting $5,000'
    }
  ];

  const categories = [
    { id: 'all', title: 'All Services', icon: '🌍' },
    { id: 'accounting', title: 'Accounting', icon: '📊' },
    { id: 'tax', title: 'Taxation', icon: '💰' },
    { id: 'reporting', title: 'Reporting', icon: '📈' },
    { id: 'hr', title: 'Payroll/HR', icon: '👥' },
    { id: 'outsourcing', title: 'Outsourcing', icon: '📋' },
    { id: 'technology', title: 'Technology', icon: '💻' }
  ];

  const filteredServices = activeTab === 'all' 
    ? globalServices 
    : globalServices.filter(service => service.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl mb-8">
            <GlobeAsiaAustraliaIcon className="w-8 h-8 mr-3" />
            <span className="text-2xl font-bold">Global Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            World-Class <span className="text-yellow-300">Outsourced</span>
            <span className="block">Finance Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Serving 100+ clients across USA, UK, UAE, Australia with 60% cost savings and 100% compliance
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center text-sm md:text-base">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-1">60%</div>
              <div className="opacity-90">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-1">100+</div>
              <div className="opacity-90">Global Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-1">5</div>
              <div className="opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-1">99.9%</div>
              <div className="opacity-90">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-purple-500/50 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl hover:scale-105 border border-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <GlobalServiceCard
                key={service.id}
                service={service}
                onClick={() => setSelectedService(service)}
                delay={index * 100}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-8">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No services found</h3>
              <p className="text-xl text-gray-600 mb-8">Try adjusting your filters</p>
              <button
                onClick={() => setActiveTab('all')}
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <GlobalServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Global Coverage */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving Businesses 
              <span className="text-yellow-300 block">Worldwide</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Local expertise with global delivery excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                country: '🇺🇸 USA',
                clients: '75+',
                services: 'CPA Outsourcing, Payroll',
                timezone: 'EST/PST'
              },
              {
                country: '🇬🇧 UK',
                clients: '45+',
                services: 'VAT Compliance, Bookkeeping',
                timezone: 'GMT'
              },
              {
                country: '🇦🇪 UAE',
                clients: '35+',
                services: 'VAT, Corporate Tax',
                timezone: 'GST'
              },
              {
                country: '🇦🇺 Australia',
                clients: '25+',
                services: 'BAS, Superannuation',
                timezone: 'AEST'
              },
              {
                country: '🇸🇬 Singapore',
                clients: '20+',
                services: 'GST, Corporate Secretarial',
                timezone: 'SGT'
              }
            ].map((coverage, index) => (
              <div key={index} className="group bg-white/20 backdrop-blur-xl rounded-3xl p-10 hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/30">
                <div className="text-4xl mb-6">{coverage.country}</div>
                <div className="text-2xl font-bold mb-4">{coverage.clients} Clients</div>
                <div className="text-lg opacity-90 mb-4">{coverage.services}</div>
                <div className="text-sm opacity-75">{coverage.timezone}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-primary-900 text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              Start Global Outsourcing
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Global Service Card Component
const GlobalServiceCard = ({ service, onClick, delay = 0 }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 cursor-pointer transition-all duration-500 hover:bg-white hover:scale-[1.02] border border-white/50 hover:border-indigo-300 overflow-hidden h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
        <span className="text-3xl">{service.icon}</span>
      </div>
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-indigo-600 transition-colors">{service.title}</h4>
      <p className="text-gray-600 mb-8 text-center leading-relaxed">{service.description}</p>
      <div className="flex items-center justify-center space-x-2 mb-6">
        {service.featured && (
          <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-primary-900 text-xs font-bold rounded-full">
            <StarIcon className="w-4 h-4 mr-1 fill-current" />
            Featured
          </div>
        )}
        <span className="text-indigo-600 font-bold text-lg">{service.price}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {service.countries.slice(0, 3).map((country, i) => (
          <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium">
            {country}
          </span>
        ))}
        {service.countries.length > 3 && (
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium">
            +{service.countries.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

// Global Service Detail Modal
const GlobalServiceModal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
        <div className="p-12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-6">
              <div className="w-28 h-28 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-indigo-600">{service.price}</span>
                  {service.featured && (
                    <div className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-primary-900 text-lg font-bold rounded-2xl shadow-lg">
                      <StarIcon className="w-5 h-5 mr-2 fill-current" />
                      Most Popular
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.countries.map((country, i) => (
                    <span key={i} className="px-4 py-2 bg-indigo-100 text-indigo-800 text-sm rounded-xl font-semibold">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-4 hover:bg-gray-100 rounded-3xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Service Overview</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">{service.details}</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ShieldCheckIcon className="w-8 h-8 mr-3 text-emerald-500" />
                    Key Benefits
                  </h4>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl hover:shadow-md transition-all duration-300">
                        <CheckCircleIcon className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-lg text-gray-800 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ClockIcon className="w-8 h-8 mr-3 text-blue-500" />
                    Delivery Timeline
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 p-6 bg-blue-50 rounded-3xl">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">Setup</div>
                      <div className="text-sm text-blue-700">3-7 business days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">Ongoing</div>
                      <div className="text-sm text-blue-700">Monthly/Quarterly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl mb-8 shadow-xl">
                  <h4 className="text-2xl font-bold text-indigo-900 mb-6">Perfect For</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'US Companies', 'UK Firms', 'UAE Businesses', 'Tech Startups', 
                      'E-commerce', 'Manufacturing', 'Consulting Firms'
                    ].map((type, i) => (
                      <div key={i} className="p-4 bg-white rounded-2xl text-center hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="font-semibold text-indigo-900">{type}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Dedicated global account manager</span>
                    </li>
                    <li className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>24/7 client support across timezones</span>
                    </li>
                    <li className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Client portal with real-time dashboards</span>
                    </li>
                    <li className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Monthly compliance & performance reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center pt-16 border-t-4 border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 mt-16">
            <Link
              to="/contact"
              className="flex-1 group inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Request Quote
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/client-portal"
              className="flex-1 group inline-flex items-center justify-center px-12 py-6 border-4 border-indigo-200 text-indigo-700 font-bold rounded-3xl hover:bg-indigo-50 hover:shadow-xl hover:scale-105 transition-all duration-500 bg-white"
            >
              Demo Request
              <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
            <button className="flex-1 group px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-primary-900 text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl">
              Compare All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalServices;