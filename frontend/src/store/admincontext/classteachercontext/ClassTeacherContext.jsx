import React, { createContext, useContext, useReducer, useEffect } from "react";
import classTeacherReducer from "../../../reducers/adminreducer/classteacherreducer/ClassTeacherReducer";

// Initial state
const initialState = {
  isLoading: false,
  register: {
    userId: "",
    classId: "",
    academicYear: "2024-2025",
    status: "active",
    remarks: "",
  },
  classTeacherList: [],
  userList: [], // all users for select dropdown
  classList: [], // all classes for select dropdown
};

const ClassTeacherContext = createContext();

// Provider
const ClassTeacherAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(classTeacherReducer, initialState);

  // Handle input change
  const handleClassTeacherChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_REGISTER_FIELD", payload: { name, value } });
  };

  // Register new teacher
  const handleClassTeacherRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/classteacher/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state.register),
        }
      );
      const data = await res.json();
      if (data.success) {
        alert("Teacher registered successfully!");
        getClassTeacherList(); // refresh list
        dispatch({ type: "RESET_REGISTER" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Get all teachers
  const getClassTeacherList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/classteacher/class-teacher-list"
      );
      const data = await res.json();
      if (data.success) {
        dispatch({ type: "SET_CLASS_TEACHER_LIST", payload: data.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Get users and classes for dropdowns
  const fetchDropdownData = async () => {
    try {
      const [usersRes, classesRes] = await Promise.all([
        fetch("http://localhost:3000/api/admin/users"),
        fetch("http://localhost:3000/api/admin/classes"),
      ]);

      const usersData = await usersRes.json();
      const classesData = await classesRes.json();

      dispatch({ type: "SET_USER_LIST", payload: usersData.data || [] });
      dispatch({ type: "SET_CLASS_LIST", payload: classesData.data || [] });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDropdownData();
    getClassTeacherList();
  }, []);

  return (
    <ClassTeacherContext.Provider
      value={{
        state,
        handleClassTeacherChange,
        handleClassTeacherRegister,
        getClassTeacherList,
      }}
    >
      {children}
    </ClassTeacherContext.Provider>
  );
};

// Custom hook
const useClassTeacher = () => {
  const context = useContext(ClassTeacherContext);
  if (!context) {
    throw new Error("useClassTeacher must be used within ClassTeacherProvider");
  }
  return context;
};

export default useClassTeacher;

export { ClassTeacherAppProvider };
