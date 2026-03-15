import { Link } from 'react-router-dom';
import {
  ArrowUpIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t-4 border-primary-600">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  FinTaccX
                </h3>
                <p className="text-sm text-gray-400">Financial Excellence</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted partner for accounting, tax compliance, and strategic financial advisory services.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <BuildingOfficeIcon className="w-6 h-6 mr-2 text-primary-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Services</Link></li>
              <li><Link to="/global-services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Global Services</Link></li>
              <li><Link to="/knowledge-bank" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Knowledge Bank</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ArrowUpIcon className="w-6 h-6 mr-2 text-primary-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Accounting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Tax Planning</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Payroll</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Compliance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Advisory</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <EnvelopeIcon className="w-6 h-6 mr-2 text-primary-400" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <a href="tel:+919876543210" className="text-white hover:text-primary-400 transition-colors">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:info@fintaccx.in" className="text-white hover:text-primary-400 transition-colors">info@fintaccx.in</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-white max-w-xs leading-relaxed">Business Plaza, MG Road, Mumbai, MH 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm md:text-base">
              © {currentYear} FinTaccX. All rights reserved. | Designed for Financial Excellence
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl z-40 border-4 border-white/20"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;