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
import useAdminStudent from "../../../store/admincontext/studentadmincontext/StudentAdminContext";

const AllStudentList = () => {
  const { state, getAllStudentList } = useAdminStudent();
  console.log(state.studentList)

  useEffect(() => {
    getAllStudentList();
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
          title="LIST OF ALL STUDENTS"
          path="/admin/User-management"
          btnTitle="User Register"
        />

       <TableContainer>
  <thead className="bg-black text-white">
    <tr>
      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        #
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Full Name
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Father Name
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Username
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Email
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Class
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Section
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Academic Year
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
        Status
      </th>

      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-center">
        Actions
      </th>
    </tr>
  </thead>

  <tbody>
    {state?.studentList?.map((s, index) => (
      <tr key={s._id} className="bg-gray-100 hover:bg-gray-300">
        <td className="px-4 py-3 text-gray-700">
          {index + 1}
        </td>

        <td className="px-4 py-3 font-medium text-gray-800">
          {s?.fullName || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          {s?.fatherName || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          {s?.userId?.userName || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          {s?.userId?.email || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          {s?.classId?.name || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          {s?.classId?.section || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          {s?.classTeacherId?.academicYear || "-"}
        </td>

        <td className="px-4 py-3 text-gray-800">
          <span
            className={`px-3 py-1 text-sm rounded-full font-medium
              ${
                s?.classTeacherId?.status === "active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
          >
            {s?.classTeacherId?.status || "-"}
          </span>
        </td>

        <td className="px-4 py-3">
          <div className="flex items-center justify-center gap-1">
            <button
              className="p-1.5 rounded-full bg-gray-900 hover:bg-gray-700 
              text-white transition text-sm"
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

            <NavLink to={`/admin/student-management/student-detail/${s._id}`}>
              <button
                className="p-1.5 rounded-full bg-teal-500 text-white shadow 
                hover:bg-teal-700 transition text-sm"
                title="Edit Student"
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

export default AllStudentList;
