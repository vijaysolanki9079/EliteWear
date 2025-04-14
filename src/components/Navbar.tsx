
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { ShoppingBag, Heart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isHomePage = location.pathname === "/";

  const links = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white shadow-md py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif font-bold text-2xl tracking-wider">
          <span className={`${isScrolled || !isHomePage ? "text-brand-black" : "text-white"}`}>Elite</span>
          <span className={`${isScrolled || !isHomePage ? "text-brand-gold" : "text-brand-gold"}`}>Wear</span>
          <span className={`${isScrolled || !isHomePage ? "text-brand-gold" : "text-brand-gold"} text-3xl`}>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors font-medium ${
                location.pathname === link.path
                  ? "text-brand-gold font-bold border-b-2 border-brand-gold pb-1"
                  : isScrolled || !isHomePage
                  ? "text-brand-black hover:text-brand-gold"
                  : "text-white hover:text-brand-gold hover:bg-black/30 px-3 py-1 rounded-md"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="relative">
            <Heart
              className={`h-6 w-6 ${
                isScrolled || !isHomePage ? "text-brand-black" : "text-white"
              }`}
            />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingBag
              className={`h-6 w-6 ${
                isScrolled || !isHomePage ? "text-brand-black" : "text-white"
              }`}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled || !isHomePage ? "text-brand-black" : "text-white"}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } pt-20`}
        >
          <nav className="container mx-auto px-6 flex flex-col space-y-6 py-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl ${
                  location.pathname === link.path
                    ? "text-brand-gold font-bold border-b-2 border-brand-gold pb-1"
                    : "text-brand-black hover:text-brand-gold"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-6">
              <Link
                to="/wishlist"
                className="flex items-center space-x-2 text-lg text-brand-black mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="h-5 w-5" />
                <span>Wishlist ({wishlistItems.length})</span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-lg text-brand-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Cart ({cartItems.length})</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
