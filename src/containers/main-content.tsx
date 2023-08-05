import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Mobile from "containers/menu/mobile";
import Search from "components/search";
import ProductCard from "components/product-card";
import { useSearch } from "contexts/search/use-search";
import useSearchableProducts from "hooks/use-searchable-products";
import { Product } from "types/product";
import products from "data/products";
import NotFound from "assets/icons/not-found";
import Notification from "assets/icons/notification";

const styles = {
  header: `md:mt-16 xl:mt-0 flex items-center justify-center pt-28  lg:pt-10 pb-12 px-4 lg:px-8`,
  cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8`,
};

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
    <div className="w-full xl:w-[28.503rem] flex-1 shrink  min-h-screen ">
      <Mobile />
      <header className={styles.header}>
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

      <section className="px-8 pb-8 flex flex-col items-center ">
        {!!filteredProducts.length ? (
          <section className={styles.cards}>
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
      </section>
    </div>
  );
};

export default MainContent;
