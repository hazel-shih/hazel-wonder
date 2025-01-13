import { pacifico } from "@/fonts/configure";
import LOGO from "@public/LOGO.png";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import HeaderLink from "../HeaderLink";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  return (
    <header className="custom-header">
      <nav>
        <Link href="/" className="logo">
          <Image src={LOGO} alt="LOGO" width={45} height={45} />
          <h2 className={`${pacifico.className}`}>Hazel Wonder</h2>
        </Link>
        <div className="desktop-menu">
          <HeaderLink name="Blog" href="/blog" />
          <HeaderLink name="About" href="/about" />
          <HeaderLink name="Lab" href="/lab" />
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Header;
