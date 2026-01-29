import Link from "next/link";

export default function CategoryBar() {
  const categories = ["Business", "Technology", "Science", "Sports", "Health"];

  return (
    <div className="bg-[#f8f9fa] border-b border-gray-200 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 flex h-10 items-center gap-6">
        {/* The Home Route */}
        <Link href="/" className="text-[11px] font-black uppercase tracking-widest text-gray-800 hover:text-[#1e40af]">
          HOME
        </Link>

        {/* Dynamic Category Routes */}
        {categories.map((cat) => (
          <Link 
            key={cat} 
            href={`/category/${cat.toLowerCase()}`}
            className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-[#1e40af] whitespace-nowrap"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}