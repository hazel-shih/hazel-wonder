import "./style.scss";
import { nunito } from "@/fonts/configure";

const Footer = () => {
  return (
    <footer>
      <nav className={nunito.className}>
        Copyright © 2025 Hazel Wonder. All Rights Reserved.
      </nav>
    </footer>
  );
};

export default Footer;
