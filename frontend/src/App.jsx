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
        <Route path="user-management" element={<UserManagement />} />
        <Route
          path="user-management/user-register"
          element={<UserRegister />}
        />
        <Route path="user-management/admin-list" element={<AdminList />} />
      </Route>
    </Routes>
  );
};

export default App;
