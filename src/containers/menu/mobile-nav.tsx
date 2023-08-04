import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import NavLinks from "./nav-links";
import scroll from "assets/styles/scroll.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  //w-screen h-screen justify-center items-center overflow-hidden bg-blue-500
  return (
    <div
      className={`relative py-4 px-10 border-2 border-red-500 ${
        isOpen ? " bg-blue-500 w-screen h-screen" : ""
      }`}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={`relative z-50 ${
          isOpen ? "h-screen" : ""
        } px-4 pt-8 border-t border-t-mygray overflow-x-hidden overflow-y-scroll border border-red-500 ${
          scroll.scrollbar
        }`}
      >
        <motion.div
          className="absolute top-0 left-0 w-full bottom-0 bg-[yellowgreen]"
          variants={sidebar}
        />
        <NavLinks />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default MobileNav;
