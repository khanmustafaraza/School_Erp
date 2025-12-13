import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Enquiry from "./pages/enquiry/Enquiry";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./routes/adminroute/AdminRoute";
import EnquiryManagement from "./pages/admin/enquirymanagement/EnquiryManagement";
import EnquiryList from "./pages/admin/enquirymanagement/EnquiryList";
import UserManagement from "./pages/admin/usermanagement/UserManagement";
import UserRegister from "./pages/admin/usermanagement/UserRegister";
import AdminList from "./pages/admin/usermanagement/AdminList";
import TeacherList from "./pages/admin/usermanagement/TeacherList";
import StudentList from "./pages/admin/usermanagement/StudentList";
import ClassManagement from "./pages/admin/classmanagement/ClassManagement";
import ClassRegister from "./pages/admin/classmanagement/ClassRegister";
import ClassList from "./pages/admin/classmanagement/ClassList";
import StudentRegister from "./pages/admin/studentmanagement/StudentRegister";
import ClassTeacherRegister from "./pages/admin/classteachermanagement/ClassTeacherRegister";
import ClassTeacherList from "./pages/admin/classteachermanagement/ClassTeacherList";
import SchoolManagement from "./pages/admin/schoolmanagement/SchoolManagement";
import SchoolRegister from "./pages/admin/schoolmanagement/SchoolRegister";
// import Login from "./pages/auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/enquiry" element={<Enquiry />} />

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="enquiry-management" element={<EnquiryManagement />} />
        <Route
          path="enquiry-management/enquiry-list"
          element={<EnquiryList />}
        />
        <Route
          path="school-management"
          element={<SchoolManagement />}
        />
        <Route
          path="school-management/school-register"
          element={<SchoolRegister />}
        />
        <Route path="user-management" element={<UserManagement />} />
        <Route
          path="user-management/user-register"
          element={<UserRegister />}
        />
        <Route path="user-management/admin-list" element={<AdminList />} />
        <Route path="user-management/teacher-list" element={<TeacherList />} />
        <Route path="user-management/student-list" element={<StudentList />} />
        <Route path="class-management" element={<ClassManagement />} />
        <Route
          path="class-management/class-register"
          element={<ClassRegister />}
        />
        <Route path="class-management/class-list" element={<ClassList />} />
        <Route
          path="classteacher-management/classteacher-register/:id"
          element={<ClassTeacherRegister />}
        />
        <Route
          path="classteacher-management/classteacher-list"
          element={<ClassTeacherList />}
        />
        <Route
          path="student-management/student-register/:id"
          element={<StudentRegister />}
        />
      </Route>
    </Routes>
  );
};

export default App;
