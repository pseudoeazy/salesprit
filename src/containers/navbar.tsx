import NavLinks from "containers/menu/nav-links";
import Logo from "components/logo";

const NavBar = () => {
  return (
    <div className="w-[14.9375rem] hidden lg:block">
      <div
        className={`fixed w-[14.9375rem]  min-h-screen border-x border-x-mygray `}
      >
        <Logo />
        <NavLinks />
      </div>
    </div>
  );
};

export default NavBar;
