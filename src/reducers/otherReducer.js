const otherReducer = (state = { issLoggedIn: false }, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      state = true;
      return state;
    case "LOGGED_OUT":
      state = false;
      return state;
    default:
      return false;
  }
};

export default otherReducer;
