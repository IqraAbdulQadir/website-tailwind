import React from "react"
import Link from "next/link"

const Footer = () => {
    return (
// Wrap your content and footer in a main wrapper
<div className="min-h-screen flex flex-col">
  <main className="flex-grow">
    {/* Your page content goes here */}
  </main>

  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0">
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          MyWebsite
        </Link>
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
        <Link href="/about" className="hover:text-yellow-500">
          About
        </Link>
        <Link href="/services" className="hover:text-yellow-500">
          Services
        </Link>
        <Link href="/contact" className="hover:text-yellow-500">
          Contact
        </Link>
      </div>

      {/* Social Media Links Section */}
      <div className="flex gap-6">
        <a href="#" className="text-2xl hover:text-yellow-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-2xl hover:text-yellow-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-2xl hover:text-yellow-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="bg-gray-900 text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
    </div>
  </footer>
</div>

);
}

export default Footer;