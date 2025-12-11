import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import Card from "components/card/Card";
import { FaIcons } from "components/icons/Icons";

const ClassManagement = () => {
  const { FaUser } = FaIcons;
  const data = [
    {
      id: 0,
      link: "/admin/class-management/class-register", // ✅ fixed typo
      icon: <FaUser />,
      title: "Add Class",
      subTitle: 2000,

      bgColor: "#26cad9",
    },
    {
      id: 1,
      link: "/admin/class-management/class-list", // ✅ fixed typo
      icon: <FaUser />,
      title: "Class List",
      subTitle: 2000,

      bgColor: "#26cad9",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-4">
        {data?.map((curEle) => {
          return <Card key={curEle.id} curEle={curEle} />; // ✅ proper return
        })}
      </div>
    </AdminLayout>
  );
};

export default ClassManagement;
