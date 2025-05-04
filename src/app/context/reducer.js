const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER_DATA":
      return {
        ...state,
        user_data: {
          ...state.user_data,
          userDetails: {
            ...state.user_data.userDetails,
            ...action.user_data.userDetails,
          },
        },
      };
    default:
      return state;
  }
};

export default Reducer;
