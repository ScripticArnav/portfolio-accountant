import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../url.js';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [services, setServices] = useState([]);
  const [featuredServices, setFeaturedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${backendUrl}/services`);
        const raw = response.data;
        const list = Array.isArray(raw) ? raw : (raw?.data ?? []);
        const listSafe = Array.isArray(list) ? list : [];
        setServices(listSafe);
        setFeaturedServices(listSafe.filter(s => s.featured));
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
        setFeaturedServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Comprehensive financial solutions designed for business success and regulatory excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl">9 Core Services</span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl">100% Compliance</span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl">24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-lg font-semibold rounded-3xl mb-8 shadow-lg">
              ⭐ Featured Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Most Popular Business 
              <span className="text-primary-600">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Array.isArray(featuredServices) ? featuredServices : []).map((service, index) => (
              <ServiceDetailCard
                key={service.id || index}
                service={service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Service 
              <span className="text-primary-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for every business need - from startup to enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Array.isArray(services) ? services : []).map((service, index) => (
              <ServiceCard
                key={service.id || index}
                service={service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal / Detail View */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your 
              <span className="text-yellow-300 block">Financial Operations?</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Choose the right service package or get personalized recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/contact"
              className="group p-8 bg-white/20 backdrop-blur-xl rounded-3xl hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/30"
            >
              <h4 className="text-2xl font-bold mb-4">Free Consultation</h4>
              <p className="opacity-90 mb-6">30-min expert call</p>
              <div className="flex items-center text-lg font-semibold">
                Get Started
                <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            
            <Link
              to="/client-portal"
              className="group p-8 bg-white/20 backdrop-blur-xl rounded-3xl hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/30"
            >
              <h4 className="text-2xl font-bold mb-4">Client Portal</h4>
              <p className="opacity-90 mb-6">Existing clients</p>
              <div className="flex items-center text-lg font-semibold">
                Login Now
                <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            
            <button className="group p-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-primary-900 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl">
              <h4 className="text-2xl font-bold mb-4">Compare Packages</h4>
              <p className="opacity-90 mb-6">Service comparison tool</p>
              <div className="flex items-center text-lg font-semibold">
                Compare Now
                <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 cursor-pointer transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-50 hover:to-blue-50 border-2 border-gray-100 hover:border-primary-300 overflow-hidden h-full"
    >
      <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
        <span className="text-3xl">{service.icon}</span>
      </div>
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-primary-600 transition-colors">{service.title}</h4>
      <p className="text-gray-600 mb-8 text-center leading-relaxed">{service.description}</p>
      <div className="flex items-center justify-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
        View Details
        <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  );
};

// Featured Service Detail Card
const ServiceDetailCard = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-4 cursor-pointer transition-all duration-500 hover:scale-[1.02] border-4 border-white/20 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center w-28 h-28 bg-white/20 backdrop-blur-xl rounded-3xl mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl">
          <span className="text-4xl">{service.icon}</span>
        </div>
        <h4 className="text-3xl font-bold mb-6 text-center leading-tight">{service.title}</h4>
        <p className="opacity-90 mb-8 text-center leading-relaxed">{service.description}</p>
        <div className="flex items-center justify-center font-bold text-2xl mb-4">
          {service.price ?? 'Contact for pricing'}
        </div>
        <div className="flex items-center justify-center text-lg opacity-90">
          Most Popular
          <StarIcon className="ml-2 w-6 h-6 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

// Service Detail Modal
const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="p-12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-2xl text-primary-600 font-semibold">{service.price ?? 'Contact for pricing'}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Service Overview</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{service.details}</p>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h4>
              <ul className="space-y-4 mb-12">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors">
                    <CheckCircleIcon className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl mb-8">
                <h4 className="text-2xl font-bold text-emerald-800 mb-6">Perfect For</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">🆕</div>
                    <span className="font-semibold text-lg">Startups</span>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">🏢</div>
                    <span className="font-semibold text-lg">SMEs</span>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">🏭</div>
                    <span className="font-semibold text-lg">Enterprises</span>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">🌍</div>
                    <span className="font-semibold text-lg">Global Firms</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-blue-900 mb-6">What's Included</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Monthly financial reporting</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Compliance dashboard access</span>
                  </li>
                  <li className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Quarterly strategy meetings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 border-t border-gray-200">
            <Link
              to="/contact"
              className="flex-1 group inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Get Quote Now
              <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/client-portal"
              className="flex-1 group inline-flex items-center justify-center px-12 py-6 border-2 border-primary-200 text-primary-700 font-bold rounded-3xl hover:bg-primary-50 hover:shadow-xl hover:scale-105 transition-all duration-500"
            >
              Start Free Trial
              <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom animations CSS (add to index.css)
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
  .animate-slideUp { animation: slideUp 0.4s ease-out; }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);
}

export default Services;