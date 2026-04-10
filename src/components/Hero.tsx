import { TrendingDown, Activity } from "lucide-react";

const featuredDeals = [
  {
    id: 1,
    title: "Sony WH-1000XM5",
    image: "https://picsum.photos/seed/sony/400/300",
    currentPrice: "₹24,990",
    drop: "22%",
    chartPoints: "M0 40 Q 10 35, 20 38 T 40 30 T 60 25 T 80 15 T 100 10",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    image: "https://picsum.photos/seed/s24/400/300",
    currentPrice: "₹1,14,999",
    drop: "15%",
    chartPoints: "M0 30 Q 15 30, 25 25 T 50 20 T 75 18 T 100 5",
  },
  {
    id: 3,
    title: "LG C3 55\" OLED TV",
    image: "https://picsum.photos/seed/lgc3/400/300",
    currentPrice: "₹1,09,990",
    drop: "35%",
    chartPoints: "M0 45 Q 20 40, 30 35 T 60 20 T 80 15 T 100 5",
  },
];

export function Hero() {
  return (
    <section className="py-6">
      <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/20 to-slate-900 border border-blue-500/20 rounded-2xl overflow-hidden relative shadow-[0_0_40px_rgba(59,130,246,0.1)]">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
        
        <div className="p-6 md:p-8 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-500/20 text-red-400 p-2 rounded-lg">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              🔥 TODAY'S MEGA PRICE DROPS!
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <div key={deal.id} className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500/50 transition-colors group cursor-pointer">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-900">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-200 truncate mb-1">{deal.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-lg font-mono font-bold text-emerald-400">{deal.currentPrice}</span>
                    <span className="text-xs font-medium text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">-{deal.drop}</span>
                  </div>
                  {/* Mini Chart */}
                  <div className="h-6 w-full relative flex items-end">
                    <svg viewBox="0 0 100 50" className="w-full h-full preserve-aspect-ratio-none overflow-visible" preserveAspectRatio="none">
                      <path
                        d={deal.chartPoints}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-emerald-500 drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
