import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "adminContext/authcontext/AuthContext";

const AdminRoute = ({ authRole = "admin" }) => {
 const isAdmin = true;
  
  return isAdmin ? <Outlet /> : null;
};

export default AdminRoute;
