import { useRef, useReducer } from "react";
import { motion, useCycle } from "framer-motion";
import { Slide } from "@chakra-ui/react";
import useDimensions from "hooks/use-dimensions";
import Cart from "components/cart";
import Logo from "components/logo";
import MenuToggle from "./menu-toggle";
import NavLinks from "./nav-links";
import CartToggle from "./cart-toggle";

export interface ClickAction {
  type: string;
}

interface ClickState {
  isMenuClick: boolean;
  isCartClick: boolean;
}
const initialClickState: ClickState = {
  isMenuClick: false,
  isCartClick: false,
};

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
const clickReducer = (state: ClickState, action: ClickAction): ClickState => {
  if (action.type === "isMenuClick") {
    return { isCartClick: false, isMenuClick: true };
  }
  if (action.type === "isCartClick") {
    return { isMenuClick: false, isCartClick: true };
  }
  return state;
};

const Mobile = () => {
  const [clickType, setClickType] = useReducer(clickReducer, initialClickState);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div
      className={`fixed xl:hidden z-50 ${
        isOpen ? " bg-info w-screen h-screen" : "w-full bg-white"
      }`}
      role="navigation"
      aria-label="Main menu"
    >
      <Logo />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute left-0 top-0  bottom-0 w-full"
      >
        <motion.div className="background" variants={sidebar} />

        <Slide
          direction={`${clickType.isMenuClick ? "left" : "right"}`}
          in={isOpen}
          style={{ zIndex: 10 }}
        >
          {clickType.isMenuClick && <NavLinks />}
          {clickType.isCartClick && <Cart />}
        </Slide>
        <MenuToggle toggle={toggleOpen} setClickType={setClickType} />
        <CartToggle toggle={toggleOpen} setClickType={setClickType} />
      </motion.nav>
    </div>
  );
};

export default Mobile;
