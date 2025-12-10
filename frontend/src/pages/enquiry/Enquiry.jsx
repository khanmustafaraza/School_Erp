import React from "react";
import { FaUserAlt, FaPhoneAlt, FaBook } from "react-icons/fa";
import Input from "components/inputs/Input";
import Navbar from "components/navbar/Navbar";

import { MdMessage } from "react-icons/md";
import { useAuth } from "../../context/admincontext/authcontext/AuthContext";

const Enquiry = () => {
  const { state, handleEnquiryChange, handleEnquirySubmit } = useAuth();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center py-12 px-4">
        {/* Container */}
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">

          {/* Left - Illustration */}
          <div className="flex items-center justify-center">
            <img
              src="en.png"
              alt="Enquiry Illustration"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-3xl font-bold text-indigo-600 mb-2">
              Enquiry Form
            </h2>
            <p className="text-gray-500 mb-6">
              Fill in your details and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleEnquirySubmit} className="space-y-5">
              {/* Two-column Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Full Name"
                  icon={<FaUserAlt />}
                  iconType="react"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={state.enquiry.fullName}
                  onChange={handleEnquiryChange}
                />
                <Input
                  label="Phone Number"
                  icon={<FaPhoneAlt />}
                  iconType="react"
                  type="tel"
                  name="phone"
                  placeholder="+1 234 567 890"
                  value={state.enquiry.phone}
                  onChange={handleEnquiryChange}
                />
                <Input
                  label="Subject"
                  icon={<FaBook />}
                  iconType="react"
                  type="text"
                  name="subject"
                  placeholder="Subject of enquiry"
                  value={state.enquiry.subject}
                  onChange={handleEnquiryChange}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  value={state.enquiry.message}
                  onChange={handleEnquiryChange}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-300 outline-none transition-all"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                {/* <HandleBtnSubmit
                  icon={<MdMessage className="text-2xl text-white" />}
                  text="Send Enquiry"
                /> */}
              </div>
            </form>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Enquiry;
