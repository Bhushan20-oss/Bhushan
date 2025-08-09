import React, { memo } from 'react';
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            © 2024 My Portfolio. All rights reserved.
          </p>

          <div className="flex justify-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/Bhushan20-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_15px_#fff]"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bhushan-bhomkar-85a30326a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_15px_#0e76a8]"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>

            {/* Twitter */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_15px_#1da1f2]"
            >
              <i className="bx bxl-twitter text-2xl"></i>
            </a>

            {/* Email */}
            <a
              href="mailto:bhushanbhomkar20@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_15px_#f87171]"
            >
              <i className="bx bx-envelope text-2xl"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bhushan__20_/reel/CuD8NAWoBIC/?hl=zh-cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_15px_#e1306c]"
            >
              <i className="bx bxl-instagram text-2xl"></i>
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_15px_#1877f2]"
            >
              <i className="bx bxl-facebook text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
