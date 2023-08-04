import Link from "next/link";
import { useRouter } from "next/router";
import navs from "constants/navs";
import { motion } from "framer-motion";
import scroll from "assets/styles/scroll.module.css";

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
  //md:mt-0
  return (
    <motion.ul
      className={`relative z-10 px-16 flex flex-col space-y-14 my-32 cart-scrollbar overflow-y-auto ${scroll.scrollbar}`}
      variants={variants}
    >
      {navs.map((nav, index) => (
        <motion.li
          key={index}
          className={`${
            isActive(nav.path) ? "bg-mygray text-primary" : "text-mygray"
          } capitalize text-sm text-center font-semibold p-4 rounded-lg`}
          variants={liVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={nav.path}>{nav.title}</Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
