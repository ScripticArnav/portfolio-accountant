"use client"

import { Award, Target, Eye, Heart, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide exceptional accounting services that empower businesses to achieve financial success and growth.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted accounting partner, known for innovation, integrity, and client-centric solutions.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, Excellence, Innovation, and Client Success drive everything we do at Fintacxx Solutions.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Satisfied Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "10+", label: "Years Experience", color: "from-purple-500 to-indigo-500" },
    { icon: TrendingUp, number: "99%", label: "Success Rate", color: "from-green-500 to-emerald-500" },
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500 rounded-full animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 animate-bounce-in">
              <Award className="w-4 h-4 mr-2 animate-spin-slow" />
              About Fintacxx Solutions
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Your Financial Success is Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Priority
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                With over <span className="font-semibold text-blue-600">10 years of experience</span> in the accounting
                industry, Fintacxx Solutions has been helping businesses of all sizes achieve their financial goals.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                We combine <span className="font-semibold text-purple-600">traditional accounting expertise</span> with
                modern technology to deliver exceptional results that drive business growth.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                Our team of <span className="font-semibold text-green-600">certified professionals</span> is dedicated
                to providing personalized service, ensuring that each client receives the attention they deserve.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 animate-count-up">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Office Image with Floating Elements */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Fintacxx Solutions Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Growth Rate</div>
                    <div className="text-green-600 font-semibold">+150%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Certified</div>
                    <div className="text-blue-600 font-semibold">CA Professionals</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-bounce-slower"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>

                {/* Decorative Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
