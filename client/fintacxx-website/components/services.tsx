"use client"

import { Calculator, FileText, TrendingUp, Shield, PieChart, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Filing",
      description: "Comprehensive tax planning strategies and accurate filing services to minimize your tax liability.",
      features: ["Income Tax Returns", "Tax Optimization", "Compliance Management"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "GST Services",
      description: "Complete GST registration, filing, and compliance services for seamless business operations.",
      features: ["GST Registration", "Monthly Returns", "Input Tax Credit"],
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Professional audit services ensuring compliance and financial transparency for your business.",
      features: ["Statutory Audits", "Internal Audits", "Due Diligence"],
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: PieChart,
      title: "Bookkeeping",
      description: "Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.",
      features: ["Daily Transactions", "Financial Statements", "Reconciliation"],
      color: "orange",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Financial Consulting",
      description: "Strategic financial advice to help your business grow and make informed financial decisions.",
      features: ["Business Planning", "Cash Flow Analysis", "Investment Advice"],
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Complete payroll processing services including salary calculations and statutory compliance.",
      features: ["Salary Processing", "PF & ESI", "TDS Management"],
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float-random"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <div className="text-center mb-20">
          <div className="inline-block animate-fade-in-up">
            <span className="text-blue-600 font-semibold text-lg mb-2 block">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Professional Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive accounting and financial services tailored to meet your business needs
            </p>
          </div>
        </div>

        {/* Services Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-white/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Floating Icon Background */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <service.icon className="h-24 w-24 transform rotate-12 group-hover:rotate-45 transition-transform duration-500" />
              </div>

              <CardHeader className="text-center pb-4 relative z-10">
                {/* Animated Icon */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 animate-slide-in-left"
                      style={{ animationDelay: `${index * 150 + featureIndex * 100}ms` }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 animate-pulse`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn`}
                >
                  <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></span>
                  <span className="relative z-10">Learn More</span>
                </Button>
              </CardContent>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-lg transition-colors duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
