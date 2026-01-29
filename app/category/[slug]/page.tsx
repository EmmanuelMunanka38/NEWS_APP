import { getTopHeadlines } from "@/lib/news";
import NewsGrid from "@/components/NewsGrid";

export const dynamic = 'force-dynamic'; // Ensures production always fetches fresh data

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = await getTopHeadlines(slug);

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 min-h-screen">
      <div className="border-l-8 border-[#1e40af] pl-4 mb-10">
        <h1 className="text-5xl font-black uppercase tracking-tighter">{slug}</h1>
        <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">Jomah Global Coverage</p>
      </div>
      <NewsGrid articles={articles} />
    </main>
  );
}