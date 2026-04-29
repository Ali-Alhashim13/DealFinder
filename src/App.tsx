/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  User, 
  Heart, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  ExternalLink,
  Filter,
  ArrowUpDown,
  Plus,
  CheckCircle2,
  AlertCircle,
  Clock,
  Trash2,
  Edit,
  Eye,
  Sun,
  Moon
} from 'lucide-react';
import * as Icons from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORES, CATEGORIES, Store, Category, Review } from './types.ts';

// --- Components ---

const Navbar = ({ 
  user, 
  onNavigate, 
  activePage,
  darkMode,
  onToggleDarkMode
}: { 
  user: any, 
  onNavigate: (page: string) => void, 
  activePage: string,
  darkMode: boolean,
  onToggleDarkMode: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Search className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-slate-900 dark:text-white">DealFinder</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${activePage === 'home' ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('explore')}
              className={`text-sm font-medium transition-colors ${activePage === 'explore' ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'}`}
            >
              Explore
            </button>
            {user && (
              <button 
                onClick={() => onNavigate('favorites')}
                className={`text-sm font-medium transition-colors ${activePage === 'favorites' ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'}`}
              >
                Favorites
              </button>
            )}
            {user?.role === 'admin' && (
              <button 
                onClick={() => onNavigate('admin')}
                className={`text-sm font-medium transition-colors ${activePage === 'admin' ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'}`}
              >
                Admin
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onToggleDarkMode}
              className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-400 font-bold text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{user.name}</span>
                </div>
                <button 
                  onClick={() => onNavigate('logout')}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onNavigate('login')}
                className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={onToggleDarkMode}
              className="p-2 text-slate-400"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-400">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300">Home</button>
              <button onClick={() => { onNavigate('explore'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300">Explore</button>
              {user && <button onClick={() => { onNavigate('favorites'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300">Favorites</button>}
              {user?.role === 'admin' && <button onClick={() => { onNavigate('admin'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300">Admin</button>}
              {!user && <button onClick={() => { onNavigate('login'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-primary-600">Sign In</button>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface StoreCardProps {
  store: Store;
  onViewDetails: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

const StoreCard: React.FC<StoreCardProps> = ({ 
  store, 
  onViewDetails, 
  onToggleFavorite, 
  isFavorite 
}) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
            <img 
              src={store.logo} 
              alt={store.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {onToggleFavorite && (
            <button 
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(store.id); }}
              className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : 'text-slate-400 bg-slate-50 dark:bg-slate-800 hover:text-red-500'}`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{store.name}</h3>
            {store.isFeatured && (
              <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-full">Featured</span>
            )}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{store.description}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{store.rating}</span>
              <span className="text-xs text-slate-400">({store.reviewCount})</span>
            </div>
            <div className="text-sm font-medium text-slate-400">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={i < store.priceLevel ? 'text-emerald-600 dark:text-emerald-400' : ''}>$</span>
              ))}
            </div>
          </div>
          <button 
            onClick={() => onViewDetails(`store-${store.id}`)}
            className="flex items-center gap-1 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Details <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Pages ---

const HomePage = ({ onNavigate, onSearch, onCategorySelect, onToggleFavorite, favorites }: { onNavigate: (page: string) => void, onSearch: (query: string) => void, onCategorySelect: (category: string) => void, onToggleFavorite: (id: string) => void, favorites: string[] }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-bold rounded-full mb-6">
              Discover 12,000+ Trusted Shops
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Find trusted online <br />
              <span className="text-primary-600">stores by category.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              The ultimate platform for discovering and comparing the best online retailers across every niche, from global SaaS to local fashion.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search by store name or category..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSearch(query)}
                  className="w-full pl-14 pr-32 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-lg dark:text-white"
                />
                <button 
                  onClick={() => onSearch(query)}
                  className="absolute right-3 top-3 bottom-3 px-8 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                >
                  Search
                </button>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" alt="User" />
                  ))}
                </div>
                <p><span className="font-bold text-slate-900 dark:text-white">500+ users</span> joined this week to find their favorites.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-2 block">Recommended for you</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Top Trending Categories</h2>
          </div>
          <button 
            onClick={() => onNavigate('explore')}
            className="px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Explore All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat: Category, idx: number) => {
            const IconComponent = (Icons as any)[cat.icon];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => onCategorySelect(cat.id)}
                className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center cursor-pointer hover:border-primary-500 transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{cat.name}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500">{cat.storeCount}+ stores</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Stores */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Stores</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Hand-picked retailers known for their exceptional service and quality products.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {STORES.filter((s: Store) => s.isFeatured).map((store: Store) => (
              <StoreCard 
                key={store.id} 
                store={store} 
                onViewDetails={onNavigate} 
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(store.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ExplorePage = ({ onNavigate, onToggleFavorite, favorites, searchQuery: initialSearchQuery, selectedCategory: initialCategory, onQueryChange, onCategoryChange }: { onNavigate: (page: string) => void, onToggleFavorite: (id: string) => void, favorites: string[], searchQuery: string, selectedCategory: string, onQueryChange: (value: string) => void, onCategoryChange: (value: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredStores = STORES.filter((store: Store) => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          store.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    const matchesPrice = priceFilter === null || store.priceLevel === priceFilter;
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a: Store, b: Store) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Explore the Best Stores</h1>
        <p className="text-slate-500 dark:text-slate-400">Find exactly what you're looking for by filtering through thousands of verified online retailers.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3 className="font-bold text-slate-900 dark:text-white">Filters</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => { setSelectedCategory(e.target.value); onCategoryChange(e.target.value); }}
                  className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((cat: Category) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Price Range</label>
                <div className="flex gap-2">
                  {[1, 2, 3].map(level => (
                    <button
                      key={level}
                      onClick={() => setPriceFilter(priceFilter === level ? null : level)}
                      className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${
                        priceFilter === level 
                          ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/20' 
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-300'
                      }`}
                    >
                      {'$'.repeat(level)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Sort By</label>
                <div className="space-y-2">
                  {[
                    { id: 'rating', label: 'Highest Rating', icon: Star },
                    { id: 'reviews', label: 'Most Reviews', icon: LayoutDashboard },
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => setSortBy(option.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all ${
                        sortBy === option.id 
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border border-primary-100 dark:border-primary-900/50' 
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <option.icon className="w-4 h-4" />
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => { setSelectedCategory('all'); setPriceFilter(null); setSortBy('rating'); setSearchQuery(''); onQueryChange(''); onCategoryChange('all'); }}
              className="w-full mt-8 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        </aside>

        {/* Results Area */}
        <main className="flex-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by store name, keyword, or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all dark:text-white"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">{filteredStores.length}</span> results</p>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">View:</span>
              <button className="p-2 text-primary-600 bg-primary-50 dark:bg-primary-900/20 rounded-lg"><LayoutDashboard className="w-4 h-4" /></button>
              <button className="p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"><Menu className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredStores.map((store: Store) => (
              <StoreCard 
                key={store.id} 
                store={store} 
                onViewDetails={onNavigate} 
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(store.id)}
              />
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
              <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-300 dark:text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No stores found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const StoreDetailsPage = ({ storeId, onNavigate, favorites, onToggleFavorite }: { storeId: string, onNavigate: (page: string) => void, favorites: string[], onToggleFavorite: (id: string) => void }) => {
  const store = STORES.find((s: Store) => s.id === storeId);
  if (!store) return <div>Store not found</div>;
  const isFavorite = favorites.includes(store.id);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleSubmitReview = (event: React.FormEvent) => {
    event.preventDefault();
    if (!reviewText.trim()) return;
    setReviewSuccess(true);
    setReviewText('');
    setReviewRating(5);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={() => onNavigate('explore')}
        className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary-600 mb-8 transition-colors"
      >
        <Icons.ArrowLeft className="w-4 h-4" /> Back to Explore
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Main Info */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md shrink-0">
                <img src={store.logo} alt={store.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">{store.name}</h1>
                  {store.isFeatured && (
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full">Featured</span>
                  )}
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{store.description}</p>
                
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{store.rating}</span>
                    <span className="text-slate-400 dark:text-slate-500">({store.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.Tag className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium capitalize">{store.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Price Level: {'$'.repeat(store.priceLevel)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
              <a 
                href={store.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2"
              >
                Visit Official Website <ExternalLink className="w-5 h-5" />
              </a>
              <button 
                onClick={() => onToggleFavorite(store.id)}
                className={`px-8 py-4 ${isFavorite ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'} font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-600' : ''}`} />
                {isFavorite ? 'Remove from Favorites' : 'Save to Favorites'}
              </button>
            </div>
          </section>

          {/* Reviews */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Customer Reviews</h2>
              <button onClick={() => { setReviewOpen(!reviewOpen); setReviewSuccess(false); }} className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                {reviewOpen ? 'Hide Review Form' : 'Write a Review'}
              </button>
            </div>

            {reviewOpen && (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your rating</label>
                    <div className="mt-3 flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setReviewRating(index + 1)}
                          className={`w-10 h-10 rounded-full border text-sm font-bold transition ${index < reviewRating ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your review</label>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={4}
                      className="w-full mt-3 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors text-slate-900 dark:text-white"
                      placeholder="Share your experience with this store..."
                    />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all">
                    Submit Review
                  </button>
                </form>
                {reviewSuccess && (
                  <p className="mt-4 text-sm text-emerald-600">Thanks! Your review has been submitted for moderation.</p>
                )}
              </div>
            )}

            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500 dark:text-slate-400">
                        {['JD', 'AM', 'RK'][i-1]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{['John Doe', 'Alice Miller', 'Robert King'][i-1]}</h4>
                        <p className="text-xs text-slate-400 dark:text-slate-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < 4 ? 'text-amber-400 fill-current' : 'text-slate-200 dark:text-slate-700'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {i === 1 ? "Excellent service and fast shipping. Highly recommend this store for anyone looking for quality electronics." : 
                     i === 2 ? "Great selection of products, but the website could be a bit faster. Overall a good experience." : 
                     "The customer support was very helpful when I had a question about my order. Will definitely shop here again."}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-slate-900 dark:bg-slate-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold mb-4">Store Stats</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Monthly Clicks</span>
                  <span className="font-bold">12.4k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Verified Status</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Verified
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Response Time</span>
                  <span className="font-bold">~2 hours</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 blur-3xl rounded-full" />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Related Stores</h3>
            <div className="space-y-4">
              {STORES.filter((s: Store) => s.category === store.category && s.id !== store.id).slice(0, 3).map((related: Store) => (
                <div key={related.id} className="group flex gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary-300 dark:hover:border-primary-700 transition-all cursor-pointer" onClick={() => onNavigate(`store-${related.id}`)}>
                  <img src={related.logo} alt={related.name} className="w-12 h-12 rounded-xl object-cover border border-slate-100 dark:border-slate-800" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{related.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{related.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stores');
  const [isAddingStore, setIsAddingStore] = useState(false);
  const [reviewQueue, setReviewQueue] = useState<Review[]>([
    {
      id: 'r1',
      storeId: '1',
      userName: 'John Doe',
      rating: 4,
      comment: 'Great customer support and fast shipping. Would recommend to colleagues.',
      date: '2 days ago',
      status: 'pending'
    },
    {
      id: 'r2',
      storeId: '3',
      userName: 'Alice Miller',
      rating: 5,
      comment: 'Excellent product quality and reliable delivery.',
      date: '4 days ago',
      status: 'pending'
    },
    {
      id: 'r3',
      storeId: '2',
      userName: 'Robert King',
      rating: 3,
      comment: 'Good value, but website navigation could be smoother.',
      date: '1 week ago',
      status: 'approved'
    }
  ]);

  const handleReviewAction = (id: string, status: 'approved' | 'rejected') => {
    setReviewQueue(prev => prev.map(review => review.id === id ? { ...review, status } : review));
  };

  const analyticsSummary = {
    totalStores: STORES.length,
    pendingReviews: reviewQueue.filter(review => review.status === 'pending').length,
    approvedReviews: reviewQueue.filter(review => review.status === 'approved').length,
    rejectedReviews: reviewQueue.filter(review => review.status === 'rejected').length,
  };

  const categoryDistribution = CATEGORIES.map((category: Category) => ({
    ...category,
    storeCount: STORES.filter((store: Store) => store.category === category.id).length,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage store listings, categories, and moderate user reviews.</p>
        </div>
        {!isAddingStore && (
          <button 
            onClick={() => setIsAddingStore(true)}
            className="px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add New Store
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isAddingStore ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-2xl mx-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Add a New Store</h2>
              <button onClick={() => setIsAddingStore(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAddingStore(false); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Store Name</label>
                  <input type="text" required className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="e.g. Modern Threads" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Website URL</label>
                  <input type="url" required className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="https://example.com" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Category</label>
                <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white">
                  {CATEGORIES.map((cat: Category) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Short Description</label>
                <textarea rows={3} className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="Briefly describe what this store specializes in..."></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Price Level</label>
                  <div className="flex gap-2">
                    {[1, 2, 3].map(l => (
                      <button key={l} type="button" className="flex-1 py-2 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">{'$'.repeat(l)}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Store Logo URL</label>
                  <input type="url" className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="https://..." />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                <button type="submit" className="flex-1 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20">
                  Submit Store
                </button>
                <button type="button" onClick={() => setIsAddingStore(false)} className="flex-1 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex gap-8 border-b border-slate-200 dark:border-slate-800 mb-8">
              {['stores', 'reviews', 'analytics'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />}
                </button>
              ))}
            </div>

            {activeTab === 'stores' && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Store</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Rating</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {STORES.map((store: Store) => (
                      <tr key={store.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={store.logo} alt="" className="w-10 h-10 rounded-lg object-cover border border-slate-100 dark:border-slate-800" referrerPolicy="no-referrer" />
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white">{store.name}</p>
                              <p className="text-xs text-slate-400 dark:text-slate-500">{store.websiteUrl}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">{store.category}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400 fill-current" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{store.rating}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all"><Edit className="w-4 h-4" /></button>
                            <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="grid gap-4">
                {reviewQueue.filter(review => review.status === 'pending').length > 0 ? (
                  reviewQueue.filter(review => review.status === 'pending').map(review => (
                    <div key={review.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-slate-900 dark:text-white">{review.userName}</h4>
                            <span className="text-xs text-slate-400 dark:text-slate-500">on {STORES.find((store: Store) => store.id === review.storeId)?.name || 'Store'}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">"{review.comment}"</p>
                          <div className="flex gap-0.5 mb-2">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'text-amber-400 fill-current' : 'text-slate-200 dark:text-slate-700'}`} />
                            ))}
                          </div>
                          <p className="text-xs text-slate-400 dark:text-slate-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button onClick={() => handleReviewAction(review.id, 'approved')} className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-bold rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all">Approve</button>
                        <button onClick={() => handleReviewAction(review.id, 'rejected')} className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-all">Reject</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">No pending reviews</h3>
                    <p className="text-slate-500 dark:text-slate-400">All review submissions have been moderated.</p>
                  </div>
                )}
              </div>
            )}
            {activeTab === 'analytics' && (
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Total Stores</p>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">{analyticsSummary.totalStores}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Pending Reviews</p>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">{analyticsSummary.pendingReviews}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Approvals</p>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">{analyticsSummary.approvedReviews}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SubmitStorePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]?.id || 'electronics');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setStoreName('');
    setWebsiteUrl('');
    setDescription('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Submit Your Store</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Help us verify your business and get listed in DealFinder.</p>
          </div>
          <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">Back</button>
        </div>

        {isSubmitted ? (
          <div className="rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-8 text-center">
            <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-200 mb-3">Submission received!</h3>
            <p className="text-slate-600 dark:text-slate-300">Your store has been submitted and will be reviewed by our team shortly.</p>
            <button onClick={() => onNavigate('home')} className="mt-8 px-6 py-3 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all">Return Home</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Store Name</label>
                <input value={storeName} onChange={(e) => setStoreName(e.target.value)} required className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="e.g. Modern Threads" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Website URL</label>
                <input value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} type="url" required className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="https://" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white">
                {CATEGORIES.map((cat: Category) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Short Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} required className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:text-white" placeholder="Describe what makes your store great..." />
            </div>
            <button type="submit" className="w-full py-4 bg-primary-600 text-white rounded-3xl font-bold hover:bg-primary-700 transition-all">Submit Store</button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

const AuthPage = ({ onLogin }: { onLogin: (user: any) => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ 
      name: email.split('@')[0] || 'User', 
      email, 
      role: email.includes('admin') ? 'admin' : 'user' 
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/20">
            <Search className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">{isLogin ? 'Sign in to access your favorites' : 'Join DealFinder to discover the best stores'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all dark:text-white"
                placeholder="John Doe"
              />
            </div>
          )}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all dark:text-white"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Password</label>
              {isLogin && <button type="button" className="text-xs font-bold text-primary-600 hover:underline">Forgot?</button>}
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all dark:text-white"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-primary-600 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [user, setUser] = useState<any>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [pendingPage, setPendingPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    const storedFavorites = typeof window !== 'undefined' ? localStorage.getItem('dealFinderFavorites') : null;
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('dealFinderFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleNavigate = (page: string) => {
    if (page === 'logout') {
      setUser(null);
      setPendingPage(null);
      setActivePage('home');
      return;
    }

    if (page === 'favorites' && !user) {
      setPendingPage('favorites');
      setActivePage('login');
      return;
    }

    if (page === 'admin' && user?.role !== 'admin') {
      setPendingPage('admin');
      setActivePage('login');
      return;
    }

    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    const nextPage = pendingPage || 'home';
    setPendingPage(null);
    setActivePage(nextPage);
  };

  const toggleFavorite = (id: string) => {
    if (!user) {
      setPendingPage('favorites');
      setActivePage('login');
      return;
    }
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        user={user} 
        onNavigate={handleNavigate} 
        activePage={activePage} 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      
      <main className="flex-1 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activePage === 'home' && (
              <HomePage 
                onNavigate={handleNavigate} 
                onSearch={(q) => { setSearchQuery(q); setSelectedCategory('all'); console.log('Searching for:', q); handleNavigate('explore'); }} 
                onCategorySelect={(category) => { setSelectedCategory(category); setSearchQuery(''); handleNavigate('explore'); }}
                onToggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            )}
            {activePage === 'explore' && (
              <ExplorePage 
                onNavigate={handleNavigate} 
                onToggleFavorite={toggleFavorite} 
                favorites={favorites} 
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                onQueryChange={setSearchQuery}
                onCategoryChange={setSelectedCategory}
              />
            )}
            {activePage.startsWith('store-') && (
              <StoreDetailsPage storeId={activePage.replace('store-', '')} onNavigate={handleNavigate} favorites={favorites} onToggleFavorite={toggleFavorite} />
            )}
            {activePage === 'submit-store' && <SubmitStorePage onNavigate={handleNavigate} />}
            {activePage === 'favorites' && (
              <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Your Favorites</h1>
                {favorites.length > 0 ? (
                  <div className="grid md:grid-cols-3 gap-8">
                    {STORES.filter((s: Store) => favorites.includes(s.id)).map((store: Store) => (
                      <StoreCard 
                        key={store.id} 
                        store={store} 
                        onViewDetails={handleNavigate} 
                        onToggleFavorite={toggleFavorite}
                        isFavorite={true}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                    <Heart className="w-12 h-12 text-slate-200 dark:text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-500 dark:text-slate-400">You haven't saved any stores yet.</p>
                    <button onClick={() => handleNavigate('explore')} className="mt-4 text-primary-600 dark:text-primary-400 font-bold hover:underline">Start Exploring</button>
                  </div>
                )}
              </div>
            )}
            {activePage === 'admin' && <AdminDashboard />}
            {activePage === 'login' && <AuthPage onLogin={handleLogin} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Search className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold text-slate-900 dark:text-white">DealFinder</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                The most comprehensive index of online stores, helping shoppers find reliable retailers and the best deals since 2024.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><button onClick={() => handleNavigate('explore')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Browse Stores</button></li>
                <li><button onClick={() => handleNavigate('explore')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Categories</button></li>
                <li><button onClick={() => handleNavigate('submit-store')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Submit a Store</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</button></li>
                <li><button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 DealFinder Platform. All rights reserved.</p>
            <div className="flex gap-6">
              <Icons.Twitter className="w-5 h-5 hover:text-primary-500 cursor-pointer" />
              <Icons.Github className="w-5 h-5 hover:text-slate-900 dark:hover:text-white cursor-pointer" />
              <Icons.Linkedin className="w-5 h-5 hover:text-primary-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
