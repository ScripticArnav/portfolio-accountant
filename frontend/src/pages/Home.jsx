import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../url.js';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import CalculatorCard from '../components/CalculatorCard';

const Home = () => {
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, blogsRes] = await Promise.all([
          axios.get(`${backendUrl}/services`),
          axios.get(`${backendUrl}/blogs`).catch(() => ({ data: [] }))
        ]);
        const servicesList = Array.isArray(servicesRes.data) ? servicesRes.data : (servicesRes.data?.data ?? []);
        const blogsList = Array.isArray(blogsRes.data) ? blogsRes.data : (blogsRes.data?.data ?? []);
        setServices(servicesList.slice(0, 6));
        setBlogs(blogsList.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
        setServices([
          { title: 'Accounting Services', description: 'Comprehensive accounting solutions', icon: '📊', featured: true },
          { title: 'Tax Planning', description: 'Expert tax planning services', icon: '💰', featured: true },
          { title: 'Payroll Services', description: 'Efficient payroll management', icon: '👥', featured: false }
        ]);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">Loading your financial dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
                Trusted by 500+ Businesses
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Strategic Financial 
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Partner for Growth
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                With over a decade of expertise serving startups to Fortune 500 companies, we deliver comprehensive 
                financial solutions that drive sustainable business growth and compliance excellence.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Learn Our Story
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Financial consulting team" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Categories - Main Offering */}
      <section className="py-24 bg-gradient-to-b from-white via-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
              Primary Service Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Navigate Our 
              <span className="text-primary-600"> Service Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across six core service areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: 'Business Registration', 
                desc: 'Company formation, GST registration, startup setup', 
                icon: '🏢',
                gradient: 'from-blue-500 to-blue-600',
                link: '/services/business-registration',
                count: '50+'
              },
              { 
                title: 'Tax & Compliance', 
                desc: 'ITR filing, GST compliance, TDS returns, tax planning', 
                icon: '📊',
                gradient: 'from-emerald-500 to-emerald-600',
                link: '/services/tax-compliance',
                count: '100+'
              },
              { 
                title: 'Trademark & IP', 
                desc: 'Patent registration, copyright protection, design filing', 
                icon: '🔐',
                gradient: 'from-purple-500 to-purple-600',
                link: '/services/trademark-ip',
                count: '80+'
              },
              { 
                title: 'Lawyer Services', 
                desc: 'Contract drafting, legal consultation, dispute resolution', 
                icon: '⚖️',
                gradient: 'from-orange-500 to-orange-600',
                link: '/services/lawyer-services',
                count: '40+'
              },
              { 
                title: 'Documentation', 
                desc: 'Agreements, MOUs, legal documents, templates', 
                icon: '📝',
                gradient: 'from-pink-500 to-pink-600',
                link: '/services/documentation',
                count: '30+'
              },
              { 
                title: 'Other Services', 
                desc: 'Specialized solutions for unique business needs', 
                icon: '🎯',
                gradient: 'from-red-500 to-red-600',
                link: '/services/others',
                count: '20+'
              }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative block"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className={`relative bg-white rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-3`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-transform duration-300 shadow-xl`}>
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{category.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{category.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">{category.count} Services</span>
                    <svg className="w-6 h-6 text-primary-600 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Metrics / Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Happy Clients', icon: '😊' },
              { metric: '10+', label: 'Years Experience', icon: '⭐' },
              { metric: '$50M+', label: 'Portfolio Value', icon: '💼' },
              { metric: '98%', label: 'Satisfaction Rate', icon: '✅' }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <h4 className="text-4xl font-bold mb-2 group-hover:text-primary-200 transition-colors">{stat.metric}</h4>
                <p className="text-primary-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-primary-600">500+</span> Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading expertise meets cutting-edge technology for unmatched financial excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: '100% Compliance', desc: 'Guaranteed regulatory compliance across all jurisdictions', color: 'from-primary-500 to-primary-600' },
              { icon: '⚡', title: '24/7 Support', desc: 'Round-the-clock client support and instant query resolution', color: 'from-emerald-500 to-emerald-600' },
              { icon: '🛡️', title: 'Bank-Grade Security', desc: 'ISO 27001 certified enterprise-level data protection', color: 'from-purple-500 to-purple-600' },
              { icon: '📈', title: 'Proven Results', desc: 'Average 25% cost savings and 98% client retention rate', color: 'from-orange-500 to-orange-600' }
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-6 transition-all duration-500 bg-gradient-to-br from-gray-50 to-blue-50 hover:from-white hover:to-gray-50 border border-gray-100 hover:border-primary-200"
              >
                <div className={`w-24 h-24 ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{feature.title}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Knowledge Bank Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Knowledge Bank - Your 
              <span className="text-primary-400"> Learning Hub</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed with laws, regulations, bulletins, and expert insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Laws & Acts', icon: '⚖️', link: '/knowledge-bank/acts', items: '50+ Acts', color: 'from-blue-500 to-blue-600' },
              { title: 'Rules & Regulations', icon: '📋', link: '/knowledge-bank/rules', items: '100+ Rules', color: 'from-emerald-500 to-emerald-600' },
              { title: 'Bulletins & Updates', icon: '📢', link: '/knowledge-bank/bulletins', items: '30+ Bulletins', color: 'from-purple-500 to-purple-600' },
              { title: 'Important Links', icon:   '🔗', link: '/knowledge-bank/links', items: '25+ Links', color: 'from-orange-500 to-orange-600' }
            ].map((kb, index) => (
              <Link
                key={index}
                to={kb.link}
                className="group relative"
              >
                <div className={ `bg-gradient-to-br ${kb.color} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-4 group-hover:scale-105 h-full flex flex-col`}>
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{kb.icon}</div>
                  <h4 className="text-2xl font-bold mb-3">{kb.title}</h4>
                  <p className="text-white/80 mb-6 flex-grow">{kb.items}</p>
                  <div className="flex items-center text-white/70 group-hover:text-white transition-colors">
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/knowledge-bank/rules"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Explore Knowledge Bank
              <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>




      {/* 10. Footer CTA */}
    </div>
  );
};

export default Home;