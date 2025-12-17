import React, { useEffect } from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";

import MainHeading from "components/headings/MainHeading";
import usePage from "store/pagelocationcontext/PageLocationContext";
import PageUrl from "components/pageurl/PageUrl";
import TableContainer from "components/table/TableContainer";
import useClassTeacher from "store/admincontext/classteachercontext/ClassTeacherContext";

const ClassTeacherList = () => {
  const { state } = useClassTeacher();

  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    handlePageUrl();
  }, []);

  return (
    <AdminLayout>
      <div className="shadow border p-1">
        <PageUrl pageUrl={pageUrl} />
        <MainHeading
          title="LIST OF CLASS TEACHERS"
          path="/admin/User-management"
          btnTitle="Register Class Teacher"
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
                Class
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Section
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Academic Year
              </th>

              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="">
            {state?.classTeacherList?.map((ct, index) => (
              <tr key={ct._id} className="bg-gray-100 hover:bg-gray-300 ">
                <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                <td className="px-4 py-3 font-medium text-gray-800">
                  {ct?.userId.userName || "-"}
                </td>
                <td className="px-4 py-3 text-gray-800">
                  {" "}
                  {ct?.userId.email || "-"}
                </td>
                <td className="px-4 py-3 text-gray-800">
                  {" "}
                  {ct?.classId.name || "-"}
                </td>
                <td className="px-4 py-3 text-gray-800">
                  {" "}
                  {ct?.classId.section || "-"}
                </td>
                <td className="px-4 py-3 text-gray-800">
                  {" "}
                  {ct?.academicYear || "-"}
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

export default ClassTeacherList;
