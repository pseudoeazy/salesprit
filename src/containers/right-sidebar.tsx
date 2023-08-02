import Call from "assets/icons/call";
import Button from "components/button";
import NoItem from "components/cart/no-item";
import scroll from "assets/styles/scroll.module.css";
import CURRENCY from "constants/currency";
import { useCart } from "contexts/cart/cart-provider";
import CartItem from "components/cart/cart-items";
import Item from "types/item";

const RightSidebar = () => {
  const { items, calculatePrice } = useCart();

  return (
    <aside className="w-[26.88rem]">
      <div className="fixed w-[26.88rem] min-h-screen  border-l border-l-mygray ">
        <section className="px-8">
          <div className="h-[7.88rem] relative left-[-1rem] z-10 flex justify-between items-center border-b border-b-mygray">
            <div className="flex">
              <div className="">
                <img
                  className="inline-block w-16 h-16 rounded-full"
                  src="/images/cashier.jpg"
                  alt="cashier"
                />
              </div>
              <div className="flex flex-col ml-2.5">
                <span>Saul Goodmate</span>
                <span>Cashier</span>
              </div>
            </div>
            <div>
              <Call />
            </div>
          </div>
        </section>
        <section className="p-8">
          <div
            className={`relative cart-scrollbar left-[-1rem]  overflow-y-auto ${scroll.scrollbar}`}
          >
            {items.length ? (
              <>
                <div className="w-full relative mb-6 ">
                  <h2 className="font-bold m-0 text-primary">Order #20235</h2>
                </div>

                <div className="space-y-4 px-4">
                  {items.map((item: Item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </div>
              </>
            ) : (
              <NoItem />
            )}

            <div className="flex flex-col px-4 mt-20 ">
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

              <Button className="big my-12">Place Order</Button>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};
export default RightSidebar;
