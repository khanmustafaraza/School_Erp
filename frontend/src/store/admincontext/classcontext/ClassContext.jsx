import React, { createContext, useContext, useReducer, useEffect } from "react";
import classReducer from "../../../reducers/adminreducer/classreducer/ClassReducer";

// // Initial state
const initialState = {
  isLoading: false,
  register: {
    name: "",
    section: "",
  },
  classList: [],
};

// todo Create context
const ClassAppContext = createContext();

// ? Provider component
const ClassAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(classReducer, initialState);
  // todo Register a New Class Change By Admin
  const handleClassChange = (e) => {
    try {
      const { name, value } = e.target;
      // console.log(name, "????", value);
      dispatch({
        type: "ADMIN_CLASS_CHANGE",
        payload: { name, value },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // // submit class by admin
  const handleClassRegister = async (e) => {
    e.preventDefault();
    const registerObj = {
      name: state.register.name,
      section: state.register.section,
    };
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/class/register",
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
  const getClassList = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/admin/class/class-list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.success) {
        dispatch({
          type: "GET_CLASS_LIST",
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <ClassAppContext.Provider
      value={{
        state,
        handleClassChange,
        handleClassRegister,
        getClassList,
      }}
    >
      {children}
    </ClassAppContext.Provider>
  );
};

// // Custom hook to use the auth context
const useClass = () => {
  const context = useContext(ClassAppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthAppProvider");
  }
  return context;
};

export { ClassAppProvider, useClass };
