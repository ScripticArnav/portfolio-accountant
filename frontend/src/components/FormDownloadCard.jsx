import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DocumentDownloadIcon,
  FolderIcon,
  StarIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const FormDownloadCard = ({ 
  form, 
  isBookmarked = false, 
  onBookmarkToggle, 
  onDownload,
  className = "",
  showPreview = false 
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      gst: 'from-emerald-500 to-green-600',
      'income-tax': 'from-blue-500 to-indigo-600',
      roc: 'from-purple-500 to-pink-600',
      fema: 'from-orange-500 to-red-600',
      llp: 'from-teal-500 to-cyan-600',
      nbfc: 'from-amber-500 to-yellow-600',
      'service-tax': 'from-gray-500 to-gray-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await onDownload?.(form);
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      <article className={`group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 overflow-hidden border border-white/60 hover:border-emerald-300 cursor-pointer ${className}`}>
        {/* Header with Category Badge */}
        <div className="p-8 pb-6 relative">
          {/* Priority Star */}
          {form.priority && (
            <div className="absolute top-6 right-6 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-2xl">
              <StarIcon className="w-7 h-7 text-yellow-900 fill-current" />
            </div>
          )}

          {/* Category Badge */}
          <div className="mb-6 inline-block">
            <span className={`px-5 py-3 rounded-2xl text-white font-bold text-sm shadow-xl inline-flex items-center space-x-2 ${getCategoryColor(form.category)}`}>
              <FolderIcon className="w-5 h-5" />
              <span>{form.category.toUpperCase()}</span>
            </span>
          </div>

          {/* Form Icon & Title */}
          <div className="flex items-start space-x-6 mb-6">
            <div className={`w-20 h-20 ${getCategoryColor(form.category)} rounded-3xl flex items-center justify-center shadow-2xl flex-shrink-0 group-hover:scale-110 transition-all duration-500`}>
              {form.excelAvailable ? (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 100-2H7a1 1 0 100 2h6zm-1 3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <DocumentDownloadIcon className="w-12 h-12 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-emerald-600 transition-all duration-300">
                {form.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed line-clamp-2">
                {form.description}
              </p>
            </div>
          </div>
        </div>

        {/* Meta Information */}
        <div className="px-8 pb-8 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
              <CalendarIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <span className="font-medium text-gray-900">{formatDate(form.lastUpdated)}</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
              <EyeIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="font-medium text-blue-900">{form.downloads.toLocaleString()} downloads</span>
            </div>
          </div>

          {/* File Info */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">
                  {form.excelAvailable ? 'XLSX' : 'PDF'}
                </span>
              </div>
              <div>
                <div className="font-bold text-lg text-emerald-900">v{form.version}</div>
                <div className="text-sm text-emerald-700">{formatFileSize(form.fileSizeInBytes || 245000)}</div>
              </div>
            </div>
            <span className="text-2xl font-bold text-emerald-600">{form.fileSize}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-8 pt-0 flex items-center space-x-4">
          {/* Bookmark Button */}
          <button
            onClick={onBookmarkToggle}
            className={`flex-1 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 ${
              isBookmarked
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 border-2 border-yellow-300 shadow-yellow-300/50'
                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <BookmarkIcon className={`w-7 h-7 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="font-bold text-lg">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          {/* Preview Button */}
          {showPreview && (
            <button
              onClick={() => setShowPreviewModal(true)}
              className="px-6 py-4 bg-white border-2 border-blue-200 text-blue-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
            >
              <EyeIcon className="w-6 h-6" />
              <span className="hidden sm:inline">Preview</span>
            </button>
          )}

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`flex-2 px-8 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-4 ${isDownloading ? 'animate-pulse' : ''}`}
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <ArrowDownTrayIcon className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                <span>Download {form.excelAvailable ? 'Excel' : 'PDF'}</span>
              </>
            )}
          </button>
        </div>
      </article>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${getCategoryColor(form.category)} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <FolderIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{form.title}</h2>
                    <p className="text-xl text-gray-600">{form.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="p-3 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              {/* Preview content placeholder */}
              <div className="bg-gray-50 rounded-2xl p-12 text-center">
                <DocumentDownloadIcon className="w-32 h-32 text-gray-400 mx-auto mb-8 opacity-50" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Form Preview</h3>
                <p className="text-xl text-gray-600 mb-8">Full preview available after download</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Download Now
                  </button>
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

FormDownloadCard.propTypes = {
  form: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    fileSize: PropTypes.string.isRequired,
    downloads: PropTypes.number.isRequired,
    excelAvailable: PropTypes.bool,
    priority: PropTypes.bool,
    fileUrl: PropTypes.string.isRequired,
    fileSizeInBytes: PropTypes.number
  }).isRequired,
  isBookmarked: PropTypes.bool,
  onBookmarkToggle: PropTypes.func,
  onDownload: PropTypes.func,
  className: PropTypes.string,
  showPreview: PropTypes.bool
};

FormDownloadCard.defaultProps = {
  isBookmarked: false,
  showPreview: false
};

export default FormDownloadCard;