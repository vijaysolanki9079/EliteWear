
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

const MenCollectionPage = () => {
  const menProducts = products.filter(product => 
    product.category === "Jeans" || 
    product.category === "Outerwear" ||
    product.category === "Footwear"
  );

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mt-10 mb-3">Men Collection</h1>
          <p className="text-brand-gray-500 max-w-2xl">
            Explore our curated men's collection, featuring contemporary designs with premium fabrics
            that deliver both style and functionality for the modern gentleman.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/products" 
            className="inline-block px-8 py-3 border-2 border-brand-black hover:bg-brand-black hover:text-white transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenCollectionPage;
