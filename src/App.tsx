/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sidebar } from "./components/Sidebar";
import { ProductGrid } from "./components/ProductGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Header />
      
      <main className="container mx-auto px-4 pb-12">
        <Hero />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <Sidebar />
          <ProductGrid />
        </div>
      </main>
    </div>
  );
}
