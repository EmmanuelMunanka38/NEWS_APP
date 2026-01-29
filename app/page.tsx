// app/page.tsx
import { getTopHeadlines } from "@/lib/news";
import NewsGrid from "@/components/NewsGrid";

export default async function HomePage() {
  // Fetching general news for the home page
  // We use 'await' because getTopHeadlines is an async function
  const articles = await getTopHeadlines("general");

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* 1. Featured Section / Hero */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900">Top Stories</h2>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">Live Updates</span>
          </div>
        </div>
        
        {/* 2. The Main News Grid */}
        {articles && articles.length > 0 ? (
          <NewsGrid articles={articles} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-lg text-slate-500 font-medium">No articles found right now.</p>
            <p className="text-sm text-slate-400">Please check your News API key in .env.local and restart the server.</p>
          </div>
        )}
      </section>

      {/* 3. Optional: Newsletter Section at the bottom */}
      
    </div>
  );
}