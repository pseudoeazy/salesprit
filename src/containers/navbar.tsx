import Link from "next/link";
import { useRouter } from "next/router";
import navs from "constants/navs";
import scroll from "assets/styles/scroll.module.css";

const NavBar = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;
  return (
    <div className="w-[14.9375rem] hidden md:block">
      <div
        className={`fixed w-[14.9375rem]  min-h-screen border-r border-r-mygray `}
      >
        <div className="h-[7.3rem] flex items-center justify-center ">
          <Link href="/">
            <h1 className="font-bold leading-normal">
              <span className="text-secondary">Sale</span>
              <span>sprit</span>
            </h1>
          </Link>
        </div>
        <nav
          className={`h-screen px-4 pt-8 border-t border-t-mygray overflow-x-hidden overflow-y-scroll ${scroll.scrollbar}`}
        >
          <ul className={`flex flex-col space-y-14 `}>
            {navs.map((nav, index) => (
              <li
                key={index}
                className={`${
                  isActive(nav.path) ? "bg-mygray text-primary" : "text-mygray"
                } capitalize text-sm text-center font-semibold p-4 rounded-lg`}
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
