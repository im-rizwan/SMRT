"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsDropdownOpen(false), 300);
    setTimeoutId(id);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <Link href="/" className="text-white text-lg font-semibold hidden lg:block ml-4 lg:ml-0">
            <Image src='/images/logo.jpg' alt='SMRT logo' width={100} height={80} priority className='rounded-md'/>
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div className={`hidden lg:flex items-center space-x-4 flex-grow justify-center relative`}>
          <Link href="/">
            <span className="text-white hover:text-gray-400">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white hover:text-gray-400">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-400">Contact Us</span>
          </Link>
          <Link href="/construction">
            <span className="text-white hover:text-gray-400">Construction</span>
          </Link>

          {/* Dropdown for Interiors */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <span className="flex items-center text-white hover:text-gray-400 cursor-pointer">
              Interiors
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </span>
            <div
              className={`absolute top-full left-0 mt-2 bg-gray-800 text-white ${isDropdownOpen ? 'block' : 'hidden'} z-50`}
              style={{ minWidth: '12rem' }}
            >
              <Link href="/residential">
                <span className="block px-4 py-2 hover:bg-gray-700">Residential Interiors</span>
              </Link>
              <Link href="/commercial">
                <span className="block px-4 py-2 hover:bg-gray-700">Commercial Interiors</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Get Quotes Button for Desktop */}
        <Link href="/contact">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hidden lg:block">
            Get Quotes
          </button>
        </Link>
      </div>

      {/* Mobile Menu Items */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="text-white text-lg font-semibold">
            <Image src='/images/logo.jpg' alt='SMRT logo' width={100} height={80} priority className='rounded-md'/>
          </Link>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-4 space-y-2">
          <Link href="/">
            <span className="block px-4 py-2 text-white bg-gray-800 hover:bg-gray-700">Home</span>
          </Link>
          <Link href="/about">
            <span className="block px-4 py-2 text-white bg-gray-800 hover:bg-gray-700">About</span>
          </Link>
          <Link href="/contact">
            <span className="block px-4 py-2 text-white bg-gray-800 hover:bg-gray-700">Contact Us</span>
          </Link>
          <Link href="/construction">
            <span className="block px-4 py-2 text-white bg-gray-800 hover:bg-gray-700">Construction</span>
          </Link>
          <div>
            <div
              className="flex items-center justify-between px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Interiors</span>
              <ChevronDownIcon className={`w-4 h-4 ml-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            {isDropdownOpen && (
              <div className="pl-4 bg-gray-800 z-50">
                <Link href="/residential">
                  <span className="block px-4 py-2 text-white hover:bg-gray-700">Residential Interiors</span>
                </Link>
                <Link href="/commercial">
                  <span className="block px-4 py-2 text-white hover:bg-gray-700">Commercial Interiors</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Quotes</button>
          </Link>
        </div>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
