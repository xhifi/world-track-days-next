import MenuToggle from "./MenuToggle";
import NavLink from "./NavLink";
import Logo from "@/public/logo-plain.svg";
import Image from "../core/Image";
import Link from "../core/Link";

const NavList = () => {
  return (
    <>
      <ul className="text-black  fixed top-20 left-6 right-6 p-4 bottom-12 z-20 menu hidden rounded-lg shadow-2xl space-y-1">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
      </ul>
    </>
  );
};

const SiteMenu = () => {
  return (
    <div className="max-w-screen-2xl fixed top-2 md:top-5 w-full z-10 left-1/2 -translate-x-1/2 px-2 md:px-6">
      <nav className="flex items-center">
        <div className="flex flex-nowrap w-full items-center justify-between">
          <Link className="flex items-center gap-x-2 bg-white p-2 rounded-xl">
            <Image src={Logo} className="block w-auto h-10 invert" alt="Brainloggers" />
            <span className="flex flex-col">
              <span className="font-bold text-2xl text-left mb-0 leading-6 text-white invert">Brainloggers</span>
              <span className="text-sm leading-5 text-white invert">Web & Graphic Designs | IT</span>
            </span>
          </Link>
          <MenuToggle className="relative z-20 bg-white p-2 rounded-lg" />
        </div>
        <NavList />
      </nav>
    </div>
  );
};

export default SiteMenu;
