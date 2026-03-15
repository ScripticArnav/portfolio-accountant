import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BriefcaseIcon,
  UsersIcon,
  TrophyIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: '',
    linkedin: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const jobOpenings = [
    {
      id: 'ca-senior',
      title: 'Senior Chartered Accountant',
      department: 'Accounting',
      location: 'Mumbai (Hybrid)',
      salary: '₹18-25 LPA',
      experience: '5-8 Years',
      type: 'Full-time',
      skills: ['GST', 'IFRS', 'Audit', 'Tally', 'Team Lead']
    },
    {
      id: 'tax-consultant',
      title: 'Tax Consultant (International)',
      department: 'Taxation',
      location: 'Mumbai / Remote',
      salary: '₹15-22 LPA',
      experience: '4-6 Years',
      type: 'Full-time',
      skills: ['Transfer Pricing', 'US Tax', 'GST', 'FEMA']
    },
    {
      id: 'cfo-virtual',
      title: 'Virtual CFO',
      department: 'Advisory',
      location: 'Remote (India)',
      salary: '₹25-35 LPA',
      experience: '8+ Years',
      type: 'Full-time',
      skills: ['Financial Planning', 'Fundraising', 'Strategy', 'Board Reporting']
    },
    {
      id: 'payroll-executive',
      title: 'Payroll Executive',
      department: 'Payroll',
      location: 'Mumbai (On-site)',
      salary: '₹6-10 LPA',
      experience: '2-4 Years',
      type: 'Full-time',
      skills: ['Payroll Processing', 'Statutory Compliance', 'Excel', 'Zoho Payroll']
    },
    {
      id: 'content-writer',
      title: 'Finance Content Writer',
      department: 'Marketing',
      location: 'Remote',
      salary: '₹8-12 LPA',
      experience: '3-5 Years',
      type: 'Full-time',
      skills: ['Financial Writing', 'SEO', 'Tax Knowledge', 'Blogging']
    }
  ];

  const companyBenefits = [
    'Competitive Salary + Performance Bonus',
    '25 Paid Leaves + 10 Sick Leaves',
    'Medical Insurance for Family',
    'Work from Home Flexibility',
    'Quarterly Training Budget',
    'ESOP for Senior Roles',
    'Team Offsites & Annual Retreats'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: '',
        linkedin: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Join Our <span className="text-yellow-300">Winning</span>
            <span className="block">Team</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Be part of India's fastest-growing financial consulting firm. Work with top clients and grow your career.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div>
              <div className="text-5xl font-bold text-yellow-300 mb-4">50+</div>
              <div className="text-xl opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-300 mb-4">500+</div>
              <div className="text-xl opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-300 mb-4">98%</div>
              <div className="text-xl opacity-90">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {[
                  { id: 'openings', label: 'Open Positions', icon: BriefcaseIcon },
                  { id: 'culture', label: 'Our Culture', icon: UsersIcon },
                  { id: 'benefits', label: 'Benefits', icon: TrophyIcon },
                  { id: 'apply', label: 'Apply Now', icon: CheckCircleIcon }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group inline-flex items-center px-6 py-6 border-b-2 font-bold text-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'border-emerald-500 text-emerald-600 shadow-emerald-200/50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className={`w-8 h-8 mr-3 group-hover:scale-110 transition-transform ${activeTab === tab.id ? 'text-emerald-600' : 'text-gray-400'}`} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {activeTab === 'openings' && (
          <OpenPositions openings={jobOpenings} />
        )}
        {activeTab === 'culture' && (
          <CompanyCulture />
        )}
        {activeTab === 'benefits' && (
          <EmployeeBenefits benefits={companyBenefits} />
        )}
        {activeTab === 'apply' && (
          <ApplyForm 
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            jobOpenings={jobOpenings}
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
            onFileChange={handleFileChange}
          />
        )}
      </div>
    </div>
  );
};

// Open Positions Component
const OpenPositions = ({ openings }) => {
  return (
    <div>
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">We're Hiring</h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Join our team of 50+ finance professionals serving 500+ clients
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {openings.map((opening) => (
          <JobCard key={opening.id} opening={opening} />
        ))}
      </div>

      <div className="text-center mt-20">
        <Link
          to="#apply"
          className="inline-flex items-center px-12 py-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-2xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Apply for a Position
          <ArrowRightIcon className="ml-6 w-10 h-10 group-hover:translate-x-3 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

// Job Card Component
const JobCard = ({ opening }) => {
  return (
    <div className="group bg-gradient-to-br from-white to-emerald-50 hover:from-emerald-50 hover:to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-emerald-200 hover:border-emerald-400 cursor-pointer hover:scale-[1.02]">
      <div className="flex items-start space-x-6 mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-all duration-500">
          <BriefcaseIcon className="w-10 h-10 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-xl text-sm">
              {opening.department}
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 font-bold rounded-xl text-sm">
              {opening.location}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
            {opening.title}
          </h3>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-600">{opening.salary}</span>
          <span className="px-4 py-2 bg-green-100 text-green-800 font-bold rounded-xl text-sm">
            {opening.type}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-semibold">Experience:</span>
          <span className="ml-2">{opening.experience}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-8">
        {opening.skills.slice(0, 6).map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-xl hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300">
            {skill}
          </span>
        ))}
        {opening.skills.length > 6 && (
          <span className="px-4 py-2 bg-gray-100 text-gray-500 text-sm font-medium rounded-xl">
            +{opening.skills.length - 6} more
          </span>
        )}
      </div>

      <Link
        to="#apply"
        className="w-full block text-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xl rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group-hover:translate-y-0"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Apply Now
        <ArrowRightIcon className="ml-4 w-8 h-8 inline group-hover:translate-x-3 transition-transform" />
      </Link>
    </div>
  );
};

