import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import Left from "../../components/left/Left";
import Top from "../../components/top/Top";

const StudentLayout = (props) => {
  const data = [
    {
      id: 0,
      target: "Student Dashboard",
      link: "/student/dashboard",
      icon: <span className="material-icons">bar_chart</span>,
      name: "Dashboard",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Left data={data} />
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
