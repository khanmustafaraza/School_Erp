import React from "react";
import {
  FaIcons,
  MdIcons,
  PiIcons,
  SiIcons,
  GiIcons,
} from "components/icons/Icons";
import Left from "components/left/Left";
import Top from "components/top/Top";
const TeacherLayout = ({ children }) => {
  const { FaEnvelopeOpenText, FaUser } = FaIcons;
  const { MdOutlineDashboard } = MdIcons;
  const { PiStudentBold } = PiIcons;
  const { SiGoogleclassroom } = SiIcons;
  // const { GiSunglasses } = GiIcons;
  const teacherNavItems = [
    {
      id: 0,
      title: "Dashboardsdfsd",
      icon: <MdOutlineDashboard />,
      link: "/admin/dashboardgfsdf",
    },
  ];
  return (
    <div className="flex min-h-screen">
      <Left data={teacherNavItems} />
      <div className="w-[60%] sm:w-[70%] lg:w-[85%] xl:w-[87%]">
        <div className="py-1 border-b w-full">
          <Top />
        </div>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default TeacherLayout;
