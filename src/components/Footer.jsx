import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="flex justify-center">
        {/* Footer Content Wrapper */}
        <div className="w-full max-w-4xl px-4">
          {/* Footer Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 text-center md:text-left">
            
            {/* About Section */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mt-3 text-sm">
                <strong>Email:</strong> ahhhussain1234@gmail.com
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> 03222972285
              </p>
            </div>

            {/* Category Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>Lifestyle</li>
                <li>Technology</li>
                <li>Travel</li>
                <li>Business</li>
                <li>Economy</li>
                <li>Sports</li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-3">Weekly Newsletter</h3>
              <p className="text-sm mb-3">
                Get blog articles and offers via email.
              </p>
              <div className="flex justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded-l-md text-gray-900 w-32"
                />
                <button className="bg-blue-600 text-white px-3 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="border-t border-gray-700 pt-3">
            <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
              <p className="text-sm">&copy; MetaBlog | JS Template 2024. All Rights Reserved.</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="text-sm hover:underline">Terms of Use</a>
                <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                <a href="#" className="text-sm hover:underline">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
