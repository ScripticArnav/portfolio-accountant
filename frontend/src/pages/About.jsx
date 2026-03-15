import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  UsersIcon, 
  LightBulbIcon,
  ChartBarIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', title: 'Our Story', icon: '📖' },
    { id: 'values', title: 'Core Values', icon: '🧭' },
    { id: 'team', title: 'Our Team', icon: '👥' },
    { id: 'approach', title: 'Our Approach', icon: '🔄' }
  ];

  const teamMembers = [
    {
      name: 'Amit Sharma',
      role: 'Founder & Managing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      credential: 'CA, CPA, MBA Finance'
    },
    {
      name: 'Priya Patel',
      role: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      credential: 'CA, CFA Level III'
    },
    {
      name: 'Rahul Mehta',
      role: 'Head of Tax & Compliance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      credential: 'CA, CS, LLB'
    },
    {
      name: 'Neha Gupta',
      role: 'Director - Global Services',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      credential: 'CA, ACCA, US CPA'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team' },
    { number: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-yellow-300">FinTaccX</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Pioneering financial excellence since 2013. Your trusted partner for accounting, tax, and advisory services.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <span className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-2xl">
              <ShieldCheckIcon className="w-5 h-5" />
              <span>ISO 27001 Certified</span>
            </span>
            <span className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-2xl">
              <GlobeAsiaAustraliaIcon className="w-5 h-5" />
              <span>Global Operations</span>
            </span>
            <span className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-2xl">
              <UsersIcon className="w-5 h-5" />
              <span>500+ Clients</span>
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group p-8 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-8">
                📖 Our Journey Since 2013
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                From Startup Vision to 
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Financial Powerhouse
                </span>
              </h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  Founded in 2013 by a team of Chartered Accountants with a vision to revolutionize financial services, 
                  FinTaccX has grown from a 5-member startup to a 50+ expert team serving 500+ clients globally.
                </p>
                <p>
                  Our journey reflects our commitment to excellence, innovation, and client success. Today, we are 
                  recognized as the go-to partner for complex financial challenges across industries.
                </p>
                <p className="font-semibold text-primary-600">
                  "Transforming financial complexity into strategic opportunity."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-primary-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-primary-200/30">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Company timeline" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-lg font-semibold rounded-3xl mb-8 shadow-lg">
              🧭 Our Guiding Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Values That Define 
              <span className="text-emerald-600">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Integrity',
                desc: 'Uncompromising honesty and transparency in every transaction',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: HeartIcon,
                title: 'Client First',
                desc: 'Your success is our priority. Always.',
                color: 'from-emerald-500 to-green-600'
              },
              {
                icon: LightBulbIcon,
                title: 'Innovation',
                desc: 'Pioneering solutions with cutting-edge technology',
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: ChartBarIcon,
                title: 'Excellence',
                desc: 'Delivering superior results consistently',
                color: 'from-orange-500 to-red-600'
              }
            ].map((value, index) => (
              <div key={index} className="group text-center p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-gray-50 to-blue-50 hover:from-white hover:to-gray-50 border hover:border-emerald-200">
                <div className={`w-24 h-24 ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                  <value.icon className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-semibold rounded-3xl mb-8 shadow-lg">
              👥 Meet Your Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team with 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Global Expertise
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:scale-[1.02]">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-700 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-primary-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.credential}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/careers"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Join Our Team
              <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">5-Step</span> Service Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Methodical process ensuring precision, compliance, and maximum value delivery
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your financial landscape', icon: '🔍' },
              { step: '02', title: 'Strategy', desc: 'Customized financial roadmap', icon: '📋' },
              { step: '03', title: 'Execution', desc: 'Flawless implementation', icon: '⚙️' },
              { step: '04', title: 'Compliance', desc: 'Regulatory perfection', icon: '✅' },
              { step: '05', title: 'Optimization', desc: 'Continuous improvement', icon: '🚀' }
            ].map((step, index) => (
              <div key={index} className={`group p-8 rounded-3xl transition-all duration-500 ${
                index === 2 
                  ? 'md:col-span-1 bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105' 
                  : 'bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 shadow-lg border hover:border-primary-200'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl ${
                  index === 2 ? 'bg-white/20 backdrop-blur-xl' : 'bg-white'
                }`}>
                  {step.icon}
                </div>
                <div className="text-3xl font-bold mb-4 text-center">{step.step}</div>
                <h4 className="text-xl font-bold mb-4 text-center">{step.title}</h4>
                <p className={`text-center ${index === 2 ? 'text-primary-100' : 'text-gray-600'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold rounded-3xl mb-8 shadow-lg">
                🛡️ Enterprise Security
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Bank-Grade Data 
                <span className="text-green-400">Protection</span>
              </h2>
              <ul className="space-y-6 text-xl mb-12">
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>ISO 27001 & SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>256-bit AES encryption for all data</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Zero data breach history since inception</span>
                </li>
              </ul>
              <Link
                to="/data-security"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Security Details
                <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m0 0l5-5" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-12 border border-green-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1614624532983-4ce03382d63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Data security" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-12 right-12 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-semibold rounded-3xl mb-8 shadow-lg">
              🌱 Beyond Business
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Committed to 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Social Impact
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Financial Literacy for All</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Free Workshops</h4>
                  <p className="text-gray-600">Conducted 50+ free financial literacy workshops for SMEs and startups</p>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Pro Bono Services</h4>
                  <p className="text-gray-600">₹50L+ in pro bono services for NGOs and social enterprises</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Our Promise</h3>
              <p className="text-xl mb-8 opacity-90">
                5% of profits reinvested in community financial education programs
              </p>
              <div className="text-4xl font-bold mb-4">🌍</div>
              <p className="text-lg opacity-80">Making finance accessible to everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Experience 
            <span className="text-yellow-300 block">Financial Excellence?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Partner with the team trusted by industry leaders for your financial success
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/services"
              className="group inline-flex items-center px-12 py-6 bg-white text-primary-600 text-xl font-bold rounded-3xl hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              Explore Services
              <svg className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-6 border-4 border-white/30 text-white text-xl font-bold rounded-3xl hover:bg-white/10 hover:border-white/50 backdrop-blur-xl transition-all duration-500 hover:scale-105"
            >
              Get Free Consultation
              <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;