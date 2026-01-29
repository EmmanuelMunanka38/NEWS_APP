import { Article } from "@/types/news";

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines(category: string = "general") {
  const validCategories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const searchCategory = validCategories.includes(category.toLowerCase()) ? category.toLowerCase() : "general";

  try {
    const res = await fetch(
      `${BASE_URL}/top-headlines?country=us&category=${searchCategory}&apiKey=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    return [];
  }
}

export async function searchNews(query: string) {
  if (!query) return [];
  try {
    const res = await fetch(
      `${BASE_URL}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`,
      { next: { revalidate: 600 } }
    );
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    return [];
  }
}