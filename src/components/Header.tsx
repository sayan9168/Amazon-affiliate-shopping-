import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, ShoppingCart, Bell, LogIn, LogOut } from "lucide-react";
import { auth, signInWithGoogle, logout } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Search className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            Deal Hunter <span className="text-blue-500">IN</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:flex items-center relative">
          <div className="absolute left-3 text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search tech, electronics, home..."
            className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
          />
          <button className="absolute right-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium py-1.5 px-4 rounded-full transition-colors">
            Search
          </button>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              Mobile <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              PC <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              Smart Home <ChevronDown className="w-4 h-4" />
            </button>
          </nav>
          
          <div className="flex items-center gap-3 sm:gap-4 border-l border-slate-800 pl-4 sm:pl-6">
            <button className="text-slate-400 hover:text-white transition-colors relative hidden sm:block">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </button>
            <button className="text-slate-400 hover:text-white transition-colors hidden sm:block">
              <ShoppingCart className="w-5 h-5" />
            </button>
            
            {/* Auth Button */}
            {user ? (
              <div className="flex items-center gap-3">
                <img 
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=0D8ABC&color=fff`} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full border border-slate-700"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={logout}
                  className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1 text-sm font-medium"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={signInWithGoogle}
                className="bg-white hover:bg-slate-200 text-slate-900 text-sm font-semibold py-1.5 px-3 sm:px-4 rounded-full transition-colors flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}

            <button className="md:hidden text-slate-400 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
