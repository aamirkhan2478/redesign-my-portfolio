import Image from "next/image";
import React from "react";
import Profile from "@/public/profile pic.jpg";

const Navbar = () => {
  return (
    <nav>
      <i className="bx bx-menu" />
      <p>Dark mode</p>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode" />
      <a href="#" className="profile">
        <Image src={Profile} alt="profile" />
      </a>
    </nav>
  );
};

export default Navbar;
