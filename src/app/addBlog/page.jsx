'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react';

const page = () => {
    const [blogImage, setBlogImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
  
    const handleImageChange = (e, setImage) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        blogImage,
        profileImage,
        category,
        title,
        name,
        date,
      };
      console.log('Form Data Submitted: ', formData);
      // Submit form data to API here
    };
  return (
    <>
    <div className=''>
      <Navbar />
    </div>
    <div className="container mx-auto p-6 max-w-4xl">
      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-white">Upload New Blog Post</h2>

         {/* Blog Image Upload */}
         <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="blogImage">
            Blog Image
          </label>
          <input
            type="file"
            id="blogImage"
            onChange={(e) => handleImageChange(e, setBlogImage)}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          />
          {blogImage && <img src={blogImage} alt="Blog Preview" className="mt-4 h-32 w-32 object-cover" />}
        </div>

            {/* Category Dropdown */}
            <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a Category</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Business">Business</option>
          </select>
        </div>


        {/* Blog Title */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Profile Image Upload */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="profileImage">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            onChange={(e) => handleImageChange(e, setProfileImage)}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          />
          {profileImage && <img src={profileImage} alt="Profile Preview" className="mt-4 h-32 w-32 object-cover" />}
        </div>

        {/* Author Name */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Author Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
            Blog Post Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default page
