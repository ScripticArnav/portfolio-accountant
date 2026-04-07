import axios from "axios";
import Parser from "rss-parser";
import Bulletin from "../models/Bulletin.js";
import cron from "node-cron";

const parser = new Parser();

const getCategory = (text) => {
  const t = text.toLowerCase();

  if (t.includes("rbi") || t.includes("reserve bank"))
    return "RBI";

  if (t.includes("stock") || t.includes("share") || t.includes("market"))
    return "Stock";

  if (t.includes("bank") || t.includes("loan") || t.includes("interest"))
    return "Bank";

  if (t.includes("law") || t.includes("act") || t.includes("regulation"))
    return "Law";

  return "General";
};

// Default bulletins - always available
const DEFAULT_BULLETINS = [
  {
    title: "RBI Maintains Repo Rate at 6.5%",
    description: "RBI's Monetary Policy Committee keeps repo rate unchanged, citing inflation concerns. Current inflation remains above target levels.",
    url: "https://www.rbi.org.in",
    source: "RBI",
    category: "RBI",
    date: new Date(Date.now() - 3600000).toISOString()
  },
  {
    title: "GST Rate Changes for Q2 2024",
    description: "Latest GST rate amendments applicable. Check details for your business category to ensure compliance.",
    url: "https://www.cbic.gov.in",
    source: "CBIC",
    category: "Law",
    date: new Date(Date.now() - 7200000).toISOString()
  },
  {
    title: "Banking Sector Faces New Compliance Requirements",
    description: "RBI issues new circular on Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures.",
    url: "https://www.rbi.org.in",
    source: "RBI",
    category: "Bank",
    date: new Date(Date.now() - 10800000).toISOString()
  },
  {
    title: "Stock Market Volatility Index Reaches 3-Month High",
    description: "Market volatility increases due to global economic uncertainties. Investors advised to diversify portfolios.",
    url: "https://www.bseindia.com",
    source: "BSE",
    category: "Stock",
    date: new Date(Date.now() - 14400000).toISOString()
  },
  {
    title: "Income Tax Filing Deadline Extended",
    description: "CBDT announces extension for ITR filing deadline. New deadline is July 31, 2024 for certain categories.",
    url: "https://www.incometaxindia.gov.in",
    source: "CBDT",
    category: "Law",
    date: new Date(Date.now() - 18000000).toISOString()
  },
  {
    title: "Corporate Insolvency Resolution Process Updates",
    description: "IBBI releases updated guidelines to streamline resolution process and improve creditor recovery rates.",
    url: "https://www.ibbi.gov.in",
    source: "IBBI",
    category: "General",
    date: new Date(Date.now() - 21600000).toISOString()
  }
];

export const fetchAllNews = async () => {
  try {
    let allNews = [];

    // Fetch from NewsAPI
    try {
      const newsRes = await axios.get(
        `https://newsapi.org/v2/everything?q=(RBI OR banking OR GST OR taxation OR finance OR "stock market") AND (India OR Indian)&sortBy=publishedAt&language=en&apiKey=${process.env.YOUR_API_KEY}`
      );

      const newsArticles = newsRes.data.articles
        .filter(item => item.title && item.url && item.description)
        .slice(0, 50)
        .map(item => ({
          title: item.title,
          description: item.description,
          url: item.url,
          source: item.source?.name || "News",
          category: getCategory(item.title + " " + item.description),
          date: item.publishedAt
        }));

      allNews = [...allNews, ...newsArticles];
      console.log(`✅ Fetched ${newsArticles.length} news items`);
    } catch (err) {
      console.log(`⚠️ NewsAPI unavailable, using default data`);
    }

    // Use default bulletins if we don't have enough data
    if (allNews.length < 5) {
      allNews = [...allNews, ...DEFAULT_BULLETINS];
    }

    // Save to database
    if (allNews.length > 0) {
      await Bulletin.deleteMany({});
      await Bulletin.insertMany(allNews);
      console.log(`✅ Bulletins updated: ${allNews.length} items`);
    }
  } catch (err) {
    console.error("Error in fetchAllNews:", err.message);
  }
};

// Auto-fetch every 6 hours
export const startBulletinSchedule = () => {
  // Run immediately on startup
  fetchAllNews();
  
  // Then run every 6 hours
  cron.schedule("0 */6 * * *", () => {
    console.log("🔄 Auto-refreshing bulletins...");
    fetchAllNews();
  });
  
  console.log("✅ Bulletin scheduler started");
};
