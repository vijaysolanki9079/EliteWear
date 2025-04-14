import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="relative mb-24 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
            alt="About Clothify"
            className="w-full h-[600px] md:h-[600px] "
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black/90 via-brand-black/70 to-transparent flex items-center">
            <div className="p-8 md:p-20 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Redefining Modern Elegance
              </h1>
              <p className="text-2xl text-white/90 leading-relaxed mb-12">
                Where innovation meets tradition, creating a new standard of luxury fashion that respects both heritage and the future.
              </p>
              <div className="flex gap-6">
                <Link to="/products">
                  <Button className="bg-white text-brand-black hover:bg-white/90 px-10 py-7 rounded-full text-lg font-medium">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Our Vision</h2>
            <p className="text-xl text-brand-gray-500 leading-relaxed">
              We envision a world where fashion is not just about looking good, but feeling good about the choices we make. Our commitment to sustainable luxury and innovative design sets us apart in the world of high fashion.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">2010</h3>
                <p className="text-brand-gray-500">Founded in New York</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">50+</h3>
                <p className="text-brand-gray-500">Global Boutiques</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">100%</h3>
                <p className="text-brand-gray-500">Sustainable Materials</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">24/7</h3>
                <p className="text-brand-gray-500">Customer Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Vision" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">Award Winning</h3>
              <p className="text-brand-gray-500">Recognized for excellence in sustainable fashion</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-6">Innovative Design</h3>
              <p className="text-brand-gray-500 leading-relaxed">
                Pushing boundaries while respecting tradition, our designs blend cutting-edge technology with timeless aesthetics.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-6">Ethical Production</h3>
              <p className="text-brand-gray-500 leading-relaxed">
                Every piece is crafted with respect for people and planet, ensuring fair wages and minimal environmental impact.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-6">Uncompromising Quality</h3>
              <p className="text-brand-gray-500 leading-relaxed">
                From fabric selection to final stitch, we maintain the highest standards of craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brand-black to-brand-black/90 rounded-3xl p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Join Our Journey</h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Be part of a movement that's redefining luxury fashion. Experience the perfect blend of style, sustainability, and innovation.
              </p>
              <div className="flex gap-6">
                <Link to="/products">
                  <Button className="bg-white text-brand-black hover:bg-white/90 px-10 py-7 rounded-full text-lg font-medium">
                    Explore Collections
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-black hover:bg-white hover:text-brand-black px-10 py-7 rounded-full text-lg font-medium">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Join us" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
