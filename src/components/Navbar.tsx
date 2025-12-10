import React, { useState } from "react";
import { ModeToggle } from "./toggleTheme";
import { Link } from "react-router-dom"; // ✅ FIXED

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-950/80 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer">
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              Home
            </Link>

            <Link
              to="/projects"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              Projects
            </Link>

            <Link
              to="/about"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              About
            </Link>

            <ModeToggle />

            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-transform hover:scale-105 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 transition"
            >
              {!isOpen ? (
                /* Open Icon */
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Close Icon */
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
          <Link
            to="/"
            onClick={toggleMenu}
            className="py-2 hover:text-purple-600 dark:hover:text-purple-400"
          >
            Home
          </Link>

          <Link
            to="/projects"
            onClick={toggleMenu}
            className="py-2 hover:text-purple-600 dark:hover:text-purple-400"
          >
            Projects
          </Link>

          <Link
            to="/about"
            onClick={toggleMenu}
            className="py-2 hover:text-purple-600 dark:hover:text-purple-400"
          >
            About
          </Link>

          <a
            href="#contact"
            onClick={toggleMenu}
            className="mt-4 w-full text-center px-4 py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
