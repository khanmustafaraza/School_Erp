import React, { useEffect, useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaUserShield } from "react-icons/fa";
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

const ClassTeacherRegister = () => {
  const { state, handleUserChange, handleUserRegister } = useAuth();
  const { handlePageUrl, pageUrl } = usePage();
  const {
    state: {},
    handleClassTeacherChange,
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
            title="REGISTER A NEW USER"
            path="/admin/user-management"
            btnTitle="User List"
          />

          {/* Form Body */}
          <FormContainer onSubmit={(e) => handleClassTeacherRegister(e, id)}>
            <div>
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Class <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="classId"
                  onChange={handleClassTeacherChange}
                  className="w-full border border-gray-300 rounded-sm p-2.5 focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="">Select Class</option>
                  {classList?.map((cls) => (
                    <option key={cls._id} value={cls._id}>
                      {cls.name.toUpperCase()} - {cls.section.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Academic Year & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <Input
                  label="Academic Year *"
                  type="text"
                  name="academicYear"
                  placeholder="2024-2025"
                  value={state.register.academicYear}
                  onChange={handleClassTeacherChange}
                />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Status <sup className="text-red-500">*</sup>
                  </label>
                  <select
                    name="status"
                    value={state.register.status}
                    onChange={handleClassTeacherChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 transition"
                  >
                    <option value="active">Active</option>
                    <option value="transferred">Transferred</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Remarks
                </label>
                <textarea
                  name="remarks"
                  value={state.register.remarks}
                  onChange={handleClassTeacherChange}
                  placeholder="Any notes..."
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 transition resize-none"
                  rows={3}
                />
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </AdminLayout>
  );
};
export default ClassTeacherRegister;
