import React from "react";
import { motion } from "framer-motion";
import { Product } from "types/product";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";

//max-w-xl 
const styles = {
  container: `bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`,
  productName: `mb-2 font-bold tracking-tight text-gray-900 dark:text-white`,
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <img
        className="w-full h-48 rounded-lg cursor-pointer"
        src={`/images/${product?.imgUrl}`}
        alt={product?.name}
        onClick={() => addItem({ product, id: product.id })}
      />

      <div className="p-5">
        <div
          onClick={() => addItem({ product, id: product.id })}
          role="button"
          className={styles.productName}
        >
          {product?.name}
        </div>

        <span className="text-secondary font-bold">
          {CURRENCY}
          {product?.price?.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
