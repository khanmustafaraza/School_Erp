import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 py-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Welcome to <span className="text-yellow-300">KPS</span>
            </h1>
            <p className="mt-3 text-base md:text-lg">
              Empowering young minds through excellence in education. Join us on a journey to shape a brighter future.
            </p>
            <div className="mt-5 flex flex-col lg:flex-row lg:space-x-4">
              <a
                href="/admissions"
                className="bg-yellow-300 text-blue-800 px-5 py-2.5 rounded-md font-medium shadow-md hover:bg-yellow-400 transition duration-300"
              >
                Get Admission
              </a>
              <a
                href="/about"
                className="bg-transparent border border-white px-5 py-2.5 rounded-md font-medium hover:bg-white hover:text-blue-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="/hero.jpg" // Replace with a relevant image URL
              alt="KPS School"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
