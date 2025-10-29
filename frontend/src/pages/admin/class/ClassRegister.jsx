import React from "react";
import AdminLayout from "adminLayout/AdminLayout";

import { ColorRing } from "react-loader-spinner";
import { TbNewSection } from "react-icons/tb";
import { useClass } from "adminContext/classcontext/ClassContext";
import Input from "components/inputs/Input";
import { MdIcons, LuIcons, FaIcons } from "components/icons/Icons";
import MainHeading from "../../../components/headings/MainHeading";

const ClassRegister = () => {
  const { state, handleClassChange, handleClassRegister } = useClass();
  const { MdClass } = MdIcons;
  const { LuSection } = LuIcons;
  const { FaSection } = FaIcons;

  return (
    <AdminLayout>
      <MainHeading isButton={false} btnTitle="Class List" />
      <div className="flex items-center justify-center">
        <div className="bg-white border border-gray-200 w-full  rounded-sm shadow-lg p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
            <span className="material-icons">account_box</span>

            <span> Register A New Class</span>
          </h3>

          <form onSubmit={handleClassRegister}>
            {/* User Name */}
            <div className="mb-5">
              <Input
                id="className"
                icon={<MdClass />}
                iconType="react"
                label="Class Name"
                type="text"
                name="name"
                placeholder="Enter Class Name"
                onChange={handleClassChange}
                value={state.register.name}
              />
            </div>
            {/* Email */}
            <div className="mb-5">
              <Input
                id="sectionName"
                iconType="react"
                icon={<LuSection />}
                label="Section Name"
                type="text"
                name="section"
                placeholder="Enter Section Name"
                value={state.register.section}
                onChange={handleClassChange}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-[160px] bg-blue-900  text-white font-semibold py-3 rounded-sm shadow-sm  transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassRegister;
