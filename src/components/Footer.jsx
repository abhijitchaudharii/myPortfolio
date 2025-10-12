import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-2xl font-bold text-white">MyPortfolio</div>

        {/* Navigation Links */}
        {/* <div className="flex flex-wrap justify-center gap-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-500 transition"
            >
              {link}
            </a>
          ))}
        </div> */}

        <div className="flex flex-wrap justify-center gap-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map(
            (link, index) => {
              if (link === "Projects") {
                // Use React Router Link for separate Projects page
                return (
                  <Link
                    key={index}
                    to="/projects"
                    className="hover:text-blue-500 transition"
                  >
                    {link}
                  </Link>
                );
              } else if (link === "Contact") {
                return (
                  <Link
                    key={index}
                    to="/contact"
                    className="hover:text-blue-500 transition"
                  >
                    {link}
                  </Link>
                );
              } else {
                // Home, About, Skills → use HashLink to navigate to '/' and scroll
                return (
                  <HashLink
                    key={index}
                    smooth
                    to={`/#${link.toLowerCase()}`}
                    className="hover:text-blue-500 transition"
                  >
                    {link}
                  </HashLink>
                );
              }
            }
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="GitHub"
              className="w-6 h-6 filter invert hover:invert-0 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              alt="Twitter"
              className="w-6 h-6 filter invert hover:invert-0 transition"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
