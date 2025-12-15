import React, { useEffect, useState } from "react";
import { FaSchool } from "react-icons/fa";
import useAuth from "store/authcontext/AuthContext";
import Input from "components/inputs/Input";
import AdminLayout from "adminLayout/AdminLayout";
import { FaSchoolFlag } from "react-icons/fa6";
import MainHeading from "components/headings/MainHeading";
import usePage from "store/pagelocationcontext/PageLocationContext";
import { useSchool } from "../../../store/schoolcontext/SchoolContext";
import { FiUpload } from "react-icons/fi";
import { useRef } from "react";

const SchoolRegister = () => {
  const { handlePageUrl, pageUrl } = usePage();
  const { state, handleSchoolChange, handleSchoolRegister ,handleSchoolPhotoChange,schoolPhoto} = useSchool();

  useEffect(() => {
    handlePageUrl();
  }, []);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <AdminLayout>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm my-1">
        <span className=" capitalize bg-teal-600 font-bold   p-[5px] py-2 text-white rounded ">
          {pageUrl && pageUrl}
        </span>
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center">
        <div className="w-full bg-white rounded-sm shadow-sm border overflow-hidden p-1">
          {/* Header */}
          <MainHeading
            icon={<FaSchool className="text-teal-600 text-xl lg:text-3xl" />}
            title="REGISTER SCHOOL"
            subTitle="Fill in the details to add a new school info"
            path="/admin/school-management"
          />
        

          {/* Form Body */}
          <form
            className="p-1"
            onSubmit={(e) => {
              handleSchoolRegister(e);
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
                  value={state.school.name}
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
                  value={state.school.subName}
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
                  value={state.school.affiCode}
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
                  value={state.school.code}
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
                  value={state.school.board}
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
                  value={state.school.email}
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
                  value={state.school.contact}
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
                  value={state.school.address}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="mb-5">
                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={(e) =>handleSchoolPhotoChange(e)}
                />

                {/* Custom upload button */}
                <div
                  onClick={handleClick}
                  className="flex items-center justify-center gap-2 border border-gray-400 py-2 cursor-pointer hover:bg-gray-100 rounded-sm"
                >
                  {!schoolPhoto&&<FiUpload className="text-xl" />}
                  <span>{schoolPhoto?schoolPhoto.name:"Upload School Photo"}</span>
                </div>
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
