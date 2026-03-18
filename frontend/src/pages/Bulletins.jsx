import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
  NewspaperIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  BookmarkIcon,
  ShareIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Bulletins = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [bulletins, setBulletins] = useState([]);
  const [filteredBulletins, setFilteredBulletins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Bulletins', icon: '📢', count: 0 },
    { id: 'rbi', name: 'RBI', icon: '🏦', count: 0 },
    { id: 'sebi', name: 'SEBI', icon: '📈', count: 0 },
    { id: 'income-tax', name: 'Income Tax', icon: '💰', count: 0 },
    { id: 'gst', name: 'GST', icon: '🧾', count: 0 },
    { id: 'company-law', name: 'Company Law', icon: '⚖️', count: 0 },
    { id: 'fema', name: 'FEMA', icon: '🌍', count: 0 },
    { id: 'accounting-standards', name: 'Accounting Standards', icon: '📊', count: 0 },
    { id: 'labour-laws', name: 'Labour Laws', icon: '👥', count: 0 }
  ];

  const BULLETINS_PER_PAGE = 12;

  // Mock data for demo
  const mockBulletins = [
    {
      id: 1,
      title: 'GST Council 55th Meeting - Key Recommendations (Oct 2024)',
      category: 'gst',
      description: 'Rate rationalization, new exemptions, ITC clarifications, and procedural changes.',
      date: '2024-10-15',
      authority: 'GST Council',
      priority: 'high',
      impact: 'medium',
      fileUrl: '/downloads/gst-council-55th.pdf',
      tags: ['Rate Change', 'ITC', 'Exemptions']
    },
    {
      id: 2,
      title: 'Income Tax - New Assessment Rules for AY 2025-26',
      category: 'income-tax',
      description: 'Revised timelines, faceless assessment, and appeal procedures.',
      date: '2024-10-12',
      authority: 'CBDT',
      priority: 'high',
      impact: 'high',
      fileUrl: '/downloads/it-assessment-2025.pdf',
      tags: ['Assessment', 'AY2025', 'Faceless']
    },
    {
      id: 3,
      title: 'RBI Circular - Liberalized Remittance Scheme Updates',
      category: 'rbi',
      description: 'Revised LRS limits, documentation requirements, and reporting norms.',
      date: '2024-10-10',
      authority: 'RBI',
      priority: 'medium',
      impact: 'medium',
      fileUrl: '/downloads/rbi-lrs-2024.pdf',
      tags: ['LRS', 'Forex', 'Remittance']
    },
    {
      id: 4,
      title: 'SEBI - New ESG Disclosure Requirements',
      category: 'sebi',
      description: 'Mandatory ESG reporting framework for listed companies.',
      date: '2024-10-08',
      authority: 'SEBI',
      priority: 'high',
      impact: 'high',
      fileUrl: '/downloads/sebi-esg-2024.pdf',
      tags: ['ESG', 'Disclosure', 'Listed Cos']
    },
    {
      id: 5,
      title: 'MCA - Annual Filings Due Dates Extended',
      category: 'company-law',
      description: 'Extension for AOC-4, MGT-7, and other annual returns till Nov 30, 2024.',
      date: '2024-10-05',
      authority: 'MCA',
      priority: 'medium',
      impact: 'low',
      fileUrl: '/downloads/mca-extension-2024.pdf',
      tags: ['ROC', 'Extension', 'Annual Return']
    }
  ];

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/bulletins');
        setBulletins(response.data);
      } catch (error) {
        console.error('Error fetching bulletins:', error);
        setBulletins(mockBulletins);
      } finally {
        setLoading(false);
      }
    };

    fetchBulletins();
  }, []);

  useEffect(() => {
    let filtered = [...bulletins];

    if (searchTerm) {
      filtered = filtered.filter(bulletin =>
        bulletin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bulletin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bulletin.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(bulletin => bulletin.category === selectedCategory);
    }

    setFilteredBulletins(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, bulletins]);

  const toggleBookmark = (bulletinId) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(bulletinId)) {
      newBookmarks.delete(bulletinId);
    } else {
      newBookmarks.add(bulletinId);
    }
    setBookmarks(newBookmarks);
  };

  const currentBulletins = filteredBulletins.slice(
    (currentPage - 1) * BULLETINS_PER_PAGE,
    currentPage * BULLETINS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBulletins.length / BULLETINS_PER_PAGE);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'from-red-500 to-red-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      case 'low': return 'from-emerald-500 to-emerald-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getImpactIcon = (impact) => {
    switch (impact) {
      case 'high': return '🚨';
      case 'medium': return '⚠️';
      case 'low': return 'ℹ️';
      default: return '📄';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600">Loading regulatory updates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl mb-8 shadow-2xl">
            <NewspaperIcon className="w-10 h-10 mr-4" />
            <span className="text-3xl font-bold">Regulatory Bulletins</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Latest <span className="text-red-400">Compliance</span>
            <span className="block text-yellow-300">Updates</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Real-time regulatory notifications from RBI, SEBI, GST, Income Tax and more
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">250+</div>
              <div className="opacity-90">Total Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">9</div>
              <div className="opacity-90">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">Daily</div>
              <div className="opacity-90">Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="opacity-90">Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white/80 backdrop-blur-xl shadow-2xl sticky top-0 z-20 -mt-12 mx-6 lg:mx-12 rounded-3xl p-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
          {/* Search */}
          <div className="relative flex-1 max-w-2xl order-2 lg:order-1">
            <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-400" />
            <input
              type="text"
              placeholder="Search notifications, circulars, guidelines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-16 py-6 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition-all duration-300 shadow-xl"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-1 bg-gray-100/50 p-3 rounded-3xl order-1 lg:order-2 flex-wrap gap-2 justify-center lg:justify-start">
            <FunnelIcon className="w-8 h-8 text-gray-500 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-primary-500/50 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl hover:scale-105 border border-gray-200 hover:border-primary-300'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-between text-center sm:text-left">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {filteredBulletins.length} Bulletins found
              </p>
              <p className="text-lg text-gray-600">
                {selectedCategory !== 'all' ? `in ${categories.find(c => c.id === selectedCategory)?.name}` : ''} •{' '}
                {searchTerm ? `"${searchTerm}"` : 'All updates'}
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Sort by: <strong>Latest</strong></span>
              <span>Page {currentPage} of {totalPages}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bulletins Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {currentBulletins.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {currentBulletins.map((bulletin) => (
                <BulletinCard
                  key={bulletin.id}
                  bulletin={bulletin}
                  isBookmarked={bookmarks.has(bulletin.id)}
                  onBookmarkToggle={() => toggleBookmark(bulletin.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-white border border-gray-300 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-primary-500/50 scale-105 w-12'
                      : 'bg-white border border-gray-300 text-gray-700 hover:shadow-xl hover:scale-105 hover:bg-gray-50 w-12'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-white border border-gray-300 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-48">
            <NewspaperIcon className="w-32 h-32 text-gray-300 mx-auto mb-12 opacity-50" />
            <h3 className="text-4xl font-bold text-gray-900 mb-6">No bulletins found</h3>
            <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
              Try adjusting your search or category filters to see regulatory updates
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Clear All Filters
              </button>
              <Link
                to="/knowledge-bank"
                className="px-10 py-4 border-2 border-primary-200 text-primary-700 font-bold text-xl rounded-3xl hover:bg-primary-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Browse Knowledge Bank
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

// Bulletin Card Component
const BulletinCard = ({ bulletin, isBookmarked, onBookmarkToggle }) => {
  const getPriorityBadge = (priority) => {
    const colors = {
      high: 'from-red-500 to-red-600',
      medium: 'from-yellow-500 to-yellow-600',
      low: 'from-emerald-500 to-emerald-600'
    };
    return colors[bulletin.priority] || 'from-gray-500 to-gray-600';
  };

  return (
    <article className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 border border-white/50 cursor-pointer hover:bg-white">
      {/* Header with Priority Badge */}
      <div className="relative">
        <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl text-white font-bold text-sm shadow-2xl ${getPriorityBadge(bulletin.priority)}`}>
          {bulletin.priority.toUpperCase()}
        </div>
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="h-full w-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 relative z-10">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 text-sm font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span className="mr-2">{categories.find(c => c.id === bulletin.category)?.icon}</span>
            {categories.find(c => c.id === bulletin.category)?.name}
          </span>
        </div>

        {/* Impact Icon */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <span className="text-2xl">{getImpactIcon(bulletin.impact)}</span>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors">
              {bulletin.title}
            </h4>
            <p className="text-xl text-gray-600 leading-relaxed line-clamp-2">
              {bulletin.description}
            </p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{formatDate(bulletin.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">{bulletin.authority}</span>
            </div>
          </div>
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
            <a href={bulletin.fileUrl} download className="p-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:bg-emerald-50">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L8 19l5.5-5.5M8 19l-5.5-5.5M19 10l-5.5 5.5m0 0L14 19l5.5-5.5M14 19l5.5-5.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
          <Link
            to={`/bulletins/${bulletin.id}`}
            className="flex-1 group inline-flex items-center justify-center text-xl font-bold text-primary-600 hover:text-primary-700 transition-all duration-300 py-4 px-6 rounded-2xl hover:bg-primary-50 hover:shadow-xl hover:scale-105"
          >
            Read Details
            <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <a
            href={bulletin.fileUrl}
            download
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            📥 Download PDF
          </a>
        </div>
      </div>
    </article>
  );
};

export default Bulletins;