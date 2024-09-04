import React from 'react';
import Image from 'next/image';

const HomeHeader = () => {
  return (
    <div className='flex items-center justify-center w-full p-4 md:p-9' >
      <div className='relative w-full max-w-lg h-auto'>
      <Image
        src="/headerImage.jpg"
        layout='responsive'
        width={500}
        height={500} // Custom height
        alt="Picture of the author"
        style={{ height: '300px', width: 'auto', borderRadius:'10px'}} // Ensures the image maintains aspect ratio
      />
    </div>
    </div>
  );
};

export default HomeHeader;

