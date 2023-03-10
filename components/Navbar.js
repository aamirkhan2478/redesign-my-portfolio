import Image from "next/image";
import logo from "@/public/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    document.addEventListener("scroll", () => {
      const currentPosition = window.scrollY + 80;

      sections.forEach((section) => {
        if (
          section.offsetTop <= currentPosition &&
          section.offsetTop + section.offsetHeight > currentPosition
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("nav-active");

            if (
              section.getAttribute("id") ===
              link.getAttribute("href").substring(1)
            ) {
              link.classList.add("nav-active");
            }
          });
        }
      });
    });
  }, []);

  return (
    <header className={open ? "header active" : "header"} id="nav-header">
      <a href="#">
        <Image width={200} className="logo" src={logo} alt="Logo" />
      </a>
      <nav className="navbar">
        <ul className="nav-flex">
          <li className="nav-link">
            <a href="#work" className="link-nav">
              Portfolio
            </a>
          </li>
          <li className="nav-link">
            <a href="#about" className="link-nav">
              About
            </a>
          </li>
          <li className="nav-link">
            <a href="#contact" className="link-nav">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-toggle-btn" onClick={() => setOpen(!open)}>
        {open ? (
          <ion-icon name="close" className="icon-menu" />
        ) : (
          <ion-icon name="menu" className="icon-menu" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
