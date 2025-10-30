import React, { useState } from "react";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from "../../context/admincontext/authcontext/AuthContext";
import { useNavigate } from "react-router-dom";
// import { useAdminAuth } from "../../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => setTogglePassword(!togglePassword);

  // const { handleAdminChange, handleAdminRegister, state } = useAdminAuth();
  const { handleLoginUserChange, state, handleLoginUserSubmit } = useAuth();
  // if (!state?.user?.token) {
  //   return navigate("/");
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black  px-4">
      <div className="w-full max-w-md backdrop-blur-md  border border-white/20 shadow rounded-sm p-4 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center mb-2 tracking-wide text-white">
          Welcome Back 👋
        </h1>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Please log in to continue your journey.
        </p>

        <form onSubmit={handleLoginUserSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              <span className="flex items-center gap-2">
                <FaEnvelope /> Email Address or User Name
              </span>
            </label>
            <input
              type="email"
              name="email"
              title="Provide the Field"
              value={state.login.email}
              onChange={handleLoginUserChange}
              placeholder="you@example.com"
              className="w-full rounded-sm bg-white/20 border border-gray-400/20 px-3 py-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              <span className="flex items-center gap-2">
                <FaLock /> Password
              </span>
            </label>
            <div className="flex items-center bg-white/20 border border-gray-400/20 rounded-sm px-3  focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <input
                type={togglePassword ? "text" : "password"}
                name="password"
                value={state.login.password}
                onChange={handleLoginUserChange}
                placeholder="••••••••"
                className="bg-transparent border-0 flex-1 text-gray-100 placeholder-gray-400 focus:outline-none"
                required
                title="Provide the Field"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="text-gray-300 hover:text-white transition"
              >
                {togglePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              <span className="flex items-center gap-2">
                <FaUserAlt /> Role
              </span>
            </label>
            <select
              onChange={handleLoginUserChange}
              name="role"
              className="w-full  border border-gray-400/20  rounded-sm px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            >
              <option value="">Select a role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-200 hover:bg-indigo-500 transition-colors duration-300 rounded-sm py-2 font-semibold text-white tracking-wide shadow-lg hover:shadow-indigo-500/40"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        {/* Footer Links */}
        {/* <p className="text-center text-gray-400 text-sm">
          Forgot password?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Reset here
          </a>
        </p> */}
        <p className="text-center text-gray-400 text-sm mt-1">
          Don’t have an account?{" "}
          <strong className="text-indigo-400 hover:underline">
            Contact To Admin
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
