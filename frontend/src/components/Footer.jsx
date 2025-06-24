import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-auto bg-blue-900 w-full text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={logo} className="h-10 w-10 mr-3" alt="A.S Fintaccx Solutions Logo" />
            <span className="text-2xl font-bold">A.S Fintaccx Solutions</span>
          </div>
          <div className="text-sm text-blue-100 mb-2">L.I.G 1223 Awas Vikas No.3, Kalyanpur, Kanpur</div>
          <div className="text-sm text-blue-100 mb-2">Email: advanirudhsaxena@gmail.com</div>
          <div className="text-sm text-blue-100 mb-2">Phone: +91 7905641362 / +91 9919553216</div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <div>
            <h2 className="mb-2 text-lg font-semibold uppercase text-orange-400">Quick Links</h2>
            <ul className="text-blue-100 font-medium">
              <li className="mb-1"><a href="/about" className="hover:text-orange-400">About</a></li>
              <li className="mb-1"><a href="/services" className="hover:text-orange-400">Services</a></li>
              <li className="mb-1"><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold uppercase text-orange-400">Why Choose Us</h2>
            <ul className="text-blue-100 font-medium">
              <li className="mb-1">✔ Trusted by 250+ clients</li>
              <li className="mb-1">✔ Confidentiality</li>
              <li className="mb-1">✔ Fast Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-200 text-xs py-4 border-t border-blue-800">
        © 2024 A.S Fintaccx Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
