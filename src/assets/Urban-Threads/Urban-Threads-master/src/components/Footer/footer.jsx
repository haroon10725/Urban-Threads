import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">About Urban Threads</h3>
          <p className="text-sm text-justify w-full lg:w-1/2">
            Urban Threads is your go-to destination for modern and stylish clothing for men and boys.
            We connect you with top-notch merchants to bring the latest fashion trends right to your doorstep.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs">&copy; {new Date().getFullYear()} Urban Threads. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
