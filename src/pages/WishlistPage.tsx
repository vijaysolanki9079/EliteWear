
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gray-100">
              <Heart size={32} className="text-brand-gray-500" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
            <p className="text-brand-gray-500 mb-8">
              Save items you love to your wishlist and find them here anytime.
            </p>
            <Link to="/products">
              <Button className="bg-brand-black">
                Explore Products
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-brand-gray-500">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearWishlist}
                className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
              >
                <Trash2 size={16} className="mr-2" />
                Clear Wishlist
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-md overflow-hidden group">
                  <Link to={`/products/${item.id}`} className="block relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/products/${item.id}`}>
                      <h3 className="font-medium mb-1 hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-brand-gray-500 text-sm mb-3">{item.category}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">${item.price.toFixed(2)}</p>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
                        >
                          <Trash2 size={16} />
                        </Button>
                        <Button size="sm" onClick={() => addToCart(item)}>
                          <ShoppingCart size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
