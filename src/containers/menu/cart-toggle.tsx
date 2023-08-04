import { useCart } from "contexts/cart/cart-provider";
import CartIcon from "assets/icons/cart-icon";
import { ClickAction } from "./mobile";

const styles = {
  button: `
  z-50
  absolute
  right-7
  top-7
  width-[50px]
  height-[50px]
  rounded-full
  flex items-center justify-center`,
  span:`w-5 h-5  p-1 flex items-center justify-center bg-gray-900 text-white absolute rounded-full`
};

interface Props {
  toggle: () => void;
  setClickType: (type: ClickAction) => void;
}
const CartToggle = ({ toggle, setClickType }: Props) => {
  const { itemsCount } = useCart();

  const handleClick = () => {
    setClickType({ type: "isCartClick" });
    toggle();
  };
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      aria-label="cart-button"
    >
      <CartIcon width="20px" height="20px" />
      <span
        className={styles.span}
        style={{ fontSize: "10px", top: "-10px", right: "-10px" }}
      >
        {itemsCount}
      </span>
    </button>
  );
};

export default CartToggle;
