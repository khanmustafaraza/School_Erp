import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import Left from "components/left/Left";
import Top from "components/top/Top";

const StudentLayout = (props) => {
  const studentNavItems = [
    {
      id: 0,
      title: "Dashboard",
      // icon: <MdOutlineDashboard />,
      link: "/admin/dashboard",
    },
  ];
  console.log("first", studentNavItems);

  return (
    <div className="flex min-h-screen">
      <Left data={studentNavItems} />
      <div className="w-[60%] sm:w-[70%] lg:w-[85%] xl:w-[87%]">
        <div className="py-1 border-b w-full">
          <Top />
        </div>
        <div className="p-1">{props.children}</div>
      </div>
    </div>
  );
};

export default StudentLayout;
