import { motion } from "framer-motion";
import Counter from "./counter";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";
import Item from "types/item";

type CartItemProps = {
  item: Item;
};

const styles = {
  CartItemBase:
    " relative w-full h-auto flex justify-around items-center bg-white p-4 border border-mygray rounded-xl  ",
  CartItemImage:
    "flex w-20 h-20 rounded overflow-hidden bg-mygray flex-shrink-0",

  CartItemContent: "flex flex-col w-full pl-5",

  CartItemName: "text-13px text-gray-700",

  CartItemSinglePrice: "text-13px text-gray-500 mt-5px mb-10px",

  CartItemTotalWrapper: "flex items-center justify-between",

  CartItemTotalPrice: "font-semibold text-16px text-gray-900 flex-shrink-0",
};

const itemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addItem, removeItem } = useCart();

  return (
    <motion.div className={styles.CartItemBase}>
      <div className={styles.CartItemImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/${item.product.imgUrl}`} alt={item.product.name} />
      </div>

      <div className={styles.CartItemContent}>
        <div className="flex flex-col">
          <span className={styles.CartItemName}>{item.product.name}</span>
          <span className={styles.CartItemTotalPrice}>
            {CURRENCY}
            {(item.product.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <div className={styles.CartItemTotalWrapper}>
        <Counter
          value={item.quantity}
          onIncrement={() => addItem(item)}
          onDecrement={() => removeItem(item)}
        />
      </div>
    </motion.div>
  );
};

export default CartItem;
