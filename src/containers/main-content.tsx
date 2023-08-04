import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Search from "components/search";
import Notification from "assets/icons/notification";
import ProductCard from "components/product-card";
import products from "data/products";
import { useSearch } from "contexts/search/use-search";
import useSearchableProducts from "hooks/use-searchable-products";
import { Product } from "types/product";
import NotFound from "assets/icons/not-found";
// import MobileNav from "containers/menu/mobile-nav";
import Mobile from "containers/menu/mobile";

const MainContent = () => {
  const [productsData, setProductsData] = useState<Product[]>(products);
  const { searchTerm } = useSearch();
  const filteredProducts = useSearchableProducts(productsData, searchTerm);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setProductsData(products);
    }

    return () => {
      isMounted = false;
    };
  }, [searchTerm]);
  return (
    <div className="flex-1  min-h-screen">
      <Mobile />
      <header className="flex items-center justify-center pt-28  md:pt-10 pb-12 px-4 md:px-8">
        <div>
          <Search />
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="hidden md:inline-block"
          role="button"
        >
          <Notification />
        </motion.div>
      </header>

      {!!filteredProducts.length ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 md:px-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div className="w-full p-20">
          <NotFound width="100%" />
          <h3 className="text-24px text-gray-900 font-bold mt-35px mb-0 text-center">
            No product found
          </h3>
        </div>
      )}
    </div>
  );
};

export default MainContent;
