import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { useClassTeacher } from "adminContext/classteachercontext/ClassTeacherContext";
import { useClass } from "adminContext/classcontext/ClassContext";
import { useParams } from "react-router-dom";
import { FaUserGraduate, FaEnvelope, FaPhoneAlt, FaBook } from "react-icons/fa";

const ClassTeacherRegister = () => {
  const { state, handleClassTeacherChange, handleClassTeacherRegister } =
    useClassTeacher();
  const {
    state: { classList },
  } = useClass();

  const userId = useParams().id;

  return (
    <AdminLayout>
      <div className="flex justify-center items-center min-h-[85vh] bg-gray-50">
        <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-2">
              <span className="material-icons text-4xl text-blue-700">
                school
              </span>
              <h1 className="text-3xl font-bold text-gray-800">
                Register New Class Teacher
              </h1>
            </div>
            <p className="text-gray-500 text-sm">
              Add a teacher and assign them to a specific class and section.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => handleClassTeacherRegister(e, userId)}
            className="space-y-6"
          >
            {/* Personal Info Section */}
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
              Personal Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaUserGraduate className="inline mr-2 text-gray-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  onChange={handleClassTeacherChange}
                  value={state.classTeacher?.fullName || ""}
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaEnvelope className="inline mr-2 text-gray-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={handleClassTeacherChange}
                  value={state.classTeacher?.email || ""}
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaPhoneAlt className="inline mr-2 text-gray-500" />
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="e.g., 9876543210"
                  onChange={handleClassTeacherChange}
                  value={state.classTeacher?.phone || ""}
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  placeholder="e.g., M.Sc, B.Ed"
                  onChange={handleClassTeacherChange}
                  value={state.classTeacher?.qualification || ""}
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  name="experience"
                  placeholder="e.g., 5"
                  onChange={handleClassTeacherChange}
                  value={state.classTeacher?.experience || ""}
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaBook className="inline mr-2 text-gray-500" />
                  Subject Specialty
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g., Mathematics"
                  onChange={handleClassTeacherChange}
                  value={state.classTeacher?.subject || ""}
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Class Assignment */}
            <div className="pt-4">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                Assign Class & Section
              </h2>

              <select
                name="classId"
                onChange={handleClassTeacherChange}
                className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Class & Section</option>
                {classList.map((cur) => (
                  <option key={cur._id} value={cur._id}>
                    Class {cur.name} — Section {cur.section}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassTeacherRegister;
