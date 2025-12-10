import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              DevPortfolio
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Building clean & modern web experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5">
            <Link
              to="#"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Github className="w-6 h-6" />
            </Link>

            <Link
              to="#"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>

            <Link
              to="mailto:example@gmail.com"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-700 dark:text-gray-400">
            © {new Date().getFullYear()} DevPortfolio — All rights reserved.
          </p>

          <Link
            to="#top"
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline mt-3 md:mt-0"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
