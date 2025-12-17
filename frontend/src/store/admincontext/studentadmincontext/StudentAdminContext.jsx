import React, { createContext, useContext, useEffect, useReducer } from "react";
import studentReducer from "../../../reducers/adminreducer/studentreducer/StudentReducer";

// Initial state
const initialState = {
  isLoading: false,
  register: {
    fullName: "",
    fatherName: "",
    phone: "",
    dob: "",
    address: "",
    photo: null,
    userId: "", // Teacher ID
    classId: "", // Class ID
    teacherId: "", // ClassTeacher ID
  },
  studentList: [],
};

const StudentAdminAppContext = createContext();

const StudentAdminAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  // Handle input changes
  const handleStudentChange = (e) => {
    try {
      const { name, value, files } = e.target;
      const fieldValue = files ? files[0] : value;
      dispatch({
        type: "ADMIN_STUDENT_CHANGE",
        payload: { name, value: fieldValue },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Register a new student
  const handleStudentRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(state.register).forEach(([key, value]) => {
      if (value !== null) formData.append(key, value);
    });

    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/student/register",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        dispatch({ type: "RESET_STUDENT_REGISTER" });
        getStudentList(); // refresh student list
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Get all students
  const getStudentList = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/student/student-list",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
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

  // useEffect(() => {
  //   getStudentList();
  // }, []);

  return (
    <StudentAdminAppContext.Provider
      value={{
        state,
        handleStudentChange,
        handleStudentRegister,
        getStudentList,
        dispatch,
      }}
    >
      {children}
    </StudentAdminAppContext.Provider>
  );
};

// Custom hook
const useAdminStudent = () => {
  const context = useContext(StudentAdminAppContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentAppProvider");
  }
  return context;
};

export { StudentAdminAppProvider };
export default useAdminStudent;
