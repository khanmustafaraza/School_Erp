// authReducer.js

const authReducer = (state, action) => {
  switch (action.type) {
    // Handle input change in Admin Register form
    case "ENQUIRY_CHANGE":
      return {
        ...state,
        enquiry: {
          ...state.enquiry,
          [action.payload.name]: action.payload.value,
        },
      };
      // enquiry list
    case "ENQUIRY_LIST":
      return {
        ...state,
        enquiryList: action.payload,
      };

      // admin add user
    case "ADMIN_USER_CHANGE":
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.name]: action.payload.value,
        },
      };

    // todo Handle input change in Login form
    case "LOGIN_USER_CHANGE":
      return {
        ...state,
        login: {
          ...state.login,
          [action.payload.name]: action.payload.value,
        },
      };

    // todo ============= Set logged-in user from login or localStorage =================
    case "SET_LOGGED_IN_USER":
      return {
        ...state,
        user: action.payload,
      };

    // Fetch admin list
    case "GET_ADMIN_LIST":
      return {
        ...state,
        adminList: action.payload,
      };

    // Fetch teacher list
    case "GET_TEACHER_LIST":
      return {
        ...state,
        teacherList: action.payload,
      };

    // Fetch student list
    case "GET_STUDENT_LIST":
      return {
        ...state,
        studentList: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
