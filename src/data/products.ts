
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 499,
    image: "https://plus.unsplash.com/premium_photo-1682096353438-03b20899f011?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "T-Shirts",
    description: "A timeless white t-shirt made from 100% organic cotton. Features a comfortable fit and durable construction that will last through countless wears and washes."
  },
  {
    id: 2,
    name: "Slim Fit Black Jeans",
    price: 799,
    image: "https://images.unsplash.com/photo-1718252540558-7b383b52642e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Jeans",
    description: "Premium black jeans with a modern slim fit. Made with a touch of stretch for comfort and mobility throughout your day."
  },
  {
    id: 3,
    name: "Striped Button-Up Shirt",
    price: 699,
    image: "https://images.unsplash.com/photo-1559334417-a57bd929f003?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Shirts",
    description: "A versatile striped button-up shirt perfect for both casual and formal occasions. Made from breathable cotton blend."
  },
  {
    id: 4,
    name: "Wool Blend Overcoat",
    price: 1499,
    image: "https://images.unsplash.com/photo-1644269444230-c6d1f2722e10?q=80&w=3128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Outerwear",
    description: "A sophisticated wool blend overcoat that offers warmth without sacrificing style. Features a classic silhouette and premium construction."
  },
  {
    id: 5,
    name: "Leather Chelsea Boots",
    price: 1199,
    image: "https://images.unsplash.com/photo-1559826884-dbcc4a21caed?q=80&w=3010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Footwear",
    description: "Elegant leather Chelsea boots with elastic side panels. The perfect balance of comfort and style for any occasion."
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 199,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    description: "Stylish polarized sunglasses with UV protection. Featuring a timeless design that complements any face shape."
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 699,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=3172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Knitwear",
    description: "Luxuriously soft cashmere sweater available in a range of colors. Perfect for staying warm and stylish during colder months."
  },
  {
    id: 8,
    name: "Leather Messenger Bag",
    price: 1899,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Bags",
    description: "A sophisticated leather messenger bag with multiple compartments. Perfect for work, travel, or everyday use."
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: number, category: string): Product[] => {
  return products
    .filter(product => product.id !== id && product.category === category)
    .slice(0, 4);
};
