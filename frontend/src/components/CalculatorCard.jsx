import { Link } from 'react-router-dom';

const CalculatorCard = ({ calculator }) => {
  return (
    <Link to={calculator.link} className="group bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-4 hover:from-primary-600 hover:to-primary-700 transition-all duration-500 shadow-xl border border-gray-700 hover:border-primary-500">
      <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
        <span className="text-2xl">{calculator.icon}</span>
      </div>
      <h4 className="text-2xl font-bold mb-4 text-center">{calculator.title}</h4>
      <p className="text-gray-300 mb-8 text-center opacity-90">{calculator.desc}</p>
      <div className="flex items-center justify-center text-white/80 font-semibold hover:text-white transition-colors mx-auto">
        Calculate Now
        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  );
};

export default CalculatorCard;