import React, { useEffect } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import MainHeading from "../../components/headings/MainHeading";
import PageUrl from "../../components/pageurl/PageUrl";
import AdminLayout from "../../layout/adminlayout/AdminLayout";
import { useClass } from "../../store/admincontext/classcontext/ClassContext";
import usePage from "../../store/pagelocationcontext/PageLocationContext";

const MarkAttendance = () => {
  const { state, getClassList } = useClass();
  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    handlePageUrl();
    getClassList();
  }, []);

  return (
    <AdminLayout>
      <div className="p-4">
        <PageUrl pageUrl={pageUrl} />
        <MainHeading
          title="All Classes Registered"
          btnTitle="Register New Class"
          path="/admin/class-management"
        />

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {state?.classList?.map((cls) => (
            <NavLink
              title="View Students"
              key={cls._id}
              to={`/admin/attendance-management/mark-attendance/attendance-register/${cls._id}/students`}
              className="group bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* Card Top */}
              <div className="flex items-center p-4 gap-4 bg-black">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <FaChalkboardTeacher className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {cls.name.toUpperCase()}
                  </h3>
                  <p className="text-sm font-medium text-white/80">
                    Section: {cls.section.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="flex justify-between items-center p-4 border-t border-gray-100 group-hover:bg-gray-50 transition">
                <span className="text-sm font-medium text-gray-700">
                  View Students<sup>*</sup>(Class-Wise)
                </span>
                <HiOutlineArrowNarrowRight className="text-indigo-600 text-xl" />
              </div>
            </NavLink>
          ))}

          {/* Empty State */}
          {state?.classList?.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-500">
              No classes found.
              <NavLink
                to="/admin/class-register"
                className="ml-2 text-indigo-600 font-medium hover:underline"
              >
                Create one
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default MarkAttendance;
