const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      console.log(action.payload);
      state = { isLoggedIn: true };
      return state;
    case "LOGGED_OUT":
      state = { isLoggedIn: false };
      return state;
    default:
      return { isLoggedIn: false };
  }
};

export default authReducer;
