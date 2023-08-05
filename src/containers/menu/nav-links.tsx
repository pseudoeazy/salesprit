import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import withHover from "components/hocs/with-hover";
import navs from "constants/navs";
import scroll from "assets/styles/scroll.module.css";

const styles = {
  ul: `relative z-10  flex flex-col space-y-14 px-16 lg:px-1 my-32 lg:mt-7 cart-scrollbar overflow-y-auto`,
};


export default function NavLinks() {

  return (
    <motion.ul
      className={`${styles.ul} ${scroll.scrollbar}`}
    >
      {navs.map(({ path, title, icon: Icon }, index) => {
           const HoverComponent = withHover(Icon);
        return(
          <motion.li
          key={index}
     
       
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
      
          <HoverComponent path={path} title={title} />
        </motion.li>
        )
      })}
    </motion.ul>
  );
}
