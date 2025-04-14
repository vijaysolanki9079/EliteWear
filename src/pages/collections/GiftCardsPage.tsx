
import React from "react";
import { Button } from "@/components/ui/button";

const GiftCardsPage = () => {
  const giftCardOptions = [
    { id: 1, value: 50, image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, value: 100, image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, value: 250, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold mt-10 mb-3">E-Gift Cards</h1>
          <p className="text-brand-gray-500 max-w-2xl mx-auto">
            Surprise someone special with the perfect gift. Our e-gift cards allow them to choose
            exactly what they want from our premium collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {giftCardOptions.map((card) => (
            <div key={card.id} className="border border-brand-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="aspect-video mb-6 overflow-hidden rounded-md">
                <img 
                  src={card.image} 
                  alt={`${card.value} Gift Card`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">₹{card.value} Gift Card</h3>
              <p className="text-brand-gray-500 mb-6">Valid for 12 months from purchase date</p>
              <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-brand-gray-100 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-4">How It Works</h3>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-7 w-7 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold">1</span>
              <p>Choose your gift card amount and add to cart</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-7 w-7 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold">2</span>
              <p>Enter recipient's email and a personal message</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-7 w-7 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold">3</span>
              <p>They receive the e-gift card instantly or on a date you choose</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 h-7 w-7 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold">4</span>
              <p>They redeem their gift at checkout with the unique code</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GiftCardsPage;
