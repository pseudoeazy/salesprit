import { motion } from "framer-motion";
import Search from "components/search";
import Notification from "assets/icons/notification";
import ProductCard from "components/product-card";
import products from "data/products";

const MainContent = () => {
  return (
    <div className="flex-1  min-h-screen ">
      <header className="flex items-center justify-center  pt-10 pb-12 px-4 md:px-8">
        <div>
          <Search />
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
          role="button"
        >
          <Notification />
        </motion.div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default MainContent;
