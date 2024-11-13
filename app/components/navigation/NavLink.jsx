"use client";

import { usePathname } from "next/navigation";
import Link from "../core/Link";

const NavLink = ({ href, className = "", children, ...rest }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:bg-slate-100 w-full block px-3 py-1.5 rounded-md ${className} ${
        pathname === href ? "bg-slate-300 pointer-events-none font-bold" : ""
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
