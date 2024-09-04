import React from 'react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className='flex items-center justify-center w-full p-4'>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <div className="w-52 sm:w-1/2 lg:w-1/3 text-white rounded-xl ">
          <div className="relative w-52 h-40 sm:h-56">
            <Image
              src="/testImg.jpg" // replace with your actual image source
              alt="The Impact of Technology on the Workplace"
              layout="fill"
              // objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-3">
            <p className=" bg-gray-900 text-sm text-blue-400">Technology</p>
            <h3 className="mt-2 text-xs sm:text-sm font-bold">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>
            <div className="mt-4 flex items-center">
              <Image
                src="/profile.jpg" // replace with the profile image source
                alt="Author Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm">Tracey Wilson</p>
                <p className="text-xs text-gray-400">August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-900 text-white rounded-xl shadow-lg">
          <div className="relative w-full h-40 sm:h-56">
            <Image
              src="/testImg.jpg" // replace with your actual image source
              alt="The Impact of Technology on the Workplace"
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-blue-400">Technology</p>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>
            <div className="mt-4 flex items-center">
              <Image
                src="/profile.jpg" // replace with the profile image source
                alt="Author Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm">Tracey Wilson</p>
                <p className="text-xs text-gray-400">August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-900 text-white rounded-xl shadow-lg">
          <div className="relative w-full h-40 sm:h-56">
            <Image
              src="/testImg.jpg" // replace with your actual image source
              alt="The Impact of Technology on the Workplace"
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-blue-400">Technology</p>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>
            <div className="mt-4 flex items-center">
              <Image
                src="/profile.jpg" // replace with the profile image source
                alt="Author Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm">Tracey Wilson</p>
                <p className="text-xs text-gray-400">August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
