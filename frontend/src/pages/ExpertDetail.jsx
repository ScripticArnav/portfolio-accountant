import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  CreditCardIcon,
  LightBulbIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const ExpertDetail = () => {
  const qualifications = [
    { title: 'LLB (Bachelor of Laws)', institution: 'Ram Janki College of Law', university: 'CSJM University', percentage: '65%', year: '2021', focus: 'Corporate laws, business regulations and legal framework applicable to businesses and compliance.' },
    { title: 'CMA Intermediate', institution: 'Institute of Cost Accountants of India', university: 'ICAI', percentage: 'Group I: 50.75% | Group II: 64.50%', year: 'Dec-2020', focus: 'Cost accounting, financial management, taxation and performance management.' },
    { title: 'Bachelor of Commerce (B.Com)', institution: 'DAV College', university: 'CSJM University', percentage: '52%', year: '2018', focus: 'Core subjects: accounting, finance, taxation and business management.' }
  ];

  const services = [
    { icon: '📊', title: 'Income Tax Compliance & Advisory', desc: 'Professional income tax filing and strategic planning' },
    { icon: '💰', title: 'GST Services', desc: 'GST registration, compliance, and advisory (Registered GST Practitioner)' },
    { icon: '📈', title: 'Cost Accounting & Costing', desc: 'Cost analysis, management accounting, and financial optimization' },
    { icon: '💼', title: 'Finance & Business Advisory', desc: 'Financial planning, business strategy, and corporate advisory' },
    { icon: '✅', title: 'Compliance & Internal Audit', desc: 'Regulatory compliance and internal audit services' },
    { icon: '🛂', title: 'Customs & Trade Services', desc: 'Customs clearance, import-export, and trade compliance' },
    { icon: '🏢', title: 'Virtual CFO Services', desc: 'CFO-level financial management and reporting' },
    { icon: '🚀', title: 'Startup & SME Consulting', desc: 'Business registration, funding readiness, and growth strategy' },
    { icon: '⚖️', title: 'Legal & Trademark Services', desc: 'Legal advisory and trademark registration (Registered Trademark Attorney)' },
    { icon: '🤖', title: 'AI & Tech Integration', desc: 'AI enthusiast with modern business solutions' }
  ];

  const expertise = [
    'Income Tax Planning & Compliance',
    'GST Advisory & Implementation',
    'Cost Accounting & Management Accounting',
    'Financial Advisory & Planning',
    'Business Compliance & Audit',
    'Customs & International Trade',
    'Virtual CFO Services',
    'Startup & SME Growth Strategy',
    'Trademark & IP Advisory',
    'Networking & Entrepreneurship',
    'Insurance Solutions',
    'Business Valuation'
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-slate-950 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(241,245,249,0.18),_transparent_30%)]"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 text-sm font-semibold text-white/90 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-yellow-300" />
                Trusted Financial & Legal Advisor
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Finance, Tax & Compliance Expert
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-xl leading-relaxed mb-6">
                Finance, Cost Accounting & Business Advisory Professional | CMA Finalist | ACCA (Applied Skills Completed) | LLB
              </p>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
                Guiding businesses through financial compliance, tax strategy, legal advisory, and sustainable growth. Registered GST Practitioner & Trademark Attorney.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <AcademicCapIcon className="w-5 h-5 text-yellow-300" />
                  Education-First Approach
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <BriefcaseIcon className="w-5 h-5 text-cyan-300" />
                  Multi-Domain Expert
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-yellow-300/20 to-transparent" />
                <div className="relative flex flex-col gap-6">
                  <div className="h-72 rounded-3xl overflow-hidden bg-slate-900 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                      alt="Finance & Business Advisor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-slate-100">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Specialties</p>
                      <p className="text-lg font-semibold">Income Tax, GST, Cost Accounting, Finance Advisory</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Credentials</p>
                      <p className="text-lg font-semibold">GST Practitioner | Trademark Attorney | CMA | ACCA</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-slate-400">Qualifications</p>
                        <p className="text-white font-semibold">5+</p>
                      </div>
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-slate-400">Service Areas</p>
                        <p className="text-white font-semibold">10+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600 mb-4">Professional Profile</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Expertise in Finance, Compliance & Legal Advisory</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Finance, Cost Accounting & Business Advisory Professional with diverse qualifications spanning Law, Accounting, and Management. Registered GST Practitioner and Trademark Attorney committed to helping businesses navigate compliance, optimize finances, and achieve sustainable growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <SparklesIcon className="w-8 h-8 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Multi-Disciplinary Expertise</h3>
                    <p className="text-gray-600">CMA Finalist, ACCA Applied Skills, LLB with specialization in finance, accounting, and legal compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-8 h-8 text-cyan-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Comprehensive Services</h3>
                    <p className="text-gray-600">Income tax, GST, cost accounting, finance advisory, compliance, customs, internal audit, and startup consulting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AcademicCapIcon className="w-8 h-8 text-emerald-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Registered Credentials</h3>
                    <p className="text-gray-600">Registered GST Practitioner and Registered Trademark Attorney with legal and compliance authority.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-4">Professional Qualifications</p>
                <ul className="space-y-4 text-gray-700">
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold">CMA Finalist</p>
                    <p className="text-sm text-slate-500">Cost and Management Accountancy — Cost accounting, financial management, taxation</p>
                  </li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold">ACCA (Applied Skills Completed)</p>
                    <p className="text-sm text-slate-500">Association of Chartered Certified Accountants — Advanced accounting and audit expertise</p>
                  </li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold">LLB (Bachelor of Laws)</p>
                    <p className="text-sm text-slate-500">Legal framework for business, compliance, and corporate advisory</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-4">Registered Designations</p>
                <div className="space-y-3 text-gray-700">
                  <span className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 p-4 w-full">
                    <CheckCircleIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    Registered GST Practitioner
                  </span>
                  <span className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 p-4 w-full">
                    <CheckCircleIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    Registered Trademark Attorney
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-4">Comprehensive Services</p>
            <h2 className="text-4xl font-bold mb-6">Tailored Solutions for Business Success</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">End-to-end professional services covering finance, compliance, legal advisory, and business growth strategies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="rounded-3xl bg-white/5 p-8 shadow-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600 mb-4">Areas of Expertise</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Knowledge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((exp, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-primary-50 border border-primary-100">
                <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-100 to-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-primary-600 mb-4 font-semibold">Educational Background</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Foundation for Excellence</h2>
              
              <div className="space-y-6">
                {qualifications.map((qual, idx) => (
                  <div key={idx} className="rounded-3xl bg-white p-8 shadow-lg border-l-4 border-primary-600">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{qual.title}</h3>
                        <p className="text-primary-600 font-semibold mt-1">{qual.institution}</p>
                      </div>
                      <span className="text-3xl font-bold text-primary-100">{qual.year}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">University:</span> {qual.university}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Performance:</span> {qual.percentage}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{qual.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-primary-600 mb-4 font-semibold">Professional Journey</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Growth Through Learning</h2>
              
              <div className="rounded-3xl bg-white p-10 shadow-xl mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary-600 text-white w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Strong Foundation</h3>
                    <p className="text-gray-600">Completed B.Com with 52% aggregate score, establishing core accounting and finance knowledge.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-10 shadow-xl mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary-600 text-white w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Professional Certification</h3>
                    <p className="text-gray-600">CMA Intermediate focused on cost accounting and financial management — Group I: 50.75%, Group II: 64.50%.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary-600 text-white w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Legal & Compliance Expertise</h3>
                    <p className="text-gray-600">LLB degree with focus on corporate laws, business regulations and legal framework for compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="rounded-3xl border border-slate-200 p-10 text-center hover:shadow-xl transition">
              <LightBulbIcon className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation-Focused</h3>
              <p className="text-gray-600">AI Enthusiast with commitment to modern solutions and technology-driven business strategies.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-10 text-center hover:shadow-xl transition">
              <UserGroupIcon className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Networking & Growth</h3>
              <p className="text-gray-600">Interested in networking with new professionals and fostering entrepreneurial ventures.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-10 text-center hover:shadow-xl transition">
              <CreditCardIcon className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Advisory</h3>
              <p className="text-gray-600">Integrated approach combining finance, legal, and business strategy for holistic solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-4">Why Choose This Advisor</p>
              <h2 className="text-4xl font-bold mb-8">Drive Results with Strategic Guidance</h2>
              <ul className="space-y-6 text-gray-300">
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white mb-2">✓ Multi-Disciplinary Expertise</p>
                  <p className="text-sm">Combines finance, accounting, legal knowledge, and business strategy in one advisor.</p>
                </li>
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white mb-2">✓ Registered Professional Authority</p>
                  <p className="text-sm">GST Practitioner and Trademark Attorney with legal standing and professional accountability.</p>
                </li>
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white mb-2">✓ End-to-End Solutions</p>
                  <p className="text-sm">From compliance and tax planning to startup advisory and business growth—comprehensive coverage.</p>
                </li>
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white mb-2">✓ Education-First Philosophy</p>
                  <p className="text-sm">Empowers clients through understanding—making informed decisions with confidence.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 shadow-2xl text-center">
              <GlobeAltIcon className="w-20 h-20 mx-auto mb-6 text-cyan-300" />
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 mb-8">Schedule a consultation to discuss your financial strategy, compliance needs, or business growth objectives.</p>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Whether you're a startup, SME, or established business, get tailored advice from a multi-domain professional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-primary-600 mb-4 font-semibold">Ready to Work Together</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Financial & Legal Strategy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Get expert guidance on tax planning, compliance, business strategy, and sustainable growth. Book a consultation today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary-600 text-white text-lg font-semibold hover:bg-primary-700 transition">Book Consultation</Link>
            <a href="mailto:contact@example.com" className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-primary-600 text-primary-600 text-lg font-semibold hover:bg-primary-50 transition">Send Inquiry</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertDetail;
