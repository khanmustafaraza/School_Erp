import React from "react";

const TeacherLayout = () => {
  const adminData = [
    {
      id: 0,
      target: "",
      link: "/admin/admindashboard",
      icon: <span className="material-icons">bar_chart</span>,
      name: "Dashboard",
    },
    // {
    //   id: 1,
    //   target: "SCHOOL",
    //   link: "/admin/school-register",
    //   icon: <span className="material-symbols-outlined">school</span>,
    //   name: "School Register",
    // },
    {
      id: 2,
      target: "Register (Admin)",
      link: "/admin/school-list",
      icon: <span class="material-symbols-outlined">list_alt</span>,
      name: "Admin List",
    },
    {
      id: 3,
      target: "Register (Teacher) ",
      link: "/admin/class-register",
      icon: <FaChalkboardTeacher />,
      name: "Teacher List",
    },

    {
      id: 5,
      target: "Register(Student)",
      link: "/admin/student-register",
      icon: <span className="material-icons">person_add</span>,
      name: "Student List",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Left adminData={adminData} />
      <div className="w-[60%] sm:w-[70%] lg:w-[85%] xl:w-[87%]">
        <div className="py-1 border-b w-full">
          <Top />
        </div>
        <div className="p-1">{props.children}</div>
      </div>
    </div>
  );
};

export default TeacherLayout;
