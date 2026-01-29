"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchArea() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <form onSubmit={handleSearch} className="relative flex items-center">
          <svg 
            className="absolute left-4 w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search JOMAH TV Archives..."
            className="w-full pl-14 pr-32 py-4 bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white text-xl font-bold uppercase tracking-tight outline-none transition-all placeholder:text-gray-300"
          />
          
          <button 
            type="submit"
            className="absolute right-2 bg-[#bb1919] text-white px-6 py-2 font-black text-sm uppercase hover:bg-black transition-colors"
          >
            Search
          </button>
        </form>
        
        {/* Quick Tags (BBC Style) */}
        <div className="mt-3 flex gap-4 items-center">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trending:</span>
          {['Elections', 'Crypto', 'AI', 'Health'].map((tag) => (
            <button 
              key={tag}
              onClick={() => router.push(`/search?q=${tag.toLowerCase()}`)}
              className="text-[10px] font-bold text-gray-600 hover:text-[#bb1919] uppercase tracking-wider"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}