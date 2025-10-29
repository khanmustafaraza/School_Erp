import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is used to render nested routes

const AdminAuth = () => {
  const isAdmin=true
  // AdminAuth can include authentication checks, etc.
  return (
    <div>
     {isAdmin?<Outlet/>:"Your are not uthorised"}
    </div>
  );
};

export default AdminAuth;
