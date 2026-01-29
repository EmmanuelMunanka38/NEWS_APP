import { searchNews } from "@/lib/news";
import NewsGrid from "@/components/NewsGrid";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const articles = q ? await searchNews(q) : [];

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 min-h-screen">
      <h2 className="text-sm font-black text-gray-400 uppercase mb-4 tracking-widest">
        Search Results for: <span className="text-black italic">"{q || "Everything"}"</span>
      </h2>
      {articles.length > 0 ? <NewsGrid articles={articles} /> : <p className="py-20 text-center text-gray-400 font-bold">NO ARCHIVES FOUND</p>}
    </main>
  );
}