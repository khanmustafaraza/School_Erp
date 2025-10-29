import React, { createContext, useContext, useEffect, useReducer } from "react";
import studentReducer from "../../../reducers/adminreducer/studentreducer/StudentReducer";

// // Initial state
const initialState = {
  isLoading: false,
  register: {
    classId: "",
  },
  studentList: [],
};

// todo Create context
const StudentAppContext = createContext();

// ? Provider component
const StudentAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  // todo Register a New Class Change By Admin
  const handleStudentChange = (e) => {
    try {
      const { name, value } = e.target;
      // console.log(name, "????", value);
      dispatch({
        type: "ADMIN_STUDENT_CHANGE",
        payload: { name, value },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // // submit class by admin
  const handleStudentRegister = async (e, userId) => {
    e.preventDefault();
    const registerObj = {
      userId: userId,
      classId: state.register.classId,
    };
    console.log(registerObj);
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/student/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerObj),
        }
      );
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  // todo Get all admin list
  const getStudentList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/student/student-list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        dispatch({
          type: "GET_STUDENT_LIST",
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <StudentAppContext.Provider
      value={{
        state,
        handleStudentChange,
        handleStudentRegister,
        getStudentList,
      }}
    >
      {children}
    </StudentAppContext.Provider>
  );
};

// // Custom hook to use the auth context
const useStudent = () => {
  const context = useContext(StudentAppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthAppProvider");
  }
  return context;
};

export { StudentAppProvider, useStudent };
