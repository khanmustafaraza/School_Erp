import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaEdit, FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import useClassTeacher from "../../../store/admincontext/classteachercontext/ClassTeacherContext";

const ClassTeacherList = () => {
  const location = useLocation();
  const { state } = useClassTeacher();
  const [pagePath, setPagePath] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Compute sliced data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state?.classTeacherList?.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Total pages
  const totalPages = Math.ceil((state?.classTeacherList?.length || 0) / itemsPerPage);

  useEffect(() => {
    setPagePath(location.pathname);
  }, [location]);

  const rowColors = ["#FFF7E6", "#E8F5E9", "#E3F2FD", "#F3E5F5", "#FFF3E0"];
  const hoverColors = ["#FFE8B3", "#C8E6C9", "#BBDEFB", "#E1BEE7", "#FFE0B2"];

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AdminLayout>
      <div className="p-4 bg-gray-50 min-h-screen">

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-1">
          {pagePath.split("/").filter(Boolean).map((segment, i, arr) => (
            <span key={i} className="flex items-center capitalize">
              {segment.replace(/-/g, " ")}
              {i !== arr.length - 1 && <span className="mx-2 text-gray-400">/</span>}
            </span>
          ))}
        </div>

        {/* Header: Title + Search + Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-wide">Class Teacher List</h2>

          <div className="flex flex-1 items-center gap-3 justify-end">
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search class teachers..."
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 bg-white 
                  focus:ring-1 focus:ring-indigo-500 
                  focus:border-indigo-500 outline-none text-sm shadow-sm transition"
              />
            </div>

            {/* Add Class Teacher Button */}
            <NavLink
              to="/admin/classteacher-management/classteacher-register"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm text-sm font-medium transition"
            >
              + Add Class Teacher
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-sm bg-white border border-gray-200">
          <table className="min-w-full text-left rounded overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Full Name</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Class</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Section</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Academic Year</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {currentItems.map((ct, index) => (
                <tr
                  key={ct._id}
                  className="transition cursor-pointer"
                  style={{ backgroundColor: rowColors[index % rowColors.length] }}
                  onMouseEnter={(e) =>
                    e.currentTarget.style.backgroundColor = hoverColors[index % hoverColors.length]
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.backgroundColor = rowColors[index % rowColors.length]
                  }
                >
                  <td className="px-4 py-2 text-gray-700">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">{ct.userId?.userName || "-"}</td>
                  <td className="px-4 py-2 text-gray-800">{ct.userId?.email || "-"}</td>
                  <td className="px-4 py-2 text-gray-800">{ct.classId?.name || "-"}</td>
                  <td className="px-4 py-2 text-gray-800">{ct.classId?.section || "-"}</td>
                  <td className="px-4 py-2 text-gray-800">{ct.academicYear}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1.5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 
                          text-white shadow hover:from-blue-500 hover:to-blue-700 transition text-sm"
                        title="View"
                      >
                        <FiEye size={16} />
                      </button>

                      <button
                        className="p-1.5 rounded-full bg-gradient-to-br from-red-400 to-red-600 
                          text-white shadow hover:from-red-500 hover:to-red-700 transition text-sm"
                        title="Delete"
                      >
                        <FiTrash2 size={16} />
                      </button>

                      <NavLink
                        to={`/admin/classteacher-management/classteacher-register/${ct._id}`}
                      >
                        <button
                          className="p-1.5 rounded-full bg-gradient-to-br from-green-400 to-green-600 
                            text-white shadow hover:from-green-500 hover:to-green-700 transition text-sm"
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
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
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
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassTeacherList;
