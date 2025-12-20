// ! Reducer function to handle state updates
const studentAdminReducer = (state, action) => {
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
    case "GET_ALL_STUDENT_LIST":
      return {
        ...state,
        studentList: action.payload,
      };
    case "CLASS_STUDENT_LIST":
      return {
        ...state,
        classStudentList: action.payload,
      };

    default:
      return state;
  }
};

export default studentAdminReducer;
