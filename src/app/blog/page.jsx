"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
 // Pagination state
 const [currentPage, setCurrentPage] = useState(1);
 const blogsPerPage = 6; // Number of blogs per page

 // Calculate total pages
 const totalPages = Math.ceil(data.length / blogsPerPage);

 // Pagination logic wrapped in useEffect to re-calculate when currentPage changes
 const [currentBlogs, setCurrentBlogs] = useState([]);

 useEffect(() => {
   const indexOfLastBlog = currentPage * blogsPerPage;
   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
   const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);
   setCurrentBlogs(currentBlogs); // Update the currentBlogs state when page changes
 }, [currentPage, data]); // Dependency array ensures it updates when currentPage or data changes

 // Pagination handlers
 const handleNextPage = () => {
   if (currentPage < totalPages) {
     setCurrentPage(currentPage + 1);
   }
 };

 const handlePrevPage = () => {
   if (currentPage > 1) {
     setCurrentPage(currentPage - 1);
   }
 };


 return (
   <>
     <Navbar />

     {/* Header Image */}
     <div className="flex items-center justify-center w-full p-4 md:p-9">
       <div className="relative w-full max-w-4xl h-fit">
         <Image
           src="/blogpage.jpeg"
           layout="responsive"
           width={500}
           height={500}
           alt="Picture of the author"
           style={{ height: "700px", borderRadius: "10px" }}
         />
       </div>
     </div>

     {/* Blog Title */}
     <div className="flex text-lg font-semibold items-center justify-center p-4">
       <h2>Blog Listings</h2>
     </div>

     {/* Blog Cards */}
     <div className="flex items-center justify-center w-full p-2">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
         {currentBlogs.map((item, index) => (
           <HoverCard key={index} item={item} />
         ))}
       </div>
     </div>

     {/* Pagination Controls */}
     <div className="flex justify-center items-center space-x-4 my-6">
       <button
         onClick={handlePrevPage}
         disabled={currentPage === 1}
         className={`px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 ${
           currentPage === 1 && "opacity-50 cursor-not-allowed"
         }`}
       >
         Previous
       </button>
       <span className="text-white">
         Page {currentPage} of {totalPages}
       </span>
       <button
         onClick={handleNextPage}
         disabled={currentPage === totalPages}
         className={`px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 ${
           currentPage === totalPages && "opacity-50 cursor-not-allowed"
         }`}
       >
         Next
       </button>
     </div>

     <Footer />
   </>
 );
};

const HoverCard = ({ item }) => {
 const [hover, setHover] = useState(false);

 return (
   <div
     onMouseEnter={() => setHover(true)}
     onMouseLeave={() => setHover(false)}
     className={`relative bg-black p-3 shadow-sm shadow-slate-400 rounded-lg text-white 
            hover:scale-105 hover:bg-gray-800 hover:shadow-lg hover:opacity-90 sm:hover:opacity-100`}
   >
     {/* Blog Image */}
     <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-md">
       <Image
         src={item.img}
         alt={item.title}
         layout="fill"
         className="object-cover transition-transform transform hover:scale-110"
       />
     </div>

     {/* Blog Details */}
     <div className="mt-2">
       <p className="bg-gray-900 w-20 rounded-md text-sm text-blue-400">
         {item.category}
       </p>
       <h3 className="mt-2 text-xs sm:text-sm font-semibold">{item.title}</h3>
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

     {/* Learn More Button (visible on hover) */}
     {hover && (
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <a
           href="/singleBlog" // Replace with the correct page URL
           className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-all"
         >
           Full Blog
         </a>
       </div>
     )}
   </div>
 );
};

export default BlogCard;