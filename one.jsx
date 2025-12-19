import AdminDashboard from "admin/AdminDashboard";
import { Routes, Route } from "react-router-dom";
// todo common page
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";

// ! Admin Page Import Start
import AdminRoute from "./routes/adminroute/AdminRoute";
import AdminList from "admin/registration/adminlist/AdminList";
import TeacherList from "admin/registration/teacherlist/TeacherList";
import StudentList from "admin/registration/studentlist/StudentList";
import ClassRegister from "admin/class/ClassRegister";
import ClassList from "admin/class/ClassList";
import ClassTeacherList from "admin/classteacher/ClassTeacherList";
import ClassTeacherRegister from "admin/classteacher/ClassTeacherRegister";
import StudentRegister from "admin/student/StudentRegister";
import EnquiryManagement from "admin/enquirymanagement/EnquiryManagement";
import UserManagement from "admin/usermanagement/UserManagement";
import ClassManagement from "admin/classmanagement/ClassManagement";
// ! Admin Page Import end

// // Student Page Import Start
// import StudentRoute from "./routes/studentroute/StudentRoute";
import StudentDashboard from "./pages/students/studentdashboard/StudentDashboard";
import Students from "./pages/admin/student/StudentList";

// todo Student Page Import end

// !teacher route start
// import TeacherRoute from "./routes/teacherroute/TeacherRoute";
import TeacherDashboard from "./pages/teachers/teacherdashboard/TeacherDashboard";
import UnAuthorized from "./pages/unauthorized/UnAuthorized";
import NotFound from "./pages/notfound/NotFound";
// import UserRegister from "./pages/admin/usermanagement/UserRegister";
import Enquiry from "./pages/enquiry/Enquiry";
// !teacher route end

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/enquiry" element={<Enquiry />} />
      {/*😆 Admin Routes start here */}
      <Route path="/admin" element={<AdminRoute authRole="admin" />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="enquiry-management" element={<EnquiryManagement />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="class-management" element={<ClassManagement />} />
        {/* <Route path="school-register" element={<SchoolRegister />} /> */}
        {/* <Route path="user-register" element={<UserRegister />} /> */}
        <Route path="admin-list" element={<AdminList />} />
        <Route path="teacher-list" element={<TeacherList />} />
        <Route path="student-list" element={<StudentList />} />
        {/* admin register new class and get class list */}
        <Route path="class-register" element={<ClassRegister />} />
        <Route path="class-list" element={<ClassList />} />
        {/* admin add class teacher */}
        <Route path="class-teacher-list" element={<ClassTeacherList />} />
        <Route
          path="class-teacher-register/:id"
          element={<ClassTeacherRegister />}
        />
        <Route path="student-register/:id" element={<StudentRegister />} />
        <Route path="student-list" element={<Students />} />
      </Route>

      {/* ✔✔👍👍 Student Routes start */}
      {/* <Route path="/student" element={<StudentRoute authRole="student" />}> */}
      {/* <Route path="student-dashboard" element={<StudentDashboard />} /> */}
      {/* ✔✔👍👍 Student Routes end */}
      {/* </Route> */}

      {/* 👍👍👍 Teacer Routes start */}

      {/* <Route path="/teacher" element={<TeacherRoute authRole="teacher" />}> */}
      {/* <Route path="teacher-dashboard" element={<TeacherDashboard />} /> */}
      {/* </Route> */}
      {/* 👍👍👍 Teacer Routes end */}
      <Route path="/unauthorized" element={<UnAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

// {
//   _id: ObjectId,
//   classId: ObjectId,
//   studentId: ObjectId,
//   date: Date,
//   status: "present" | "absent" | "leave",
//   markedBy: ObjectId, // teacher id
//   createdAt: Date,
// }

// {
//   _id: ObjectId(),
//   classId: "10A",
//   date: "2025-01-10",
//   period: "1",
//   attendance: [
//     { studentId: "stu101", status: "Present" },
//     { studentId: "stu102", status: "Absent" },
//     { studentId: "stu103", status: "Present" }
//   ],
//   markedBy: "teacher123",
//   timestamp: Date
// }

await Attendance.updateOne(
  { classId, date, period, "attendance.studentId": studentId },
  {
    $set: {
      "attendance.$.status": newStatus,
    },
  }
);

// {
//   _id: ObjectId(),
//   studentId: "stu101",
//   classId: "10A",
//   examId: "exam2025_midterm",
//   academicYear: "2024-2025",

//   marks: [
//     {
//       subjectId: "math101",
//       subjectName: "Mathematics",
//       maxMarks: 100,
//       obtained: 82,
//       grade: "A"
//     },
//     {
//       subjectId: "eng101",
//       subjectName: "English",
//       maxMarks: 100,
//       obtained: 76,
//       grade: "B+"
//     }
//   ],

//   totalObtained: 158,
//   totalMax: 200,
//   percentage: 79,
//   grade: "B+",
//   status: "Pass", // Fail if one subject fails

//   remarks: "Good performance",
//   createdAt: Date,
//   updatedAt: Date
// }


