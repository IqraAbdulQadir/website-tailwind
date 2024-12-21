'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-xl "
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-6 absolute md:static md:bg-transparent bg-gray-800 w-full md:w-auto top-[60px] md:top-auto left-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <Link
            href="/"
            className={`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent ${
              pathname === '/' ? 'text-yellow-500 font-bold' : ''
            }`}
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Home
          </Link>
          <Link
            href="/about"
            className={` px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent ${
              pathname === '/about' ? 'text-yellow-500 font-bold' : ''
            }`}
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            About
          </Link>
          <Link
            href="/services"
            className={`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent ${
              pathname === '/services' ? 'text-yellow-500 font-bold' : ''
            }`}
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent ${
              pathname === '/contact' ? 'text-yellow-500 font-bold' : ''
            }`}
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
