import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import Input from "../../../components/inputs/Input";
import useClassTeacher from "../../../store/admincontext/classteachercontext/ClassTeacherContext";
import { FaChalkboardTeacher } from "react-icons/fa";

const ClassTeacherRegister = () => {
  const { state, handleClassTeacherChange, handleClassTeacherRegister } =
    useClassTeacher();

  return (
    <AdminLayout>
      <div className="flex justify-center py-8 px-4">
        <div className="bg-white border border-gray-200 w-full max-w-3xl rounded-xl shadow-lg p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-2">
              <FaChalkboardTeacher className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Register Class Teacher
              </h2>
            </div>
            <p className="text-gray-500 text-sm">
              Fill in the details below to assign a teacher to a class.
            </p>
          </div>

          <form onSubmit={handleClassTeacherRegister} className="space-y-6">
            {/* Teacher & Class */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Teacher <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="userId"
                  value={state.register.userId}
                  onChange={handleClassTeacherChange}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="">Select Teacher</option>
                  {state.userList?.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.fullName} ({user.userName})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Class <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="classId"
                  value={state.register.classId}
                  onChange={handleClassTeacherChange}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="">Select Class</option>
                  {state.classList?.map((cls) => (
                    <option key={cls._id} value={cls._id}>
                      {cls.name} - {cls.section}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Academic Year & Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Academic Year *"
                type="text"
                name="academicYear"
                placeholder="2024-2025"
                value={state.register.academicYear}
                onChange={handleClassTeacherChange}
              />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Status <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="status"
                  value={state.register.status}
                  onChange={handleClassTeacherChange}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="active">Active</option>
                  <option value="transferred">Transferred</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Remarks
              </label>
              <textarea
                name="remarks"
                value={state.register.remarks}
                onChange={handleClassTeacherChange}
                placeholder="Any notes..."
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 transition resize-none"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
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
