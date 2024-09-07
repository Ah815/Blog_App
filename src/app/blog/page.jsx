import React from "react";
import Image from "next/image";
import HomeHeader from "../../components/HomeHeader";

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
  ];
  return (
    <>
     <div className='flex items-center justify-center w-full p-4 md:p-9' >
      <div className='relative w-full max-w-4xl h-fit'>
      <Image
        src="/headerImage.jpg"
        layout='responsive'
        width={500}
        height={500} // Custom height
        alt="Picture of the author"
        style={{ height:'700px', borderRadius:'10px'}} // Ensures the image maintains aspect ratio
      />
    </div>
    </div>
      <div className="flex text-lg font-semibold md:flex items-center justify-center  p-4">
        <h4>Latest Post</h4>
      </div>
      <div className="flex items-center justify-center w-full p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Card 1 */}
          {data.map((item, index) => {
            return (
              <div className=" bg-gray-900  p-3 rounded-lg text-white">
                <div className="relative w-full h-32 sm:h-40">
                  <Image
                    src={item.img} // replace with your actual image source
                    alt="The Impact of Technology on the Workplace"
                    layout="fill"
                    className="rounded-md object-cover"
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
