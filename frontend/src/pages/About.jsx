import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-200 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white/90 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">A.S Fintaccx Solutions</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">About Us</h2>
          <p className="text-gray-800">We are a professional firm offering Tax, Legal, and Accounting Services with over 10 years experience.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Why Choose Us</h2>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Trusted By 250+ clients</li>
            <li>Confidentiality</li>
            <li>Fast Service</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Services Offered</h2>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Income tax</li>
            <li>GST</li>
            <li>Accounting</li>
            <li>Auditing Service</li>
            <li>Firm registration</li>
            <li>Company registration</li>
            <li>Digital signature</li>
            <li>Financial Arrangement (Loan), IEC and other customs related work</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Contact</h2>
          <div className="text-gray-800">
            <div className="mb-1 font-bold">Anirudh Saxena</div>
            <div className="mb-1">+91 7905641362 / +91 9919553216</div>
            <div className="mb-1">advanirudhsaxena@gmail.com</div>
            <div>L.I.G 1223 Awas Vikas No.3, Kalyanpur, Kanpur.</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About