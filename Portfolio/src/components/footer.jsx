import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full text-white py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />

        {/* Description */}
        <p className="text-gray-400 text-sm max-w-md">
          Building applications and relationships — turning ideas into products
          and conversations into conversions.
        </p>

        {/* Email */}
        <p className="text-gray-300 font-medium">muarijshakeel5@gmail.com</p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-gray-400 hover:text-white text-2xl transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-gray-400 hover:text-white text-2xl transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-gray-400 hover:text-white text-2xl transition" />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Muarij Shakeel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
