export default function ArticleCard({ article }: { article: any }) {
  return (
    <article className="group flex flex-col border-b border-gray-100 pb-10 h-full bg-white">
      <div className="relative aspect-video mb-5 overflow-hidden">
        {article.urlToImage && (
          <img 
            src={article.urlToImage} 
            alt={article.title}
            className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-black leading-tight mb-4 group-hover:text-[#1e40af] group-hover:underline decoration-2 underline-offset-4 transition-colors">
          <a href={article.url} target="_blank" rel="noreferrer">
            {article.title}
          </a>
        </h2>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {article.description}
        </p>

        <div className="mt-auto flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
          <span className="text-[#1e40af]">{article.source.name}</span>
          <span className="text-gray-400 font-normal">{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </article>
  );
}