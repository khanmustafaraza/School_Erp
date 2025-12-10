import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
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
      <div className="flex items-center text-sm text-gray-500 mb-4">
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

      {/* Main Container */}
      <div className="flex justify-center items-start py-1">
        <div className="w-full bg-white border border-gray-200 rounded shadow-sm p-8 max-w-4xl">
          {/* Header Section */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-3">
                <span className="material-icons text-blue-700 text-4xl">
                  manage_accounts
                </span>
                Add User
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Enter the user details to create a new account in the system.
              </p>
            </div>

            {/* User List Button */}
            <button
              onClick={() => navigate("/admin/user-list")}
              className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              User List
            </button>
          </div>

          <div className="mt-4 h-[1px] w-full bg-gray-200" />

          {/* FORM */}
          <form onSubmit={handleUserRegister} className="space-y-10">
            {/* SECTION: User Info */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Basic Information
              </h2>
              <div className="h-[1px] w-full bg-gray-100 mb-4" />

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
                  icon="mark_email_read"
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={state.register.email}
                  onChange={handleUserChange}
                />

                <Input
                  id="password"
                  icon="wifi_password"
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={state.register.password}
                  onChange={handleUserChange}
                />

                {/* Role Select */}
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
                    className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700
                    focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
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
                className="px-8 py-3 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-10 py-3 bg-blue-700 text-white font-medium rounded-md 
                hover:bg-blue-800 transition"
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
