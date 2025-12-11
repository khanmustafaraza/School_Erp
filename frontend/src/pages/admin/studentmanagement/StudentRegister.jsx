import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { FaUser, FaPhone, FaUserTie } from "react-icons/fa";
import { MdDateRange, MdOutlineImage } from "react-icons/md";
import useStudent from "../../../store/admincontext/studentcontext/StudentContext";
import Input from "../../../components/inputs/Input";

const StudentRegister = () => {
  const { state, handleStudentChange, handleStudentRegister } = useStudent();

  return (
    <AdminLayout>
      <div className="flex justify-center py-8 px-4">
        <div className="bg-white border border-gray-200 w-full max-w-3xl rounded-lg shadow p-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Register Student
          </h2>

          <form onSubmit={handleStudentRegister}>
            {/* Row 1 → Full Name + Father Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                icon={<FaUser />}
                iconType="react"
                label="Student Full Name *"
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={state.register.fullName}
                onChange={handleStudentChange}
              />

              <Input
                icon={<FaUserTie />}
                iconType="react"
                label="Father Name *"
                type="text"
                name="fatherName"
                placeholder="Enter father name"
                value={state.register.fatherName}
                onChange={handleStudentChange}
              />
            </div>

            {/* Row 2 → Phone + Date of Birth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                icon={<FaPhone />}
                iconType="react"
                label="Phone Number *"
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={state.register.phone}
                onChange={handleStudentChange}
              />

              <Input
                icon={<MdDateRange />}
                iconType="react"
                label="Date of Birth *"
                type="date"
                name="dob"
                placeholder=""
                value={state.register.dob}
                onChange={handleStudentChange}
              />
            </div>

            {/* Address */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Address *
              </label>
              <textarea
                name="address"
                rows="3"
                placeholder="Enter full address"
                onChange={handleStudentChange}
                value={state.register.address}
                required
                className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none bg-gray-50"
              ></textarea>
            </div>

            {/* Photo Upload */}
            <div className="mt-6">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Upload Photo *
              </label>
              <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 bg-gray-50">
                <MdOutlineImage className="text-xl text-gray-500 mr-2" />
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleStudentChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition"
              >
                Register Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentRegister;
