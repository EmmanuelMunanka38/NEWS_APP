"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery(""); // Clear after search
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className="h-4 w-4 text-gray-400 group-focus-within:text-[#1e40af] transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH ARCHIVES..."
        className="block w-full md:w-64 bg-gray-50 border border-gray-200 rounded-sm pl-10 pr-3 py-1.5 text-[10px] font-black tracking-widest outline-none focus:bg-white focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-all placeholder:text-gray-300"
      />
    </form>
  );
}