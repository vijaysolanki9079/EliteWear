
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Heart, ShoppingCart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate API call to get product details
    setTimeout(() => {
      if (id) {
        const productId = parseInt(id);
        const foundProduct = getProductById(productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(productId, foundProduct.category));
        }
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Add the product to cart quantity times
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      toast.success(`${quantity} ${product.name} added to cart!`);
    }
  };

  const toggleWishlist = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-brand-gray-200 h-[500px] rounded-md"></div>
              </div>
              <div className="md:w-1/2">
                <div className="h-8 bg-brand-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-brand-gray-200 rounded w-1/4 mb-6"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-brand-gray-200 rounded w-3/4 mb-8"></div>
                <div className="h-12 bg-brand-gray-200 rounded w-full mb-4"></div>
                <div className="h-12 bg-brand-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-brand-gray-500 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/products')}>
              Browse All Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-brand-gray-500 hover:text-brand-black">
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="rounded-md overflow-hidden bg-brand-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <p className="text-brand-gray-500 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-2 hover:bg-brand-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 hover:bg-brand-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                className="flex-1 bg-brand-black hover:bg-black text-white py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                className={`py-6 ${
                  isInWishlist(product.id)
                    ? "bg-brand-red text-white border-brand-red hover:bg-brand-red/90 hover:text-white"
                    : ""
                }`}
                onClick={toggleWishlist}
              >
                <Heart className="mr-2 h-5 w-5" />
                {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
            
            {/* Product Meta */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-brand-gray-500">
                <span className="font-medium text-brand-black">Category:</span> {product.category}
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
