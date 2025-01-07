"use client";
import React, { useState } from "react";
import PageLogo from "../../assets/images/webp/page-logo.webp";
import { Link } from "react-router-dom";
import Button from "./Button";
import { NAV_LINKS } from "../../utils/helper";
import Icons from "./Icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };
  return (
    <nav className="relative">
      <div className="flex items-center justify-between pt-6 container lg:max-w-[1188px]">
        <img src={PageLogo} className="w-[60px] h-9 lg:w-[90px] lg:h-[58px]" alt="Page Logo" loading="lazy" />
        <div className="hidden lg:flex gap-4 justify-between items-center w-full max-w-[592px]">
          {NAV_LINKS.map((obj, i) => (
            <Link
              key={i}
              to={obj.url}
              className="text-white leading-[100%] hover:opacity-40 transition duration-300 text-sm xl:text-base">
              {obj.title}
            </Link>
          ))}
        </div>
        <div
          className={`lg:hidden bg-orange px-8 p-6 absolute top-0 w-full h-full max-w-[260px] flex flex-col items-start gap-6 min-h-screen z-[60] transition-all duration-300 ${menuOpen ? "left-0" : "-left-full"
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
          <Button arrowText="Contact" className="bg-transparent border border-white max-lg:!py-2 md:hidden" />
        </div>
        {menuOpen && (
          <div
            onClick={toggleMenu}
            className="bg-black/40 fixed w-full h-screen top-0 left-0 md:hidden z-50"
          ></div>
        )}
        <div className="max-lg:flex max-lg:items-center max-md:gap-4 max-lg:gap-6">
          <Button arrowText="Contact" className="bg-transparent border border-white max-lg:!py-2 max-md:hidden" />
          <div onClick={toggleMenu} className="lg:hidden w-10 md:w-11 flex flex-col justify-center gap-2 md:gap-3">
            <span className="h-[4px] w-full bg-white"></span>
            <span className="h-[4px] w-4/5 bg-white"></span>
            <span className="h-[4px] w-full bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;