"use client"

import { Linkedin, Mail, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Team() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Managing Partner",
      image: "/placeholder.svg?height=400&width=400",
      bio: "CA with 15+ years of experience in taxation and financial consulting.",
      linkedin: "#",
      email: "rajesh@fintacxx.com",
      specialties: ["Tax Planning", "Corporate Finance", "Business Strategy"],
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Senior Tax Consultant",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specialized in GST compliance and corporate tax planning.",
      linkedin: "#",
      email: "priya@fintacxx.com",
      specialties: ["GST Compliance", "Tax Optimization", "Regulatory Affairs"],
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Audit Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Expert in statutory audits and internal control systems.",
      linkedin: "#",
      email: "amit@fintacxx.com",
      specialties: ["Statutory Audits", "Risk Management", "Compliance"],
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      role: "Financial Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focused on financial planning and business advisory services.",
      linkedin: "#",
      email: "sneha@fintacxx.com",
      specialties: ["Financial Planning", "Business Analytics", "Investment Advisory"],
      rating: 5,
    },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block animate-fade-in-up">
            <span className="text-purple-600 font-semibold text-lg mb-2 block">Our Team</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified professionals bring years of experience and expertise to help your business succeed
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: member.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transform rotate-45"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full animate-fade-in"
                          style={{ animationDelay: `${index * 150 + specialtyIndex * 100}ms` }}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-lg transition-colors duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
