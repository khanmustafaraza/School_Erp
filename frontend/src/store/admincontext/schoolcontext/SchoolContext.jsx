import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import schoolReducer from "../../../reducers/adminreducer/schoolreducer/SchoolReducer";

//  ========================== Initial state ================================
const initialState = {
  isLoading: false,
  school: {
    name: "",
    subName: "",
    code: "",
    affiCode: "",
    board: "",
    address: "",
    email: "",
    contact: "",
  },

  schoolList: [],
};

const SchoolAppContext = createContext();

const SchoolAppProvider = ({ children }) => {
  // // ************* use Reducer start **********************

  const [state, dispatch] = useReducer(schoolReducer, initialState);

  // // ***************** use Reducer end ********************
  const navigate = useNavigate();

  // ! ================== handle enquiry change start ================
  const handleSchoolChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SCHOOL_CHANGE",
      payload: { name, value },
    });
  };
  // ! ================== handle enquiry change  end ================
  // todo *********************** handle enquiry submit start *********************
  const handleSchoolRegister = async (e) => {
    e.preventDefault();
    const schoolObj = { ...state.school };

    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/school/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(schoolObj),
        }
      );
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };
  // todo *********************** handle enquiry submit end *****************

  // ! ************** get school list ****************
  const schoolList = async (value = " ") => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/school/school-list`
      );
      const data = await res.json();

      if (data.success) dispatch({ type: "SCHOOL_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  // ! ************** get school list ****************

  return (
    <SchoolAppContext.Provider
      value={{
        state,
        handleSchoolChange,
        handleSchoolRegister,
        schoolList,
      }}
    >
      {children}
    </SchoolAppContext.Provider>
  );
};

// Custom hook
const useSchool = () => {
  const context = useContext(SchoolAppContext);
  if (!context)
    throw new Error("useAuth must be used within SchoolAppProvider");
  return context;
};

export { SchoolAppProvider, useSchool };
