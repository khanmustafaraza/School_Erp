import React, { useEffect, useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaUserShield } from "react-icons/fa";
import useAuth from "../../../store/authcontext/AuthContext";
import Input from "components/inputs/Input";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import usePage from "../../../store/pagelocationcontext/PageLocationContext";
import MainHeading from "components/headings/MainHeading";
import RegisterBtn from "components/btn/registerbtn/RegisterBtn";
import PageUrl from "../../../components/pageurl/PageUrl";
import FormContainer from "../../../components/form/FormContainer";

const UserRegister = () => {
  const { state, handleUserChange, handleUserRegister } = useAuth();
  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    handlePageUrl();
  }, []);

  return (
    <AdminLayout>
      {/* Breadcrumb */}

      {/* Main Form Container */}
      <div className="flex justify-center">
        <div className="w-full bg-white rounded-sm shadow-sm border overflow-hidden p-1">
         <PageUrl pageUrl={pageUrl} />
          {/* Header */}
          <MainHeading
            title="REGISTER A NEW USER"
            path="/admin/user-management"
            btnTitle="User List"
          />

          {/* Form Body */}
          <FormContainer 
          onSubmit={(e)=>handleUserRegister(e)}
          >
            <div>
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
          </FormContainer>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserRegister;
