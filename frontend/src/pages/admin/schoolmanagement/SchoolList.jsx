import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaEdit, FaSchool, FaSearch } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useClassTeacher from "../../../store/admincontext/classteachercontext/ClassTeacherContext";

const SchoolList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useClassTeacher();
  const [pagePath, setPagePath] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Compute sliced data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    state?.classTeacherList?.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Total pages
  const totalPages = Math.ceil(
    (state?.classTeacherList?.length || 0) / itemsPerPage
  );

  useEffect(() => {
    setPagePath(location.pathname);
  }, [location]);

  const rowColors = ["#FFF7E6", "#E8F5E9", "#E3F2FD", "#F3E5F5", "#FFF3E0"];
  const hoverColors = ["#FFE8B3", "#C8E6C9", "#BBDEFB", "#E1BEE7", "#FFE0B2"];

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AdminLayout>
      <div className="">
        {/* Breadcrumb */}

        <div className="flex items-center text-sm my-1">
          <span className=" capitalize bg-teal-600 font-bold   p-[5px] py-2 text-white rounded ">
            {pagePath}
          </span>
        </div>
        <div className="shadow border p-1">
          {/* Header */}
          <div className=" bg-[#ffeecc] p-1 flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-3">
              <FaSchool className="text-teal-600 text-xl lg:text-3xl" />
              <div>
                <h1
                  className="text-sm lg:text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "cursive" }}
                >
                  SCHOOL LIST
                </h1>
                <p className="text-gray-600 text-sm font-bold">
                  List Of School Register
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/admin/school-management")}
              className=" px-4 py-1 lg:px-5  lg:py-3 bg-teal-600 text-white font-medium rounded-sm hover:bg-teal-500 transition"
            >
              School Management
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-sm shadow-sm bg-white border border-gray-200 p-2">
            <table className="min-w-full  rounded overflow-hidden text-center">
              <thead className="bg-gray-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Academic Year
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {currentItems.map((ct, index) => (
                  <tr key={ct._id} className="bg-gray-200 hover:bg-gray-400">
                    <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                    <td className="px-4 py-2 font-medium text-gray-800">
                      {ct.userId?.userName || "-"}
                    </td>
                    <td className="px-4 py-2 text-gray-800">
                      {ct.userId?.email || "-"}
                    </td>
                    <td className="px-4 py-2 text-gray-800">
                      {ct.classId?.name || "-"}
                    </td>
                    <td className="px-4 py-2 text-gray-800">
                      {ct.classId?.section || "-"}
                    </td>
                    <td className="px-4 py-2 text-gray-800">
                      {ct.academicYear}
                    </td>
                    <td className="px-4 py-2">
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
                          to={`/admin/classteacher-management/classteacher-register/${ct._id}`}
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
            </table>

            {/* Empty State */}
            {state?.classTeacherList?.length === 0 && (
              <div className="text-center text-gray-500 py-6">
                No class teachers found.
                <NavLink
                  to="/admin/classteacher-management/classteacher-register"
                  className="text-indigo-600 font-semibold underline ml-1 hover:text-indigo-800"
                >
                  Add a class teacher
                </NavLink>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-end items-center mt-4 space-x-2">
                <button
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                  className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                      currentPage === i + 1
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                  className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolList;
