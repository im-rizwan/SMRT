"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const LeadsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-newbg" id="leadsForm">
      <div className="bg-gray-300 w-[90%] max-w-[1200px] rounded-md mx-auto lg:h-auto mt-[30px] relative flex flex-col md:flex-row gap-6 py-6 lg:py-10">
        <div className="lg:w-[45%] w-[95%] mx-auto">
          <div className="bg-white w-full mx-auto lg:h-[55%] rounded-md text-gray-800 gap-5 p-6 shadow-lg">
            <div className="text-center lg:text-left lg:ml-[40px] ml-[20px]">
              <h1 className="text-[30px] text-[#06110e] mt-[10px] mb-8">
                Contact Information
              </h1>
              <div className="flex items-center text-[20px] gap-3 mt-2">
                <LuPhoneCall className="mt-[6px]" />
                <h1>+91 8778371791</h1>
              </div>
              <div className="flex items-center text-[20px] gap-3 mt-2">
                <MdOutlineMailOutline className="mt-[6px]" />
                <h1>info@smrtic.in</h1>
              </div>
              <div className="flex items-center text-[20px] gap-3 mt-2">
                <MdOutlineLocationOn className="mt-[6px]" />
                <h1>Chennai and Bengluru</h1>
              </div>
            </div>

            <div className="text-gray-800 flex gap-3 text-[35px] justify-center lg:mt-[50px] my-[30px] pb-[30px] lg:pb-0">
              <Link
                href="https://www.facebook.com/SMRTInteriors/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://www.instagram.com/smrtinteriors/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F30221210%2Fadmin%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://in.pinterest.com/smrtinterior/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <FaPinterestSquare />
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=vRbzT0DPFB0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700"
              >
                <FaYoutubeSquare />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500"
              >
                <FaWhatsappSquare />
              </Link>
            </div>
          </div>

          <div className="text-black mx-5 my-6">
            <h1 className="text-purple-800 text-[20px] font-bold">
              Why Reach Out to Us?
            </h1>

            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span className="mt-[11px]">
                <span className="text-purple-800">Expert Consultation:</span>{" "}
                Receive professional guidance and creative ideas from our
                experienced team.
              </span>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span className="mt-[11px]">
                <span className="text-purple-800">Customized Solutions:</span>{" "}
                We tailor our services to fit your unique requirements and style
                preferences.
              </span>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span className="mt-[11px]">
                <span className="text-purple-800">High-Quality Services:</span>{" "}
                Expect top-notch services that align with industry standards.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white lg:w-[50%] w-[95%] rounded-md mx-auto shadow-lg p-6">
          <h2 className="text-2xl text-[#06110e] font-bold text-center mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 text-[15px] "
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-gray-800 text-[15px] "
              >
                Mobile<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 text-[15px] "
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-gray-800 text-[15px] "
              >
                Location<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="serviceType"
                className="block text-gray-800 text-[15px] "
              >
                Service Type<span className="text-red-500">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="commercialInteriors">
                  Commercial Interiors
                </option>
                <option value="houseResidentialInteriors">
                  House Residential Interiors
                </option>
                <option value="buildingConstruction">
                  Building Construction
                </option>
                <option value="paintingService">Painting Service</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 text-[15px] "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-800 text-white text-[15px] font-semibold rounded-md hover:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadsForm;
