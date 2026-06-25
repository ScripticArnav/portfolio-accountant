import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! Need help with accounting, tax, or compliance?' },
  ]);
  const chatRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const closeChat = () => {
    setChatOpen(false);
    setMessages([
      { sender: 'bot', text: 'Hi there! Need help with accounting, tax, or compliance?' },
    ]);
    setMessage('');
  };

  const toggleChat = () => {
    if (chatOpen) {
      closeChat();
      return;
    }
    setChatOpen(true);
  };

  useEffect(() => {
    if (!chatOpen) return;

    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        chatRef.current &&
        !chatRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        closeChat();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatOpen]);

  const handleSend = (event) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setMessage('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Thank you! Our team will get back to you soon, or email us at info@asfintaccx.com.',
        },
      ]);
    }, 600);
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
                <span className="text-2xl font-bold text-white">AS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  ASFintaccx Solutions
                </h3>
                <p className="text-sm text-gray-400">Financial Excellence</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted partner for accounting, tax compliance, and strategic financial advisory services.
            </p>
            <div className="flex items-center gap-3">
              {['LinkedIn', 'Twitter', 'Facebook'].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <LinkIcon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <BuildingOfficeIcon className="w-6 h-6 mr-2 text-primary-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/knowledge-bank/rules" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Knowledge Bank
                </Link>
              </li>
              {/* <li>
                <Link to="/client-portal" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Client Portal
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ArrowUpIcon className="w-6 h-6 mr-2 text-primary-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/business-registration" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Business Registration
                </Link>
              </li>
              <li>
                <Link to="/services/tax-compliance" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Tax Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/trademark-ip" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Trademark & IP
                </Link>
              </li>
              <li>
                <Link to="/services/lawyer-services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Lawyer Services
                </Link>
              </li>
              <li>
                <Link to="/services/documentation" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">
                  Documentation
                </Link>
              </li>
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
                  <a href="tel:+919919553216" className="text-white hover:text-primary-400 transition-colors">+91 9919553216</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:info@asfintaccx.com" className="text-white hover:text-primary-400 transition-colors">info@asfintaccx.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-white max-w-xs leading-relaxed">LIG 1223, Awas Vikas No.3, Kalyanpur, Kanpur, Uttar Pradesh, India</p>
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
              © {currentYear} ASFintaccx Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/Contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/knowledge-bank/rules" className="text-gray-400 hover:text-white transition-colors">
                Knowledge Bank
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={toggleChat}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl z-40 border-4 border-white/20"
        aria-label={chatOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {chatOpen ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleLeftRightIcon className="w-6 h-6" />}
      </button>

      {chatOpen && (
        <div ref={chatRef} className="fixed bottom-24 right-6 w-80 max-w-full rounded-3xl bg-slate-950/95 border border-slate-700 shadow-2xl z-50 overflow-hidden">
          <div className="bg-primary-600 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-white">ASFintaccx Chat</p>
                <p className="text-xs text-slate-200">Ask about taxes, bookkeeping, or services.</p>
              </div>
              <button onClick={toggleChat} aria-label="Close chatbot" className="text-white hover:text-slate-200">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="h-72 overflow-y-auto px-4 py-3 space-y-3 bg-slate-950 text-sm text-slate-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-3 ${msg.sender === 'bot' ? 'bg-slate-800 self-start' : 'bg-primary-600 self-end text-white'}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="border-t border-slate-700 bg-slate-900 p-3">
            <label htmlFor="chat-input" className="sr-only">
              Type your message
            </label>
            <div className="flex gap-2">
              <input
                id="chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/40 outline-none"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="rounded-2xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </footer>
  );
};

export default Footer;