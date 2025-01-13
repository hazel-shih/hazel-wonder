"use client";

import { nunito } from "@/fonts/configure";
import "./style.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface HeaderLinkProperty {
  name: string;
  href: string;
  handleClick?: () => void;
  className?: string;
}

const HeaderLink: React.FC<HeaderLinkProperty> = ({
  name,
  href,
  handleClick,
  className,
}) => {
  const pathname = usePathname();

  return (
    <Link
      onClick={handleClick}
      className={classNames("header-link", nunito.className, className, {
        isActive: pathname.includes(href),
      })}
      href={href}
    >
      {name}
    </Link>
  );
};

export default HeaderLink;
