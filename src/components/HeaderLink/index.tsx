"use client";

import { nunito } from "@/fonts/configure";
import "./style.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface HeaderLinkProperty {
  name: string;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProperty> = ({ name, href }) => {
  const pathname = usePathname();

  return (
    <Link
      className={classNames("header-link", nunito.className, {
        isActive: pathname === href,
      })}
      href={href}
    >
      {name}
    </Link>
  );
};

export default HeaderLink;
