import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import Card from "components/card/Card";
import { FaIcons } from "components/icons/Icons";
import { FaList, FaRegRegistered } from "react-icons/fa";

const ClassManagement = () => {
  const { FaUser } = FaIcons;
  const data = [
    {
      id: 0,
      link: "/admin/class-management/class-register", // ✅ fixed typo
      icon: <FaRegRegistered />,
      title: "Add Class",
      subTitle: 2000,

      bgColor: "#26ccce",
    },
    {
      id: 1,
      link: "/admin/class-management/class-list", // ✅ fixed typo
      icon: <FaList />,
      title: "Class List",
      subTitle: 2000,

      bgColor: "#fbedff",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Header */}
        <div className="my-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight p-1">
            Class Management
          </h2>
        </div>

        {/* Card Grid */}
        <div className="flex gap-2 flex-wrap">
          {data?.map((curEle) => (
            <div key={curEle.id}>
              <Card curEle={curEle} />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassManagement;
