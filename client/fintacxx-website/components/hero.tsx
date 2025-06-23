"use client"

import { ArrowRight, TrendingUp, Shield, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-grid-fade">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-blue-500 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animationDuration: "3s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-blue-400 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-blue-800 text-sm font-medium mb-8 shadow-lg border border-blue-100 animate-bounce-in hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-4 h-4 mr-2 animate-pulse" />
            <span className="animate-type-writer">Trusted by 500+ Businesses</span>
          </div>

          {/* Main Heading with Stagger Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block animate-slide-up">Your Trusted Partner in</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x animate-slide-up-delayed">
              Accounting & Financial Growth
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            We handle your numbers so you can focus on your business.
            <span className="text-blue-600 font-semibold"> Professional accounting services</span> with modern
            solutions.
          </p>

          {/* CTA Buttons with Hover Effects */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10 flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Link href="/payment">
              <Button
                size="lg"
                variant="outline"
                className="relative border-2 border-blue-600 text-blue-600 hover:text-white text-lg px-10 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10">Make a Payment</span>
              </Button>
            </Link>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Users, number: "500+", label: "Happy Clients", color: "blue", delay: "1200ms" },
              { icon: Shield, number: "10+", label: "Years Experience", color: "purple", delay: "1400ms" },
              { icon: TrendingUp, number: "99%", label: "Success Rate", color: "pink", delay: "1600ms" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group animate-fade-in-up hover:scale-110 transition-all duration-300"
                style={{ animationDelay: stat.delay }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:bg-white">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${
                      stat.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : stat.color === "purple"
                          ? "from-purple-500 to-purple-600"
                          : "from-pink-500 to-pink-600"
                    } flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 animate-count-up">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  )
}
