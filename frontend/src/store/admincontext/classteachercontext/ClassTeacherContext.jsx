import React, { createContext, useContext, useEffect, useReducer } from "react";
import classTeacherReducer from "../../../reducers/adminreducer/classteacherreducer/ClassTeacherReducer";

// // Initial state
const initialState = {
  isLoading: false,
  register: {
    classId: "",
    mobile: "",

    fullName: "",
    email: "",
    subjects: "",
    qualification: "",
    experience: "",
    salary: "",
    aadhaar: "",
    marital: "",
    address: "",
  },
  classTeacherList: [],
};

// todo Create context
const ClassTeacherAppContext = createContext();

// ? Provider component
const ClassTeacherAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(classTeacherReducer, initialState);

  // todo Register a New Class Change By Admin
  const handleClassTeacherChange = (e) => {
    try {
      const { name, value } = e.target;
      // console.log(name, "????", value);
      dispatch({
        type: "ADMIN_CLASS_TEACHER_CHANGE",
        payload: { name, value },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // // submit class by admin
  const handleClassTeacherRegister = async (e, userId) => {
    e.preventDefault();
    const classTeacherObj = { ...state.register, userId };

    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/classteacher/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(classTeacherObj),
        }
      );
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  // todo Get all admin list
  const getClassTeacherList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/classteacher/class-teacher-list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        dispatch({
          type: "GET_CLASS_TEACHER_LIST",
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const getClassTeacherDetail = async (id) => {
    console.log(id);
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/classteacher/class-teacher-detail/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        dispatch({
          type: "GET_CLASS_TEACHER_DETAIL",
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  return (
    <ClassTeacherAppContext.Provider
      value={{
        state,
        handleClassTeacherChange,
        handleClassTeacherRegister,
        getClassTeacherList,
        getClassTeacherDetail,
      }}
    >
      {children}
    </ClassTeacherAppContext.Provider>
  );
};

// // Custom hook to use the auth context
const useClassTeacher = () => {
  const context = useContext(ClassTeacherAppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthAppProvider");
  }
  return context;
};

export { ClassTeacherAppProvider, useClassTeacher };
