"use client";
import Logo from "@/public/logo-plain.svg";

import { useEffect, useState } from "react";
import Link from "../core/Link";
import { usePathname, useRouter } from "next/navigation";
import Image from "../core/Image";

const MenuToggle = ({ ...rest }) => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const menu = typeof window !== "undefined" && document.getElementsByClassName("menu");
  const body = typeof window !== "undefined" && document.getElementsByTagName("body")[0];

  const toggleMenu = () => {
    if (open) {
      menu[0]?.classList?.add("hidden");
      // menu[1].classList.add("hidden");
      return setOpen(false);
    }
    setOpen(true);
    menu[0]?.classList?.remove("hidden");
    // menu[1].classList.remove("hidden");
  };

  useEffect(() => {
    setOpen(false);
    menu[0]?.classList?.add("hidden");
    // menu[1].classList.add("hidden");
  }, [pathname]);

  useEffect(() => {
    open ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <Link onClick={toggleMenu} {...rest}>
      {!open ? <Image src={Logo} className="block w-auto h-11 invert" alt="Brainloggers" /> : "close"}
    </Link>
  );
};

export default MenuToggle;
