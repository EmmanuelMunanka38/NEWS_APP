import Navbar from "@/components/layout/Navbar";
import CategoryBar from "@/components/layout/CategoryBar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1a1a1a] min-h-screen flex flex-col antialiased">
        <Navbar />
        <CategoryBar />

        {/* Cobalt Ticker */}
        <div className="bg-[#0f172a] text-white overflow-hidden py-1.5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex items-center">
            <span className="bg-[#1e40af] text-[9px] font-black px-2 py-0.5 mr-4 shrink-0">
              UPDATE
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden">
              JOMAH TV: Breaking news from our global bureaus • Markets response to tech earnings • Weather alerts in effect...
            </p>
          </div>
        </div>

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}