import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaUserShield,
  FaSchool,
} from "react-icons/fa";
import useAuth from "../../../store/authcontext/AuthContext";
import Input from "../../../components/inputs/Input";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSchoolFlag } from "react-icons/fa6";

const SchoolRegister = () => {
  const { state, handleUserChange, handleUserRegister } = useAuth();
  const [schoolData, setSchoolData] = useState({
    name: "",
    subName: "",
    affiCode: "",
    code: "",
    board: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleSchoolChange = (e) => {
    const { name, value } = e.target;
    setSchoolData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    console.log("School Data Submitted:", schoolData);
  };

  const location = useLocation();
  const [pagePath, setPagePath] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setPagePath(location.pathname);
  }, [location]);

  return (
    <AdminLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-1 mt-[1px] ">
        {pagePath
          .split("/")
          .filter(Boolean)
          .map((segment, i, arr) => (
            <span
              key={i}
              className="flex items-center  bg-[#ffeecc] p-[5px] py-2 text-gray-600 rounded-sm "
            >
              <span className="capitalize ">{segment.replace(/-/g, " ")}</span>
              {i !== arr.length - 1 && (
                <span className="mx-1 text-gray-400">/</span>
              )}
            </span>
          ))}
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl overflow-hidden p-2">
          {/* Header */}
          <div className="bg-teal-50 p-1 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaSchool className="text-teal-600 text-3xl" />
              <div>
                <h1 className="text-2xl font-bold text-gray-500">
                  Register School
                </h1>
                <p className="text-gray-600 text-sm">
                  Fill in the details to add a new school info
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/admin/user-list")}
              className="px-5 py-2 bg-teal-100 text-teal-700 font-medium rounded-md hover:bg-teal-200 transition"
            >
              School List
            </button>
          </div>

          {/* Form Body */}
          <form
            className="p-1"
            onSubmit={(e) => {
              handleSchoolSubmit(e);
            }}
          >
            {/* Section: School Info */}
            <div className="bg-teal-10 p-2 rounded-sm shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <FaSchoolFlag className="text-teal-600" /> School Information
              </h2>

              <div className="mb-5">
                <Input
                  id="name"
                  icon="school"
                  label="School Name"
                  type="text"
                  name="name"
                  placeholder="Enter School Name"
                  value={schoolData.name}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="mb-5">
                <Input
                  id="subName"
                  icon="school"
                  label="School Sub Title"
                  type="text"
                  name="subName"
                  placeholder="Enter school Sub Title"
                  value={schoolData.subName}
                  onChange={handleSchoolChange}
                />
              </div>

              <div className="flex gap-4 mb-5">
                <Input
                  id="affiCode"
                  icon="confirmation_number"
                  label="Affiliation No (CBSE)"
                  type="text"
                  name="affiCode"
                  placeholder="Enter affiliation number"
                  value={schoolData.affiCode}
                  onChange={handleSchoolChange}
                  className="flex-1"
                />
                <Input
                  id="code"
                  icon="code"
                  label="Code of School"
                  type="text"
                  name="code"
                  placeholder="Enter Code of School"
                  value={schoolData.code}
                  onChange={handleSchoolChange}
                  className="flex-1"
                />
                <Input
                  id="board"
                  icon="developer_board"
                  label="Board of School"
                  type="text"
                  name="board"
                  placeholder="Enter board of School"
                  value={schoolData.board}
                  onChange={handleSchoolChange}
                  className="flex-1"
                />
              </div>

              <div className="flex gap-4 mb-5">
                <Input
                  id="email"
                  icon="email"
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={schoolData.email}
                  onChange={handleSchoolChange}
                  className="flex-1"
                />
                <Input
                  id="contact"
                  icon="phone"
                  label="Contact Number"
                  type="text"
                  name="contact"
                  placeholder="Enter contact number"
                  value={schoolData.contact}
                  onChange={handleSchoolChange}
                  className="flex-1"
                />
              </div>

              <div className="mb-5">
                <Input
                  id="address"
                  icon="edit_location"
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={schoolData.address}
                  onChange={handleSchoolChange}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-1 border-t border-gray-200">
              <button
                type="button"
                className="px-8 py-3 bg-teal-100 text-teal-700 rounded-md hover:bg-teal-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolRegister;
