"use client"

import Link from "next/link"
import { Calculator, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    { name: "Tax Planning", href: "#" },
    { name: "GST Services", href: "#" },
    { name: "Audit & Assurance", href: "#" },
    { name: "Bookkeeping", href: "#" },
    { name: "Financial Consulting", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl transform group-hover:scale-110 transition-all duration-300">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fintacxx Solutions
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in accounting and financial growth. We provide comprehensive financial services to
              help your business succeed and thrive in today's competitive market.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{service.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-400 text-sm">
                  <p>123 Business District</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 text-sm">info@fintacxx.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest financial tips and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm animate-fade-in-up">© 2024 Fintacxx Solutions. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full p-2 transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
