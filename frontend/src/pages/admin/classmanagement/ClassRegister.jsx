import React, { useEffect } from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import Input from "../../../components/inputs/Input";
import { useClass } from "../../../store/admincontext/classcontext/ClassContext";
import { FaIcons, LuIcons, MdIcons } from "../../../components/icons/Icons";
import MainHeading from "../../../components/headings/MainHeading";
import usePage from "../../../store/pagelocationcontext/PageLocationContext";

const ClassRegister = () => {
  const { state, handleClassChange, handleClassRegister } = useClass();
  const { MdClass } = MdIcons;
  const { LuSection } = LuIcons;
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
          <div className="flex items-center text-sm my-1">
            <span className=" capitalize font-bold   p-[5px] py-2 text-gray-400 border-b-2">
              Page Address:- {pageUrl && pageUrl}
            </span>
          </div>
          {/* Header */}
          <MainHeading
            title="REGISTER A NEW USER"
            path="/admin/user-management"
            btnTitle="User Management"
          />

          {/* Form Body */}
          <form onSubmit={handleClassRegister}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Input
                id="className"
                icon={<MdClass />}
                iconType="react"
                label="Class Name"
                type="text"
                name="name"
                placeholder="Enter class name"
                onChange={handleClassChange}
                value={state.register.name}
              />

              <Input
                id="sectionName"
                iconType="react"
                icon={<LuSection />}
                label="Section Name"
                type="text"
                name="section"
                placeholder="Enter section name"
                value={state.register.section}
                onChange={handleClassChange}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-sm transition-all"
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

export default ClassRegister;
