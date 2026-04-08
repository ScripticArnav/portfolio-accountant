import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ExpertDetail = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-slate-950 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(241,245,249,0.18),_transparent_30%)]"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 text-sm font-semibold text-white/90 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-yellow-300" />
                Trusted Financial Advisor & Legal Strategist
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Anirudh Saxena
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-xl leading-relaxed mb-8">
                Founder & CEO at ASFintaccx Solutions — CMA, LLB, CA, CPA, MBA Finance. Guiding businesses through compliance, tax strategy, and corporate growth since 2013.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <AcademicCapIcon className="w-5 h-5 text-yellow-300" />
                  Education-led strategy
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <BriefcaseIcon className="w-5 h-5 text-cyan-300" />
                  12+ years experience
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
                      alt="Anirudh Saxena"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-slate-100">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Specialties</p>
                      <p className="text-lg font-semibold">Tax Law, Corporate Compliance, Audit Strategy</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Approach</p>
                      <p className="text-lg font-semibold">Education-led financial clarity with risk-aware execution</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-slate-400">Advisory Hours</p>
                        <p className="text-white font-semibold">12,000+</p>
                      </div>
                      <div className="rounded-2xl bg-slate-900/80 p-4">
                        <p className="text-slate-400">Client Retention</p>
                        <p className="text-white font-semibold">98%</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">From education to execution.</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Anirudh combines top-tier academic credentials with hands-on experience advising startups, SMEs, and established enterprises. His practical approach spans corporate finance, regulatory filings, intellectual property advisory, and growth-focused planning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <SparklesIcon className="w-8 h-8 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                    <p className="text-gray-600">CMA, LLB, CA, CPA, MBA Finance — delivered with a focus on practical business outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-8 h-8 text-cyan-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
                    <p className="text-gray-600">12+ years in financial advisory, tax planning, corporate strategy, and legal risk management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AcademicCapIcon className="w-8 h-8 text-emerald-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
                    <p className="text-gray-600">International finance certifications, professional accounting qualifications, and corporate law expertise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-4">Academic Journey</p>
                <ul className="space-y-4 text-gray-700">
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold">MBA in Finance</p>
                    <p className="text-sm text-slate-500">Strategic financial planning, investment analysis, and corporate valuation</p>
                  </li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold">Chartered Accountancy</p>
                    <p className="text-sm text-slate-500">Advanced audit, taxation, and compliance expertise</p>
                  </li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold">Law Degree (LLB)</p>
                    <p className="text-sm text-slate-500">Corporate law, contract advisory, and risk mitigation</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-4">Expertise & Focus</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                  <span className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 p-4">📌 Corporate Finance</span>
                  <span className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 p-4">📌 Tax Strategy</span>
                  <span className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 p-4">📌 Legal Compliance</span>
                  <span className="inline-flex items-center gap-3 rounded-2xl bg-slate-50 p-4">📌 Business Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-4">Career Highlights</p>
              <h2 className="text-4xl font-bold mb-6">Experience built on results.</h2>
              <ul className="space-y-5 text-gray-300">
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white">Led strategic tax transformation for 50+ companies</p>
                  <p className="mt-2 text-sm">Delivering better compliance, smarter savings, and more predictable cash flow.</p>
                </li>
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white">Built an advisory framework for startup growth</p>
                  <p className="mt-2 text-sm">From registration to funding readiness, with tax and legal clarity baked in.</p>
                </li>
                <li className="rounded-3xl bg-white/5 p-6 shadow-lg border border-white/10">
                  <p className="font-semibold text-white">Designed compliance workflows for cross-border businesses</p>
                  <p className="mt-2 text-sm">Ensuring regulatory comfort across India and international markets.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-3xl bg-yellow-300/20 p-4 text-yellow-300">
                  <GlobeAltIcon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Practice Pillars</p>
                  <p className="text-2xl font-bold">Strategy, Education, Execution</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-200">
                <p>From academic foundations to real-world execution, Anirudh builds every solution around what drives long-term business stability.</p>
                <p>He mentors clients through every phase — discovery, compliance, growth, and future-proof planning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-primary-600 mb-4">Connect with the expert</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Want the full advisory experience?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Schedule a consultation to discuss your business goals, compliance needs, or strategic growth plan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary-600 text-white text-lg font-semibold hover:bg-primary-700 transition">Book Consultation</Link>
            {/* <Link to="/client-portal" className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-slate-300 text-slate-900 text-lg font-semibold hover:bg-slate-100 transition">Open Client Portal</Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertDetail;
