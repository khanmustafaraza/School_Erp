import React, { useEffect } from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "store/authcontext/AuthContext";
import MainHeading from "components/headings/MainHeading";
import usePage from "store/pagelocationcontext/PageLocationContext";
import PageUrl from "components/pageurl/PageUrl";
import TableContainer from "components/table/TableContainer";

const TeacherUserList = () => {
  const { state, getUserList } = useAuth();

  useEffect(() => {
    getUserList();
  }, []);
  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    handlePageUrl();
  }, []);

  return (
    <AdminLayout>
      <div className="shadow border p-1">
        <PageUrl pageUrl={pageUrl} />
        <MainHeading
          title="LIST OF USER REGISTER (ADMINS)*"
          path="/admin/User-management"
          btnTitle="User Register"
        />

        <TableContainer>
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                User Name
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Role
              </th>

              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="">
            {state?.userList
              ?.filter((user) => user.role === "teacher")
              .map((u, index) => (
                <tr key={u._id} className="bg-gray-100 hover:bg-gray-300 ">
                  <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {u?.userName || "-"}
                  </td>
                  <td className="px-4 py-3 text-gray-800">{u.email || "-"}</td>
                  <td className="px-4 py-3 text-gray-800">
                    <span
                      className={`px-3 py-3 text-sm rounded-full font-medium capitalize 
      ${
        u.role === "teacher"
          ? "bg-blue-100 text-blue-800"
          : u.role === "teacher"
          ? "bg-green-100 text-green-800"
          : "bg-purple-100 text-purple-800"
      }`}
                    >
                      {u.role}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1.5 rounded-full bg-gray-900 hover:bg-gray-700 
                          text-white  transition text-sm"
                        title="View"
                      >
                        <FiEye size={16} />
                      </button>

                      <button
                        className="p-1.5 rounded-full bg-red-600 hover:bg-red-900 
                          text-white transition text-sm"
                        title="Delete"
                      >
                        <FiTrash2 size={16} />
                      </button>

                      <NavLink
                        to={`/admin/classteacher-management/classteacher-register/${u._id}`}
                      >
                        <button
                          className="p-1.5 rounded-full bg-teal-500                  text-white shadow hover:bg-teal-700 transition text-sm"
                          title="Edit Class Teacher"
                        >
                          <FaEdit size={16} />
                        </button>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </TableContainer>
      </div>
    </AdminLayout>
  );
};

export default TeacherUserList;
