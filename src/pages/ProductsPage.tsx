
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || 
                           product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col mb-10">
          <h1 className="text-3xl font-bold mb-2">Our Products</h1>
          <p className="text-brand-gray-500">
            Discover our collection of premium clothing and accessories.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchQuery('')}
              >
                <X size={18} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
            </Button>
          </div>

          {/* Desktop Category Filters */}
          <div className="hidden lg:flex items-center space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-brand-black text-white" : ""}
              >
                {category}
              </Button>
            ))}
            {(searchQuery || selectedCategory) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-brand-red"
              >
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        {isFilterOpen && (
          <div className="lg:hidden mb-6 p-4 border border-gray-200 rounded-md shadow-sm animate-slide-in">
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-brand-black text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            {(searchQuery || selectedCategory) && (
              <Button
                variant="link"
                onClick={resetFilters}
                className="text-brand-red p-0"
              >
                Clear All Filters
              </Button>
            )}
          </div>
        )}

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-brand-gray-500">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="rounded-md animate-pulse">
                <div className="bg-brand-gray-200 h-[300px] rounded-md mb-4"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-brand-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-brand-gray-500 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={resetFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
