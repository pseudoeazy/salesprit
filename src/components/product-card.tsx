import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "types/product";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";
import IconButton from "./cart/icon-button";
import Trash from "assets/icons/trash";
import Minus from "assets/icons/minus-icon";
import Plus from "assets/icons/plus-icon";
import Item from "types/item";
import Button from "./button";

const styles = {
  container: ` rounded-lg shadow-md `,
  productName: `mb-2 text-xl font-semibold text-black `,
  button: `h-[1.65rem] w-[1.65rem] rounded-full bg-mygray  text-black  transition duration-300 hover:bg-gray-300 focus:outline-none`,
  animatedCounterBase: `w-24 group flex items-center justify-between flex-shrink-0 rounded overflow-hidden  shadow-floatingUp`,
  animatedCounterValue: `font-semibold text-13px text-primary flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default`,
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem, removeItem, getItem, isInCart } = useCart();

  let item: Item | null = null;

  if (isInCart(product?.id)) {
    item = getItem(product.id) as Item;
  }
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className="w-full relative rounded-lg overflow-hidden">
        <Image
          alt={product?.name}
          src={`/images/${product?.imgUrl}`}
          width={192}
          height={192}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className="p-5">
        <div className={styles.productName}>{product?.name}</div>

        <span className="text-secondary text-lg font-bold">
          {CURRENCY}
          {product?.price?.toFixed(2)}
        </span>

        <div className={styles.animatedCounterBase}>
          {item ? (
            <>
              <Button
                onClick={() => removeItem(item)}
                className="p-2"
                aria-label="decrease item quantity"
              >
                {item?.quantity > 1 ? <Minus /> : <Trash />}
              </Button>
              <span className={styles.animatedCounterValue}>
                {item?.quantity ? item?.quantity : "0"}
              </span>
              <Button
                onClick={() => addItem(item)}
                className="p-2"
                aria-label="increase item quantity"
              >
                <Plus />
              </Button>
            </>
          ) : (
            <Button
              onClick={() => addItem({ product, id: product.id })}
              className="py-2 px-4"
              aria-label="add to cart"
            >
              <Plus />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
