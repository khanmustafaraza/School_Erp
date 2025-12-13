import React, { useEffect, useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaUserShield } from "react-icons/fa";
import useAuth from "../../../store/authcontext/AuthContext";
import Input from "../../../components/inputs/Input";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { useLocation, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const { state, handleUserChange, handleUserRegister } = useAuth();
  const location = useLocation();
  const [pagePath, setPagePath] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setPagePath(location.pathname);
  }, [location]);

  return (
    <AdminLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        {pagePath
          .split("/")
          .filter(Boolean)
          .map((segment, i, arr) => (
            <span key={i} className="flex items-center">
              <span className="capitalize">{segment.replace(/-/g, " ")}</span>
              {i !== arr.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </span>
          ))}
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center py-6">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#ffeecc] p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaUserShield className="text-indigo-600 text-3xl" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Add New User</h1>
                <p className="text-gray-600 text-sm">
                  Enter the user details to create a new account
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/admin/user-list")}
              className="px-5 py-2 bg-teal-100 text-teal-700 font-medium rounded-md hover:bg-teal-200 transition"
            >
              User List
            </button>
          </div>

          {/* Form Body */}
          <form 
            onSubmit={handleUserRegister} 
            className="p-6 space-y-8"
          >
            {/* Section: Basic Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <FaUser className="text-indigo-600" /> Basic Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  id="userName"
                  icon={<FaUser />}
                  iconType="react"
                  label="User Name"
                  type="text"
                  name="userName"
                  placeholder="Enter username"
                  value={state.register.userName}
                  onChange={handleUserChange}
                />
                <Input
                  id="email"
                  icon={<FaEnvelope />}
                  iconType="react"
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={state.register.email}
                  onChange={handleUserChange}
                />
                <Input
                  id="password"
                  icon={<FaLock />}
                  iconType="react"
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={state.register.password}
                  onChange={handleUserChange}
                />
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Role <sup className="text-red-500">*</sup>
                  </label>
                  <select
                    name="role"
                    id="role"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700
                      focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
                    value={state.register.role}
                    onChange={handleUserChange}
                  >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                className="px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
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
