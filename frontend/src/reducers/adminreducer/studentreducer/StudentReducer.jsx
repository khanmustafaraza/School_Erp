// ! Reducer function to handle state updates
const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    // todo handle change of user by admin
    case "ADMIN_STUDENT_CHANGE":
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.name]: action.payload.value,
        },
      };
    // todo Get class list
    case "GET_STUDENT_LIST":
      return {
        ...state,
        studentList: action.payload,
      };
    case "GET_TEACHER_LIST":
      return {
        ...state,
        teacherList: action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        users: {
          token: action.payload.token,
          user: action.payload.user,
        },
      };

    case "LOGOUT":
      return {
        ...state,
        users: {
          token: "",
          user: null,
        },
        loginField: {
          email: "",
          password: "",
          role: "",
        },
      };

    default:
      return state;
  }
};

export default studentReducer;
