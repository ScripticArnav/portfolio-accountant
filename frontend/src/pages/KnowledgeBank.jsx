import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalculatorIcon,
  DocumentTextIcon,
  NewspaperIcon,
  BookOpenIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const KnowledgeBank = () => {
  const [activeTab, setActiveTab] = useState('calculators');
  const [searchTerm, setSearchTerm] = useState('');

  const knowledgeSections = [
    {
      id: 'calculators',
      title: 'Financial Calculators',
      icon: CalculatorIcon,
      description: 'Instant financial calculations for GST, Tax, EMI, Investments',
      count: '15+ Tools',
      link: '/calculators',
      featured: true,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      id: 'forms',
      title: 'Forms Download',
      icon: DocumentTextIcon,
      description: 'Latest GST, Income Tax, ROC, FEMA regulatory forms',
      count: '100+ Forms',
      link: '/forms',
      featured: false,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'bulletins',
      title: 'Regulatory Bulletins',
      icon: NewspaperIcon,
      description: 'Latest RBI, SEBI, GST, Income Tax updates & notifications',
      count: '250+ Updates',
      link: '/bulletins',
      featured: false,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'blogs',
      title: 'Blog Insights',
      icon: BookOpenIcon,
      description: 'Expert articles on tax, compliance, finance, business growth',
      count: '150+ Articles',
      link: '/blogs',
      featured: false,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const featuredCalculators = [
    {
      title: 'GST Calculator',
      icon: '🧮',
      description: 'Calculate GST for any amount instantly',
      link: '/calculators#gst'
    },
    {
      title: 'EMI Calculator',
      icon: '🏦',
      description: 'Loan EMI and amortization schedule',
      link: '/calculators#emi'
    },
    {
      title: 'Income Tax Calculator',
      icon: '💰',
      description: 'New vs old tax regime comparison',
      link: '/calculators#tax'
    },
    {
      title: 'SIP Calculator',
      icon: '📈',
      description: 'Future value of systematic investments',
      link: '/calculators#sip'
    }
  ];

  const recentBulletins = [
    {
      title: 'GST Rate Changes - Oct 2024',
      category: 'GST',
      date: '2 days ago',
      link: '/bulletins#gst-oct'
    },
    {
      title: 'Income Tax Slab Revision',
      category: 'Income Tax',
      date: '1 week ago',
      link: '/bulletins#tax-slab'
    },
    {
      title: 'RBI Forex Guidelines',
      category: 'RBI',
      date: '10 days ago',
      link: '/bulletins#rbi-forex'
    }
  ];

  const popularForms = [
    {
      title: 'GSTR-1 (Monthly)',
      category: 'GST',
      link: '/forms#gst1'
    },
    {
      title: 'ITR-1 (Sahaj)',
      category: 'Income Tax',
      link: '/forms#itr1'
    },
    {
      title: 'MCA Annual Return',
      category: 'ROC',
      link: '/forms#mca'
    }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search logic here
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl mb-8 shadow-2xl">
            <BookOpenIcon className="w-10 h-10 mr-4" />
            <span className="text-3xl font-bold">Knowledge Bank</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Complete Financial
            <span className="text-yellow-300 block">Resource Library</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Free tools, forms, updates, and expert insights to simplify compliance and financial planning
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-7 h-7 text-white/70" />
              <input
                type="text"
                placeholder="Search calculators, forms, bulletins..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-16 pr-12 py-6 text-xl bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-3xl text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300"
              />
              <FunnelIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 w-7 h-7 text-white/70 hover:text-white cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="opacity-90">Calculators</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">100+</div>
              <div className="opacity-90">Forms</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">250+</div>
              <div className="opacity-90">Updates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">150+</div>
              <div className="opacity-90">Articles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {knowledgeSections.map((section) => (
              <Link
                key={section.id}
                to={section.link}
                className={`group p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 shadow-xl border-2 border-gray-100 hover:border-transparent h-full ${
                  section.featured 
                    ? `bg-gradient-to-br ${section.gradient} text-white shadow-2xl border-transparent` 
                    : 'bg-gradient-to-br from-gray-50 to-blue-50 hover:from-white hover:to-gray-50'
                }`}
              >
                <div className={`w-20 h-20 ${section.featured ? 'bg-white/20 backdrop-blur-xl' : 'bg-white shadow-lg'} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300`}>
                  <section.icon className={`w-10 h-10 ${section.featured ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center group-hover:scale-105 transition-transform">
                  {section.title}
                </h3>
                <p className={`mb-6 text-center leading-relaxed ${section.featured ? 'opacity-90' : 'text-gray-600'}`}>
                  {section.description}
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    section.featured 
                      ? 'bg-white/30 backdrop-blur-xl text-white' 
                      : 'bg-gradient-to-r from-emerald-500 to-green-600 text-white'
                  }`}>
                    {section.count}
                  </span>
                </div>
                <div className="flex items-center justify-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group-hover:translate-x-2">
                  Explore Now
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xl font-bold rounded-3xl mb-8 shadow-2xl">
              🧮 Most Popular Calculators
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Instant Financial 
              <span className="text-emerald-600">Calculations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Free tools used by 50K+ businesses monthly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredCalculators.map((calc, index) => (
              <Link
                key={index}
                to={calc.link}
                className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 border hover:border-emerald-300 cursor-pointer h-full"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <span className="text-3xl">{calc.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-emerald-600 transition-colors">{calc.title}</h4>
                <p className="text-gray-600 mb-8 text-center">{calc.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/calculators"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              All 15+ Calculators
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xl font-bold rounded-3xl mb-8 shadow-2xl">
              📰 Latest Regulatory Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay <span className="text-purple-600">Compliance Ready</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {recentBulletins.map((bulletin, index) => (
              <Link
                key={index}
                to={bulletin.link}
                className="group bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border hover:border-purple-300 overflow-hidden h-full"
              >
                <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-purple-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-xl">
                    {bulletin.category}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                  {bulletin.title}
                </h4>
                <div className="flex items-center text-purple-600 font-semibold mb-8 opacity-80">
                  {bulletin.date}
                  <ArrowRightIcon className="ml-auto w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/bulletins"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              View All Updates
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Forms */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl font-bold rounded-3xl mb-8 shadow-2xl">
              📄 Most Downloaded Forms
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready-to-Use 
              <span className="text-blue-600">Forms & Templates</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularForms.map((form, index) => (
              <Link
                key={index}
                to={form.link}
                className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 border hover:border-blue-300 h-full"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <DocumentTextIcon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors">{form.title}</h4>
                <div className="flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-xl mb-8 mx-auto w-fit">
                  {form.category}
                </div>
                <div className="flex items-center justify-center text-blue-600 font-semibold">
                  Download Now
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/forms"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Browse All Forms
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Simplify Your 
            <span className="text-yellow-300 block">Financial Journey</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Access all tools, forms, updates, and expert knowledge in one place - completely free
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/calculators"
              className="group inline-flex items-center px-12 py-6 bg-white text-indigo-600 text-xl font-bold rounded-3xl hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              Start Calculating
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-6 border-4 border-white/30 backdrop-blur-xl text-white text-xl font-bold rounded-3xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 hover:scale-105"
            >
              Need Expert Help?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBank;