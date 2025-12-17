import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import Card from "components/card/Card";
import { FaIcons } from "components/icons/Icons";
import { FaListAlt } from "react-icons/fa";

const EnquiryManagement = () => {
  const { FaUser } = FaIcons;
  const data = [
    {
      id: 0,
      link: "/admin/enquiry-management/enquiry-list", // ✅ fixed typo
      icon: <FaListAlt />,
      title: "Enquiry List",
      subTitle: 2000,

      bgColor: "#26cad9",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Header */}
        <div className="my-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight p-1">
            Enquiry Management
          </h2>
        </div>

        {/* Card Grid */}
        <div className="flex gap-2 flex-wrap">
          {data?.map((curEle) => (
            <div key={curEle.id} title={`${curEle.title}`}>
              <Card curEle={curEle}  />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default EnquiryManagement;
