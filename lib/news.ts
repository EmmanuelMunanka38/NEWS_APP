// lib/news.ts
import { Article, NewsResponse } from "@/types/news";

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines(category: string = "general") {
  // Official NewsAPI categories
  const validCategories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  
  // If the category isn't official (like 'africa' or 'home'), we use 'general'
  const searchCategory = validCategories.includes(category.toLowerCase()) 
    ? category.toLowerCase() 
    : "general";

  try {
    if (!API_KEY) throw new Error("Missing News API Key");

    const res = await fetch(
      `${BASE_URL}/top-headlines?country=us&category=${searchCategory}&apiKey=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    
    const data: NewsResponse = await res.json();
    
    if (data.status !== "ok") {
        console.error("JOMAH API Error:", );
        return [];
    }
    
    return data.articles || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

// Added this for your Search Route to function!
export async function searchNews(query: string) {
  if (!query) return [];

  try {
    const res = await fetch(
      `${BASE_URL}/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${API_KEY}`,
      { next: { revalidate: 600 } } // Search updates more frequently
    );

    const data: NewsResponse = await res.json();
    return data.articles || [];
  } catch (error) {
    return [];
  }
}