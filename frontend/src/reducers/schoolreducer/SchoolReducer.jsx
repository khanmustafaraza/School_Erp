const schoolReducer = (state, action) => {
  switch (action.type) {
    // Handle input change in Admin Register form
    case "SCHOOL_CHANGE":
      return {
        ...state,
        school: {
          ...state.school,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SCHOOL_LIST":
      return {
        ...state,
        schoolList: action.payload,
      };

    default:
      return state;
  }
};

export default schoolReducer;
