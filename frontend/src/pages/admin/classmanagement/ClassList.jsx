import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useClass } from "store/admincontext/classcontext/ClassContext";
import { FaChalkboardTeacher } from "react-icons/fa";
import AdminLayout from "adminLayout/AdminLayout";
import MainHeading from "components/headings/MainHeading";
import usePage from "store/pagelocationcontext/PageLocationContext";
import PageUrl from "components/pageurl/PageUrl";

const ClassList = () => {
  const { state, getClassList } = useClass();
  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    handlePageUrl();
  }, []);

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <AdminLayout>
      <div className="p-2 shadow">
        <PageUrl pageUrl={pageUrl} />
        <MainHeading
          title="List of All Class Registered"
          btnTitle="Class Register"
          path="/admin/class-management"
        />
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4"></div>

        {/* Cards */}
        <div className="flex flex-wrap gap-2 items-center ">
          {state?.classList?.map((cls) => (
            <div
              key={cls._id}
              className="flex-1 hover:bg-teal-400 bg-white border border-gray-200 rounded-sm p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Top */}
              <div className="flex items-center gap-4 ">
                <div className="w-11 h-11 flex items-center justify-center bg-blue-900 rounded-full">
                  <FaChalkboardTeacher className="text-white text-lg" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {cls.name.toUpperCase()}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700">
                    Section: {cls.section.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Action */}
              <NavLink
                title="Class Students"
                to={`/admin/class/${cls._id}`}
                className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
              >
                View Details →
              </NavLink>
            </div>
          ))}

          {/* Empty State */}
          {state?.classList?.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No classes found.
              <NavLink
                to="/admin/class-register"
                className="ml-1 text-indigo-600 font-medium hover:underline"
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

export default ClassList;
