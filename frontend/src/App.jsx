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

import ClassManagement from "./pages/admin/classmanagement/ClassManagement";
import ClassRegister from "./pages/admin/classmanagement/ClassRegister";
import ClassList from "./pages/admin/classmanagement/ClassList";
import StudentRegister from "./pages/admin/studentmanagement/StudentRegister";
import ClassTeacherRegister from "./pages/admin/classteachermanagement/ClassTeacherRegister";
import ClassTeacherList from "./pages/admin/classteachermanagement/ClassTeacherList";
import SchoolManagement from "./pages/admin/schoolmanagement/SchoolManagement";
import SchoolRegister from "./pages/admin/schoolmanagement/SchoolRegister";
import SchoolList from "./pages/admin/schoolmanagement/SchoolList";
import { ToastContainer } from "react-toastify";

import AllStudentList from "./pages/admin/studentmanagement/AllStudentList";
import StudentProfile from "./pages/admin/studentmanagement/StudentProfile";
import ClassStudentList from "./pages/admin/studentmanagement/ClassStudentList";
import AdminUserList from "./pages/admin/usermanagement/AdminUserList";
import TeacherUserList from "./pages/admin/usermanagement/TeacherUserList";
import StudentUserList from "./pages/admin/usermanagement/StudentUserList";
import AttendanceManagement from "./pages/attendancemanagement/AttendanceManagement";
import MarkAttendanceList from "./pages/attendancemanagement/MarkAttendanceList";
import MarkAttendance from "./pages/attendancemanagement/MarkAttendance";
import AttendanceRegister from "./pages/attendancemanagement/AttendanceRegister";
import AttendanceList from "./pages/attendancemanagement/AttendanceList";
// import Login from "./pages/auth/Login";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/enquiry" element={<Enquiry />} />

        {/* ============ all dmin routes */}

        <Route path="/admin" element={<AdminRoute />}>
          {/* ==============admin dashboard start========== */}
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          {/* ==============admin dashboard end========== */}

          {/* **************** enquiry management start */}

          <Route path="enquiry-management" element={<EnquiryManagement />} />
          <Route
            path="enquiry-management/enquiry-list"
            element={<EnquiryList />}
          />
          {/* **************** enquiry management end */}
          {/* **************** start management start */}

          <Route path="school-management" element={<SchoolManagement />} />
          <Route
            path="school-management/school-register"
            element={<SchoolRegister />}
          />
          <Route
            path="school-management/school-list"
            element={<SchoolList />}
          />

          {/* **************** start management end */}

          {/* **************** new user register management start ********* */}
          <Route path="user-management" element={<UserManagement />} />
          <Route
            path="user-management/user-register"
            element={<UserRegister />}
          />
          <Route
            path="user-management/admin-user-list"
            element={<AdminUserList />}
          />
          <Route
            path="user-management/teacher-user-list"
            element={<TeacherUserList />}
          />
          <Route
            path="user-management/student-user-list"
            element={<StudentUserList />}
          />

          {/* ****************  new user register management end */}

          {/* """""""""""""" class management start */}

          <Route path="class-management" element={<ClassManagement />} />
          <Route
            path="class-management/class-register"
            element={<ClassRegister />}
          />
          <Route path="class-management/class-list" element={<ClassList />} />

          {/* """""""""""""" class management end */}

          {/* student management start */}

          <Route
            path="student-management/class-student-list/:id/students"
            element={<ClassStudentList />}
          />

          <Route
            path="student-management/student-register/:id"
            element={<StudentRegister />}
          />
          <Route
            path="student-management/all-student-list"
            element={<AllStudentList />}
          />
          <Route
            path="student-management/student-profile/:id"
            element={<StudentProfile />}
          />

          {/* student management end */}

          {/* class teacher management start */}

          <Route
            path="classteacher-management/classteacher-register/:id"
            element={<ClassTeacherRegister />}
          />
          <Route
            path="classteacher-management/classteacher-list"
            element={<ClassTeacherList />}
          />

          {/* class teacher management end */}

          {/* =================  attendance management start ================== */}
          <Route
            path="attendance-management"
            element={<AttendanceManagement />}
          />
          <Route
            path="attendance-management/mark-attendance"
            element={<MarkAttendance />}
          />
          <Route
            path="attendance-management/mark-attendance-list"
            element={<MarkAttendanceList />}
          />
          <Route
            path="attendance-management/mark-attendance/attendance-register/:id/students"
            element={<AttendanceRegister />}
          />
          <Route
            path="attendance-management/mark-attendance/attendance-list/:id"
            element={<AttendanceList />}
          />
          {/* ===================== attendance management end ================== */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
