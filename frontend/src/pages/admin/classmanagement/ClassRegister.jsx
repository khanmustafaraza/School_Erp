import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import Input from "../../../components/inputs/Input";
import { useClass } from "../../../store/admincontext/classcontext/ClassContext";
import { FaIcons, LuIcons, MdIcons } from "../../../components/icons/Icons";

const ClassRegister = () => {
  const { state, handleClassChange, handleClassRegister } = useClass();
  const { MdClass } = MdIcons;
  const { LuSection } = LuIcons;

  return (
    <AdminLayout>

      {/* 🔹 Top Heading + Button (Side-by-Side & Responsive) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-6 gap-3">
        
        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
            Class Management
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Create and manage school classes easily
          </p>
        </div>

        {/* Button */}
        <button
          className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-sm text-sm font-medium transition-all"
        >
          Class List
        </button>

      </div>

      <div className="flex items-center justify-center py-6">
        <div className="bg-white border border-gray-200 w-full max-w-3xl rounded-md shadow-lg p-8">

          {/* Center Card Title + Button */}
          <div className="relative mb-8">
            <h3 className="text-2xl font-bold text-center text-gray-800">
              Register a New Class
            </h3>

           
          </div>

          {/* Form */}
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
