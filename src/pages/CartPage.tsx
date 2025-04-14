
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    clearCart();
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gray-100">
              <ShoppingBag size={32} className="text-brand-gray-500" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-brand-gray-500 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-brand-black">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 bg-brand-gray-100 p-4">
                  <div className="col-span-6">
                    <span className="font-medium">Product</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Price</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Quantity</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="font-medium">Total</span>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center flex flex-col gap-4">
                      {/* Product */}
                      <div className="col-span-6 flex items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div>
                          <Link to={`/products/${item.id}`} className="font-medium hover:text-brand-gold">
                            {item.name}
                          </Link>
                          <p className="mt-1 text-sm text-brand-gray-500">{item.category}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="col-span-2 text-center flex md:block items-center justify-between">
                        <span className="md:hidden text-sm font-medium">Price:</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="col-span-2 text-center flex md:justify-center items-center justify-between">
                        <span className="md:hidden text-sm font-medium mr-2">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-brand-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 border-x border-gray-300 min-w-[2.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-brand-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="col-span-2 text-right flex items-center justify-between">
                        <span className="md:hidden text-sm font-medium">Total:</span>
                        <div className="flex items-center">
                          <span className="mr-4 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-brand-red hover:text-opacity-80 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
                >
                  Clear Cart
                </Button>
                
                <Link to="/products">
                  <Button variant="ghost">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-brand-gray-100 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-brand-gray-500">Subtotal</span>
                    <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray-500">Shipping</span>
                    <span className="font-medium">FREE</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full py-6 bg-brand-black"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                
                <div className="mt-6 text-sm text-brand-gray-500 text-center">
                  <p>Secure checkout with major credit cards and payment providers.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
