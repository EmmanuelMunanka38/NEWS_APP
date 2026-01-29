// components/NewsGrid.tsx
import { Article } from "@/types/news";
import ArticleCard from "./ArticleCard";

interface NewsGridProps {
  articles: Article[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
}