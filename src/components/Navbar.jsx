import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-gray-800 tracking-wide hover:text-blue-600 transition"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li>
            <HashLink smooth to="/#home" className="hover:text-blue-500 transition">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="hover:text-blue-500 transition">
              About
            </HashLink>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-md border-t border-gray-100">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-700 font-medium">
            <li>
              <HashLink
                smooth
                to="/#home"
                className="hover:text-blue-500 transition"
                onClick={toggleMenu}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                className="hover:text-blue-500 transition"
                onClick={toggleMenu}
              >
                About
              </HashLink>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-blue-500 transition"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
