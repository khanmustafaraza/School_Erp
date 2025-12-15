import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import schoolReducer from "../../reducers/schoolreducer/SchoolReducer";
import { toast } from "react-toastify";

//  ========================== Initial state ================================
const initialState = {
  isLoading: false,
  school: {
    name: "",
    subName: "",
    code: "",
    affiCode: "",
    board: "",

    email: "",
    contact: "",
    address: "",
  },

  schoolList: [],
};
const apiUrl = import.meta.env.VITE_API_URL;
const SchoolAppContext = createContext();

const SchoolAppProvider = ({ children }) => {
  const [schoolPhoto, setSchoolPhoto] = useState(null);
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
  const handleSchoolPhotoChange = (e) => {
    setSchoolPhoto(e.target.files[0]);
    console.log(schoolPhoto);
  };
  // ! ================== handle enquiry change  end ================
  // todo *********************** handle enquiry submit start *********************
  const handleSchoolRegister = async (e) => {
    e.preventDefault();
    console.log(state.school, schoolPhoto);
    if (!schoolPhoto) {
      toast("School Photo is Required");
      return;
    }

    const formData = new FormData();
    formData.append("name", state.school.name);
    formData.append("subName", state.school.subName);
   
    formData.append("affiCode", state.school.affiCode);
    formData.append("board", state.school.board);
    formData.append("email", state.school.email);
    formData.append("contact", state.school.contact);
    formData.append("address", state.school.address);
    formData.append("schoolPhoto", schoolPhoto);
    // const schoolObj = { ...state.school };

    try {
      const res = await fetch(`${apiUrl}/api/admin/school/register`, {
        method: "POST",

        body: formData,
      });
      const data = await res.json();
      console.log(data)
      toast(data.message);
    } catch (error) {
      alert(error.message);
    }
  };
  // todo *********************** handle enquiry submit end *****************

  // ! ************** get school list ****************
  const schoolList = async (value = " ") => {
    try {
      const res = await fetch(
        `${apiUrl}/api/admin/school/school-list`
      );
      const data = await res.json();
      console.log(data)

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
        handleSchoolPhotoChange,
        schoolPhoto,
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
