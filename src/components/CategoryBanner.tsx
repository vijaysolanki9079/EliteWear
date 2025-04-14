
import { Link } from "react-router-dom";

const CategoryBanner = () => {
  const categories = [
    {
      id: 1,
      name: "Shirts & Tops",
      image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products"
    },
    {
      id: 2,
      name: "Outerwear",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products"
    },
    {
      id: 3,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="relative overflow-hidden rounded-lg group h-[300px]"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/70"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <span className="inline-block text-sm font-medium border-b border-transparent group-hover:border-white transition-all">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
