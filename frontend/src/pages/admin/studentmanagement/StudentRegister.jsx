import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaUserShield,
  FaUserTie,
  FaPhone,
} from "react-icons/fa";
import useAuth from "../../../store/authcontext/AuthContext";
import Input from "components/inputs/Input";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import usePage from "../../../store/pagelocationcontext/PageLocationContext";
import MainHeading from "components/headings/MainHeading";
import RegisterBtn from "components/btn/registerbtn/RegisterBtn";
import PageUrl from "../../../components/pageurl/PageUrl";
import FormContainer from "components/form/FormContainer";
import useClassTeacher from "store/admincontext/classteachercontext/ClassTeacherContext";
import { useClass } from "../../../store/admincontext/classcontext/ClassContext";
import { useParams } from "react-router-dom";
import useAdminStudent from "../../../store/admincontext/studentadmincontext/StudentAdminContext";

const StudentRegister = () => {
  const { handlePageUrl, pageUrl } = usePage();
  const { state, handleStudentChange, handleStudentRegister } =
    useAdminStudent();
  const {
    state: { classTeacherList },

    handleClassTeacherRegister,
  } = useClassTeacher();
  const {
    state: { classList },
    getClassList,
  } = useClass();

  const { id } = useParams();

  useEffect(() => {
    handlePageUrl();
    getClassList();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-center">
        <div className="w-full bg-white rounded-sm shadow-sm border overflow-hidden p-1">
          <PageUrl pageUrl={pageUrl} />
          {/* Header */}
          <MainHeading
            title="ADD A NEW STUDENT"
            path="/admin/user-management"
            btnTitle="Register Student"
          />

          {/* Form Body */}
          <FormContainer onSubmit={(e) => handleStudentRegister(e, id)}>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="w-full">
                  <select name="" id="" className="w-full">
                    <option>Selet Class</option>
                    {classList.map((c) => {
                      return (
                        <option key={c._id} value={c._id}>
                          {c.name}-{c.section}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <select name="" id="" className="w-full">
                    <option>Selet Class Teacher</option>
                    {classTeacherList.map((c) => {
                      return (
                        <option key={c._id} value={c._id}>
                          {c.userId.userName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  icon={<FaUser />}
                  iconType="react"
                  label="Student Full Name *"
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  value={state.register.fullName}
                  onChange={handleStudentChange}
                />

                <Input
                  icon={<FaUserTie />}
                  iconType="react"
                  label="Father Name *"
                  type="text"
                  name="fatherName"
                  placeholder="Enter father name"
                  value={state.register.fatherName}
                  onChange={handleStudentChange}
                />
              </div>

              {/* Row 2 → Phone + Date of Birth */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  icon={<FaPhone />}
                  iconType="react"
                  label="Phone Number *"
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={state.register.phone}
                  onChange={handleStudentChange}
                />

                <Input
                  icon=""
                  iconType="react"
                  label="Date of Birth *"
                  type="date"
                  name="dob"
                  placeholder=""
                  value={state.register.dob}
                  onChange={handleStudentChange}
                />
              </div>

              {/* Address */}
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Address *
                </label>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter full address"
                  onChange={handleStudentChange}
                  value={state.register.address}
                  required
                  className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none bg-gray-50"
                ></textarea>
              </div>

              {/* Photo Upload */}
              <div className="mt-6">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Upload Photo *
                </label>
                <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 bg-gray-50">
                  {/* <MdOutlineImage className="text-xl text-gray-500 mr-2" /> */}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleStudentChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </AdminLayout>
  );
};
export default StudentRegister;
