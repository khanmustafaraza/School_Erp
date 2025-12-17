import React, { useEffect, useState } from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaEdit, FaSchool } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import usePage from "store/pagelocationcontext/PageLocationContext";
import MainHeading from "components/headings/MainHeading";
import useAuth from "store/authcontext/AuthContext";
import PageUrl from "../../../components/pageurl/PageUrl";
import TableContainer from "../../../components/table/TableContainer";

const EnquiryList = () => {
  const { state, enquiryList } = useAuth();
  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    enquiryList();
  }, []);
  useEffect(() => {
    handlePageUrl();
  }, []);

  return (
    <AdminLayout>
      <div className="shadow border p-1">
        <PageUrl pageUrl={pageUrl} />

        <MainHeading
          title="LIST OF ENQUIRY"
          path="/admin/enquiry-management"
          btnTitle="Enquiry Management"
        />

        {/* Table */}
        <TableContainer>
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Mobile No
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Subject
              </th>
              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider">
                Message
              </th>

              <th className="px-4 py-3 text-xs font-semibold  uppercase tracking-wider text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="">
            {state?.enquiryList?.map((e, index) => (
              <tr
                key={e._id}
                className="bg-gray-100 hover:bg-gray-300 border-b"
              >
                <td className="px-4 py-1 text-gray-700">{index + 1}</td>
                <td className="px-4 py-1 font-medium text-gray-800">
                  {e?.fullName || "-"}
                </td>
                <td className="px-4 py-1 text-gray-800">{e.phone || "-"}</td>
                <td className="px-4 py-1 text-gray-800">{e?.subject || "-"}</td>
                <td className="px-4 py-1 text-gray-800">{e?.message || "-"}</td>

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
                      to={`/admin/classteacher-management/classteacher-register/${e._id}`}
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

export default EnquiryList;
