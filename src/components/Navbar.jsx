'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white font-bold text-xl w-1/4">
          <Link href={"/"}>BrandName</Link>
        </div>
        <div className="md:hidden">
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        <div className={`w-2/4 md:flex justify-center md:items-center md:w-2/4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex md:items-center md:justify-center ">
            <div className="text-white md:flex md:gap-4">
              <Link href={"/"} className="block mt-4 md:inline-block md:mt-0">
                Home
              </Link>
              <Link href={"/blog"} className="block mt-4 md:inline-block md:mt-0">
                Blog
              </Link>
              <Link href={"/single post"} className="block mt-4 md:inline-block md:mt-0">
                Single Post
              </Link>
              <Link href={"/pages"} className="block mt-4 md:inline-block md:mt-0">
                Pages
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-between w-1/4 ps-14">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white rounded-full px-3 py-1  focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
