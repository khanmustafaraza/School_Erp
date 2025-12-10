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
   
    default:
      return state;
  }
};

export default classReducer;
