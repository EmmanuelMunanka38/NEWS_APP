// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-[#bb1919] flex items-center justify-center mr-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
              </div>
              <span className="font-black text-xl tracking-tighter">JOMAH TV</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global news network providing 24/7 coverage of world events, technology, and business.
            </p>
          </div>

          {/* Column 2: Sections */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-[#bb1919]">Sections</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-medium">
              <li><a href="#" className="hover:text-white">Technology</a></li>
              <li><a href="#" className="hover:text-white">Markets</a></li>
              <li><a href="#" className="hover:text-white">Science</a></li>
              <li><a href="#" className="hover:text-white">Health</a></li>
            </ul>
          </div>

          {/* Column 3: Network */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-[#bb1919]">Network</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-medium">
              <li><a href="#" className="hover:text-white">JOMAH Africa</a></li>
              <li><a href="#" className="hover:text-white">JOMAH Business</a></li>
              <li><a href="#" className="hover:text-white">Live Stream</a></li>
              <li><a href="#" className="hover:text-white">Podcasts</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-[#bb1919]">Contact</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for breaking news alerts.</p>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-[#bb1919]"
            />
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <p>© 2026 JOMAH TV NETWORK. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}