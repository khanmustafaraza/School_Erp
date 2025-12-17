import React, { createContext, useContext, useReducer, useEffect } from "react";
import classTeacherReducer from "../../../reducers/adminreducer/classteacherreducer/ClassTeacherReducer";

// Initial state
const initialState = {
  isLoading: false,
  register: {
    classId: "",
    academicYear: "",
    status: "",
    remarks: "",
  },
  classTeacherList: [],
};

const ClassTeacherContext = createContext();

// Provider
const ClassTeacherAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(classTeacherReducer, initialState);

  // Handle input change
  const handleClassTeacherChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ADMIN_CLASS_TEACHER_CHANGE", payload: { name, value } });
  };

  // Register new teacher
  const handleClassTeacherRegister = async (e, userId) => {
    e.preventDefault();
    const classTeacherObj = {
      ...state.register,
      userId,
    };
    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/classteacher/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(classTeacherObj),
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
        "http://localhost:5000/api/admin/classteacher/class-teacher-list"
      );
      const data = await res.json();

      if (data.success) {
        dispatch({ type: "SET_CLASS_TEACHER_LIST", payload: data.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
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
