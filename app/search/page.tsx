import { searchNews } from "@/lib/news";
import NewsGrid from "@/components/NewsGrid";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>; // Typed as a Promise
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // 1. MUST await searchParams in Next.js 15
  const { q } = await searchParams;
  const query = q || "";
  
  // 2. Fetch the data
  const articles = query ? await searchNews(query) : [];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="border-b-2 border-gray-100 mb-10 pb-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-black mb-6">
          Search <span className="text-[#1e40af]">Archives</span>
        </h1>
        
        <form action="/search" method="GET" className="flex flex-col sm:flex-row gap-2">
          <input 
            name="q"
            type="text" 
            defaultValue={query}
            placeholder="Search keywords (e.g. AI, Climate, Soccer)..."
            className="flex-1 border-2 border-gray-200 px-4 py-3 font-bold outline-none focus:border-[#1e40af] transition-colors bg-gray-50"
          />
          <button className="bg-black text-white px-8 py-3 font-black uppercase hover:bg-[#1e40af] transition-colors">
            Search
          </button>
        </form>
      </div>

      {query ? (
        <>
          <p className="mb-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
            Found {articles.length} matches for: <span className="text-black">"{query}"</span>
          </p>
          {articles.length > 0 ? (
            <NewsGrid articles={articles} />
          ) : (
            <div className="py-20 text-center text-gray-300 font-bold uppercase italic">
              No results in the JOMAH archives for "{query}"
            </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest border-2 border-dotted border-gray-100 rounded-xl">
          Enter a topic above to begin searching
        </div>
      )}
    </div>
  );
}