import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Call from "assets/icons/call";
import Cart from "components/cart";
import { useCart } from "contexts/cart/cart-provider";

const RightSidebar = () => {
  const { items, calculatePrice, clearCart } = useCart();
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmit(true);
    setTimeout(() => {
      setTimeout(() => {
        clearCart();
      }, 500);
      router.push("/order/confirmation");
    }, 2000);
  };

  return (
    <aside className="w-[26.88rem] hidden lg:block">
      <div className="fixed w-[26.88rem] min-h-screen  border-l border-l-mygray ">
        <section className="px-8">
          <div className="h-[7.88rem] relative left-[-1rem] z-10 flex justify-between items-center border-b border-b-mygray">
            <div className="flex">
              <div className="">
                <img
                  className="inline-block w-16 h-16 rounded-full"
                  src="/images/cashier.png"
                  alt="cashier"
                />
              </div>
              <div className="flex flex-col ml-2.5">
                <span>Saul Goodmate</span>
                <span>Cashier</span>
              </div>
            </div>
            <div>
              <motion.span
                whileHover={{ scale: 1.1, rotate: 30 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <a href="tel:123456789">
                  <Call />
                </a>
              </motion.span>
            </div>
          </div>
        </section>
        <Cart />
      </div>
    </aside>
  );
};
export default RightSidebar;
