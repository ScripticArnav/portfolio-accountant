"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Suresh Mehta",
      company: "Mehta Industries",
      role: "CEO",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Fintacxx Solutions has been instrumental in streamlining our financial processes. Their expertise in tax planning saved us significant costs this year. The team is professional, responsive, and truly understands our business needs.",
    },
    {
      name: "Kavita Singh",
      company: "Singh Enterprises",
      role: "Founder",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Professional, reliable, and always available when we need them. The team at Fintacxx has become an integral part of our business operations. Their proactive approach to financial management is exceptional.",
    },
    {
      name: "Ravi Agarwal",
      company: "Agarwal Trading Co.",
      role: "Managing Director",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Their GST compliance services are top-notch. We never have to worry about deadlines or regulatory issues anymore. The automation and systematic approach they bring is remarkable. Highly recommended!",
    },
    {
      name: "Neha Joshi",
      company: "Joshi Consultancy",
      role: "Director",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The audit services provided by Fintacxx are thorough and professional. They helped us identify areas for improvement and cost optimization. Their attention to detail is impressive.",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block animate-fade-in-up">
            <span className="text-blue-600 font-semibold text-lg mb-2 block">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50 animate-fade-in">
            <CardContent className="p-8 md:p-12 relative">
              {/* Background Quote */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="h-24 w-24 text-blue-600" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-8 animate-fade-in-up">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current animate-twinkle"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote
                  className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center animate-fade-in-up"
                  style={{ animationDelay: "200ms" }}
                >
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div
                  className="flex items-center justify-center space-x-6 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 animate-pulse"></div>
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-xl mb-1">{testimonials[currentIndex].name}</div>
                    <div className="text-blue-600 font-medium text-lg">{testimonials[currentIndex].role}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-0"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-0"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                index === currentIndex ? "ring-2 ring-blue-600 shadow-xl scale-105" : "opacity-70 hover:opacity-100"
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            >
              <CardContent className="p-4 text-center">
                <div className="relative mb-3">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 ${index === currentIndex ? "animate-pulse" : ""}`}
                  ></div>
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full mx-auto object-cover border-2 border-white shadow-lg"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">{testimonial.name}</div>
                <div className="text-xs text-gray-600">{testimonial.company}</div>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
