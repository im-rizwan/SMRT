import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Location */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image src="/images/logo.jpg" alt="Company Logo" width={150} height={50}  className='rounded-sm'/>
          <p>Location: Chennai & Bengaluru</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col space-y-1">
            <Link href="/">
              <span className="hover:text-gray-500 cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-gray-500 cursor-pointer">About Us</span>
            </Link>
            
            <Link href="/contact">
              <span className="hover:text-gray-500 cursor-pointer">Contact</span>
            </Link>

            <Link href="/construction">
              <span className="hover:text-gray-500 cursor-pointer">All Projects</span>
            </Link>
          </div>
        </div>

        {/* Column 3: Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/SMRTInteriors/" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaFacebookF size={24} className="hover:text-blue-500" />
              </span>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaTwitter size={24} className="hover:text-blue-400" />
              </span>
            </Link>
            <Link href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F30221210%2Fadmin%2F" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaLinkedinIn size={24} className="hover:text-blue-700" />
              </span>
            </Link>
            <Link href="https://www.instagram.com/smrtinteriors/" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaInstagram size={24} className="hover:text-pink-500" />
              </span>
            </Link>
            <Link href="https://in.pinterest.com/smrtinterior/" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaPinterest size={24} className="hover:text-red-500" />
              </span>
            </Link>
            <Link href="https://www.youtube.com/watch?v=vRbzT0DPFB0" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaYoutube size={24} className="hover:text-red-600" />
              </span>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <span className="transition duration-300 cursor-pointer">
                <FaWhatsapp size={24} className="hover:text-green-500" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
        <p>© 2024 SMRT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
