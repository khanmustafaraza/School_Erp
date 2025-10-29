import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* -------- Top Section -------- */}

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-yellow-400 tracking-wide">
              {/* todo   */}
              {/* 🔹 ==========  ========== 🔹 */}
              {/* 🔥🔥🔥  🔥🔥🔥 */}
            </h2>
            {/* 🔥🔥🔥  🔥🔥🔥 */}
            <p className="mt-3 text-gray-300">
              # todo{" "}
              {/*  Transforming young minds with exceptional education and care. */}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-6 text-sm">
            <a
              href="/"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              About Us
            </a>
            <a
              href="/admissions"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Admissions
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Call-to-Action */}
          <div className="text-center lg:text-right">
            <a
              href="/admissions"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-yellow-500 transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
          <p className="text-center lg:text-left">
            &copy; {new Date().getFullYear()} KPS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a
              href="/privacy-policy"
              className="hover:text-yellow-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-yellow-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
          {/* Social Media */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
