import React from 'react';
import { Star, LineChart, ExternalLink } from "lucide-react";

export interface ProductCardProps {
  id?: number;
  title: string;
  image: string;
  rating: number;
  reviews: string;
  currentPrice: string;
  originalPrice: string;
  saveAmount: string;
  badge?: {
    text: string;
    type: 'green' | 'red' | 'purple';
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  rating,
  reviews,
  currentPrice,
  originalPrice,
  saveAmount,
  badge
}) => {
  
  const badgeStyles = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
    red: "bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      {/* Image Section */}
      <div className="relative aspect-square bg-white p-4 flex items-center justify-center overflow-hidden">
        {badge && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${badgeStyles[badge.type]} z-10 backdrop-blur-sm`}>
            {badge.text}
          </div>
        )}
        <button 
          className="absolute top-3 right-3 p-2 bg-slate-900/80 backdrop-blur rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-colors z-10 group/btn"
          title="View Price History Graph"
        >
          <LineChart className="w-4 h-4" />
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Price History
          </span>
        </button>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-slate-200 line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-current' : 'fill-slate-800 text-slate-800'}`} />
            ))}
          </div>
          <span className="text-xs text-blue-400 hover:underline cursor-pointer">{reviews}</span>
        </div>

        <div className="mt-auto space-y-4">
          {/* Price Section */}
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-mono font-bold text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
                {currentPrice}
              </span>
              <del className="text-sm font-mono text-slate-500">{originalPrice}</del>
            </div>
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-2 py-0.5 rounded">
              You Save {saveAmount}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-slate-950 font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            BUY NOW
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
