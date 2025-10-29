// ! Reducer function to handle state updates
const classReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    // todo handle change of user by admin
    case "ADMIN_CLASS_CHANGE":
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.name]: action.payload.value,
        },
      };
    // todo Get class list
    case "GET_CLASS_LIST":
      return {
        ...state,
        classList: action.payload,
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

export default classReducer;
