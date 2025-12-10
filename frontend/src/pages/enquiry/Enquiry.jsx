import React from "react";
import { FaUserAlt, FaPhoneAlt, FaBook } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Input from "components/inputs/Input";
import Navbar from "components/navbar/Navbar";
import useAuth from "../../store/authcontext/AuthContext";
import Footer from "../../components/footer/Footer";

const Enquiry = () => {
  const { state, handleEnquiryChange, handleEnquirySubmit } = useAuth();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
            Enquiry Form
          </h2>
          <p className="text-gray-500 text-center mb-6">
            We’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleEnquirySubmit} className="space-y-4">
            {/* Full Name */}
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

            {/* Phone */}
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

            {/* Subject */}
            <Input
              label="Subject"
              icon={<FaBook />}
              iconType="react"
              type="text"
              name="subject"
              placeholder="Your enquiry subject"
              value={state.enquiry.subject}
              onChange={handleEnquiryChange}
            />

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-700"
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

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-[14px] rounded flex items-center justify-center gap-2 text-sm font-medium hover:bg-indigo-700 transition-all"
            >
              <MdMessage className="text-xl" />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Enquiry;
