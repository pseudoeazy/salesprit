import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import NavLinks from "./nav-links";
import Logo from "components/logo";

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

const Mobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  //w-screen h-screen justify-center items-center overflow-hidden bg-blue-500
  return (
    <div
      className={`md:hidden relative border border-red-500 ${
        isOpen ? " bg-info w-screen h-screen" : ""
      }`}
    >
      <Logo />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute left-0 top-0  bottom-0 w-full border border-red-500"
      >
        <motion.div className="background" variants={sidebar} />

        <div className={`${isOpen ? "block" : "hidden"}`}>
        <NavLinks />
        </div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default Mobile;
