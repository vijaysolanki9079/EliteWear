import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Fashion"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-xl animate-slide-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Elevate Your Style With Our Collection
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover the latest fashion trends that define the season. Quality pieces for the modern wardrobe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <button className="btn-primary flex items-center bg-white/50 text-brand-black hover:bg-white/70 px-8 py-3 rounded-full">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/about">
              <button className="btn-outline bg-white/50 text-brand-black hover:bg-white/70 px-8 py-3 rounded-full">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
