import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowRightIcon,
  CalendarIcon,
  UserIcon,
  TagIcon,
  BookmarkIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

// Utility to format dates consistently across this page
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Categories', count: 0 },
    { id: 'tax', name: 'Tax & Compliance', count: 0 },
    { id: 'accounting', name: 'Accounting', count: 0 },
    { id: 'gst', name: 'GST', count: 0 },
    { id: 'finance', name: 'Finance', count: 0 },
    { id: 'business', name: 'Business Growth', count: 0 }
  ];

  const BLOGS_PER_PAGE = 9;

  // Mock data for demo (replace with API data)
  const mockBlogs = [
    {
      id: 1,
      title: 'GST Rate Changes Effective October 2024 - Complete Analysis',
      excerpt: 'Detailed breakdown of the latest GST council recommendations and their impact on businesses across sectors.',
      author: 'CA Priya Sharma',
      date: '2024-10-15',
      category: 'gst',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
      readTime: '8 min',
      tags: ['GST', 'Tax', 'Compliance', '2024'],
      views: 12543
    },
    {
      id: 2,
      title: 'New Income Tax Slabs vs Old Regime: Which is Better for You?',
      excerpt: 'Comprehensive comparison with examples, deductions, and rebate analysis for FY 2024-25.',
      author: 'Rahul Mehta',
      date: '2024-10-10',
      category: 'tax',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
      readTime: '12 min',
      tags: ['Income Tax', 'Salaried', 'Deductions'],
      views: 9876
    },
    {
      id: 3,
      title: 'TDS Compliance Checklist for FY 2024-25',
      excerpt: 'Step-by-step guide to ensure 100% TDS compliance and avoid penalties.',
      author: 'Neha Gupta',
      date: '2024-10-08',
      category: 'tax',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      readTime: '6 min',
      tags: ['TDS', 'Compliance', 'Checklist'],
      views: 8542
    },
    {
      id: 4,
      title: 'Cloud Accounting: Why Every Business Needs It Now',
      excerpt: 'Benefits, implementation guide, and top software recommendations for 2024.',
      author: 'Amit Sharma',
      date: '2024-10-05',
      category: 'accounting',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e9?w=800',
      readTime: '10 min',
      tags: ['Accounting', 'Cloud', 'Software'],
      views: 7234
    },
    {
      id: 5,
      title: 'Transfer Pricing Regulations: Complete Guide for SMEs',
      excerpt: 'Simplified explanation of TP rules, documentation, and compliance requirements.',
      author: 'CA Priya Sharma',
      date: '2024-10-02',
      category: 'tax',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      readTime: '15 min',
      tags: ['Transfer Pricing', 'SME', 'International'],
      views: 6231
    }
  ];

  useEffect(() => {
    // Fetch blogs from API
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
        
        // Calculate category counts
        const categoryCounts = categories.map(cat => ({
          ...cat,
          count: response.data.filter(blog => cat.id === 'all' || blog.category === cat.id).length
        }));
        // Update categories with counts (simplified)
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Use mock data as fallback
        setBlogs(mockBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = [...blogs];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, blogs]);

  const toggleBookmark = (blogId) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(blogId)) {
      newBookmarks.delete(blogId);
    } else {
      newBookmarks.add(blogId);
    }
    setBookmarks(newBookmarks);
  };

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600">Loading latest insights...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Expert <span className="text-yellow-300">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            Latest articles, analysis, and compliance updates from our financial experts
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">150+ Articles</span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">50K+ Readers</span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl">Updated Daily</span>
          </div>
        </div>
      </section>

      <div className="relative -mt-20 z-10">
        {/* Filters & Search */}
        <section className="bg-white shadow-2xl rounded-3xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl p-8 mb-24">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, compliance updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-12 py-5 border-2 border-gray-200 rounded-3xl text-xl focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition-all duration-300 shadow-xl"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-3 bg-gray-100 p-2 rounded-2xl">
              <FunnelIcon className="w-7 h-7 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent border-none outline-none text-xl font-semibold px-4 py-2 cursor-pointer appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-600">
              Showing {filteredBlogs.length} results for "{searchTerm}" in {selectedCategory}
            </p>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {currentBlogs.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    isBookmarked={bookmarks.has(blog.id)}
                    onBookmarkToggle={() => toggleBookmark(blog.id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-primary-500/50 scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl hover:scale-105 border border-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-32">
              <MagnifyingGlassIcon className="w-32 h-32 text-gray-300 mx-auto mb-12 opacity-50" />
              <h3 className="text-4xl font-bold text-gray-900 mb-6">No articles found</h3>
              <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-12 py-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xl font-bold rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ blog, isBookmarked, onBookmarkToggle }) => {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:scale-[1.02] border border-gray-100 cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-105"
        />
        <div className="absolute top-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={onBookmarkToggle}
            className={`p-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${
              isBookmarked 
                ? 'text-yellow-500 hover:bg-yellow-50' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            <BookmarkIcon className="w-6 h-6" />
          </button>
          <button className="p-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:bg-gray-100">
            <ShareIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-10">
        {/* Category & Date */}
        <div className="flex items-center space-x-4 mb-6">
          <Link
            to={`/blogs?category=${blog.category}`}
            className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 text-sm font-bold rounded-2xl hover:bg-primary-200 hover:shadow-md transition-all duration-300"
          >
            {blog.category.toUpperCase()}
          </Link>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <CalendarIcon className="w-4 h-4" />
            <span>{formatDate(blog.date)}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <UserIcon className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight line-clamp-3 group-hover:text-primary-600 transition-colors hover:line-clamp-none">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>👁️ {blog.views.toLocaleString()} views</span>
            <span>📖 {blog.readTime} read</span>
          </div>
          <div className="flex items-center space-x-2">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary-100 hover:text-primary-700 transition-all duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <Link
          to={`/blogs/${blog.id}`}
          className="inline-flex items-center text-xl font-bold text-primary-600 hover:text-primary-700 transition-all duration-300 group-hover:translate-x-2"
        >
          Read Full Article
          <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default Blogs;