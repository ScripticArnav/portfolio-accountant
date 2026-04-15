import { useState } from "react";
import axios from "axios";
import backendUrl from "../../url.js";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import ContactMapSection from "./ContactMapSection.jsx";
import FAQSection from "./FAQSection.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const services = [
    "Accounting Services",
    "Tax Planning & Compliance",
    "Payroll Services",
    "Corporate Compliance",
    "Business Setup",
    "Global Outsourcing",
    "Financial Advisory",
    "Regulatory Consultation",
    "Other Services",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);

    const res = await fetch(`${backendUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }
  } catch (err) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Talk <span className="text-yellow-300">Finance</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Get personalized consultation from our financial experts. Free
            30-minute discovery call.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
            <span className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">
              <PhoneIcon className="w-6 h-6" />
              <span>+91 99195 53216</span>
            </span>
            <span className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">
              <EnvelopeIcon className="w-6 h-6" />
              <span>info@asfintaccx.com</span>
            </span>
            <span className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">
              <ClockIcon className="w-6 h-6" />
              <span>Mon-Sat | 10AM - 5PM</span>
            </span>
          </div>
        </div>
      </section>

      <div className="relative -mt-20 z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Get Your Free Consultation
              </h2>
              <p className="text-gray-600">
                Fill the form and we’ll contact you within 24 hours
              </p>
            </div>

            {/* Success */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl border border-green-300">
                ✅ Form submitted successfully!
              </div>
            )}

            {/* Error */}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl border border-red-300">
                ❌ Something went wrong
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border-2 ${
                  errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border-2 ${
                  errors.email ? "border-red-400 bg-red-50" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone/Mobile"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border-2 ${
                  errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              />

              {/* Company */}
              <input
                type="text"
                name="company"
                placeholder="Company/Organization"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />

              {/* Service */}
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Service</option>
                {services.map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border-2 md:col-span-2 ${
                  errors.message
                    ? "border-red-400 bg-red-50"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              />

              {/* Buttons */}
              <div className="md:col-span-2 flex gap-4 mt-2">
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={() => (window.location.href = "tel:+919919553216")}
                  className="flex-1 border-2 border-primary-600 text-primary-600 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
                >
                  Call Now
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <ContactMapSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Contact;
