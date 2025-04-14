
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

const KidsCollectionPage = () => {
  const kidsProducts = products.filter(product => 
    product.category === "Accessories" ||
    product.price < 60
  ).slice(0, 4);

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-3 mt-10">Kids Collection</h1>
          <p className="text-brand-gray-500 max-w-2xl">
            Discover our delightful kids' collection, featuring playful designs and comfortable fabrics
            that are perfect for active little ones who deserve both style and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 mb-10 text-center">
          <p className="text-lg mb-6">Our new kids collection is coming soon with more exciting styles!</p>
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

export default KidsCollectionPage;
