import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white " style={{height:"100vh"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Text Content */}
          <div className="space-y-5 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Welcome to <span className="text-yellow-200">School ERP</span>
            </h1>

            <p className="text-yellow-100 text-base md:text-lg max-w-md">
              Manage your school efficiently with our modern ERP solution.  
              Students, teachers, classes, and reports—all in one place.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="/admissions"
                className="bg-yellow-200 text-purple-800 px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition"
              >
                Get Started
              </a>

              <a
                href="/contact"
                className="border border-yellow-200 text-yellow-200 px-6 py-3 rounded-md font-medium hover:bg-yellow-100 hover:text-purple-800 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-erp-enterprise-resource-planning-landing-header-vector-png-image_11903991.png" 
              alt="School ERP Dashboard"
              className="shadow-lg w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
