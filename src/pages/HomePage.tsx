
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryBanner from "../components/CategoryBanner";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <CategoryBanner />
      <Newsletter />
    </div>
  );
};

export default HomePage;
