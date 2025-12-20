import React, { useEffect } from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import PageUrl from "components/pageurl/PageUrl";
import MainHeading from "components/headings/MainHeading";
import { FaUserGraduate } from "react-icons/fa";
import usePage from "../../../store/pagelocationcontext/PageLocationContext";
import useAdminStudent from "../../../store/admincontext/adminstudentcontext/AdminStudentContext";
import { useParams } from "react-router-dom";

const ClassStudentList = () => {
  const { handlePageUrl, pageUrl } = usePage();
  const { getStudentsByClass, state } = useAdminStudent();
  const { id } = useParams();

  // Get students from context state
  const students = state?.students || [];

  // Format DOB
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // Load page URL and fetch students
  useEffect(() => {
    handlePageUrl();
    if (id) {
      getStudentsByClass(id);
    }
  }, [id]);
  console.log(state.classStudentList);

  return (
    <AdminLayout>
      <div className="p-4">
        <PageUrl pageUrl={pageUrl} />
        <MainHeading
          title="Class Students"
          btnTitle="Add Student"
          path="/admin/user-management"
        />

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {state ? (
            state.classStudentList.map((student) => (
              <div
                key={student._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                    <img
                      src={`data:${student.studentPhotoObj.photoType};base64,${student.studentPhotoObj.photoData}`}
                      alt="School"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {student.fullName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Class: {student.classId?.name} ({student.classId?.section}
                      )
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>DOB: {formatDate(student.dob)}</span>
                  <span>Phone: {student.phone}</span>
                </div>

                <div className="mt-2">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      student.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {student.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-gray-500">
              No students found.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassStudentList;
