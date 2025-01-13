"use client";
import { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink";
import classNames from "classnames";
import "./style.scss";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!isOpen || !menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <div
        className={classNames("menu-icon", [{ "is-open": isOpen }])}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className="links">
          <HeaderLink
            name="Blog"
            href="/blog"
            handleClick={() => setIsOpen(false)}
          />
          <HeaderLink
            name="About"
            href="/about"
            handleClick={() => setIsOpen(false)}
          />
          <HeaderLink
            name="Lab"
            href="/lab"
            handleClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
