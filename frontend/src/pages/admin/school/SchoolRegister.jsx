import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import Input from "../../../components/inputs/Input";
import { useSchool } from "../../../context/SchoolContext";

const SchoolRegister = () => {
  // todo use School
  const {
    state: {
      schoolField: {
        name,
        subName,
        code,
        affiCode,
        board,
        address,
        email,
        contact,
      },
    },
    handleSchoolChange,
    handleSchoolSubmit,
  } = useSchool();

  return (
    <AdminLayout>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white border border-gray-200 w-full  rounded-sm shadow-lg p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
            <span className="material-icons">account_box</span>

            <span> Register School</span>
          </h3>

          <form onSubmit={handleSchoolSubmit}>
            {/* School Name */}
            <div className="mb-5">
              <Input
                id="name"
                icon="school"
                label="Enter School Name"
                type="text"
                name="name"
                placeholder="Enter School Name"
                onChange={handleSchoolChange}
                value={name}
              />
            </div>
            <div className="mb-5">
              <Input
                id="subName"
                icon="school"
                label="Enter school Sub Title"
                type="text"
                name="subName"
                placeholder="Enter school Sub Title"
                value={subName}
                onChange={handleSchoolChange}
              />
            </div>

            {/* Side-by-side Row */}
            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <Input
                  id="affiCode"
                  icon="confirmation_number"
                  label="Affiliation No (CBSE)"
                  type="text"
                  name="affiCode"
                  placeholder="Enter affiliation number"
                  value={affiCode}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="code"
                  icon="code"
                  label="Enter Code of School"
                  type="text"
                  name="code"
                  placeholder="Enter Code of School"
                  value={code}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="board"
                  icon="developer_board"
                  label="Enter board of School"
                  type="text"
                  name="board"
                  placeholder="Enter board of School"
                  value={board}
                  onChange={handleSchoolChange}
                />
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <Input
                  id="email"
                  icon="email"
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="contact"
                  icon="phone"
                  label="Enter contact number"
                  type="text"
                  name="contact"
                  placeholder="Enter contact number"
                  value={contact}
                  onChange={handleSchoolChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <Input
                id="address"
                icon="edit_location"
                label="Enter Address"
                type="text"
                name="address"
                placeholder="Enter address"
                value={address}
                onChange={handleSchoolChange}
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

export default SchoolRegister;
