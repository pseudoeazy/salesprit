import { motion } from "framer-motion";
import Image from "next/image";
import Call from "assets/icons/call";
import Cart from "components/cart";
import CashierProfile from "../../public/images/cashier.png";

const styles = {
  container: `w-[26.88rem] hidden lg:block`,
  semiContainer: `fixed w-[26.88rem] min-h-screen  border-x border-x-mygray`,
  top: `relative  z-10 flex justify-between items-center `,
  itemBox: `flex justify-between items-center border-b border-b-mygray`,
};

const RightSidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.semiContainer}>
        <section className="px-8">
          <div className={styles.itemBox}>
            <div className="flex items-center">
              <div className={styles.top} id="cashierProfile">
                <Image
                  src={CashierProfile}
                  width={64}
                  height={64}
                  alt="Cashier Profile"
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
