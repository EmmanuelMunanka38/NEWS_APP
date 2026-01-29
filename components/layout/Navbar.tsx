"use client";

import { useState } from 'react';
import Link from 'next/link';
import NavSearch from './NavSearch';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ["Business", "Technology", "Science", "Sports", "Health"];

  return (
    <nav className="w-full bg-white border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="w-10 h-10 bg-[#1e40af] flex items-center justify-center mr-3 rounded-sm">
             <span className="text-white font-black text-xl">J</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tighter text-black">
              JOMAH<span className="text-[#1e40af]">TV</span>
            </span>
          </div>
        </Link>

        {/* MIDDLE: Search (Desktop only) */}
        <div className="flex-1 max-w-md hidden md:block">
          <NavSearch />
        </div>
        
        {/* RIGHT: Desktop Links & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-[11px] font-black tracking-widest text-gray-800">
            <Link href="/live" className="flex items-center gap-2 text-[#1e40af]">
              <span className="w-2 h-2 bg-[#1e40af] rounded-full animate-pulse" />
              WATCH LIVE
            </Link>
            <button className="bg-black text-white px-5 py-2 hover:bg-[#1e40af] transition-colors">
              SIGN IN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#1e40af]"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="pb-4 border-b border-gray-50">
              <NavSearch />
            </div>
            
            {/* Mobile Categories */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase">Sections</span>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-bold text-lg hover:text-[#1e40af]">Home</Link>
              {categories.map((cat) => (
                <Link 
                  key={cat} 
                  href={`/category/${cat.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-bold text-lg hover:text-[#1e40af]"
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Mobile Live Link */}
            <div className="pt-4 border-t border-gray-50">
               <Link href="/live" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-[#1e40af] font-black italic">
                <span className="w-2.5 h-2.5 bg-[#1e40af] rounded-full animate-pulse" />
                WATCH JOMAH LIVE
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}