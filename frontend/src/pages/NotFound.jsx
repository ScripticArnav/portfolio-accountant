import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-100 text-red-600 mb-6 shadow-lg">
          <ExclamationTriangleIcon className="w-10 h-10" />
        </div>
        <p className="text-sm font-semibold text-red-500 tracking-widest uppercase mb-3">
          404 - Page Not Found
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Oops! This page doesn&apos;t exist.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The link you followed may be broken, or the page may have been removed. 
          Please check the URL or go back to the homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-2xl border-2 border-emerald-500 text-emerald-700 font-semibold bg-white hover:bg-emerald-50 hover:shadow-md hover:scale-105 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
