import React, { createContext, useContext, useEffect, useReducer } from "react";
import studentAdminReducer from "../../../reducers/adminreducer/studentreducer/StudentReducer";

// Initial state
const initialState = {
  isLoading: false,
  register: {
    classId: "",
    classTeacherId: "",
    fullName: "",
    fatherName: "",
    phone: "",
    dob: "",
    address: "",
    photo: null,
    userId: "",
  },
  studentList: [],
  classStudentList:[]
};

const AdminStudentAppContext = createContext();

const AdminStudentAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentAdminReducer, initialState);

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
  const handleStudentRegister = async (e, id) => {
    e.preventDefault();
    const studentData = {
      ...state.register,
      userId: id,
    };

    const formData = new FormData();
    Object.entries(studentData).forEach(([key, value]) => {
      formData.append(key, value);
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
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Get all students
  const getAllStudentList = async () => {
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
          type: "GET_ALL_STUDENT_LIST",
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  useEffect(() => {
    getAllStudentList();
  }, []);

  const getStudentsByClass = async (classId) => {
  
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/student/class-student-list/${classId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
    

      if (data.success) {
        dispatch({
          type: "CLASS_STUDENT_LIST",
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <AdminStudentAppContext.Provider
      value={{
        state,
        handleStudentChange,
        handleStudentRegister,
        getAllStudentList,

        getStudentsByClass,
      }}
    >
      {children}
    </AdminStudentAppContext.Provider>
  );
};

// Custom hook
const useAdminStudent = () => {
  const context = useContext(AdminStudentAppContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentAppProvider");
  }
  return context;
};

export { AdminStudentAppProvider };
export default useAdminStudent;
