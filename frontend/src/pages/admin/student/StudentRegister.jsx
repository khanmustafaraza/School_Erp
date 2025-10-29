import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { useClassTeacher } from "../../../context/admincontext/classteachercontext/ClassTeacherContext";
import { useClass } from "../../../context/admincontext/classcontext/ClassContext";
import { useParams } from "react-router-dom";
import { useStudent } from "../../../context/admincontext/studentcontext/StudentContext";

const StudentRegister = () => {
  const { state, handleStudentChange, handleStudentRegister } = useStudent();
  const {
    state: { classList },
  } = useClass();

  const userId = useParams().id;

  return (
    <AdminLayout>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white border border-gray-200 w-full  rounded-sm shadow-lg p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
            <span className="material-icons">account_box</span>

            <span> Register A New Class Teacher</span>
          </h3>

          <form onSubmit={(e) => handleStudentRegister(e, userId)}>
            <div>
              <select name="classId" onChange={handleStudentChange}>
                <option value="">Class & Section</option>
                {classList.map((cur) => {
                  return (
                    <option
                      value={cur._id}
                      style={{ textTransform: "uppercase" }}
                    >
                      Class:- {cur.name} Section :-
                      {cur.section}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* User Name */}
            {/* <div className="mb-5">
              <Input
                id=""
                icon={<FaUser />}
                iconType="react"
                label="User Name"
                type="text"
                name="userName"
                placeholder="mrkec@gmail.com"
                onChange={handleUserChange}
                value={state.register.userName}
              />
            </div> */}
            {/* Email */}
            {/* <div className="mb-5">
              <Input
                id="email"
                icon="mark_email_read"
                label="Email"
                type="email"
                name="email"
                placeholder="khan@243122gmail.com"
                value={state.register.email}
                onChange={handleUserChange}
              />
            </div> */}

            {/* Side-by-side Row */}
            {/* password */}

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

export default StudentRegister;
