"use client";
import { useState } from 'react';
import Link from 'next/link';
import NavSearch from './NavSearch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Business", "Technology", "Science", "Sports", "Health"];

  return (
    <nav className="w-full bg-white border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <div className="w-10 h-10 bg-[#1e40af] flex items-center justify-center mr-3 rounded-sm font-black text-white text-xl">J</div>
          <span className="font-black text-2xl tracking-tighter text-black uppercase">JOMAH<span className="text-[#1e40af]">TV</span></span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 max-w-md"><NavSearch /></div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="/live" className="hidden sm:flex items-center gap-2 text-[#1e40af] text-[10px] font-black tracking-widest">
            <span className="w-2 h-2 bg-[#1e40af] rounded-full animate-pulse" /> LIVE
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4 space-y-4">
          <NavSearch />
          <div className="flex flex-col gap-3 pt-2">
            {categories.map(cat => (
              <Link key={cat} href={`/category/${cat.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-bold text-lg border-b border-gray-50 py-2">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}