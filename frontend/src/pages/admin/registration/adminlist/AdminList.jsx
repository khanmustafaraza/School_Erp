import React, { useEffect } from "react";
import AdminLayout from "../../../../layout/adminlayout/AdminLayout";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../context/admincontext/authcontext/AuthContext";
import { RiAdminFill } from "react-icons/ri";
import { useTheme } from "../../../../context/themecontext/ThemeContext";

const AdminList = () => {
  const { getAdminList, state } = useAuth();
  useEffect(() => {
    getAdminList();
  }, []);
  const { theme } = useTheme();
  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className={
              theme
                ? "text-xl text-blue-600 flex items-center gap-2"
                : "text-xl text-white flex items-center gap-2"
            }
          >
            <RiAdminFill
              className={theme ? "text-xl text-blue-600" : "text-xl text-white"}
            />{" "}
            Class List
          </h2>
          <button className="flex items-center gap-1 bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            <NavLink to="/admin/class-register">
              <span className="material-icons text-sm">add</span>
              Add Class
            </NavLink>
          </button>
        </div>

        {/* Table */}
        <div
          className={
            theme
              ? " bg-white border border-gray-200 rounded-sm shadow overflow-x-auto cursor-pointer p-1"
              : "bg-black border border-gray-200 rounded-sm shadow overflow-x-auto cursor-pointer p-1"
          }
        >
          <table className="w-full text-center">
            <thead className={theme ? "bg-gray-100" : "bg-black"}>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">User Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {state?.adminList?.map((admin, index) => (
                <tr
                  key={admin._id}
                  className="border-t hover:bg-gray-400 hover:text-white transition-all"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 flex items-center gap-2 justify-center">
                    <RiAdminFill className="text-xl text-blue-600" />
                    {admin.userName}
                  </td>
                  <td className="px-4 py-2">{admin.email}</td>
                  <td className="px-4 py-2">
                    <sup className="bg-green-600 rounded-lg p-1 text-white font-bold">
                      {admin.role}
                    </sup>
                  </td>
                  {/* <td className="px-4 py-2">{school.email}</td> */}
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                      <span className="material-icons text-sm">edit</span>
                      Edit
                    </button>
                    <button className="flex items-center gap-1 text-red-600 hover:text-red-800">
                      <span className="material-icons text-sm">delete</span>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminList;
