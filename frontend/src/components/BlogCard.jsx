import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to="/blogs" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-white">
      <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
        <img 
          src={blog.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full">{blog.category || 'Finance'}</span>
          <span className="ml-4">{blog.date || 'Jan 15, 2024'}</span>
        </div>
        <h4 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors line-clamp-2">
          {blog.title}
        </h4>
        <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
          Read Full Article
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;