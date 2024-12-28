"use client";
import React, { useState } from "react";
import PageLogo from "../../assets/images/png/page-logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { NAV_LINKS } from "../../utils/helper";
import Icons from "./Icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden", menuOpen);
  };

  return (
    <nav className="flex items-center justify-between pt-6 container max-w-[1188px]">
      <img src={PageLogo} className="w-[90px] h-[58px]" alt="Page Logo" loading="lazy" />
      <div className="hidden md:flex gap-4 lg:gap-8 items-center px-4 py-2 xl:py-2 bg-gray-alpha shadow-md rounded-[10px]">
        {NAV_LINKS.map((obj, i) => (
          <Link
            key={i}
            to={obj.url}
            className="text-white opacity-40 leading-[100%] hover:opacity-100 transition duration-300 text-sm xl:text-base"
          >
            {obj.title}
          </Link>
        ))}
      </div>
      <div
        className={`md:hidden bg-dark-800 px-8 py-14 absolute top-0 w-full max-w-[260px] flex flex-col items-start gap-6 min-h-screen z-[60] transition-all duration-300 ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-4 cursor-pointer"
          aria-label="Close Menu"
        >
          <Icons iconName="cross" />
        </button>
        {NAV_LINKS.map((obj, index) => (
          <Link
            key={index}
            to={obj.url}
            onClick={toggleMenu}
            className="text-white transition duration-300 text-lg opacity-80 hover:opacity-100"
          >
            {obj.title}
          </Link>
        ))}
      </div>
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="bg-black/40 fixed w-full h-screen top-0 left-0 md:hidden z-50"
        ></div>
      )}
      <Button arrowText="Contact" className="bg-transparent border border-white" />
    </nav>
  );
};

export default Navbar;