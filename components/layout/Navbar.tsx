import Link from 'next/link';
import NavSearch from './NavSearch'; 

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* LEFT: Logo Section - Always takes you HOME */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="w-10 h-10 bg-[#1e40af] flex items-center justify-center mr-3 rounded-sm shadow-sm transition-transform group-hover:scale-105">
             <span className="text-white font-black text-xl">J</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tighter text-black">
              JOMAH<span className="text-[#1e40af]">TV</span>
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">
              Global Network
            </span>
          </div>
        </Link>

        {/* MIDDLE: Search Area */}
        <div className="flex-1 max-w-md hidden md:block">
          <NavSearch />
        </div>
        
        {/* RIGHT: Live & Actions */}
        <div className="flex items-center gap-6 text-[11px] font-black tracking-widest text-gray-800 shrink-0">
          <Link 
            href="/live" 
            className="flex items-center gap-2 text-[#1e40af] hover:opacity-80 transition-opacity"
          >
            <span className="w-2.5 h-2.5 bg-[#1e40af] rounded-full animate-pulse" />
            WATCH LIVE
          </Link>
          
          <button className="bg-black text-white px-5 py-2 hover:bg-[#1e40af] transition-colors font-bold shadow-sm">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
}