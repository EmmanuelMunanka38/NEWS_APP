// app/category/[slug]/page.tsx
import { getTopHeadlines } from "@/lib/news";
import NewsGrid from "@/components/NewsGrid";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  // Await the slug from params (Required in Next.js 15)
  const { slug } = await params;
  
  // Fetch news specifically for this category
  const articles = await getTopHeadlines(slug);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="border-b-2 border-[#1e40af] mb-10 pb-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter">
          {slug} <span className="text-[#1e40af]">News</span>
        </h1>
      </div>
      
      {articles.length > 0 ? (
        <NewsGrid articles={articles} />
      ) : (
        <p className="text-gray-400">Loading the latest {slug} reports...</p>
      )}
    </div>
  );
}