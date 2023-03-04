const currentPage = (state = "login", action) => {

  if (action.payload != null || undefined) {
    switch (action.payload) {
      case "CURRENTPAGE":
        return action.payload;

      default:
        return 'login';
    }
  }

  return state;
};


export default currentPage;