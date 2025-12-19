import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import PageUrl from "components/pageurl/PageUrl";
import MainHeading from "components/headings/MainHeading";
import { FaUserGraduate } from "react-icons/fa";

const StudentClassList = () => {
  const students = [
    {
      id: 1,
      name: "Brynne Sellers",
      roll: "01",
      status: "Active",
      dob: "15 Feb 2005",
      phone: "+1 123-456-7890",
    },
    {
      id: 2,
      name: "Liam Johnson",
      roll: "02",
      status: "Active",
      dob: "20 Mar 2005",
      phone: "+1 123-456-7891",
    },
    {
      id: 3,
      name: "Emma Watson",
      roll: "03",
      status: "Inactive",
      dob: "10 Jan 2005",
      phone: "+1 123-456-7892",
    },
    {
      id: 4,
      name: "Noah Brown",
      roll: "04",
      status: "Active",
      dob: "05 May 2005",
      phone: "+1 123-456-7893",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-4">
        <PageUrl pageUrl="Home / Classes / Student List" />
        <MainHeading
          title="Class Students"
          btnTitle="Add Student"
          path="/admin/student-management/student-register"
        />

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                  <FaUserGraduate className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-500">Roll: {student.roll}</p>
                </div>
              </div>

              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>DOB: {student.dob}</span>
                <span>Phone: {student.phone}</span>
              </div>

              <div className="mt-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {student.status}
                </span>
              </div>
            </div>
          ))}

          {students.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-500">
              No students found.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentClassList;
