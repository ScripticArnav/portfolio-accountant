import { Link } from 'react-router-dom';

const ServiceCard = ({ service, delay = 0 }) => {
  return (
    <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-50 hover:to-blue-50 border border-gray-100 hover:border-primary-200 overflow-hidden"
         style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
        <span className="text-3xl">{service.icon || '📊'}</span>
      </div>
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-primary-600 transition-colors">{service.title}</h4>
      <p className="text-gray-600 mb-8 text-center leading-relaxed">{service.description}</p>
      <Link
        to="/services"
        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mx-auto group-hover:translate-x-2"
      >
        Learn More
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;