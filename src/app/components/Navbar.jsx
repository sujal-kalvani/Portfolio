"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const toggleHamburger = () => setHamburger(!hamburger);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact Us", path: "#contact" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleClick = (hash) => {
    setActiveHash(hash);
    window.location.hash = hash;
    setHamburger(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white w-full">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Logo / Heading */}
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Hamburger icon (visible on mobile only) */}
        <div className="lg:hidden">
          {hamburger ? (
            <FaXmark
              className="text-2xl cursor-pointer"
              onClick={toggleHamburger}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={toggleHamburger}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => handleClick(link.path)}
                className={`transition-colors duration-200 ${
                  activeHash === link.path
                    ? "text-cyan-500 font-semibold"
                    : "hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center gap-5 bg-gray-900 transition-all duration-300 overflow-hidden ${
          hamburger ? "max-h-96 py-5" : "max-h-0 py-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => handleClick(link.path)}
            className={`transition-colors duration-200 ${
              activeHash === link.path
                ? "text-cyan-500 font-semibold"
                : "hover:text-cyan-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
