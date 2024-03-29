import * as React from "react";
import { motion } from "framer-motion";
import { ClickAction } from "./mobile";

const styles = {
  button: `
  z-50
  absolute
  left-7
  top-7
  width-[50px]
  height-[50px]
  rounded-full
  flex items-center justify-center`,
};

//@ts-ignore
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface Props {
  toggle: () => void;
  setClickType: (type: ClickAction) => void;
}

const MenuToggle = ({ toggle, setClickType }: Props) => {
  const handleClick = () => {
    setClickType({ type: "isMenuClick" });
    toggle();
  };

  return (
    <button
      onClick={handleClick}
      className={styles.button}
      aria-expanded="true"
      aria-label="Open the menu"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
