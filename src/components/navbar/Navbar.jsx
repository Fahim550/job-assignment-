import React, { useState } from "react";
import { Link} from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-purple-800 shadow-md">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-2xl">
              Zepto Apps
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-white hover:bg-purple-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-purple-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <Link
              to="/wishlist"
              className="text-white hover:bg-purple-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              wishlist
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:bg-purple-900 px-3 py-2 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              // aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-purple-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-purple-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:bg-purple-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:bg-purple-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
