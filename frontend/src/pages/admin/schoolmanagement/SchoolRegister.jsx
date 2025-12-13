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
      <div className="flex items-center text-sm my-1">
        <span className=" capitalize bg-teal-600 font-bold   p-[5px] py-2 text-white rounded ">
          {pagePath}
        </span>
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center">
        <div className="w-full bg-white rounded-sm shadow-sm border overflow-hidden p-1">
          {/* Header */}
          <div className=" bg-[#ffeecc] p-1 flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-3">
              <FaSchool className="text-teal-600 text-xl lg:text-3xl" />
              <div>
                <h1
                  className="text-sm lg:text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "cursive" }}
                >
                  REGISTER SCHOOL
                </h1>
                <p className="text-gray-600 text-sm font-bold">
                  Fill in the details to add a new school info
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate("/admin/school-management")}
                className=" px-4 py-1 lg:px-5  lg:py-3 bg-teal-600 text-white font-medium rounded-sm hover:bg-teal-500 transition"
              >
                School Management
              </button>
            </div>
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

              <div className="flex gap-4 mb-5 flex-wrap justify-between">
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

              <div className="flex gap-4 mb-5 flex-wrap justify-between">
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
            <div className="flex justify-start gap-4 pt-2 flex-wrap">
              <button
                type="button"
                className="px-8 py-3 bg-[#ffeecc] text-gray-700 rounded-sm hover:bg-[#f0ca7e] transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-teal-600 text-white font-medium rounded-sm hover:bg-teal-500 transition"
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
