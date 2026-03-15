import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  FolderIcon,
  CheckCircleIcon,
  StarIcon,
  BookmarkIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const Forms = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState(new Set());
  const [totalDownloads, setTotalDownloads] = useState(0);

  const categories = [
    { id: 'all', name: 'All Forms', icon: '📋', count: 0 },
    { id: 'gst', name: 'GST Forms', icon: '🧾', count: 0 },
    { id: 'income-tax', name: 'Income Tax', icon: '💰', count: 0 },
    { id: 'fema', name: 'FEMA Forms', icon: '🌍', count: 0 },
    { id: 'roc', name: 'ROC/MCA', icon: '🏢', count: 0 },
    { id: 'llp', name: 'LLP Forms', icon: '👥', count: 0 },
    { id: 'nbfc', name: 'NBFC', icon: '🏦', count: 0 },
    { id: 'service-tax', name: 'Service Tax', icon: '💼', count: 0 }
  ];

  const FORMS_PER_PAGE = 12;

  // Mock data for demo (replace with real API data)
  const mockForms = [
    {
      id: 1,
      title: 'GSTR-1 (Monthly Return)',
      category: 'gst',
      description: 'Monthly GST sales return for regular taxpayers',
      version: 'v2.5',
      lastUpdated: '2024-10-15',
      fileSize: '245 KB',
      downloads: 12543,
      excelAvailable: true,
      priority: true,
      fileUrl: '/forms/gstr1.xlsx'
    },
    {
      id: 2,
      title: 'GSTR-3B (Summary Return)',
      category: 'gst',
      description: 'Monthly summary return with tax payment details',
      version: 'v2.4',
      lastUpdated: '2024-10-10',
      fileSize: '189 KB',
      downloads: 21567,
      excelAvailable: true,
      priority: true,
      fileUrl: '/forms/gstr3b.xlsx'
    },
    {
      id: 3,
      title: 'ITR-1 (Sahaj) - Individuals',
      category: 'income-tax',
      description: 'For salaried individuals with income up to ₹50 lakhs',
      version: 'AY 2025-26',
      lastUpdated: '2024-10-12',
      fileSize: '1.2 MB',
      downloads: 98765,
      excelAvailable: true,
      priority: true,
      fileUrl: '/forms/itr1.xlsx'
    },
    {
      id: 4,
      title: 'Form 16 (TDS Certificate)',
      category: 'income-tax',
      description: 'Annual TDS certificate from employer',
      version: 'FY 2024-25',
      lastUpdated: '2024-10-08',
      fileSize: '156 KB',
      downloads: 54321,
      excelAvailable: true,
      priority: false,
      fileUrl: '/forms/form16.xlsx'
    },
    {
      id: 5,
      title: 'DIR-3 KYC (Director Compliance)',
      category: 'roc',
      description: 'Annual KYC filing for all directors',
      version: '2024',
      lastUpdated: '2024-10-05',
      fileSize: '89 KB',
      downloads: 23456,
      excelAvailable: false,
      priority: true,
      fileUrl: '/forms/dir3kyc.pdf'
    },
    {
      id: 6,
      title: 'FC-GPR (FDI Compliance)',
      category: 'fema',
      description: 'Reporting form for foreign direct investment',
      version: 'Revised 2024',
      lastUpdated: '2024-10-02',
      fileSize: '2.1 MB',
      downloads: 8765,
      excelAvailable: false,
      priority: false,
      fileUrl: '/forms/fcgpr.pdf'
    }
  ];

  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/forms');
        setForms(response.data);
        setTotalDownloads(response.data.reduce((sum, form) => sum + form.downloads, 0));
      } catch (error) {
        console.error('Error fetching forms:', error);
        setForms(mockForms);
        setTotalDownloads(mockForms.reduce((sum, form) => sum + form.downloads, 0));
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  useEffect(() => {
    let filtered = [...forms];

    if (searchTerm.trim()) {
      filtered = filtered.filter(form =>
        form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(form => form.category === selectedCategory);
    }

    setFilteredForms(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, forms]);

  const toggleBookmark = (formId) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(formId)) {
      newBookmarks.delete(formId);
    } else {
      newBookmarks.add(formId);
    }
    setBookmarks(newBookmarks);
  };

  const handleDownload = (form) => {
    // Track download
    console.log(`Downloaded: ${form.title}`);
    // In production: send analytics event
    window.open(form.fileUrl, '_blank');
  };

  const currentForms = filteredForms.slice(
    (currentPage - 1) * FORMS_PER_PAGE,
    currentPage * FORMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredForms.length / FORMS_PER_PAGE);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-8 shadow-2xl"></div>
          <p className="text-2xl text-gray-600 font-semibold">Loading forms library...</p>
          <p className="text-lg text-gray-500 mt-2">100+ regulatory templates available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl mb-8 shadow-2xl">
            <FolderIcon className="w-12 h-12 mr-4" />
            <span className="text-3xl font-bold">Forms Library</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ready-to-Use <span className="text-yellow-300">Forms</span>
            <span className="block">and Templates</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Latest regulatory forms for GST, Income Tax, ROC, FEMA and more - Excel & PDF formats
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">100+</div>
              <div className="opacity-90">Forms Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">50K+</div>
              <div className="opacity-90">Downloads/Month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">7</div>
              <div className="opacity-90">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">{totalDownloads.toLocaleString()}</div>
              <div className="opacity-90">Total Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white/90 backdrop-blur-xl shadow-2xl sticky top-0 z-20 -mt-12 mx-6 lg:mx-12 rounded-3xl p-8 mb-24 border border-emerald-200">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Search */}
          <div className="relative flex-1 order-2 lg:order-1">
            <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search GSTR, ITR, ROC forms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-16 py-6 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 shadow-xl"
            />
          </div>

          {/* Category Filter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 order-1 lg:order-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group p-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center space-x-3 hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/50 border-2 border-emerald-400'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="leading-tight">{category.name}</span>
                {selectedCategory === category.id && (
                  <CheckCircleIcon className="w-6 h-6 ml-auto text-white flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {filteredForms.length} Forms Available
              </p>
              <p className="text-xl text-gray-600">
                {selectedCategory !== 'all' ? `in ${categories.find(c => c.id === selectedCategory)?.name}` : ''}{' '}
                {searchTerm && `matching "${searchTerm}"`}
              </p>
            </div>
            <div className="flex items-center space-x-8 text-lg text-gray-500 flex-wrap gap-4 justify-center lg:justify-end">
              <span>Excel: <strong>{forms.filter(f => f.excelAvailable).length}</strong></span>
              <span>Priority: <strong>{forms.filter(f => f.priority).length}</strong></span>
              <span>Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {currentForms.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {currentForms.map((form) => (
                <FormCard
                  key={form.id}
                  form={form}
                  isBookmarked={bookmarks.has(form.id)}
                  onBookmarkToggle={() => toggleBookmark(form.id)}
                  onDownload={handleDownload}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center flex-wrap gap-3">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-8 py-4 bg-white border-2 border-emerald-200 text-emerald-700 font-bold rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-emerald-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                ← Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-6 py-4 rounded-3xl font-bold shadow-xl transition-all duration-300 w-14 h-14 flex items-center justify-center ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/50 scale-110 border-4 border-emerald-400'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:shadow-2xl hover:scale-105 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-8 py-4 bg-white border-2 border-emerald-200 text-emerald-700 font-bold rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-emerald-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                Next →
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-48">
            <FolderIcon className="w-32 h-32 text-gray-300 mx-auto mb-12 opacity-50" />
            <h3 className="text-4xl font-bold text-gray-900 mb-6">No forms found</h3>
            <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
              Try different search terms or category filters
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Show All Forms
              </button>
              <Link
                to="/knowledge-bank"
                className="px-12 py-6 border-4 border-emerald-200 text-emerald-700 font-bold text-xl rounded-3xl hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white"
              >
                Knowledge Bank
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

// Form Card Component
const FormCard = ({ form, isBookmarked, onBookmarkToggle, onDownload }) => {
  return (
    <article className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 border border-white/50 cursor-pointer overflow-hidden hover:bg-white">
      {/* Header */}
      <div className="p-8 pb-4 relative">
        {/* Priority Badge */}
        {form.priority && (
          <div className="absolute top-6 right-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-primary-900 text-sm font-bold rounded-2xl shadow-2xl">
              <StarIcon className="w-5 h-5 fill-current" />
              <span>Priority</span>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 text-sm font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <FolderIcon className="w-4 h-4 mr-2" />
            {categories.find(c => c.id === form.category)?.name}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {form.title}
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed line-clamp-3 mb-8">
          {form.description}
        </p>
      </div>

      {/* Meta Info */}
      <div className="px-8 pb-8 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-6 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center space-x-2">
              <span>📄 v{form.version}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{formatDate(form.lastUpdated)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📥 {form.downloads.toLocaleString()} downloads</span>
            </div>
            {form.excelAvailable && (
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-xl">
                <span>Excel</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={onBookmarkToggle}
              className={`p-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${
                isBookmarked 
                  ? 'text-yellow-500 hover:bg-yellow-50 border-2 border-yellow-200' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-2 border-gray-200'
              }`}
            >
              <BookmarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-3xl border-2 border-emerald-200 group-hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                <ArrowDownTrayIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-emerald-900">{form.fileSize}</div>
                <div className="text-sm text-emerald-700">Ready to download</div>
              </div>
            </div>
            <span className="text-2xl font-bold text-emerald-600">{form.fileSize}</span>
          </div>
          
          <button
            onClick={() => onDownload(form)}
            className="w-full group/form flex items-center justify-center space-x-3 px-8 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            <ArrowDownTrayIcon className="w-8 h-8 group-hover/form:rotate-180 transition-transform duration-300" />
            <span>Download {form.excelAvailable ? 'Excel' : 'PDF'}</span>
            <ArrowRightIcon className="w-7 h-7 group-hover/form:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Forms;