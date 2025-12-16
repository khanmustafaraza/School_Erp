import React, { useEffect, useState } from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaEdit, FaSchool } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSchool } from "store/schoolcontext/SchoolContext";
import usePage from "store/pagelocationcontext/PageLocationContext";
import MainHeading from "../../../components/headings/MainHeading";

const SchoolList = () => {
  const { state, getSchoolList } = useSchool();
  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    getSchoolList();
  }, []);
  useEffect(() => {
    handlePageUrl();
  }, []);

  return (
    <AdminLayout>
      <div className="">
        {/* Breadcrumb */}

        <div className="shadow border p-1">
          <div className="flex items-center text-sm my-1">
            <span className=" capitalize font-bold   p-[5px] py-2 text-gray-400 border-b-2">
              Page Address:- {pageUrl && pageUrl}
            </span>
          </div>
          <MainHeading
            title="LIST OF SCHOOL REGISTER"
            path="/admin/school-management"
            btnTitle="School Management"
          />

          {/* Table */}
          <div className="overflow-x-auto rounded-sm shadow-sm bg-white border border-gray-200 p-1">
            <table className="min-w-full  rounded overflow-hidden text-center">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    School Name
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    School Photo
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    School Sub Name
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Affilication Code
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-4 py-2 text-xs font-semibold  uppercase tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {state?.schoolList?.map((s, index) => (
                  <tr key={s._id} className="bg-gray-100 hover:bg-gray-300">
                    <td className="px-4 py-1 text-gray-700">{index + 1}</td>
                    <td className="px-4 py-1 font-medium text-gray-800">
                      {s?.name || "-"}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s.school_photo && (
                        <img
                          src={`data:image/jpeg;base64,${s.school_photo}`}
                          alt="School"
                          className="w-[40px] h-[40px] rounded-full"
                        />
                      )}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s?.subName || "-"}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s?.code || "-"}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s?.affiCode || "-"}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s?.email || "-"}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s?.contact || "-"}
                    </td>
                    <td className="px-4 py-1 text-gray-800">
                      {s?.address || "-"}
                    </td>
                    <td className="px-4 py-1">
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
                          to={`/admin/classteacher-management/classteacher-register/${s._id}`}
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

            {/* Pagination Controls */}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolList;
