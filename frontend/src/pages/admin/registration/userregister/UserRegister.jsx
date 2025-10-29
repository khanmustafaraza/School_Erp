import React from "react";
import AdminLayout from "../../../../layout/adminlayout/AdminLayout";
import Input from "../../../../components/inputs/Input";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../../../context/admincontext/authcontext/AuthContext";

const UserRegister = () => {
  const { state, handleUserChange, handleUserRegister } = useAuth();

  return (
    <AdminLayout>
      {/* Full Page Centered Container */}
      <div className="flex justify-center items-center ">
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-3">
              <span className="material-icons text-4xl text-blue-700">
                account_box
              </span>
              <h1 className="text-3xl font-bold text-gray-800">
                Register a New User
              </h1>
            </div>
            <p className="text-gray-500 text-sm">
              Create a new account and assign a role in your admin system.
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleUserRegister} className="space-y-6">
            {/* Section Title */}
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-2 w-[200px] text-center">
              User Information
            </h2>

            {/* Username */}
            <div>
              <Input
                id="userName"
                icon={<FaUser />}
                iconType="react"
                label="User Name"
                type="text"
                name="userName"
                placeholder="Enter your username"
                onChange={handleUserChange}
                value={state.register.userName}
              />
            </div>

            {/* Email */}
            <div>
              <Input
                id="email"
                icon="mark_email_read"
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={state.register.email}
                onChange={handleUserChange}
              />
            </div>

            {/* Password + Role */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="password"
                  icon="wifi_password"
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={state.register.password}
                  onChange={handleUserChange}
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Select Role <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="role"
                  id="role"
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleUserChange}
                  value={state.register.role}
                >
                  <option value="">Choose a role</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserRegister;
