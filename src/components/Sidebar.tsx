import { SlidersHorizontal, Check } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-8">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sticky top-24">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
          <SlidersHorizontal className="w-5 h-5 text-blue-400" />
          <h2 className="text-sm font-bold tracking-wider text-slate-200 uppercase">Find Your Budget</h2>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 block">
            Price Range (INR)
          </label>
          <div className="space-y-4">
            <input 
              type="range" 
              min="0" 
              max="200000" 
              defaultValue="50000"
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex items-center justify-between gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded px-3 py-1.5 flex-1 text-center">
                <span className="text-xs font-mono text-slate-300">₹0</span>
              </div>
              <span className="text-slate-600">-</span>
              <div className="bg-slate-950 border border-slate-800 rounded px-3 py-1.5 flex-1 text-center">
                <span className="text-xs font-mono text-blue-400">₹50,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Discount Percentage */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 block">
            Discount
          </label>
          <div className="space-y-3">
            {[
              { id: 'd50', label: '50% Off or more', checked: false },
              { id: 'd40', label: '40% Off or more', checked: false },
              { id: 'd30', label: '30% Off or more', checked: true },
              { id: 'd20', label: '20% Off or more', checked: false },
              { id: 'd10', label: '10% Off or more', checked: false },
            ].map((option) => (
              <label key={option.id} className="flex items-center gap-3 group cursor-pointer">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${option.checked ? 'bg-blue-600 border-blue-600' : 'bg-slate-950 border-slate-700 group-hover:border-blue-500'}`}>
                  {option.checked && <Check className="w-3.5 h-3.5 text-white" />}
                </div>
                <span className={`text-sm ${option.checked ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'}`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Categories (Extra) */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 block">
            Categories
          </label>
          <div className="space-y-2">
            {['Electronics', 'Laptops', 'Smartphones', 'Audio', 'Smart Home'].map((cat) => (
              <button key={cat} className="block w-full text-left text-sm text-slate-400 hover:text-blue-400 py-1 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
