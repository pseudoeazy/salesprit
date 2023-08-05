import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "types/product";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";


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
      <div
        className="w-full relative rounded-lg overflow-hidden"
        role="button"
        onClick={() => addItem({ product, id: product.id })}
      >
        <Image
          alt={product?.name}
          src={`/images/${product?.imgUrl}`}
          width={192}
          height={192}
          style={{
            width: "100%",
            height: 192,
          }}
        />
      </div>

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
