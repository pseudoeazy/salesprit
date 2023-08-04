import Link from "next/link";
import { useRouter } from "next/router";
import navs from "constants/navs";
import { motion } from "framer-motion";
import scroll from "assets/styles/scroll.module.css";

const styles = {
  ul: `relative z-10  flex flex-col space-y-14 px-16 md:px-1 my-32 md:mt-7 cart-scrollbar overflow-y-auto`,
  li: `capitalize text-sm text-center font-semibold p-4 rounded-lg hover:bg-mygray hover:text-primary cursor-pointer`,
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavLinks() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;
  return (
    <motion.ul
      className={`${styles.ul} ${scroll.scrollbar}`}
      // variants={variants}
    >
      {navs.map((nav, index) => (
        <motion.li
          key={index}
          className={`${
            isActive(nav.path) ? "bg-mygray text-primary" : "text-mygray"
          } ${styles.li} `}
          // variants={liVariants}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={nav.path}>{nav.title}</Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
