
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Product } from '../contexts/CartContext';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setProducts(getFeaturedProducts());
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-brand-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
            <p className="text-brand-gray-500 max-w-xl">
              Discover our handpicked selection of this season's must-have pieces.
            </p>
          </div>
          <Link 
            to="/products" 
            className="flex items-center font-medium text-brand-black hover:text-brand-gold transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="rounded-md animate-pulse">
                <div className="bg-brand-gray-200 h-[300px] rounded-md mb-4"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-brand-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
