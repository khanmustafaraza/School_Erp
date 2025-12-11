import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useAuth from "../../../store/authcontext/AuthContext";

const enquiryList = [
  {
    id: 1,
    fullName: "Kathleen Meyer",
    phone: "+1 (519) 546-4122",
    subject: "Fuga Facilis tempor",
    message: "Molestias sit elit",
  },
  {
    id: 2,
    fullName: "Kathleen Meyer",
    phone: "+1 (519) 546-4122",
    subject: "Fuga Facilis tempor",
    message: "Molestias sit elit",
  },
  {
    id: 3,
    fullName: "Kathleen Meyer",
    phone: "+1 (519) 546-4122",
    subject: "Fuga Facilis tempor",
    message: "Molestias sit elit",
  },
  {
    id: 4,
    fullName: "Kathleen Meyer",
    phone: "+1 (519) 546-4122",
    subject: "Fuga Facilis tempor",
    message: "Molestias sit elit",
  },
];

const EnquiryList = () => {
  const location = useLocation();
  const [pagePath, setPagePath] = useState("");
  const { state, enquiryList } = useAuth();

  useEffect(() => {
    setPagePath(location.pathname);
  }, [location]);
  useEffect(() => {
    enquiryList();
  }, []);
  console.log(state)

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Elegant Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          {pagePath
            .split("/")
            .filter(Boolean)
            .map((segment, i, arr) => (
              <span key={i} className="flex items-center">
                <span className="capitalize">{segment.replace(/-/g, " ")}</span>
                {i !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </span>
            ))}
        </div>

        {/* Header + Search */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
            Enquiry List
          </h2>

          {/* Elegant Search Bar */}
          <div className="relative w-72">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search enquiries..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
              focus:ring-2 focus:ring-indigo-500 
              focus:border-indigo-500 outline-none text-sm transition"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr className="border-b">
                <th className="px-6 py-3 text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-sm font-semibold">Full Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Phone</th>
                <th className="px-6 py-3 text-sm font-semibold">Subject</th>
                <th className="px-6 py-3 text-sm font-semibold">Message</th>
                <th className="px-6 py-3 text-sm font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {state?.enquiryList?.map((item, index) => (
                <tr
                  key={item._id}
                  className={`border-b transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-indigo-50`}
                >
                  <td className="px-6 py-3 text-gray-700">{index + 1}</td>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {item.fullName}
                  </td>
                  <td className="px-6 py-3 text-gray-800">{item.phone}</td>
                  <td className="px-6 py-3 text-gray-800">{item.subject}</td>
                  <td className="px-6 py-3 text-gray-800">{item.message}</td>

                  <td className="px-6 py-3">
                    <div className="flex items-center justify-center gap-4">
                      <button
                        className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition"
                        title="View"
                      >
                        <FiEye size={18} />
                      </button>

                      <button
                        className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition"
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
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

export default EnquiryList;
