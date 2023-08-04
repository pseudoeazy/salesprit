import Link from "next/link";
import NavLinks from "containers/menu/nav-links";
import Logo from "components/logo";

const NavBar = () => {
  return (
    <div className="w-[14.9375rem] hidden md:block">
      <div
        className={`fixed w-[14.9375rem]  min-h-screen border-r border-r-mygray `}
      >
        <Logo />
        <NavLinks />
      </div>
    </div>
  );
};

export default NavBar;
