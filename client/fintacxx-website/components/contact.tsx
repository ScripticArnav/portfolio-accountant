"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["123 Business District", "Mumbai, Maharashtra 400001", "India"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 22 1234 5678"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@fintacxx.com", "support@fintacxx.com"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Closed"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 40 }).map((_, i) => (
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block animate-fade-in-up">
            <span className="text-blue-600 font-semibold text-lg mb-2 block">Contact Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Contact us today for a free consultation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm animate-fade-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Send className="mr-3 h-6 w-6 text-blue-600" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements..."
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative overflow-hidden group animate-fade-in-up"
                    style={{ animationDelay: "500ms" }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="flex items-start space-x-4 relative z-10">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Map */}
            <Card
              className="border-0 shadow-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden group">
                  {/* Map Placeholder with Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                      <p className="text-gray-600">Click to view our location</p>
                    </div>
                  </div>

                  {/* Animated Grid Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full gap-1 p-4">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 rounded animate-pulse"
                          style={{
                            animationDelay: `${i * 50}ms`,
                            animationDuration: "2s",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
