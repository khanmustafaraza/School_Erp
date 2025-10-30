import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authReducer from "../../../reducers/adminreducer/authreducer/AuthReducer";

// Initial state
const initialState = {
  isLoading: false,
  register: {
    userName: "",
    email: "",
    password: "",
    role: "",
  },
  adminList: [],
  teacherList: [],
  studentList: [],
  login: {
    email: "",
    password: "",
    role: "",
  },
  user: null, // store logged in user info here
};

const AuthAppContext = createContext();

const AuthAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({
        type: "SET_LOGGED_IN_USER",
        payload: JSON.parse(storedUser),
      });
    }
  }, []);

  // Handle admin registering a new user
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ADMIN_USER_CHANGE", payload: { name, value } });
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();
    const registerObj = { ...state.register };
    try {
      const res = await fetch("http://localhost:3000/api/admin/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerObj),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  // Fetch lists
  const getAdminList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/user/admin-list"
      );
      const data = await res.json();
      if (data.success)
        dispatch({ type: "GET_ADMIN_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTeacherList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/user/teacher-list"
      );
      const data = await res.json();
      if (data.success)
        dispatch({ type: "GET_TEACHER_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  const getStudentList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/user/student-list"
      );
      const data = await res.json();
      if (data.success)
        dispatch({ type: "GET_STUDENT_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Handle login
  const handleLoginUserChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "LOGIN_USER_CHANGE", payload: { name, value } });
  };

  const handleLoginUserSubmit = async (e) => {
    e.preventDefault();
    const loginObj = { ...state.login };
    try {
      const res = await fetch("http://localhost:3000/api/admin/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginObj),
      });
      const data = await res.json();

      if (data.success && data.data.setRole) {
        const loggedInUser = {
          token: data.data.token,
          userName: loginObj.email,
          role: loginObj.role,
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        dispatch({ type: "SET_LOGGED_IN_USER", payload: loggedInUser });

        // Redirect based on role
        switch (loginObj.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "teacher":
            navigate("/teacher/teacher-dashboard");
            break;
          case "student":
            navigate("/student/student-dashboard");
            break;
          default:
            navigate("/");
        }
      } else {
        alert("Invalid login: " + data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthAppContext.Provider
      value={{
        state,
        handleUserChange,
        handleUserRegister,
        getAdminList,
        getTeacherList,
        getStudentList,
        handleLoginUserChange,
        handleLoginUserSubmit,
      }}
    >
      {children}
    </AuthAppContext.Provider>
  );
};

// Custom hook
const useAuth = () => {
  const context = useContext(AuthAppContext);
  if (!context) throw new Error("useAuth must be used within AuthAppProvider");
  return context;
};

export { AuthAppProvider, useAuth };
