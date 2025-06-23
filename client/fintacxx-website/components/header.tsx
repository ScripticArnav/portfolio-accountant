"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <Calculator className="h-6 w-6 text-white animate-bounce-slow" />
              </div>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Fintacxx Solutions
            </span>
          </Link>

          {/* Desktop Navigation with Stagger Animation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group animate-fade-in-down"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 blur-sm transition-all duration-300 group-hover:w-full opacity-50"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons with Animation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/payment">
              <Button
                variant="outline"
                className="relative border-2 border-blue-600 text-blue-600 hover:text-white overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Pay Now</span>
              </Button>
            </Link>
            <Button className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10">Book Consultation</span>
            </Button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 rounded-b-2xl">
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-2 animate-slide-in-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 py-3 space-y-2 animate-slide-in-left" style={{ animationDelay: "300ms" }}>
                <Link href="/payment" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Pay Now
                  </Button>
                </Link>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