// Company Culture Component
const CompanyCulture = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Work at the <span className="text-emerald-600">Intersection</span>
          <span className="block">of Finance & Innovation</span>
        </h2>
        <div className="space-y-8 text-xl text-gray-700">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UsersIcon className="w-12 h-12 mr-4 text-emerald-600" />
              Collaborative Culture
            </h4>
            <p>Flat hierarchy, open communication, and team-first mentality. Your voice matters.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <TrophyIcon className="w-12 h-12 mr-4 text-emerald-600" />
              Growth Mindset
            </h4>
            <p>₹2L+ annual training budget, certifications sponsored, and clear career progression paths.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPinIcon className="w-12 h-12 mr-4 text-emerald-600" />
              Hybrid Work Model
            </h4>
            <p>3 days WFH, modern offices, global client exposure, and flexible hours.</p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Team collaboration"
          className="w-full h-96 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 rounded-3xl"></div>
      </div>
    </div>
  );
};

// Employee Benefits Component
const EmployeeBenefits = ({ benefits }) => {
  return (
    <div>
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Benefits That <span className="text-emerald-600">Matter</span>
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          We invest in our people because you are our greatest asset
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: CurrencyDollarIcon,
            title: 'Market-Beating Compensation',
            description: 'Top 10% salary + performance bonus + ESOPs'
          },
          {
            icon: UsersIcon,
            title: 'Comprehensive Health',
            description: 'Medical insurance for self + family + parents'
          },
          {
            icon: ClockIcon,
            title: 'Work-Life Balance',
            description: '25 PL + 10 SL + 5 special leaves'
          },
          {
            icon: BriefcaseIcon,
            title: 'Professional Growth',
            description: '₹2L training budget + certifications sponsored'
          },
          {
            icon: MapPinIcon,
            title: 'Flexible Work',
            description: 'Hybrid model + remote options available'
          },
          {
            icon: TrophyIcon,
            title: 'Team Celebrations',
            description: 'Monthly team events + annual retreats'
          }
        ].map((benefit, index) => (
          <div key={index} className="group text-center p-10 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-emerald-200 hover:border-emerald-400 hover:scale-[1.02]">
            <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500`}>
              <benefit.icon className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors">
              {benefit.title}
            </h4>
            <p className="text-xl text-gray-700 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-12 rounded-3xl shadow-2xl text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Join Us?</h3>
        <p className="text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
          Your career growth starts here. Apply today and become part of our success story.
        </p>
        <Link
          to="#apply"
          className="inline-flex items-center px-12 py-8 bg-white text-emerald-600 text-2xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl hover:bg-gray-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          View Open Positions
          <ArrowRightIcon className="ml-6 w-10 h-10 group-hover:translate-x-3 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

// Apply Form Component
const ApplyForm = ({ formData, setFormData, isSubmitting, submitStatus, jobOpenings, onSubmit, onInputChange, onFileChange }) => {
  return (
    <div>
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Apply for a Position</h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Fast-track your application. Our team reviews applications within 48 hours.
        </p>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-12 p-12 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-3xl shadow-2xl text-center">
          <CheckCircleIcon className="w-24 h-24 mx-auto mb-8" />
          <h3 className="text-4xl font-bold mb-6">Application Received!</h3>
          <p className="text-2xl mb-8">We'll review your application and contact you within 48 hours.</p>
          <p className="text-xl opacity-90">Reference ID: <strong>APP-{Date.now().toString().slice(-8)}</strong></p>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={onSubmit} className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-200 space-y-8">
          <div>
            <label className="block text-xl font-bold text-gray-900 mb-4">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onInputChange}
              className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-4">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
                placeholder="your.email@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-4">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
                placeholder="9876543210"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xl font-bold text-gray-900 mb-4">Position Applying For *</label>
            <select
              name="position"
              value={formData.position}
              onChange={onInputChange}
              className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
              required
            >
              <option value="">Select Position</option>
              {jobOpenings.map((opening) => (
                <option key={opening.id} value={opening.title}>
                  {opening.title} - {opening.department}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-4">Upload Resume * (PDF/DOCX)</label>
              <input
                type="file"
                name="resume"
             onChange={onFileChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all duration-300 shadow-xl file:mr-6 file:py-4 file:px-8 file:rounded-2xl file:border-0 file:text-xl file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                required
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-4">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={onInputChange}
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
                placeholder="linkedin.com/in/yourprofile"
              />
            </div>
          </div>

          <div>
            <label className="block text-xl font-bold text-gray-900 mb-4">
              Cover Letter (Optional)
            </label>
            <textarea
              name="coverLetter"
              rows="6"
              value={formData.coverLetter}
              onChange={onInputChange}
              className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 resize-vertical shadow-xl"
              placeholder="Tell us why you're excited about this role and how you can contribute..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-8 px-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-2xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none ${isSubmitting ? 'animate-pulse' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-6 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Application...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>

        {/* Job Openings Quick View */}
        <div className="lg:order-first">
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-10 shadow-xl border border-gray-200 sticky top-24">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Apply</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {jobOpenings.slice(0, 4).map((opening) => (
                <div
                  key={opening.id}
                  className="p-6 bg-white rounded-2xl hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-gray-200 cursor-pointer group hover:border-emerald-300"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, position: opening.title }));
                    document.querySelector('select[name="position"]').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-start space-x-4 mb-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {opening.title}
                      </h4>
                      <p className="text-emerald-600 font-bold">{opening.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{opening.department}</span>
                    <span>•</span>
                    <span>{opening.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;