"use client";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BlogCard = () => {
  const data = [
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
  ];
 
  return (
    <>
      <Navbar/>


      <div className="flex items-center justify-center w-full p-4 md:p-9">
        <div className="relative w-full max-w-4xl h-fit">
          <Image
            src="/blogpage.jpeg"
            layout="responsive"
            width={500}
            height={500} // Custom height
            alt="Picture of the author"
            style={{ height: "700px", borderRadius: "10px" }} // Ensures the image maintains aspect ratio
          />
        </div>
      </div>

      <div className="flex text-lg font-semibold md:flex items-center justify-center p-4">
        <h2>Blog Listings</h2>
      </div>

      <div className="flex items-center justify-center w-full p-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
    {/* Card 1 */}
    {data.map((item, index) => (
      <div
        key={index}
        className="bg-gray-900 p-3 rounded-lg text-white transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-lg hover:opacity-90 sm:hover:opacity-100"
      >
        <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-md">
          <Image
            src={item.img}
            alt="The Impact of Technology on the Workplace"
            layout="fill"
            className="object-cover transition-transform transform hover:scale-110"
          />
        </div>
        <div className="mt-2">
          <p className="bg-gray-900 w-20 rounded-md text-sm text-blue-400">
            {item.category}
          </p>
          <h3 className="mt-2 text-xs sm:text-sm font-semibold">
            {item.title}
          </h3>
          <div className="mt-3 flex items-center">
            <Image
              src={item.profile}
              alt="Author Profile"
              width={20}
              height={20}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-xs sm:text-sm">{item.name}</p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




      <div>
        <Footer />

      </div>
    </>
  );
};

export default BlogCard;
