import { useState } from "react";
import { useRouter } from "next/router";
import Button from "components/button";
import NoItem from "components/cart/no-item";
import CartItem from "components/cart/cart-items";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";
import Item from "types/item";
import scroll from "assets/styles/scroll.module.css";

const Cart = () => {
  const { items, calculatePrice, clearCart, itemsCount } = useCart();
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmit(true);
    setTimeout(() => {
      setTimeout(() => {
        clearCart();
      }, 1000);
      router.push("/order/confirmation");
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center px-2 md:p-8 mt-20 md:mt-0 ">
      <div
        className={`w-full relative cart-scrollbar md:left-[-1rem]  overflow-y-auto ${scroll.scrollbar}`}
      >
        {items.length ? (
          <>
            <div className="w-full relative mb-6 ">
              <h3 className="font-bold m-0 text-primary">Order #20235</h3>
            </div>

            <div className="space-y-4 px-4">
              {items
                .slice(0)
                .reverse()
                .map((item: Item) => (
                  <CartItem item={item} key={item.id} />
                ))}
            </div>
          </>
        ) : (
          <NoItem />
        )}

        {!!itemsCount && <div className="flex flex-col px-4 mt-20 ">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">
              Subtotal &nbsp;
              <span className="font-normal text-gray-700 text-13px">
                (Incl. VAT)
              </span>
            </span>

            <span className="font-semibold text-18px text-gray-900">
              {CURRENCY}
              {calculatePrice()}
            </span>
          </div>

          <Button
            disabled={isSubmit}
            loading={isSubmit}
            className="big my-12"
            onClick={handleSubmit}
          >
            Place Order
          </Button>
        </div>}
      </div>
    </section>
  );
};

export default Cart;
