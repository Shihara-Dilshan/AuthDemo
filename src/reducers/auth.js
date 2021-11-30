const authReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      state = { isLoggedIn: true };
      return state;
    case "LOGGED_OUT":
      state = { isLoggedIn: false };
      return state;
  }
};

export default authReducer;
