import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const StudentRoute = () => {
  const isTrue = true;
  return isTrue ? <Outlet /> : null;
};

export default StudentRoute;
