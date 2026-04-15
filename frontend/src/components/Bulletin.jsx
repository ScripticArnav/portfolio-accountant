import { useEffect, useState } from "react";
import axios from "axios";
import backendUrl from "../url";

const Bulletin = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${backendUrl}/bulletin`);
      setNews(res.data);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  // ✅ Filter logic
  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter(item => item.category === selectedCategory);

  const categories = ["All", "RBI", "Stock", "Bank", "Law", "General"];

  const getCategoryColor = (category) => {
    const colors = {
      "RBI": "from-orange-500 to-orange-600",
      "Stock": "from-green-500 to-green-600",
      "Bank": "from-blue-500 to-blue-600",
      "Law": "from-purple-500 to-purple-600",
      "General": "from-gray-500 to-gray-600"
    };
    return colors[category] || "from-blue-500 to-blue-600";
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4">📢 Latest Bulletins</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with latest regulatory bulletins, circulars, and official announcements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-primary-400 hover:text-primary-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-4">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Category Tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{item.source}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description || "No description available"}
                  </p>

                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {item.date ? new Date(item.date).toLocaleDateString() : ""}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No bulletins available at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Please check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
