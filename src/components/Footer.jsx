import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col lg:flex-row justify-center gap-10 mb-8">
          {/* About Section */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 text-sm">
              <strong>Email:</strong> ahhhussain1234@gmail.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> 03222972285
            </p>
          </div>



          {/* Category Section */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Weekly Newsletter</h3>
            <p className="text-sm mb-4">
              Get blog articles and offers via email.
            </p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-l-md text-gray-900 w-40"
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col items-center">
            <p className="text-sm">&copy; MetaBlog | JS Template 2023. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
