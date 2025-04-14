
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "../contexts/CartContext";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card group">
      <Link to={`/products/${product.id}`}>
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card-image h-[300px] w-full object-cover group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="product-card-actions group-hover:translate-x-0 group-hover:opacity-100">
        <Button 
          size="icon" 
          variant="secondary" 
          className="bg-white shadow-md hover:bg-brand-gold hover:text-white transition-colors duration-300 my-3 mr-3"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
        
        <Button 
          size="icon" 
          variant="secondary" 
          className={`bg-white shadow-md transition-colors duration-300 ${
            isInWishlist(product.id) 
              ? "bg-brand-red text-white hover:bg-brand-red hover:text-white" 
              : "hover:bg-brand-red hover:text-white"
          }`}
          onClick={toggleWishlist}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="product-card-content">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-medium mb-1 hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-brand-gray-500 text-sm mb-2">{product.category}</p>
        <p className="font-semibold">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
