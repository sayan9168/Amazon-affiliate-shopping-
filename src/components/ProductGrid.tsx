import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Logitech MX Master 3S - Wireless Performance Mouse",
    image: "https://picsum.photos/seed/mxmaster/400/400",
    rating: 4.8,
    reviews: "12,453",
    currentPrice: "₹6,499",
    originalPrice: "₹7,999",
    saveAmount: "₹1,500",
    badge: { text: "CRASHED PRICE", type: "red" as const }
  },
  {
    id: 2,
    title: "Apple AirPods Pro (2nd Generation) with MagSafe",
    image: "https://picsum.photos/seed/airpods/400/400",
    rating: 4.9,
    reviews: "45,211",
    currentPrice: "₹18,999",
    originalPrice: "₹24,900",
    saveAmount: "₹5,901",
    badge: { text: "DEAL OF THE DAY", type: "green" as const }
  },
  {
    id: 3,
    title: "Samsung 27-inch Odyssey G5 Gaming Monitor",
    image: "https://picsum.photos/seed/monitor/400/400",
    rating: 4.5,
    reviews: "3,892",
    currentPrice: "₹22,499",
    originalPrice: "₹35,000",
    saveAmount: "₹12,501",
  },
  {
    id: 4,
    title: "Keychron K2 Wireless Mechanical Keyboard",
    image: "https://picsum.photos/seed/keychron/400/400",
    rating: 4.6,
    reviews: "2,104",
    currentPrice: "₹7,199",
    originalPrice: "₹8,999",
    saveAmount: "₹1,800",
    badge: { text: "GREAT DEAL!", type: "purple" as const }
  },
  {
    id: 5,
    title: "Dyson V12 Detect Slim Absolute Vacuum",
    image: "https://picsum.photos/seed/dyson/400/400",
    rating: 4.7,
    reviews: "1,245",
    currentPrice: "₹44,900",
    originalPrice: "₹55,900",
    saveAmount: "₹11,000",
  },
  {
    id: 6,
    title: "Kindle Paperwhite (16 GB) - Now with a 6.8\" display",
    image: "https://picsum.photos/seed/kindle/400/400",
    rating: 4.8,
    reviews: "28,901",
    currentPrice: "₹11,999",
    originalPrice: "₹14,999",
    saveAmount: "₹3,000",
    badge: { text: "CRASHED PRICE", type: "red" as const }
  },
  {
    id: 7,
    title: "Sony PlayStation 5 Console",
    image: "https://picsum.photos/seed/ps5/400/400",
    rating: 4.9,
    reviews: "15,672",
    currentPrice: "₹44,990",
    originalPrice: "₹54,990",
    saveAmount: "₹10,000",
    badge: { text: "DEAL OF THE DAY", type: "green" as const }
  },
  {
    id: 8,
    title: "Bose QuietComfort Earbuds II",
    image: "https://picsum.photos/seed/bose/400/400",
    rating: 4.4,
    reviews: "4,532",
    currentPrice: "₹19,990",
    originalPrice: "₹25,900",
    saveAmount: "₹5,910",
  }
];

export function ProductGrid() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Trending Deals</h2>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Sort by:</span>
          <select className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 outline-none focus:border-blue-500">
            <option>Biggest Discount</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Deals</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title}
            image={product.image}
            rating={product.rating}
            reviews={product.reviews}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            saveAmount={product.saveAmount}
            badge={product.badge}
          />
        ))}
      </div>
    </div>
  );
}
