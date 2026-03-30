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

      {/* 3. Services Overview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
              Our Core Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Financial 
              <span className="text-primary-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end financial services tailored for businesses of all sizes across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {(Array.isArray(services) ? services : []).map((service, index) => (
              <ServiceCard key={service._id || index} service={service} delay={index * 100} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Explore All Services
              <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
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

      {/* 5. Global Services Overview */}
    

      {/* 6. Latest Updates / Calculators */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Tools at Your 
              <span className="text-primary-400"> Fingertips</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Instant calculators for GST, Tax, EMI, and investment planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'GST Calculator', desc: 'Calculate GST instantly', icon: '🧮', link: '/calculators' },
              { title: 'EMI Calculator', desc: 'Loan repayment planner', icon: '🏦', link: '/calculators' },
              { title: 'Tax Calculator', desc: 'Income tax estimator', icon: '💸', link: '/calculators' },
              { title: 'SIP Calculator', desc: 'Investment growth tracker', icon: '📈', link: '/calculators' }
            ].map((calc, index) => (
              <CalculatorCard key={index} calculator={calc} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/calculators"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              All Calculators
              <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Latest Blog Insights */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold rounded-full mb-6">
              Latest Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Ahead with Expert 
              <span className="text-primary-600">Insights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {(Array.isArray(blogs) && blogs.length > 0) ? blogs.map((blog, index) => (
              <BlogCard key={blog._id || blog.id || index} blog={blog} />
            )) : Array(3).fill().map((_, index) => (
              <BlogCard key={`fallback-blog-${index}`} blog={{
                title: 'Sample Blog Post',
                excerpt: 'Discover the latest trends in financial compliance...',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
                date: 'Jan 15, 2024'
              }} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Read All Articles
              <svg className="ml-4 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your 
            <span className="text-yellow-300">Financial Future?</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get your free financial health assessment and personalized consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center px-12 py-6 bg-white text-primary-600 text-xl font-bold rounded-3xl hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              Start Free Consultation
              <svg className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/client-portal"
              className="inline-flex items-center px-12 py-6 border-4 border-white/30 text-white text-xl font-bold rounded-3xl hover:bg-white/10 hover:border-white/50 backdrop-blur-xl transition-all duration-500 hover:scale-105"
            >
              Client Portal
              <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;