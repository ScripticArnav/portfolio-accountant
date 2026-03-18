import { useState } from 'react';
import axios from 'axios';
import backendUrl from '../url.js';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const services = [
    'Accounting Services',
    'Tax Planning & Compliance',
    'Payroll Services',
    'Corporate Compliance',
    'Business Setup',
    'Global Outsourcing',
    'Financial Advisory',
    'Regulatory Consultation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${backendUrl}/contact`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      
      // Scroll to success message
      document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Talk <span className="text-yellow-300">Finance</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Get personalized consultation from our financial experts. Free 30-minute discovery call.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
            <span className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">
              <PhoneIcon className="w-6 h-6" />
              <span>+91 98765 43210</span>
            </span>
            <span className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">
              <EnvelopeIcon className="w-6 h-6" />
              <span>hello@asfintaccx.com</span>
            </span>
            <span className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">
              <ClockIcon className="w-6 h-6" />
              <span>Mon-Sat 9AM-7PM</span>
            </span>
          </div>
        </div>
      </section>

      <div className="relative -mt-20 z-10">
        {/* Contact Cards */}
        <section className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:col-span-2">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Get Your Free Consultation
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our experts will review your requirements and provide tailored solutions within 24 hours
                </p>
              </div>

              {/* Success/Error Message */}
              {submitStatus === 'success' && (
                <div id="success-message" className="mb-8 p-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-3xl shadow-2xl animate-pulse">
                  <div className="flex items-center justify-center space-x-4">
                    <CheckCircleIcon className="w-16 h-16" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-lg">We'll contact you within 24 hours. Your reference ID: <strong>CONT-{Date.now().toString().slice(-6)}</strong></p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-2">Oops! Something went wrong</h3>
                  <p>Please try again or call us directly</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 border-2 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                        : 'border-gray-200 hover:border-primary-300 focus:border-primary-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-2 text-red-600 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 border-2 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                        : 'border-gray-200 hover:border-primary-300 focus:border-primary-500'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="mt-2 text-red-600 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 border-2 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                        : 'border-gray-200 hover:border-primary-300 focus:border-primary-500'
                    }`}
                    placeholder="9876543210"
                  />
                  {errors.phone && <p className="mt-2 text-red-600 text-sm">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-500 hover:border-primary-300 transition-all duration-300"
                    placeholder="Your company/organization"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-500 hover:border-primary-300 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 border-2 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 resize-vertical ${
                      errors.message 
                        ? 'border-red-300 bg-red-50 focus:ring-red-200' 
                        : 'border-gray-200 hover:border-primary-300 focus:border-primary-500'
                    }`}
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && <p className="mt-2 text-red-600 text-sm">{errors.message}</p>}
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 flex items-center justify-center px-12 py-6 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      isSubmitting ? 'animate-pulse' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-4 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRightIcon className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => window.location.href = 'tel:+919876543210'}
                    className="flex-1 flex items-center justify-center px-12 py-6 border-2 border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300 hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-xl rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-200"
                  >
                    <PhoneIcon className="w-7 h-7 mr-3" />
                    Call Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <MapPinIcon className="w-10 h-10 mr-4 text-indigo-600" />
                Our Offices
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Office</h4>
                    <p className="text-gray-600 mb-2">LIG 1223</p>
                    <p className="text-gray-600 mb-2">Kanpur, UP 208017</p>
                    <p className="text-indigo-600 font-semibold">Mon-Sat 9AM-7PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">US Operations</h4>
                    <p className="text-gray-600 mb-2">New York Office</p>
                    <p className="text-gray-600 mb-2">NY 10001, USA</p>
                    <p className="text-emerald-600 font-semibold">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <PhoneIcon className="w-10 h-10 mr-4 text-emerald-600" />
                Quick Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => window.location.href = 'tel:+919919553216'}>
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">+91 99195 53216</div>
                    <div className="text-sm text-gray-600">Call Now</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => window.location.href = 'mailto:hello@asfintaccx.com'}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <EnvelopeIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors break-all">hello@asfintaccx.com</div>
                    <div className="text-sm text-gray-600">Email Us</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Quick Links */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <BookOpenIcon className="w-10 h-10 mr-4 text-purple-600" />
                Popular Services
              </h3>
              <div className="space-y-4">
                {[
                  'Accounting Services',
                  'Tax Compliance',
                  'Payroll Processing',
                  'GST Registration',
                  'Company Incorporation'
                ].map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 bg-white rounded-2xl hover:bg-purple-100 hover:shadow-md transition-all duration-300 flex items-center space-x-4 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-600">{service}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Us Around the Globe
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Strategic locations for seamless global service delivery
            </p>
          </div>
          
          {/* Map Placeholder - Replace with actual map integration */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-2xl overflow-hidden animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 animate-shimmer"></div>
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="font-bold text-gray-900">Mumbai HQ (Live)</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 text-white text-sm space-y-2">
                <div>📍 Mumbai, MH</div>
                <div>🌐 New York, NY</div>
                <div>🇦🇪 Dubai, UAE</div>
              </div>
            </div>
            
            <div className="space-y-8 text-white">
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Business Hours</h4>
                <div className="space-y-2 text-lg">
                  <div>Monday - Friday: 9AM - 7PM IST</div>
                  <div>Saturday: 10AM - 5PM IST</div>
                  <div>Sunday: Emergency Support</div>
                </div>
              </div>
              
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Response Time</h4>
                <div className="space-y-2 text-lg">
                  <div>📧 Email: Within 4 hours</div>
                  <div>📱 Phone: Within 30 mins</div>
                  <div>💬 Chat: Instant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked 
              <span className="text-primary-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly will I get a response?",
                a: "Our team responds to all inquiries within 30 minutes during business hours and within 4 hours outside business hours."
              },
              {
                q: "Is the initial consultation free?",
                a: "Yes! Your first 30-minute consultation with our experts is completely free with no obligation."
              },
              {
                q: "Do you serve international clients?",
                a: "Absolutely! We serve clients from USA, UK, UAE, Australia, Singapore, and 20+ countries worldwide."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, bank transfers, UPI, and international payments via PayPal/Stripe."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => {}}>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{faq.q}</h4>
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed pl-12 opacity-0 group-hover:opacity-100 group-hover:pl-0 transition-all duration-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;