import React, { useEffect, useState } from "react";
import { FaSchool } from "react-icons/fa";
import Input from "components/inputs/Input";
import AdminLayout from "adminLayout/AdminLayout";
import MainHeading from "components/headings/MainHeading";
import usePage from "store/pagelocationcontext/PageLocationContext";
import { useSchool } from "store/schoolcontext/SchoolContext";
import { FiUpload } from "react-icons/fi";
import { useRef } from "react";
import FormContainer from "components/form/FormContainer";
import PageUrl from "components/pageurl/PageUrl";

const SchoolRegister = () => {
  const { handlePageUrl, pageUrl } = usePage();
  const {
    state,
    handleSchoolChange,
    handleSchoolRegister,
    handleSchoolPhotoChange,
    schoolPhoto,
  } = useSchool();

  useEffect(() => {
    handlePageUrl();
  }, []);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <AdminLayout>
      {/* Main Form Container */}
      <div className="flex justify-center">
        <div className="w-full bg-white rounded-sm shadow-sm border overflow-hidden p-1">
          {/* page url */}

          <PageUrl pageUrl={pageUrl} />
          {/* Header */}
          <MainHeading
            title="REGISTER A NEW SCHOOL"
            path="/admin/school-management"
            btnTitle="School List"
          />
          <FormContainer
            onSubmit={(e) => {
              handleSchoolRegister(e);
            }}
            icon ={ <FaSchool className="text-indigo-600" />}
            title ="Basic Information"
          >
            <div>
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
                  onChange={(e) => handleSchoolPhotoChange(e)}
                />

                {/* Custom upload button */}
                <div
                  onClick={handleClick}
                  className="flex items-center justify-center gap-2 border border-gray-400 py-2 cursor-pointer hover:bg-gray-100 rounded-sm"
                >
                  {!schoolPhoto && <FiUpload className="text-xl" />}
                  <span>
                    {schoolPhoto ? schoolPhoto.name : "Upload School Photo"}
                  </span>
                </div>
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolRegister;
