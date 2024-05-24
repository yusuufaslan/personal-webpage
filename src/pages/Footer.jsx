import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Yusuf Aslan. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com/yusuufaslan" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/yusuf-aslan-47052b1b6/" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          <a href="https://x.com/__yusufaslan" className="text-gray-400 hover:text-white"><FaXTwitter size={24} /></a>
          <a href="https://www.instagram.com/yusuufaslan/" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
