import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "adminContext/authcontext/AuthContext";

const StudentRoute = ({ authRole = "teacher" }) => {
  const [isStudent, setIsStudent] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { state } = useAuth();
  const token = state?.user?.token;
  const role = state?.user?.role; // add this

  const studentAuth = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/student", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.success && role === authRole) {
        setIsStudent(true);
      } else {
        setIsStudent(false);
      }
    } catch (error) {
      console.error("Error verifying admin:", error);
      setIsStudent(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // ✅ Only run if AuthContext has finished loading and user exists
    if (token && role) {
      studentAuth();
    } else if (!token) {
      setLoading(false);
    }
  }, [token, role]);

  // ✅ While verifying token, show loader instead of redirecting
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300">
        <div className="animate-pulse text-lg">Verifying Access...</div>
      </div>
    );
  }

  // ✅ Only redirect once we *know* the user is unauthorized
  // return isAdmin ? <Outlet /> : <h1>Loading</h1>;
  return isStudent ? <Outlet /> : null;
};

export default StudentRoute;
